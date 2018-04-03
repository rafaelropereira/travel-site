function Person(fullname, favColor){
    this.name = fullname;
    this.favColor = favColor;
    this.greeting = function(){
        console.log("Hello, my name is " + this.name + "  and my favored color is " + this.favColor + ".");
    }
}

module.exports = Person;