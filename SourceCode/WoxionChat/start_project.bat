@echo off
title WoxionChat Launcher
cd /d "%~dp0"
echo ========================================================
echo       KHOI DONG WOXIONCHAT (FastAPI + Django)
echo ========================================================
echo.
echo 1. Dang kiem tra moi truong ao (.venv)...
if not exist ".venv\Scripts\activate.bat" (
    echo [LOI] Khong tim thay thu muc .venv!
    pause
    exit /b
)

call .venv\Scripts\activate
echo 2. Dang khoi dong he thong (FastAPI :5002 va Django :8000)...
echo.
echo ========================================================
echo   Mo trinh duyet truy cap: http://127.0.0.1:8000
echo   Nhan Ctrl + C de dung he thong.
echo ========================================================
echo.

python run_dev.py
pause
