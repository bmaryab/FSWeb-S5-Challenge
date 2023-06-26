import axios from "axios";

const Tablar = (konu) => {
  const tabsDiv = document.createElement("div");
  tabsDiv.className = "topics";

  konu.forEach(item => {
    const tabDiv = document.createElement("div");
    tabDiv.classList.add("tab");
    tabDiv.textContent = item;
    tabsDiv.appendChild(tabDiv);
  });

  return tabsDiv;

}

  // GÖREV 3-***TAMAMLANDI***
  // ---------------------
  // Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
  // Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
  // fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">teknoloji</div>
  // </div>
  //

  
const tabEkleyici = async (secici) => {
  const konular = await axios.get("http://localhost:5001/api/konular")
  .then(response => response.data.konular)
  .catch(error => console.log(error))

  const tabsDiv = Tablar(konular);

  return document.querySelector(secici).appendChild(tabsDiv);
};

/*const tabEkleyici = async (secici) => {
  try {
    const response = await axios.get("http://localhost:5001/api/konular");
    const konular = response.data.konular;
    const tabsDiv = Tablar(konular);
    document.querySelector(secici).appendChild(tabsDiv);
  } catch (error) {
    console.log(error);
  }
};*/

  // GÖREV 4
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
  // Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
  // Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
  // Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //


export { Tablar, tabEkleyici }
