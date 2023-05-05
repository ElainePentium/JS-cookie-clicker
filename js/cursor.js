class Cursor extends Grower {
    constructor() {
        super();
        this.price= 15;
        this.inProdCookies= 0.1;
        this.createUpgrades();
        this.name = 'cursor';
        this.icon = '<i class="fa-sharp fa-solid fa-hand-pointer"></i>';
    }

    createUpgrades() {
        this.upgrades.push(new Upgrade('Times2',2,'First Times x2',100));
        this.upgrades.push(new Upgrade('Times4',2,'Second Times x2',500));
        this.upgrades.push(new Upgrade('Times8',2,'Third Times x2',10000));
    }
}