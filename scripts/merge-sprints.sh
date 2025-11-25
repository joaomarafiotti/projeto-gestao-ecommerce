#!/bin/bash

# Script to automate merging sprint branches from RaFeltrim's repo to joaomarafiotti's main branch
# Author: Rafael Feltrim
# Date: 2025-11-25

echo "=== Sprint Merge Automation Script ==="
echo "Merging sprint branches to joaomarafiotti's main repository"
echo ""

# Function to check if a command was successful
check_command_success() {
    if [ $? -ne 0 ]; then
        echo "ERROR: $1"
        exit 1
    fi
}

# Function to handle merge conflicts
handle_merge_conflict() {
    local branch_name=$1
    echo "Merge conflict detected in branch $branch_name"
    echo "Please resolve conflicts manually in your editor"
    echo "After resolving, stage the changes with 'git add .' and press Enter to continue..."
    read -p "Press Enter when ready to continue..."
    git add .
    check_command_success "Failed to add resolved conflicts"
    git commit -m "Resolved merge conflicts for $branch_name"
    check_command_success "Failed to commit resolved conflicts"
}

# Ensure we're in the correct directory
cd "$(dirname "$0")/.." || exit 1
echo "Working in directory: $(pwd)"

# Fetch all remote branches
echo "Fetching all remote branches..."
git fetch --all
check_command_success "Failed to fetch remote branches"

# Switch to main branch and pull latest changes from upstream
echo "Switching to main branch and pulling latest changes..."
git checkout main
check_command_success "Failed to switch to main branch"
git pull upstream main
check_command_success "Failed to pull latest changes from upstream"

# Define the order of sprint branches to merge
sprint_branches=("sprint-1" "sprint-2" "sprint-3" "sprint-4" "sprint-5")

# Process each sprint branch
for branch in "${sprint_branches[@]}"; do
    echo ""
    echo "Processing $branch..."
    
    # Check if branch exists locally
    if ! git show-ref --verify --quiet "refs/heads/$branch"; then
        echo "Branch $branch does not exist locally. Skipping..."
        continue
    fi
    
    # Attempt to merge the branch
    echo "Merging $branch into main..."
    git merge "$branch" -m "Merge $branch into main"
    
    # Check if merge was successful
    if [ $? -eq 0 ]; then
        echo "Successfully merged $branch"
    else
        # Check if it's a merge conflict
        if git status --porcelain | grep -q "^UU"; then
            echo "Merge conflict detected in $branch"
            handle_merge_conflict "$branch"
            echo "Successfully resolved and merged $branch"
        else
            echo "Failed to merge $branch"
            git status --porcelain
        fi
    fi
done

# Push changes to upstream main branch
echo ""
echo "Pushing changes to upstream main branch..."
git push upstream main
check_command_success "Failed to push changes to upstream"

echo ""
echo "=== All sprint branches have been successfully merged! ==="
echo "Changes have been pushed to joaomarafiotti's main repository"