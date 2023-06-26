const Header = (baslik, tarih, yazi) => {

  const headerDiv = document.createElement("div");
  headerDiv.classList.add("header");

  const dateSpan = document.createElement("span");
  dateSpan.classList.add("date");
  dateSpan.textContent = tarih;

  const baslikH1 = document.createElement("h1");
  baslikH1.textContent = baslik;

  const yaziSpan = document.createElement("span");
  yaziSpan.classList.add("temp");
  yaziSpan.textContent = yazi;

  headerDiv.appendChild(dateSpan);
  headerDiv.appendChild(baslikH1);
  headerDiv.appendChild(yaziSpan);

  return headerDiv;

}

  // GÖREV 1-***TAMAMLANDI***
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //

const headerEkleyici = (secici) => {
  const headerDiv = Header("Teknoloji Zamanı", "11 Kasım 2022", "sağdaki yazı");
  return document.querySelector(secici).appendChild(headerDiv);
}

  // GÖREV 2-***TAMAMLANDI***
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //

  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper")) 
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))
 

export { Header, headerEkleyici }
