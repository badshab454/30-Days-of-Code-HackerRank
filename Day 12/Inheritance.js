class Student extends Person {
    constructor(firstName, lastName, idNumber, scores) {
        super(firstName,lastName,idNumber);
        this.scores = scores
    }

  calculate() {
    const average = this.scores.reduce(this.getSum, 0) / this.scores.length;
    if (average >= 90) return 'O';
    if (average >= 80) return 'E';
    if (average >= 70) return 'A';
    if (average >= 55) return 'P';
    if (average >= 40) return 'D';
    if (average < 40) return 'T';
  }
  getSum(total, num) {
    return (total += num);
  }
}