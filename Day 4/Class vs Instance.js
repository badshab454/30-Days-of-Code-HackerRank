function Person(initialAge){
    // Add some more code to run some checks on initialAge
    age = (initialAge < 0 ? (console.log("Age is not valid, setting age to 0."),0) : initialAge);

    
  this.amIOld=function(){
   // Do some computations in here and print out the correct statement to the console
    console.log(age < 18 ? age < 13 ? "You are young." : "You are a teenager." : "You are old.");
  };
   this.yearPasses=function(){
          // Increment the age of the person in here
        age++;
    };
}