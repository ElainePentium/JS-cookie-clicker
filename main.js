console.log("cookie: ", cookie.currentCookies)

// tab panels behavior - change active tab on click
const tabs = document.querySelectorAll(".tab");
const tabPanels = document.querySelectorAll('.tab-panel');

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", () => {
        tabs.forEach(tab => {
            tab.classList.remove("is-active")
        });
        tabPanels.forEach(tabPanel => {
            tabPanel.classList.remove("is-active") 
        });

        tabs[i].classList.add("is-active");
        tabPanels[i].classList.add("is-active");
        
        console.log(tab)
    })
    const tabPanel = tabPanels[i];
    
}

// h1 number of cookies update in title
const cookieTitle = document.querySelector(".title h1");
const cookiePSTitle = document.querySelector(".title h3");

// cookie behavior - scale in and out on click
const cookieButton = document.querySelector(".cookie");
cookieButton.addEventListener("click", () => {
    cookie.currentCookies++;
    cookieTitle.innerHTML = `${cookie.currentCookies} cookies`
})

// change color of grandma icon on hover
const grandmaPicture = document.querySelector("#store-grandma img");
const grandmaBox = document.querySelector("#store-grandma");
grandmaBox.addEventListener("mouseover", () => {
    grandmaPicture.src = "pictures/grandma-primary.svg"
})
grandmaBox.addEventListener("mouseleave", () => {
    grandmaPicture.src = "pictures/grandma-secondary.svg"
})