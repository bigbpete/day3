class LivingThing {
    constructor(type, numberOfLegs) {
        this.type = type;
        this.numberOfLegs = numberOfLegs;
    };
}
class Insect extends LivingThing {
    constructor(type) {
        super(type, 6);
    };
};
class Mammal extends LivingThing {
    constructor(type) {
        super(type, 4);
    };
}
const dog = new Mammal('dog');
const cricket = new Insect('cricket');
const centipede = new LivingThing('Centipede', 100);

const checkForMostLegs = (arrayOfLivingThings) => {
    let mostLegs = arrayOfLivingThings[0];
    for (let i = 0; i < arrayOfLivingThings.length; i++) {
        if (arrayOfLivingThings[i].numberOfLegs > mostLegs.numberOfLegs) {
            mostLegs = arrayOfLivingThings[i];
        };
    };
    return mostLegs;
};
const livingThingWithMostLegs = checkForMostLegs([dog, cricket, centipede]);
console.log(livingThingWithMostLegs)
