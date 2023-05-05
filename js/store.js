// Create elements to buy, upgrades and events listeners in Store Tab
const createStoreTab = (cookie, farms) => {
    // Tab content viewer
    document.getElementById('buildings').addEventListener('click',(event) =>{
        document.getElementById('buildings-tab').classList.add('is-enable');
        document.getElementById('upgrades-tab').classList.remove('is-enable');
        document.getElementById('buildings').classList.add('is-enable');
        document.getElementById('upgrades').classList.remove('is-enable');
    });
    document.getElementById('upgrades').addEventListener('click',(event) =>{
        document.getElementById('buildings-tab').classList.remove('is-enable');
        document.getElementById('upgrades-tab').classList.add('is-enable');
        document.getElementById('buildings').classList.remove('is-enable');
        document.getElementById('upgrades').classList.add('is-enable');
    });

    farms.forEach(farm => {
        buildingsContentFiller(cookie, farm);
        upgradeContentFiller(cookie, farm);
    });

    // change color of grandma icon on hover
    const grandmaPicture = document.querySelector("#store-grandma img");
    const grandmaBox = document.querySelector("#store-grandma");
    grandmaBox.addEventListener("mouseover", () => {
        grandmaPicture.src = "img/grandma-primary.svg"
    })
    grandmaBox.addEventListener("mouseleave", () => {
        grandmaPicture.src = "img/grandma-secondary.svg"
    })
}

// Tab Buildings content filler
const buildingsContentFiller = (cookie, farm) => {
    // Init objects price in store
    document.getElementById('buildings-tab').insertAdjacentHTML('beforeend',
        `<div class="store-box" id="store-${farm.name}">
            <div>
                ${farm.icon}${farm.name}
            </div>
            <div class="stats-store">Costs ${farm.price.toFixed(2)} <i class="fa-solid fa-cookie"></i></div>
            <div class="stats-store">${farm.infos}</div>
        </div>
    `);
    
    // Events on buy buildings in store
    document.getElementById(`store-${farm.name}`).addEventListener('click',(event) => {
        farm.buy(cookie);
        document.querySelector(`#store-${farm.name} .stats-store`).innerHTML= "";
        document.querySelector(`#store-${farm.name} .stats-store`).insertAdjacentHTML('beforeend',`Costs ${farm.price.toFixed(2)} <i class="fa-solid fa-cookie"></i>`);
    });
}

// Tab Upgrades content filler
const upgradeContentFiller = (cookie, farm) => {
    farm.upgrades.forEach((element,i) => {
        document.getElementById('upgrades-tab').insertAdjacentHTML('beforeend',`<div class="update" id="${farm.name}-upgrade${i}"></div>`);
        document.getElementById(`${farm.name}-upgrade${i}`).insertAdjacentHTML('beforeend', farm.icon); //'<i class="fa-sharp fa-solid fa-hand-pointer"></i>'
        document.getElementById(`${farm.name}-upgrade${i}`).addEventListener('click', (event) => {
            element.enable= true;
            farm.upgrading(i,cookie);
            document.getElementById(`${farm.name}-upgrade${i}`).remove();
        });
        document.getElementById(`${farm.name}-upgrade${i}`).insertAdjacentHTML('beforeend',
            `<div class="info-upgrade">${element.info}<br>Cost : ${element.price} <i class="fa-solid fa-cookie"></i></div>`);
        document.getElementById(`${farm.name}-upgrade${i}`).addEventListener('mouseover', (event) => {
            document.querySelector(`#${farm.name}-upgrade${i} .info-upgrade`).classList.add('visible'); 
        });
        document.getElementById(`${farm.name}-upgrade${i}`).addEventListener('mouseout', (event) => {
            document.querySelector(`#${farm.name}-upgrade${i} .info-upgrade`).classList.remove('visible'); 
        });
    });
}

// Enable buying buildings in store
const store = (cookie, farms) => {
    farms.forEach(farm => {
        if(cookie.currentCookies >= farm.price)
            document.getElementById(`store-${farm.name}`).classList.add('buying-enabled');
        else
            document.getElementById(`store-${farm.name}`).classList.remove('buying-enabled');

        farm.upgrades.forEach((upgrade, i) => {
            if(farm.number > 0 && upgrade.enable == false && cookie.currentCookies >= upgrade.price)
                document.getElementById(`${farm.name}-upgrade${i}`).classList.add('buying-enabled');
            else if(upgrade.enable == false)
                document.getElementById(`${farm.name}-upgrade${i}`).classList.remove('buying-enabled');
        });
    });
}

export {createStoreTab, store};