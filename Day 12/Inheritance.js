class Student extends Person {
    constructor(firstName, lastName, id, scores) {
        super(firstName, lastName, id)
        this.scores = scores
    }

    calculate() {
        const grades = 'OEAPDT', scale = [90, 80, 70, 55, 40, 0]
        const avg = this.scores.reduce((sum, s) => sum + s) / this.scores.length
        return grades[scale.map(s => avg >= s).findIndex(s => s)]
    }
}