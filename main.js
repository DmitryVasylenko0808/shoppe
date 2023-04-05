const mobMenuBtn = document.querySelector(".header-mob-nav");
const mobMenuBtnImg = document.getElementById("mob-menu-img");
const mobMenuContainer = document.querySelector(".mob-menu");

const bannerContent = document.querySelector(".banner-content");
const sliderItems = document.querySelectorAll(".slider__item");

const infoNavLinks = document.querySelectorAll(".info-nav__link");
const infoItems = document.querySelector(".info-items");

const searchBtn = document.getElementById("search");
const headerNav = document.querySelector(".header-nav");
const headerLine = document.querySelector(".header-content__line");
const headerSearchInput = document.querySelector(".searchHeader");

headerSearchInput.style.display = "none";

mobMenuBtn.onclick = () => {
    if(mobMenuContainer.classList.toggle("show-mob")) {
        mobMenuBtnImg.src = "./assets/close.svg";
    }
    else {
        mobMenuBtnImg.src = "./assets/mobmenu.svg";
    }
}

sliderItems.forEach((item, index) => {
    item.onclick = () => {
        sliderItems.forEach(item => item.classList.remove("active"));
        item.classList.add("active");
        bannerContent.style.background = `url(./assets/banner/banner0${index + 1}.jpg)`;  
    }
})

infoNavLinks.forEach((link, index) => {
    link.onclick = () => {
        infoNavLinks.forEach(link => link.parentElement.classList.remove("_clicked"));
        const parent =  link.parentElement; 
        parent.classList.add("_clicked");

        if(window.matchMedia("(max-width: 425px)").matches) {
            const mobInfoItems = document.querySelectorAll(".info-nav__item");
            console.log(parent.lastElementChild);

            if(parent.lastElementChild.style.display === "block") {
                parent.lastElementChild.style.display = "none";
            }
            else {
                parent.lastElementChild.style.display = "block";
            }
        }
        else {
            for(let i = 0 ; i < infoItems.children.length; i++) {
                infoItems.children[i].style.display = "none";
            }
            const infoItem = infoItems.children[index];
            if(infoItem.className === "review") {
                infoItem.style.display = "flex";
            }
            else {
                infoItem.style.display = "block";
            }
        }
    }
});

searchBtn.onclick = () => {
    if(headerSearchInput.style.display === "none") {
        headerSearchInput.style.display = "flex";

        searchBtn.children[0].src = "./assets/close.svg";
    }
    else {
        headerSearchInput.style.display = "none";

        searchBtn.children[0].src = "./assets/header/search.svg";
    }
}