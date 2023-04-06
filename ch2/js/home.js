const imgList = [
  {
    src: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1990%2F78f46d5b.jpg&w=1060&q=100",
    alt: "이제 면접 준비도 UMC로!",
  },
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
  {
    src: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1975%2Fdebe424c.jpg&w=1060&q=100",
    alt: "이제 면접 준비도 챗GPT로!",
  },
];

function carousel() {
  const onClickPrevBtn = () => {
    if (currentCnt > 0) {
      currentCnt--;
      carouselContainer.style.transform = `translate(${
        260 - move * currentCnt
      }px)`;
      if (currentCnt == 0) {
        setTimeout(() => {
          currentCnt = imgList.length - 2;
          carouselContainer.style.transition = "none";
          carouselContainer.style.transform = `translate(${
            260 - move * currentCnt
          }px)`;
        }, 500);
      }
    }
    carouselContainer.style.transition = "all 0.5s ease-in-out";
  };

  const onClickNextBtn = () => {
    if (currentCnt < imgList.length - 1) {
      currentCnt++;
      carouselContainer.style.transform = `translate(${
        260 - move * currentCnt
      }px)`;
      if (currentCnt == imgList.length - 1) {
        setTimeout(() => {
          currentCnt = 1;
          carouselContainer.style.transition = "none";
          carouselContainer.style.transform = `translate(${
            260 - move * currentCnt
          }px)`;
        }, 500);
      }
      carouselContainer.style.transition = "all 0.5s ease-in-out";
    }
  };
  let currentCnt = 1;
  const move = 1028;

  const carouselContainer = document.getElementById("carousel");
  const prevBtn = document.querySelector(".carousel-button-left");
  const nextBtn = document.querySelector(".carousel-button-right");

  prevBtn.addEventListener("click", onClickPrevBtn);
  nextBtn.addEventListener("click", onClickNextBtn);
  for (let i = 0; i < imgList.length; i++) {
    const carouselItem = document.createElement("div");
    const imgItem = document.createElement("img");

    carouselItem.classList.add("carousel-item");

    imgItem.src = imgList[i].src;
    imgItem.alt = imgList[i].alt;

    carouselItem.appendChild(imgItem);
    carouselContainer.appendChild(carouselItem);
  }
}
function home() {
  carousel();
}
home();
