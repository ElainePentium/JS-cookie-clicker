class Grower {
    constructor() {
        this.number= 0;
        this.inProdCookies= 0.0;
        this.inProdAllCookies= 0;
        this.productedCookies= 0;
        this.price=null;
    }

    buy(cookie) {
        this.number++;
        //modify Cookies Bank Sold
        cookie.updateCookieAmount(this.price);
        console.log("updateCookie: ", cookie.currentCookies);
        this.price= this.price*1.15;
    }

    produce() {
        this.inProdAllCookies= this.inProdCookies*this.number;
        this.productedCookies+= this.inProdAllCookies;
    }

    enableImprovement() {

    }
}