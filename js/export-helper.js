/**
 * FWD Qualification Test Export Helper
 *
 * Bu dosya sadece tarayıcıya tam bilgi verirken kullanılmak üzere eklenmiştir.
 * JSZip kütüphanesi eklenmediği için gerçekte çalışmayacaktır.
 */

document.addEventListener('DOMContentLoaded', function() {
    // If on a server, you could uncomment and use this code
    // Add button to the UI
    const container = document.querySelector('.container');
    const exportDiv = document.createElement('div');
    exportDiv.className = 'export-section';
    exportDiv.innerHTML = `
        <h2>Proje Export Yardımcısı</h2>
        <p>Bu bölüm, yeterlilik testi için gerekli dosyaları düzenli bir şekilde export etmenize yardımcı olur.</p>
        <button id="prepare-export" disabled>Dosyaları Hazırla (Demo)</button>
        <div id="export-info" style="margin-top: 10px;">
            <p>Bu buton şu anda devre dışıdır. Gerçek projede, aşağıdaki işlemleri yapmanız gerekir:</p>
            <ol>
                <li>Karakter tasarımının 3 ekran görüntüsünü alın (Başlangıç, Geliştirme, Son)</li>
                <li>360° animasyonunuzu kaydedin</li>
                <li>3D modelinizin tam dönüş ve hareket videosu/GIF'ini kaydedin</li>
                <li>Tüm dosyaları düzenli klasörlere koyun (Gorev1, Gorev2, Gorev3)</li>
                <li>Tüm dosyaları Google Drive'a yükleyip bağlantısını alın</li>
            </ol>
        </div>
    `;

    container.appendChild(exportDiv);

    // Add styling
    const style = document.createElement('style');
    style.textContent = `
        .export-section {
            margin-top: 20px;
            width: 100%;
            padding: 10px;
            background-color: #e8f4fb;
            border-radius: 5px;
            border: 1px solid #c5e1f3;
        }
        #export-info {
            font-size: 0.9em;
            background-color: #f9f9f9;
            padding: 10px;
            border-radius: 5px;
        }
    `;
    document.head.appendChild(style);
});

/**
 * Dosyaları zip haline getirir ve indirir
 * Not: Bu fonksiyon JSZip kütüphanesi olmadan çalışmaz
 * Sadece bilgi amaçlı eklenmiştir
 */
function prepareFilesForExport() {
    // Bu örnek kod, gerçek bir export işlemi yapmaz
    // Tam bir çözümde, şunları yapmanız gerekir:

    // 1. Ekran görüntülerini toplayın
    // const screenshots = [...document.querySelectorAll('canvas')].map(c => c.toDataURL());

    // 2. JSZip veya benzer bir kütüphane kullanarak zip dosyası oluşturun
    // const zip = new JSZip();

    // 3. Dosyaları zip'e ekleyin
    // zip.folder("Gorev1").file("baslangic.png", screenshots[0].split(',')[1], {base64: true});
    // zip.folder("Gorev1").file("gelistirme.png", screenshots[1].split(',')[1], {base64: true});
    // zip.folder("Gorev1").file("son.png", screenshots[2].split(',')[1], {base64: true});

    // 4. Zip'i indirin
    // zip.generateAsync({type:"blob"}).then(function(content) {
    //     saveAs(content, "FWD_Qualification_Files.zip");
    // });

    alert("Bu demo sürümünde dosya export işlevi devre dışıdır. Lütfen dosyalarınızı manuel olarak kaydedin ve düzenleyin.");
}
