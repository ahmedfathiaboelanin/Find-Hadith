let search = document.querySelector("input");
let searchBtn = document.querySelector(".searchBtn");
let page = 1;
let text = document.querySelector(".text");
let next = document.querySelector(".next");
let clear = document.querySelector(".clear");

function getHadith() {
  fetch(
    `https://dorar-hadith-api.onrender.com/api/search?value=${search.value}&page=${page}`
  )
    .then((response) => response.json())
    .then((data) => {
      let file = data;
      let length = data.length;
      for (let i = 0; i < length; i++) {
        let hadithText = document.createElement("p");
        let rawy = document.createElement("span");
        let source = document.createElement("span");
        let sayer = document.createElement("span");
        let degree = document.createElement("span");
        hadithText.textContent = data[i].hadith;
        hadithText.setAttribute("class", "hadithText");
        hadithText.appendChild(rawy);
        rawy.textContent = `الراوي: ${data[i].el_rawi}`;
        hadithText.appendChild(source);
        source.textContent = `المصدر: ${data[i].source}`;
        hadithText.appendChild(sayer);
        sayer.textContent = `المحدث: ${data[i].el_mohdith}`;
        hadithText.appendChild(degree);
        degree.textContent = `الدرجة: ${data[i].grade}`;
        text.appendChild(hadithText);
      }
      console.log(file);
    });
}
searchBtn.addEventListener("click", () => {
  if (search.value === "") {
    document.querySelector(".popup").setAttribute("style", "display:flex");
    document.querySelector(".layer").setAttribute("style", "display:block");
  } else {
    getHadith();
  }
});
next.addEventListener("click", () => {
  if (search.value === "") {
    document.querySelector(".popup").setAttribute("style", "display:flex");
    document.querySelector(".layer").setAttribute("style", "display:block");
  } else {
    page += 1;
    getHadith();
  }
});
document.querySelector(".hidepop").addEventListener("click", () => {
    document.querySelector(".popup").setAttribute("style", "display:none");
    document.querySelector(".layer").setAttribute("style", "display:none");
})

clear.addEventListener("click", () => {
    let text = document.querySelectorAll("p.hadithText");
    for (let i = 0; i < text.length; i++){
        text[i].setAttribute("style","display:none")
    }
})