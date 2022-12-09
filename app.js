const byonPoodle = {
    name: 'Byron',
    ageInYears: 2,
    warm: ()=>{
        console.log(`Bark bark bark`);
        console.log(this);
    }
}
console.log(byonPoodle.name);
console.log(byonPoodle.ageInYears);
console.log(byonPoodle.warm());

////////////////////////////////////////////////
////////////////////////////////////////////////
const blakeDoodle = {
    name: "Blake",
    breed: "Labradoodle",
    sonicAttack: "ear-rupturing atomic bark",
    mostHatedThing: "noises in the apartment hallway",
    warn: function() {
      console.log(`${this.name} the ${this.breed} issues an ${this.sonicAttack} when he hears ${this.mostHatedThing}`);
    }
  };
  
  blakeDoodle.warn();

  ///////////////////////////////////////////////////
  ///////////////////////////////////////////////////


  const frog = {name: "Kermit"};
  const pig = {name: "Miss Piggy"};
  const speak = function(){
    return `It ain't easy being ${this.name}`
}
frog.speak = speak;
pig.speak = speak;
frog.speak === pig.speak;

frog.speak();  //=> "It ain't easy being Kermit"
pig.speak();  //=> "It ain't easy being Miss Piggy"

// /The Execution Context of "Bare" Function Calls

const contextReturner = ()=>{ return this; }
console.log(contextReturner());
console.log(contextReturner() === window);


/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
const locationReturner = function() {
    return this.location.host;
  }
  
  locationReturner(); //=> URL host serving the current page e.g. developer.mozilla.org


/////////////////////////////////////////////////////
/////////////////////////////////////////////////////


function a() {
    return function b() {
      return this;
    }
  }
  
  a()() === window; //=> true


/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//   Prevent Implicitly Setting a Global Object In Function Calls With use strict
function looseyGoosey() {
    return this;
}
  
function noInferringAllowed() {
    "use strict";
    return this;
}
  
looseyGoosey() === window; //=> true
noInferringAllowed() === undefined; //=> true
  
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
// Special Case: Implicitly-Set Context in Object-Oriented Programming





class Poodle{
    constructor(name, pronoun){
        this.name = name;
        this.pronoun = pronoun;
        this.sonicAttack = "ear-rupturing atomic bark";
        this.mostHatedThing = "noises in the apartment hallway";
    }
    warn() {
        console.log(`${this.name} issues an ${this.sonicAttack} when ${this.pronoun} hears ${this.mostHatedThing}`);
    }
}




