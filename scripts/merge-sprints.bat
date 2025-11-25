@echo off
REM Batch script to run the PowerShell merge script
REM Author: Rafael Feltrim
REM Date: 2025-11-25

echo === Sprint Merge Automation Script ===
echo Running PowerShell merge script...
echo.

powershell -ExecutionPolicy Bypass -File "%~dp0merge-sprints.ps1"

echo.
echo Script execution completed.
pause