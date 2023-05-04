const cookie = {
    currentCookies: 0,
    productedCookies: 0,
    gameTime: 0,
    cookiesPerSecond: 0.0,
    clickedCookies: 0,
    updateCookieAmount: function(cookieAmount) {
    // return substraction of the price of one cookie grower to the current cookies amount
        this.currentCookies -= cookieAmount.toFixed(2);
    },
};

// let currentCookies 	// cookies en banque actuellement
// let productedCookies 	// cookies produits depuis le début de la partie
// let gameTime 		// temps actuel depuis le début de la partie
// let constructions	// somme totale de toutes les constructions
// let inProdCookies = cookiesPerSecond	// cookies produits par seconde

//     bakeCookie() {
//         // this.inProdAllCookies= this.inProdCookies*this.number;
//         // this.productedCookies+= this.inProdAllCookies;
//     }
//     timer() {

//     }

// }