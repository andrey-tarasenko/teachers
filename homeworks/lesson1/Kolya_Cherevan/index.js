/*task1/2*/

const firstWord = 'Hello JavaScript from outside!';
alert(firstWord)

/*task2/2*/

function displayAuthor() {
	const author = 'Spidier Man';
	  alert(author) 
}
displayAuthor()

/*task3/2*/


function myFunc() {
	alert('Freedom is power')
}
myFunc()


function countMySquare(number) {
	return number**2;
}
alert(countMySquare(4))

/*task4/2*/

function isNumber(b) {
    return typeof(b) !== "number" ? false : true;
}

function solver(a, b, c , d, e) {
	if(isNumber(a) && isNumber(b) && isNumber(c) && isNumber(d) && isNumber(e)) {
		return ((a ** 2) - (5 * b * c) + (d / 3) + e).toFixed(2)
	}
	else {
		return 'wrong input'
	}
}

alert(solver(40, -9, 0.5, 7, 100))

/*task5/2*/

function string1Task() {
    const str1 = `You're catnip to a girl like me. Handsome, dazed, and to die for...`;
    return console.log(str1.length, str1.toUpperCase(), str1[0], str1[1], str1[2])
}
string1Task()

function string2Task() {
    const str2 = `Laurel Hedare: "Game over."`;
    return console.log(str2)
}
string2Task()

function string3Task() {
    const regex = /catwoman/gi; //regex js -- use global and igoning --ignoring case sensitive--
    const str3 = `Selina Kyle: catwoman"Mmm seemsCatwomanlike everyCatWomanwoman you try to save windsCatWOMANup dead... or deeply resentful."`;
    return str3.toLowerCase().replace(regex, '')
}
console.log(string3Task())


/*task6/2*/


function allJsTypes() {
    const likeNumber = 5;
    // const likeBigInt = 1n; it's doesn't work
    const likeString = 'i am string';
    const likeBooleang = true;
    const likeNull = null;
    const notFound = undefined;
    const likeObj = {
        student: 'Jack',
        lastName: 'Soul'
    }
    const likeSymbol = Symbol('foo');
    const likeAFunction = function() {

    }
}


/*task7/2*/

function getAnswer(question, wrongAnswer, correctAnswer) {
    return (`${question}\nwrong: ${wrongAnswer}\ncorrect: ${correctAnswer}\n\n`);
}
const a = '15';
const b = 4;
const c = true;
const d = 'a';
const e = 'B';
const f = '';
let answer = 'Not my type\n\n';
answer += getAnswer('a+b=?', a + b, Number(a) + b);
answer += getAnswer('a+c=?', a + c, Number(a)-14 + c); //exersise answer wrong
answer += getAnswer('e+d+e+d=?', e + d + e + d, e + d + parseInt(e) + d);
answer += getAnswer('c+f=?', c + f, c + f * 10);
console.log(answer);
/* The web page must display:
Not my type
  a+b=?
  wrong: 154
  correct: 19
  a+c=?
  wrong: 15true
  correct: 2
  e+d+e+d=?
  wrong: BaBa
  correct: BaNaNa
  c+f=?
  wrong: true
  correct: 10
*/


/*task8/2*/

function diffResultSwitchCase(n) {
    if (n === 1 || n === 2 || n === 3 || n === 4) {
        switch (n) {
            case 1:
                return n * 2 / '2';
            case 2:
                return n - n / 0;
            case 3:
                return 0 * Infinity;
        }
    } else {
        return 'wrong input'
    }
}

function diffResultIfElse(n) {
    if (n === 1 || n === 2 || n === 3 || n === 4) {
        if (n === 1) {
            return n * 2 / '2';
        } else if (n === 2) {
            return n - n / 0;
        } else if (n === 3) {
            return 0 * Infinity;
        }
    } else {
        return 'wrong input'
    }
}


/*task9/2*/

function checkHeroes(team, universe, race, eyeColor, hairColor) {
    if ((team === "Avengers" || "S.H.I.E.L.D.") && (universe === "Marvel") && (race === "human") && (eyeColor = "green") && hairColor === ("lightBrown" || "green")) {
        return 'This is Black Widow!'
    }
    if ((team === "Justice League Of America" || "Teen Titans") && (universe === "DC Comics") && (race === "human" || "kryptonian") && (eyeColor = "blue") && hairColor === ("black")) {
        return 'This is a Superman or Robin!'
    } else {
        return `Didn't recognize!`
    }

}

console.log(checkHeroes('S.H.I.E.L.D.', 'Marvel', 'human', 'green', 'lightBrown'))




/*task10/2*/
const animalLike = prompt('What animal is the superhero most similar to?');
const genderLike = prompt('Is the superhero male or female? Leave blank if unknown or other');
const heroOld = +prompt('How old is the superhero?');

function isLetter(c) {
    return c.toLowerCase() != c.toUpperCase();
}

function checkAnimal() {

    if (animalLike.split(' ').length <= 1) {
        return isLetter(animalLike) ? animalLike : false
    }
    return false
}

function checkGender() {

    if (genderLike === 'male') {
        return genderLike
    } else if (genderLike === 'female') {
        return genderLike
    } else if (genderLike === '') {
        return ''
    }
    return false
}

function checkHowOld() {

    if (Number.isInteger(heroOld) && (String(heroOld).split('')[0] = !0) && String(heroOld).length <= 5) {
        return heroOld
    }
    return false
}

function mainTask10() {
    if (checkAnimal() && checkGender() && checkHowOld()) {
        if ((checkGender() === 'male') && (checkHowOld() <= 18)) {
            return `The superhero name is: ${checkAnimal()} - boy`
        }
        if ((checkGender() === 'male') && (checkHowOld() >= 18)) {
            return `The superhero name is: ${checkAnimal()} - man`
        }
        if ((checkGender() === 'female') && (checkHowOld() <= 18)) {
            return `The superhero name is: ${checkAnimal()} - girl`
        }
        if ((checkGender() === 'female') && (checkHowOld() >= 18)) {
            return `The superhero name is: ${checkAnimal()} - woman`
        }
        if ((checkGender() === '') && (checkHowOld() <= 18)) {
            return `The superhero name is: ${checkAnimal()} - kid`
        }
        if ((checkGender() === '') && (checkHowOld() >= 18)) {
            return `The superhero name is: ${checkAnimal()} - hero`
        }
        return 'neok'
        return 'ok'
    }
    return 'Someone input wong'
}
console.log(mainTask10())




/*task11/2*/

the first loop
var i = 0;//change this count 
var res1 = ' ';
do {
        res1 += i + ' ';
        i++;
} while (i < 5);
// the second loop
i = 0;//and this one
var res2 = ' ';
while (i < 5)
{
res2 += i + ' ';
i++; }
console.log('do while: ' + res1 + 'while: ' + res2)


function  applyTable (someNumb) {

for (let i = 1; i <= someNumb; i++) {
console.log(`${someNumb}*${i} = ${someNumb*i}`)
}
}

applyTable(9)

/*task12/2*/

function createTriangle(n, symb) {
	let stringGenerated = '';
	for(let i = 0; i <= n; i++) {
		console.log(stringGenerated+=symb)
	}
}
createTriangle(6, '*')

/*task13/2*/

function diffResultSwitchCase() {
    const n = +prompt('');
    if ((n > 0 && n <= 10) && (Number.isInteger(n))) {
        switch (n) {
            case 1:
                return 'Back to square 1';
            case 2:
                return 'Goody 2-shoes';
            case 3, 6:
                return `Two's company, three's a crowd`;
            case 4, 9:
                return `Counting sheep`;
            case 5:
                return 'Take five';
            case 7:
                return 'Seventh heaven';
            case 8:
                return 'Behind the eight-ball';
            case 10:
                return 'Cheaper by the dozen';
        }
    } else {
        return 'wrong input'
    }
}
console.log(diffResultSwitchCase())

/*task14/2*/

function total(n, price, sum = 0) {

    return sum += n * price
}
let sum = total(1, 0.1);
sum = total(1, 0.2, sum);
sum = total(1, 0.78, sum);
console.log(sum); // will return 1.08

/*task15/2*/

function checkDivision(beginRange, endRange) {
    if ((endRange > beginRange) && (endRange > 0 && endRange <= 100) && (Number.isInteger(beginRange)) && (Number.isInteger(endRange))) {
        for (let i = beginRange; endRange >= beginRange; beginRange++)
            if (!(beginRange % 2) && (beginRange % 10 !== 0)) {
                console.log(`${beginRange} is even`)
            } else if (beginRange % 3 === 0 ) {
            console.log(`${beginRange} apply to 3`)
        } else if (beginRange % 10 === 0) {
            console.log(`${beginRange} is divisible by 10`)
        }
    } else {
        return 'wrong input'
    }
}
console.log(checkDivision(+prompt(), +prompt()))


/*task16/2*/


var heroes = ["Captain America", "Hulk", "Thor", "Iron Man", "Spider-Man"];

function firstElements(arr, n) {
    if (n < 0) {
    	return []
    } else {
        arr.length = n;
        return arr
    }

}


console.log(firstElements(heroes, -1));
// []

/*task17/2*/
function checkName(firstName, lastName) {
    const regex = /[a-zA-Z]/;
    if ((regex.test(firstName)) && (regex.test(lastName))) {
        alert(`${firstName.replace(firstName[0], firstName[0].toUpperCase())}  ${lastName.replace(lastName[0], lastName[0].toUpperCase())}`)
    } else {
        return `wrong input`
    }
}

console.log(checkName(prompt(), prompt()))


/*task18/2*/

const arr = [6, 2, 15, 5, 1, 3, 8, 1, 8, 10, 7, 11];

function sort(a, b) {
    if (!(a % 2) && !(b % 2)) {
        return a > b ? 1 : -1;
    }
    if ((a % 2) && (b % 2)) {
        return a > b ? 1 : -1;
    }
    if ((a % 2) && !(b % 2)) {
        return 1;
    }
    return -1;
}

function sortEvenOdd(arr) {
    return arr.sort(sort)
}
console.log(sortEvenOdd(arr))


/*task19/2*/


function checkBrackets(string) {
	if(typeof string === 'string') {
	const generatedArr = string.split('');
	const initArr = [];
	for(let i = 0; generatedArr.length > i; i++) {
		if((generatedArr[i]==='(') && generatedArr[i+1]===')') {
			initArr.push(`${generatedArr[i]}${generatedArr[i+1]}`)
		}
	}
	return initArr.length;
	} else {
		return 0
	}


}
console.log(checkBrackets('((()))'))



