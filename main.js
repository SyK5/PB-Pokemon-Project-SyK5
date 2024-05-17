/*

Made by SyK5
class project
privat mail : Alpay.sahin@outlook.de

*/


// Elements = water > fire > Plants > toxic  /  fire / toxic < ground > water / plants
// Poke = Fukano, Seeper, Folipurba, Nidoran, Knogga

class Pokemon {
    constructor(name, element, lvl, health, stamina, power, skills, status, pokeball){
        this.name = name;
        this.lvl = lvl;
        this.health = health;
        this.stamina = stamina;
        this.power = power;
        this.skills = skills;
        this.status = status;
        this.pokeball = pokeball;
        this.element = element;
    }
    learnAttackSkill (skill) {
        if (AttackSkill[skill] == undefined || AttackSkill[skill] == null){
            return 'Sorry this skill is not avaible'
        }
    }
    showStatus () {
        let effect = ``;
        if (this.status !== null || this.status !== true || this.status === `Normal`) {
            effect = `Status : ${this.status}`;
        }
        let skillsName = [this.skills[0].attack];
        for (let i = 1; i < this.skills.length; i++) {
            if (this.skills[i] !== null || this.skills[i] !== undefined) {
                skillsName.push(this.skills[i].attack)
            }
        }
        let statuseffect = `Pokemon : ${this.name}\nLvl : ${this.lvl.lvl}\nHealth : ${this.health}\nStamina : ${this.stamina}\nPower : ${this.power}\nSkills: ${skillsName.join(' ')}\n${effect && effect !== 'Normal'? effect : 'Normal'}\nPokeBall : ${this.pokeball}`
        console.log(statuseffect);
    }
}

class AttackSkill {
    constructor(attack, element, damage, stamina){
        this.attack = attack;
        this.damage = damage;
        this.stamina = stamina;
        this.element = element;
    }
}

class Status {
    constructor(status, rounds){
        this.status = status;
        this.rounds = rounds;
    }
}

class Level {
    constructor(lvl, xp, maxXp){
        this.lvl = lvl;
        this.xp = xp;
        this.maxXp = maxXp;
    }
    LevelUp(){
        this.lvl ++ ;
        this.maxXp += this.lvl;

    }
}

class Player {
    constructor(player, poke1, poke2, poke3, poke4, tasche){
        this.player = player;
        this.poke1 = poke1;
        this.poke2 = poke2;
        this.poke3 = poke3;
        this.poke4 = poke4;
        this.tasche = tasche;
    }

}

const deepCloning = (obj) => {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    const copy = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
            copy[key] = deepCloning(obj[key]);
    }
    return copy;
};

class Tasche {
    constructor(slot1, slot2, slot3, slot4, slot5){
        this.slot1 = slot1;
        this.slot2 = slot2;
        this.slot3 = slot3;
        this.slot4 = slot4;
        this.slot5 = slot5;
    }
}


// Attack = attack, element, damage, stamina, status
const Level1 = new Level(1, 0, 100);

const blueTasche = new Tasche(['Pokeball', 2], ['Hyperball', 2], ['Masterball', 2], ['Healspray', 5], ['antitoxic', 1]);

const player = new Player('SyK5', null, null, null, null, deepCloning(blueTasche));

const fire = new Status('Burn', 3);

const glut = new AttackSkill('Glut', deepCloning(fire), 12, 7);
const flammenrad = new AttackSkill('Flammenrad', deepCloning(fire), 28, 13);
const flammenblitz = new AttackSkill('Flammenblitz', deepCloning(fire), 55, 30);

const fukano = new Pokemon('Fukano', 'Fire', deepCloning(Level1), 72, 30, 50, [deepCloning(glut)], 'Normal', 'Pokeball');

fukano.showStatus();