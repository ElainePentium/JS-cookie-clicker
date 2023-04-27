const cookie = {
    currentCookies: 0,
    productedCookies: 0,
    gameTime: 0,
    cookiesPerSecond: 0.0,
    updateCookieAmount: function(cookieAmount) {
    // return substraction of the price of one cookie grower to the current cookies amount
        this.currentCookies -= cookieAmount.toFixed(2);
    },
};

//     bakeCookie() {
//         // this.inProdAllCookies= this.inProdCookies*this.number;
//         // this.productedCookies+= this.inProdAllCookies;
//     }
//     timer() {

//     }

// }