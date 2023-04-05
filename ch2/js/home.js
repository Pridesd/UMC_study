const imgList = [
  {
    src: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1975%2Fdebe424c.jpg&w=1060&q=100",
    alt: "이제 면접 준비도 챗GPT로!",
  },
  {
    src: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1958%2Fb670c991.jpg&w=1060&q=100",
    alr: "이제 면접 준비도 북한산으로!",
  },
  {
    src: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1958%2Fb670c991.jpg&w=1060&q=100",
    alr: "이제 면접 준비도 도봉산으로!",
  },
  {
    src: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1791%2F19d8e5bf.jpg&w=1060&q=100",
    alt: "이제 면접 준비도 조재석으로",
  },
  {
    src: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1990%2F78f46d5b.jpg&w=1060&q=100",
    alt: "이제 면접 준비도 UMC로!",
  },
];

function carousel() {
  const carouselContainer = document.getElementById("carousel");
  for (let i = 0; i < imgList.length; i++) {
    const carouselItem = document.createElement("div");
    const imgItem = document.createElement("img");

    carouselItem.classList.add("carousel-item");

    imgItem.src = imgList[i].src;
    imgItem.alt = imgList[i].alt;

    carouselItem.appendChild(imgItem);
    carouselContainer.appendChild(carouselItem);
  }

  carouselContainer.width = imgList.length * 600 + "px";
}
function home() {
  carousel();
}

home();
