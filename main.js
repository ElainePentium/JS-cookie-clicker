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

// cookie behavior - scale in and out on click
let numberOfCookieClicked = 0;
const cookieButton = document.querySelector(".cookie");
cookieButton.addEventListener("click", () => {
    numberOfCookieClicked++;
    console.log(`cookie-clicked: ${numberOfCookieClicked}`)
})