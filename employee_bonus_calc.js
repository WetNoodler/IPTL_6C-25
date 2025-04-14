// Gamboa, Djinn Rafael M. - CCIS6C
let sal = 4000;
let rating = 4;

let bonus = 0;
let sal_bonus = 0;

switch (rating) {
    case 5:
        bonus = sal * 0.3
        break;
    case 4:
        bonus = sal * 0.2
        break;
    case 3:
        bonus = sal * 0.1
        break;
    case 1: case 2:
        if (sal < 2000) {
            bonus = 200
        }
        break;
}

sal_bonus = sal + bonus

console.log("Bonus: " + bonus + "\nTotal Salary with Bonus: " + sal_bonus)
