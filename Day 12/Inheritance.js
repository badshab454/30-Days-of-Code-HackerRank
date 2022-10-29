class Student extends Person {
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here

    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
    constructor(
        firstName, 
        lastName, 
        identification,
        scores
    ) {
        super(
        firstName, 
        lastName, 
        identification
        );
        this.scores = scores;
    }
    
    calculate() {
        let sum = this.scores.reduce((pre,next) => {
            return pre + next
        }, 0)
        
        if (averageSorce >= 90 && averageSorce <= 100) {
            return 'O';
        } else if (averageSorce >= 80 && averageSorce < 90) {
            return 'E';
        } else if(averageSorce >= 70 && averageSorce < 80) {
            return 'A';
        } else if(averageSorce >= 55 && averageSorce < 70) {
            return 'P';
        } else if (averageSorce >= 40 && averageSorce < 50) {
            return 'D';
        } else {
            return 'T';
        }
    }
    
}
        
    }