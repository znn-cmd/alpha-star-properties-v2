@echo off
echo ========================================
echo  Setup GitHub Repository
echo ========================================
echo.
echo This script will help you connect to GitHub.
echo.
echo STEPS:
echo 1. Open https://github.com/new in your browser
echo 2. Repository name: alpha-star-properties-v2
echo 3. Description: Premium real estate website for Alpha Star Properties in Dubai
echo 4. Choose Private or Public
echo 5. DO NOT add README, .gitignore, or license
echo 6. Click "Create repository"
echo.
pause
echo.
echo Now, enter your GitHub username:
set /p github_user="GitHub username: "
echo.
echo Setting up remote...
git remote add origin https://github.com/%github_user%/alpha-star-properties-v2.git
git branch -M main
echo.
echo Pushing to GitHub...
git push -u origin main
echo.
echo ========================================
echo  Success! Repository is on GitHub.
echo  Now go to https://vercel.com
echo ========================================
echo.
pause

