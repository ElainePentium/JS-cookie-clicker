class GrandMa extends Grower {
    constructor() {
        super();
        this.price= 100;
        this.inProdCookies= 1;
        this.createUpgrades();
        this.name = 'grandma';
        this.icon = '<img src="img/grandma-secondary.svg" alt="Grand-mothers" class="grandma-picture">';
        this.infos = 'A nice granny to bake more cookies';
    }

    createUpgrades() {
        this.upgrades.push(new Upgrade('Times2',2,'First Times x2',100));
        this.upgrades.push(new Upgrade('Times4',2,'Second Times x2',500));
        this.upgrades.push(new Upgrade('Times8',2,'Third Times x2',10000));
    }
}