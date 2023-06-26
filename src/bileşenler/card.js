import axios from 'axios';

const Card = (makale) => {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  const headlineDiv = document.createElement("div");
  headlineDiv.className = "headline";
  headlineDiv.textContent = makale.anabaslik;

  const authorDiv = document.createElement("div");
  authorDiv.className = "author";
  
  const imgDiv = document.createElement("div");
  imgDiv.className = "img-container";
  
  const imageEl = document.createElement("img");
  imageEl.setAttribute("src", makale.yazarFoto);

  const spanEl = document.createElement("span");
  spanEl.textContent = `${makale.yazarAdi} tarafından`;

  cardDiv.appendChild(headlineDiv);
  cardDiv.appendChild(authorDiv);
  authorDiv.appendChild(imgDiv);
  imgDiv.appendChild(imageEl);
  authorDiv.appendChild(spanEl);

  return cardDiv;
  
}

  // GÖREV 5-***TAMAMLANDI***
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //

const cardEkleyici = (secici) => {
  axios.get('http://localhost:5001/api/makaleler')
    .then(response => {
      const makaleler = response.data.makaleler;
      const makaleDizisi = Object.values(makaleler).flat();
      
      makaleDizisi.forEach(makale => {
        const element = document.querySelector(secici);
        const card = Card(makale);
        element.appendChild(card);
      });
    })
    .catch(error => {
      console.error('hata', error);
    });
}

  // GÖREV 6-***TAMAMLANDI***
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //


export { Card, cardEkleyici }
