class Grower {
    arrayUpgrades = [2,2,2];
    upgradeFactor = 1;

    constructor() {
        this.number= 0;
        this.inProdCookies= 0.0;
        this.inProdAllCookies= 0;
        this.productedCookies= 0;
        this.price= null;
        this.enableUpgrades= new Array(3).fill(false);
    }

    buy(cookie) {
        this.number++;
        //modify Cookies Bank Sold
        cookie.updateCookieAmount(this.price);
        console.log("updateCookie: ", cookie.currentCookies);
        this.price= this.price*1.15;
    }

    produce(cookie) {
        this.inProdAllCookies= this.inProdCookies*this.number*this.upgradeFactor;
        this.productedCookies+= this.inProdAllCookies;
        cookie.currentCookies += this.inProdAllCookies;
    }

    upgrading(index) {
        if(this.enableUpgrades[index] === true) {
            this.upgradeFactor*= this.arrayUpgrades[index];
        }
    }
}