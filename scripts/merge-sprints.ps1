# Script to automate merging sprint branches from RaFeltrim's repo to joaomarafiotti's main branch
# Author: Rafael Feltrim
# Date: 2025-11-25

# Define colors for output
$host.UI.RawUI.ForegroundColor = "White"

Write-Host "=== Sprint Merge Automation Script ===" -ForegroundColor Green
Write-Host "Merging sprint branches to joaomarafiotti's main repository" -ForegroundColor Yellow
Write-Host ""

# Function to check if a command was successful
function Check-CommandSuccess {
    param([string]$Message)
    if ($LASTEXITCODE -ne 0) {
        Write-Host "ERROR: $Message" -ForegroundColor Red
        exit 1
    }
}

# Function to handle merge conflicts
function Handle-MergeConflict {
    param([string]$BranchName)
    Write-Host "Merge conflict detected in branch $BranchName" -ForegroundColor Red
    Write-Host "Please resolve conflicts manually and then press Enter to continue..." -ForegroundColor Yellow
    Read-Host
    git add .
    Check-CommandSuccess "Failed to add resolved conflicts"
    git commit -m "Resolved merge conflicts for $BranchName"
    Check-CommandSuccess "Failed to commit resolved conflicts"
}

# Ensure we're in the correct directory
Set-Location -Path "c:\Users\Submarino\Desktop\Geral\Projetos\projeto-gestao-ecommerce"
Write-Host "Working in directory: $(Get-Location)" -ForegroundColor Cyan

# Fetch all remote branches
Write-Host "Fetching all remote branches..." -ForegroundColor Cyan
git fetch --all
Check-CommandSuccess "Failed to fetch remote branches"

# Switch to main branch and pull latest changes from upstream
Write-Host "Switching to main branch and pulling latest changes..." -ForegroundColor Cyan
git checkout main
Check-CommandSuccess "Failed to switch to main branch"
git pull upstream main
Check-CommandSuccess "Failed to pull latest changes from upstream"

# Define the order of sprint branches to merge
$sprintBranches = @("sprint-1", "sprint-2", "sprint-3", "sprint-4", "sprint-5")

# Process each sprint branch
foreach ($branch in $sprintBranches) {
    Write-Host ""
    Write-Host "Processing $branch..." -ForegroundColor Cyan
    
    # Check if branch exists locally
    $branchExists = git branch --list $branch
    if (-not $branchExists) {
        Write-Host "Branch $branch does not exist locally. Skipping..." -ForegroundColor Yellow
        continue
    }
    
    # Attempt to merge the branch
    Write-Host "Merging $branch into main..." -ForegroundColor Cyan
    git merge $branch -m "Merge $branch into main"
    
    # Check if merge was successful
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Successfully merged $branch" -ForegroundColor Green
    } else {
        # Check if it's a merge conflict
        $status = git status --porcelain
        if ($status -match "UU") {
            Write-Host "Merge conflict detected in $branch" -ForegroundColor Red
            Handle-MergeConflict $branch
            Write-Host "Successfully resolved and merged $branch" -ForegroundColor Green
        } else {
            Write-Host "Failed to merge $branch" -ForegroundColor Red
            Write-Host "Error: $status" -ForegroundColor Red
        }
    }
}

# Push changes to upstream main branch
Write-Host ""
Write-Host "Pushing changes to upstream main branch..." -ForegroundColor Cyan
git push upstream main
Check-CommandSuccess "Failed to push changes to upstream"

Write-Host ""
Write-Host "=== All sprint branches have been successfully merged! ===" -ForegroundColor Green
Write-Host "Changes have been pushed to joaomarafiotti's main repository" -ForegroundColor Yellow