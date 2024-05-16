/*

Made by SyK5
class project
privat mail : Alpay.sahin@outlook.de

*/


// Elements = water > fire > Plants > toxic  /  fire / toxic < ground > water / plants

class Pokemon {
    constructor(name, element, lvl, health, stamina, power, skills, status, pokeball){
        this.name = name;
        this.lvl = lvl;
        this.health = health;
        this.stamina = stamina;
        this.power = power;
        this.skills = [...skills];
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
        let statuseffect = `Pokemon : ${this.name}\nLvl : ${this.lvl}\nHealth : ${this.health}\nStamina : ${this.stamina}\nPower : ${this.power}\nSkills: ${skillsName.join(' ')}\n${effect && effect !== 'Normal'? effect : 'Normal'}\nPokeBall : ${this.pokeball}`
        console.log(statuseffect);
    }
}

class AttackSkill {
    constructor(attack, element, damage, stamina, status){
        this.attack = attack;
        this.damage = damage;
        this.stamina = stamina;
        this.status = status;
        this.element = element;
    }
}

const lightball = new AttackSkill('Lightball', 7, 12);
const tackle = new AttackSkill('Tackle', 5, 3);
const pikachu = new Pokemon('Pikachu', 'electro', 25, 100, 30, 15, [lightball, tackle], 'Normal', 'Pokeball');



pikachu.showStatus();