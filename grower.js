class Grower {
    constructor() {
        this.number= 0;
        this.inProdCookies= 0.0;
        this.inProdAllCookies= 0;
        this.productedCookies= 0;
        this.price=null;
    }

    buy() {
        this.number++;
        this.price= this.price*1.15;
        //modify Cookies Bank Sold
    }

    produce() {
        this.inProdAllCookies= this.inProdCookies*this.number;
        this.productedCookies+= this.inProdAllCookies;
    }

    enableImprovement() {

    }
}