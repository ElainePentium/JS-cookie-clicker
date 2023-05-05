class Grower {
    // arrayUpgrades = [2,2,2];
    upgrades = [];
    upgradeFactor = 1;

    constructor() {
        this.number= 0;
        this.inProdCookies= 0.0;
        this.inProdAllCookies= 0;
        this.productedCookies= 0;
        this.price= null;
        // this.enableUpgrades= new Array(3).fill(false);
    }

    buy(cookie) {
        this.number++;
        //modify Cookies Bank Sold
        cookie.updateCookieAmount(this.price);
        this.price= this.price*1.15;
    }

    produce(cookie) {
        this.inProdAllCookies= this.inProdCookies*this.number*this.upgradeFactor; 
        this.productedCookies+= this.inProdAllCookies/10; // divide by 10 because refresh set at 100ms
        cookie.currentCookies += this.inProdAllCookies/10;
    }

    upgrading(index,cookie) {
        if(this.upgrades[index].enable === true) {
            this.upgradeFactor*= this.upgrades[index].factor;
            cookie.updateCookieAmount(this.upgrades[index].price);
        }
    }
}