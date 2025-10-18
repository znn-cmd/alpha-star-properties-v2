@echo off
echo ========================================
echo  Alpha Star Properties - Quick Deploy
echo ========================================
echo.

echo Checking Git status...
git status

echo.
echo Adding all changes...
git add .

echo.
set /p commit_msg="Enter commit message (or press Enter for default): "
if "%commit_msg%"=="" set commit_msg=Update: changes to Alpha Star Properties website

echo.
echo Committing changes: %commit_msg%
git commit -m "%commit_msg%"

echo.
echo Pushing to GitHub...
git push

echo.
echo ========================================
echo  Done! Vercel will auto-deploy.
echo  Check: https://vercel.com/dashboard
echo ========================================
echo.
pause

