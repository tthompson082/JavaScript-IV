// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

class Instructors extends Person {
    constructor(attributes) {
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`)
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }
    gradeScore(student) {
        let plusOrMinus = Math.random() < 0.5 ? -1 : 1;
        let newGrade = student.grade < 70 ? student.grade + ((Math.random() * 10) * plusOrMinus) : student.grade;
        return newGrade.toPrecision(4);
    }
}

class Students extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
        this.grade = attributes.grade;
    }
    listSubjects() {
        console.log(this.favSubjects.join('\n'))
    }
    listSubjects2() {
        this.favSubjects.map(function(favClass) {
            console.log(favClass)
        })
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }
    graduate(student) {
        student.grade >= 70 ? console.log('Congratulations! You can graduate!') : console.log('Not quite. Keep trying.')
    }
}

class ProjectManagers extends Instructors {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`)
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}

const tyler = new Students ({
    'name': 'Tyler',
    'age': 24,
    'location': 'Cincinnati',
    'previousBackground': 'Thomas More College',
    'className': 'WEB20',
    'favSubjects': [
        'JavaScript',
        'CSS',
        'HTML'
    ],
    'grade': 55
})

const tim = new Students ({
    'name': 'Tim',
    'age': 45,
    'location': 'Chicago',
    'previousBackground': 'Skydiving Instructor',
    'className': 'WEB20',
    'favSubjects': [
        'JavaScript',
        'CSS',
        'HTML',
        'Classes',
        'Prototypes'
    ],
    'grade': 55
})

const jim = new Students ({
    'name': 'Jim',
    'age': 35,
    'location': 'Houston',
    'previousBackground': 'Scuba Instructor',
    'className': 'WEB20',
    'favSubjects': [
        'JavaScript',
        'CSS',
        'HTML',
        'Classes',
        'Prototypes',
        'Flexbox',
        'Semantic HTML'
    ],
    'grade': 55
})

const dan = new Instructors ({
    'name': 'Dan',
    'age': 32,
    'location': 'Denver',
    'specialty': 'All things Web Development',
    'favLanguage': 'JavaScript',
    'catchPhrase': 'Cats rule, dogs drool'
})

const stan = new Instructors ({
    'name': 'Stan',
    'age': 55,
    'location': 'Kansas City',
    'specialty': 'React',
    'favLanguage': 'JavaScript',
    'catchPhrase': 'Another one bites the dust.'
})

const fran = new Instructors ({
    'name': 'Fran',
    'age': 40,
    'location': 'Sacramento',
    'specialty': 'Redux',
    'favLanguage': 'JavaScript',
    'catchPhrase': 'West coast, best coast'
})


const guillermo = new ProjectManagers ({
    'name': 'Guillermo',
    'age': '27',
    'location': 'Miami',
    'gradClassName': 'WEB17',
    'favInstructor': 'Josh'
})

const john = new ProjectManagers ({
    'name': 'John',
    'age': '29',
    'location': 'Orlando',
    'gradClassName': 'WEB15',
    'favInstructor': 'Dan'
})

const james = new ProjectManagers ({
    'name': 'James',
    'age': '31',
    'location': 'Atlanta',
    'gradClassName': 'WEB18',
    'favInstructor': 'Jimmy'
})

//students
tyler.speak();
tyler.listSubjects();
tyler.listSubjects2();
tyler.PRAssignment('JavaScript Classes');
tyler.sprintChallenge('JavaScript');

tim.speak();
tim.listSubjects();
tim.listSubjects2();
tim.PRAssignment('JavaScript Classes');
tim.sprintChallenge('JavaScript');

jim.speak();
jim.listSubjects();
jim.listSubjects2();
jim.PRAssignment('JavaScript Classes');
jim.sprintChallenge('JavaScript');

//instructors
dan.speak();
dan.demo('JavaScript Classes');
dan.grade(tyler, 'JavaScript');

stan.speak();
stan.demo('JavaScript Classes');
stan.grade(tim, 'JavaScript');

fran.speak();
fran.demo('JavaScript Classes');
fran.grade(jim, 'JavaScript');

//project managers
guillermo.speak();
guillermo.demo('JavaScript');
guillermo.grade(tyler, 'JavaScript');
guillermo.standUp('WEB20_guillermo');
guillermo.debugsCode(tyler, 'JavaScript');

john.speak();
john.demo('JavaScript');
john.grade(tim, 'JavaScript');
john.standUp('WEB20_john');
john.debugsCode(tim, 'JavaScript');

james.speak();
james.demo('JavaScript');
james.grade(jim, 'JavaScript');
james.standUp('WEB20_james');
james.debugsCode(jim, 'JavaScript');

//stretch
console.log(tyler.grade)
console.log(tim.grade)
console.log(jim.grade)

console.log(dan.gradeScore(tyler));
console.log(dan.gradeScore(tyler));
tyler.graduate(tyler);

console.log(dan.gradeScore(tyler));
console.log(dan.gradeScore(tyler));
tyler.graduate(tyler);

tyler.grade = 70;
tyler.graduate(tyler)