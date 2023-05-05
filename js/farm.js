class Farm extends Grower { 
    constructor() {
        super();
        this.price= 1000;
        this.inProdCookies= 8;
        this.createUpgrades();
        this.name = 'farm';
        this.icon = '<i class="fa-solid fa-tractor"></i>';
        this.infos = 'Grows cookie plants from cookie seeds';
    }

    createUpgrades() {
        this.upgrades.push(new Upgrade('Times2',2,'First Times x2',100));
        this.upgrades.push(new Upgrade('Times4',2,'Second Times x2',500));
        this.upgrades.push(new Upgrade('Times8',2,'Third Times x2',10000));
    }
}