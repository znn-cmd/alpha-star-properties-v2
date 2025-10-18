@echo off
echo ========================================
echo  Deploy to Vercel
echo ========================================
echo.
echo Checking if Vercel CLI is installed...
where vercel >nul 2>&1
if %errorlevel% neq 0 (
    echo Vercel CLI not found. Installing...
    npm install -g vercel
) else (
    echo Vercel CLI is already installed.
)
echo.
echo Logging in to Vercel...
vercel login
echo.
echo Deploying project...
vercel
echo.
echo ========================================
echo  Deployment started!
echo  Check: https://vercel.com/dashboard
echo ========================================
echo.
pause

