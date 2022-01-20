const inquirer = require('inquirer');

class Pet{
    constructor(name,happinessLevel,hungerLevel){
        this.name=name;
        this.happinessLevel=happinessLevel;
        this.hungerLevel=hungerLevel;
    };

    feed(num){
        this.hungerLevel = this.hungerLevel - num;
    };

    play(num){
        this.happinessLevel = this.happinessLevel + num;
    };
};
let petOne = new Pet("Neon",10,8);

console.log('Hi, welcome to Node Pets Admin');
console.log(petOne.name +' is the name of your dog. Right now his hunger level is '+petOne.hungerLevel+' and his happiness level is '+petOne.happinessLevel+'.');

const questions = [
  {
    type: 'list',
    name: 'Activity',
    message: 'What would you like to do right now?',
    choices: ['Feed him a treat', 'Play with him in the garden', 'Walk him to the park','Nothing today, just chill'],
    filter(val) {
      return val.toLowerCase();
    },
  },
];

async function f() {
let promise = inquirer.prompt(questions)
let answers = await promise; 
let response = answers.Activity;
  if(response == "feed him a treat"){
    petOne.hungerLevel = Math.max(petOne.hungerLevel-5,0);
    petOne.happinessLevel = petOne.happinessLevel+1;
  }else if (response == 'play with him in the garden') {
    petOne.hungerLevel = Math.max(petOne.hungerLevel+3,0);
    petOne.happinessLevel = petOne.happinessLevel+5;    
  }else if (response == 'walk him to the park') {
    petOne.hungerLevel = Math.max(petOne.hungerLevel+5,0);
    petOne.happinessLevel = petOne.happinessLevel+10;    
  } else if (response == 'nothing today, just chill')  {
    petOne.hungerLevel = Math.max(petOne.hungerLevel+1,0);
    petOne.happinessLevel = petOne.happinessLevel-10;    
  }



  setTimeout(() => console.log('\nAs wished! His hunger level is now '+petOne.hungerLevel+' and his happiness level is '+petOne.happinessLevel+'.'),4000);
}

f();
