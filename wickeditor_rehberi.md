# WickEditor Kullanım Rehberi

WickEditor, karakterinizin 360° dönüş animasyonunu oluşturmak için kullanabileceğiniz ücretsiz bir web tabanlı animasyon aracıdır. Bu rehber, FWD Yeterlilik Testi için gerekli animasyonu oluşturmanıza yardımcı olacaktır.

## 1. Başlangıç

### WickEditor'a Erişim
1. Web tarayıcınızda [WickEditor](https://www.wickeditor.com/editor/) adresine gidin
2. "Create New Project" (Yeni Proje Oluştur) seçeneğini tıklayın

### Arayüzü Tanıma
- **Sahne**: Animasyonunuzun oluşturulduğu ana çalışma alanı
- **Zaman Çizelgesi**: Alt kısımda, animasyonunuzun kare kare ilerlemesini kontrol eder
- **Araç Çubuğu**: Sol tarafta, çizim ve düzenleme araçlarına erişim sağlar
- **Özellikler Paneli**: Sağ tarafta, seçili nesnenin özelliklerini düzenlemenizi sağlar

## 2. Karakter İçe Aktarma

### PNG Dosyası Olarak İçe Aktarma
1. Karakterinizi ayrı parçalar halinde (gövde, kol, bacak vb.) PNG olarak kaydedin
2. WickEditor'da "File" > "Import" seçeneğini tıklayın
3. PNG dosyalarınızı seçin ve "Open" düğmesine basın
4. İçe aktarılan parçalar sahneye yerleştirilecektir

### Alternatif: Doğrudan Çizim
1. Sol araç çubuğundan çizim araçlarını kullanabilirsiniz
2. Fırça, şekil ve dolgu araçlarıyla karakterinizi doğrudan WickEditor'da çizebilirsiniz

## 3. Karakter Parçalarını Düzenleme

### Pivot Noktalarını Ayarlama
1. Dönecek her parçayı seçin (örneğin kol)
2. Sağ panelde "Pivot" ayarını bulun
3. Pivot noktasını parçanın dönmesi gereken noktaya yerleştirin (örneğin omuz)

### Parçaları Gruplandırma
1. Tüm karakter parçalarını Shift tuşuna basılı tutarak seçin
2. Sağ tıklayın ve "Group" (Grupla) seçeneğini tıklayın
3. Artık tüm parçalar tek bir nesne olarak hareket edecektir

## 4. 360° Dönüş Animasyonu Oluşturma

### Keyframe'leri Ayarlama
1. Zaman çizelgesinde ilk karede (kare 1) karakterinizin başlangıç pozisyonunu ayarlayın
2. Zaman çizelgesinde ilerleyin (örneğin kare 10) ve yeni bir keyframe oluşturmak için kareye sağ tıklayıp "Insert Keyframe" seçeneğini tıklayın
3. Bu karede karakteri hafifçe döndürün (rotasyon özelliğini kullanarak)
4. Bu işlemi tekrarlayarak karakter tamamen 360° dönene kadar devam edin
   - Örnek kare dağılımı: 1, 10, 20, 30, 40, 50, 60, 70, 80 (toplam 9 keyframe)
   - Her keyframe'de karakteri 45° döndürün

### Kol ve Bacak Hareketleri
1. Kollar ve bacaklar için ayrı katmanlar oluşturun
2. Her keyframe'de bu parçaları dönüşe uygun şekilde konumlandırın
3. Dönüş yönüne göre kolların ve bacakların pozisyonunu ayarlayın

## 5. Animasyonu Test Etme ve İyileştirme

### Oynatma ve Test
1. Play düğmesine basarak animasyonu izleyin
2. Animasyonun akıcılığını kontrol edin
3. Gerekirse keyframe'leri ayarlayın veya yenilerini ekleyin

### Ara Kare (Tween) Ayarları
1. İki keyframe arasındaki geçişi yumuşatmak için keyframe'e sağ tıklayın
2. "Tween" seçeneğini işaretleyin
3. Bu, keyframe'ler arasında otomatik geçişler oluşturacaktır

## 6. Animasyonu Dışa Aktarma

### GIF Olarak Dışa Aktarma
1. "File" > "Export" > "Animated GIF" seçeneğini tıklayın
2. Kalite ayarlarını yapın (boyut, FPS)
3. "Export" düğmesine basın ve animasyonu kaydedin

### Video Olarak Dışa Aktarma
1. "File" > "Export" > "Video" seçeneğini tıklayın
2. Format olarak MP4'ü seçin
3. "Export" düğmesine basın ve videoyu kaydedin

## İpuçları
- **Kare Hızı**: 12-24 FPS arası bir değer idealdir (12 FPS bile akıcı bir animasyon için yeterlidir)
- **Döngü**: Animasyonunuzun sorunsuz döngü yapabilmesi için son kare ile ilk kare aynı olmalıdır
- **Kaydetme**: Çalışmanızı düzenli olarak "File" > "Save Project" seçeneği ile kaydedin
- **Referans**: Daha iyi bir animasyon için referans görüntüler kullanın
