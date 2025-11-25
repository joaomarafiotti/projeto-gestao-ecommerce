# Sprint Merge Automation Scripts

This directory contains scripts to automate the process of merging sprint branches from RaFeltrim's repository to joaomarafiotti's main repository.

## Files

- `merge-sprints.ps1` - PowerShell script that performs the actual merging process
- `merge-sprints.bat` - Batch file to easily run the PowerShell script on Windows

## Prerequisites

1. Make sure you have the proper Git remotes configured:
   - `upstream` should point to joaomarafiotti's repository
   - `origin` should point to your (RaFeltrim's) repository

2. Ensure you have the following local branches:
   - `sprint-1`
   - `sprint-2`
   - `sprint-3`
   - `sprint-4`
   - `sprint-5`

## How to Use

### Method 1: Using the Batch File (Recommended for Windows)

Double-click on `merge-sprints.bat` or run it from the command line:

```cmd
scripts\merge-sprints.bat
```

### Method 2: Direct PowerShell Execution

Run the PowerShell script directly:

```powershell
powershell -ExecutionPolicy Bypass -File scripts\merge-sprints.ps1
```

## What the Script Does

1. Fetches all remote branches to ensure you have the latest changes
2. Switches to the main branch and pulls the latest changes from upstream
3. Merges each sprint branch in order (sprint-1 through sprint-5)
4. Handles merge conflicts if they occur (will prompt for manual resolution)
5. Pushes the merged changes to the upstream repository

## Handling Merge Conflicts

If a merge conflict occurs:
1. The script will pause and notify you of the conflict
2. Manually resolve the conflicts in your editor
3. Save the files
4. Press Enter in the script console to continue
5. The script will automatically commit the resolved conflicts and continue

## Troubleshooting

### Permission Issues
If you encounter execution policy errors, you may need to adjust your PowerShell execution policy:

```powershell
Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope CurrentUser
```

### Remote Configuration
To check your remote configuration:

```bash
git remote -v
```

To add the upstream remote if missing:

```bash
git remote add upstream https://github.com/joaomarafiotti/projeto-gestao-ecommerce.git
```