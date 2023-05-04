const statsContainer = document.querySelector("#tab-stats");

cursorFarming.number = 13;
grandMaFarming.number = 5;
farmFarming.number = 8;

statsContainer.insertAdjacentHTML("beforeend",
`<ul>
    <li>🍪 in bank: ${cookie.currentCookies}</li>
    <li>🍪 baked: ${cookie.productedCookies}</li>
    <li>growers owned: ${cursorFarming.number + grandMaFarming.number + farmFarming.number}</li>
    <li>🍪 per second: ${cursorFarming.inProdAllCookies + grandMaFarming.inProdAllCookies + farmFarming.inProdAllCookies}</li>
    <li>hand made 🍪: ${cookie.clickedCookies}</li>
</ul>`
)

// <li>🍪 per click: </li>    <li>🍪 clicks: </li>    <li>achievments unlocked: c🍪ming s🍪🍪n</li>
// cursorFarming = new Cursor();
// grandMaFarming = new GrandMa();
// farmFarming = new Farm();

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
