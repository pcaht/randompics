const imagecontainerEl = document.querySelector(".image-container");

const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () => {
    addNewImg()
})

function addNewImg() {
for(let i=1; i<=10; i++) {
    const newImgEl =  document.createElement("img");
    //Math.random() tạo ra một số thực (float) ngẫu nhiên trong khoảng từ 0 đến <1.
    newImgEl.src = `https://picsum.photos/100?random=${Math.floor(Math.random()*2000)}`;
    imagecontainerEl.appendChild(newImgEl);
}
}