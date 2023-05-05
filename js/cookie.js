const cookie = {
    // cookies en banque actuellement
    currentCookies: 100000,
    // cookies produits par seconde
    cookiesPerSecond: 0.00,
    // cookies produits poar clic
    clickedCookies: 0,
    // cookies produits depuis le début de la partie
    productedCookies: 0,
    // somme totale de toutes les growers 
    growers: 0,
    // temps actuel depuis le début de la partie
    gameTime: 0,

    updateCookieAmount: function(cookieAmount) {
    // return substraction of the price of one cookie grower to the current cookies amount
        this.currentCookies -= cookieAmount.toFixed(2);
    },
};
