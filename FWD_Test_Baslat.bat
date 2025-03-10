@echo off
title FWD Yeterlilik Testi Demo Uygulaması
color 0A

echo ================================================
echo            FWD YETERLILIK TESTI DEMO
echo ================================================
echo.
echo Uygulama başlatılıyor, lütfen bekleyin...
echo.

REM Klasörler yoksa oluştur
if not exist "Gorev1" mkdir Gorev1
if not exist "Gorev2" mkdir Gorev2
if not exist "Gorev3" mkdir Gorev3

REM Tarayıcıda demo_baslat.html'i aç
start "" "demo_baslat.html"

echo Demo uygulaması tarayıcınızda açıldı.
echo.
echo Bu uygulama, FWD Yeterlilik Testi için:
echo  * Karakter tasarımı
echo  * 360 derece animasyon
echo  * 3D modelleme
echo görevlerini tamamlamanıza yardımcı olmak için tasarlanmıştır.
echo.
echo Görev Gereksinimleri:
echo -------------------------------------------------
echo 1. Karakter Tasarımı:
echo  - Temel şekiller (daire, kare, üçgen) kullanın
echo  - Duyguları ifade eden yüz detayları ekleyin
echo  - Benzersiz görsel özellikler ekleyin
echo  - Renkli olmalıdır
echo  - Üç aşamada ekran görüntüsü alın
echo.
echo 2. Animasyon (WickEditor):
echo  - Karakter 360 derece dönmeli
echo  - Uzuvlar dönüşe uygun hareket etmeli
echo  - Renkli olmalıdır
echo.
echo 3. 3D Modelleme (Tinkercad):
echo  - Her açıdan tamamlanmış görünmeli
echo  - Tüm parçalar bağlı olmalı
echo  - Parçalar gruplandırılmalı
echo  - .gif veya .mp4 formatında kaydedilmeli
echo -------------------------------------------------
echo.
echo Tüm dosyaları "teslim_kontrol_listesi.md" kullanarak kontrol edin.
echo.

choice /c EH /m "Rehberleri görmek için [E], çıkmak için [H] tuşuna basın"

if errorlevel 2 goto end
if errorlevel 1 goto guides

:guides
start "" "qualification_guide.md"
start "" "adim_adim_rehber.md"

:end
echo.
echo Demo uygulaması arka planda devam ediyor.
echo Tarayıcı penceresini kapatana kadar çalışabilirsiniz.
echo.
pause
