/*

Made by SyK5
class project
privat mail : Alpay.sahin@outlook.de

*/


// Elements = water > fire > Plants > toxic  /  fire / toxic < ground > water / plants
// Poke = Fukano, Seeper, Folipurba, Nidoran, Knogga

import rs from 'readline-sync';
import terminalImage from 'terminal-image';
import chalk from 'chalk';
import * as align from "@topcli/text-align";


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
    async showStatus () {
        let effect = ``;
        if (this.status === `Normal`) {
            effect = false;
        }else {effect = `Status : ${this.status}`}
        let skillsName = [this.skills[0].attack];
        for (let i = 1; i < this.skills.length; i++) {
            if (this.skills[i] !== null || this.skills[i] !== undefined) {
                skillsName.push(this.skills[i].attack)
            }
        }

        const pokiPic = await terminalImage.file(`${this.name}.png`, {width: '45%', height: '45%'});        

        let statuseffect = pokiPic + `\n${chalk.black('Pokemon')}${chalk.bold(' : ')}${this.name}\n${chalk.yellow('Lvl')}${chalk.bold(' : ')}${chalk.yellow(this.lvl.lvl)}\n${chalk.red('Health')}${chalk.bold(' : ')}${chalk.red(this.health)}\n${chalk.blue('Stamina')}${chalk.bold(' : ')}${chalk.blue(this.stamina)}\n${chalk.yellow.bgRed('Power')}${chalk.bgRed.bold(' : ')}${chalk.yellow.bgRed(this.power)}\nSkills${chalk.bold(' : ')}${skillsName.join(' ')}\n${effect !== false? effect + '\n' : '' }PokeBall${chalk.bold(' : ')}${this.pokeball}\n`
        console.log(statuseffect);
    }

    async Fight (other) {
        const pokiPic = await terminalImage.file(`${this.name}.png`, {width: '45%', height: '45%'});
        const enemyPoki = await terminalImage.file(`${other.name}.png`, {width: '45%', height: '45%'});
        const terminalWidth = process.stdout.columns;

        const rightAlignedPokiPic = enemyPoki.split('\n').map(line => {
            const padding = ' '.repeat(Math.max(terminalWidth - 50, 0));
            return padding + line;
        }).join('\n');

        console.log(rightAlignedPokiPic + '\n\n\n\n\n' + pokiPic);
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
    playStatus(){
        const eigenTasche = Object.values(this.tasche);
        console.log(`Hello Player ${this.player} you have 4 PokeSlot\nin you backpack is =\n`, eigenTasche.join('\n '));
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
// Elements = water > fire > Plants > toxic  /  fire / toxic < ground > water / plants

const Level1 = new Level(1, 0, 100);

const blueTasche = new Tasche(['Pokeball', 2], ['Hyperball', 2], ['Masterball', 2], ['Healspray', 5], ['antitoxic', 1]);

const namePlayer1 = rs.question('Hello Player\nPlease enter your name: ');
const player1 = new Player(namePlayer1, null, null, null, null, deepCloning(blueTasche));
player1.playStatus();

const fire = new Status('Burn', 3);
const water = new Status('Wet', 1);
const plants = new Status('Paralys', 1);
const toxic = new Status('Toxic', 2);
const ground = new Status('Grounded', 0);

// Fire type

const glut = new AttackSkill('Glut', deepCloning(fire), 12, 7);
const flammenrad = new AttackSkill('Flammenrad', deepCloning(fire), 28, 17);
const flammenwurf = new AttackSkill('Flammenwurf', deepCloning(fire), 35, 25);
const flammenblitz = new AttackSkill('Flammenblitz', deepCloning(fire), 43, 30);

// Water type

const aquaknarre = new AttackSkill('Aquaknarre', deepCloning(water), 12, 7);
const blubbstrahl = new AttackSkill('Blubbstrahl', deepCloning(water), 21, 12);
const aquawelle = new AttackSkill('Aquawelle', deepCloning(water), 40, 26);
const hydropumpe = new AttackSkill('Hydropumpe', deepCloning(water), 50, 40);

// Plants type

const rasierblatt = new AttackSkill('Rasierblatt', deepCloning(plants), 7, 3);
const zauberblatt = new AttackSkill('Zauberblatt', deepCloning(plants), 18, 12);
const gigasauger = new AttackSkill('Gigasauger', deepCloning(plants), 30, 20);
const laubklinge = new AttackSkill('Laubklinge', deepCloning(plants), 40, 28);

// Toxic type

const giftstachel = new AttackSkill('Giftstachel', deepCloning(toxic), 10, 4);
const giftspitzen = new AttackSkill('Giftspitzen', deepCloning(toxic), 20, 13);
const toxin = new AttackSkill('Toxin', deepCloning(toxic), 32, 21);
const gifthieb = new AttackSkill('Gifthieb', deepCloning(toxic), 45, 33);

// Ground Type

const lehmschelle = new AttackSkill('Lehmschelle', deepCloning(ground), 7, 3);
const fruststampfer = new AttackSkill('Fruststampfer', deepCloning(ground), 15, 10);
const knochenhatz = new AttackSkill('Knochenhatz', deepCloning(ground), 25, 15);
const knochmerang = new AttackSkill('Knochmerang', deepCloning(ground), 30, 20)


// name, element, lvl, health, stamina, power, skills, status, pokeball
// Poke = Fukano, Seeper, Folipurba, Nidoran, Knogga

const fukano = new Pokemon('Fukano', 'Fire', deepCloning(Level1), 60, 30, 50, [deepCloning(glut)], 'Normal', 'Pokeball');
const seeper = new Pokemon('Seeper', 'Water', deepCloning(Level1), 65, 30, 38, [deepCloning(aquaknarre)], 'Normal', 'Pokeball');
const folipurba = new Pokemon('Folipurba', 'Plant', deepCloning(Level1), 80, 33, 55, [deepCloning(rasierblatt)], 'Normal', 'Pokeball');
const nidoran = new Pokemon('Nidoran', 'toxic', deepCloning(Level1), 62, 30, 42, [deepCloning(giftstachel)], 'Normal', 'Pokeball');
const knogga = new Pokemon('Knogga', 'Ground', deepCloning(Level1), 70, 30, 30, [deepCloning(lehmschelle)], 'Normal', 'Pokeball');


fukano.showStatus();
seeper.showStatus();
folipurba.showStatus();
nidoran.showStatus();
knogga.showStatus();

knogga.Fight(seeper);