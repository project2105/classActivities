function DigitalPal(hungry = false, sleepy = false, bored = true, age = 0) {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
    this.feed = function feed() {
        if (this.hungry) {
            console.log('That was yummy!');
        } else {
            console.log("No thanks! I'm full.");
        }
    };
    this.sleep = function sleep() {
        if (this.sleepy) {
            console.log('Zzzzzzz')
        } else {
            console.log("No way! I'm not tired.");
        }
        this.increaseAge();
    };
    this.play = function play() {
        if (this.bored) {
            console.log("Yay! Let's Play!");
        } else {
            console.lo('Not Right Now. Later?');
        }
    };
    this.increaseAge = function increaseAge() {
        this.age++
        console.log('Happy Birthday to me! I am ')
    }


}
