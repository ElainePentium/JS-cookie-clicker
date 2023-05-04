class Farm extends Grower {
    // infosUpgrades = ['First Times x2<br>Cost : 100 <i class="fa-solid fa-cookie"></i>','Second Times x2 <br>Cost : 500 <i class="fa-solid fa-cookie"></i>','Third Times x2 <br>Cost : 10 000 <i class="fa-solid fa-cookie"></i>'];
    
    constructor() {
        super();
        this.price= 1000;
        this.inProdCookies= 8;
        this.createUpgrades();
    }

    createUpgrades() {
        this.upgrades.push(new Upgrade('Times2',2,'First Times x2',100));
        this.upgrades.push(new Upgrade('Times4',2,'Second Times x2',500));
        this.upgrades.push(new Upgrade('Times8',2,'Third Times x2',10000));
    }
}