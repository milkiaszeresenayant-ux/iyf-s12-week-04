"use strict";

(() => {
    console.log("=== Task 7.1: Variables and data types ===");

    const learnerName = "Milkias Zeresenayant";
    const learnerAge = 23;
    const isStudent = true;
    const favoriteColors = ["blue", "green"];
    const today = new Date();

    console.log(`Name: ${learnerName}`);
    console.log(`Age: ${learnerAge}`);
    console.log(`Student: ${isStudent}`);
    console.log(`Favorite colors: ${favoriteColors.join(", ")}`);
    console.log(`Today's date: ${today.toLocaleDateString()}`);
    console.log(`Type of name: ${typeof learnerName}`);
    console.log(`Type of age: ${typeof learnerAge}`);
    console.log(`Type of student status: ${typeof isStudent}`);

    let score = 100;
    score = 150;
    const PI = 3.14159;
    console.log(`Updated score: ${score}; PI: ${PI}`);

    console.log("\n=== Task 7.2: Data types and operators ===");

    const a = 10;
    const b = 3;
    console.log(`Addition: ${a + b}`);
    console.log(`Subtraction: ${a - b}`);
    console.log(`Multiplication: ${a * b}`);
    console.log(`Division: ${a / b}`);
    console.log(`Modulus: ${a % b}`);
    console.log(`Exponentiation: ${a ** b}`);

    const firstName = "Milkias";
    const lastName = "Zeresenayant";
    const fullName = `${firstName} ${lastName}`;
    console.log(`Full name uppercase: ${fullName.toUpperCase()}`);
    console.log(`Full name lowercase: ${fullName.toLowerCase()}`);
    console.log(`First initial: ${firstName.charAt(0)}`);
    console.log(`Name includes Milkias: ${fullName.includes("Milkias")}`);

    console.log(`5 > 3: ${5 > 3}`);
    console.log(`5 === 5: ${5 === 5}`);
    console.log(`5 !== 3: ${5 !== 3}`);
    console.log(`true && true: ${true && true}`);
    console.log(`true || false: ${true || false}`);
    console.log(`!true: ${!true}`);

    console.log(`Age in days (approximate): ${learnerAge * 365}`);
    console.log(`Age in hours (approximate): ${learnerAge * 365 * 24}`);
    console.log(`Year turning 100: ${today.getFullYear() + (100 - learnerAge)}`);

    console.log("\n=== Task 7.3: Functions ===");

    function greet(name = "Guest", greeting = "Hello") {
        return `${greeting}, ${name}!`;
    }

    function calculateArea(width, height) {
        return width * height;
    }

    function celsiusToFahrenheit(celsius) {
        return (celsius * 9) / 5 + 32;
    }

    function isEven(number) {
        return number % 2 === 0;
    }

    function getInitials(name) {
        return name
            .trim()
            .split(/\s+/)
            .map((part) => part.charAt(0).toUpperCase())
            .join("");
    }

    function reverseString(value) {
        return [...value].reverse().join("");
    }

    function calculateTip(bill, tipPercent = 15) {
        return bill * (tipPercent / 100);
    }

    const add = (x, y) => x + y;
    const multiply = (x, y) => x * y;
    const divide = (x, y) => (y === 0 ? "Cannot divide by zero" : x / y);

    console.log(greet());
    console.log(greet("Milkias"));
    console.log(greet("Milkias", "Hi"));
    console.log(`Area (5 x 4): ${calculateArea(5, 4)}`);
    console.log(`20 C in Fahrenheit: ${celsiusToFahrenheit(20)}`);
    console.log(`Is 8 even? ${isEven(8)}`);
    console.log(`Initials: ${getInitials("Milkias Zeresenayant")}`);
    console.log(`Reverse hello: ${reverseString("hello")}`);
    console.log(`Tip on 100 at 15%: ${calculateTip(100)}`);
    console.log(`Add: ${add(4, 3)}; multiply: ${multiply(4, 3)}; divide by zero: ${divide(4, 0)}`);

    console.log("\n=== Task 7.4: Control flow ===");

    function getGrade(mark) {
        if (mark >= 90) return "A";
        if (mark >= 80) return "B";
        if (mark >= 70) return "C";
        if (mark >= 60) return "D";
        return "F";
    }

    function getDayName(dayNumber) {
        const days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];
        return Number.isInteger(dayNumber) && dayNumber >= 0 && dayNumber < days.length
            ? days[dayNumber]
            : "Invalid day";
    }

    console.log(`Grade for 85: ${getGrade(85)}`);
    console.log(`Day 1: ${getDayName(1)}; invalid day: ${getDayName(8)}`);

    console.log("Numbers 1-100:");
    for (let number = 1; number <= 100; number += 1) {
        console.log(number);
    }

    console.log("Even numbers 1-50:");
    for (let number = 2; number <= 50; number += 2) {
        console.log(number);
    }

    console.log("FizzBuzz 1-100:");
    for (let number = 1; number <= 100; number += 1) {
        let output = "";
        if (number % 3 === 0) output += "Fizz";
        if (number % 5 === 0) output += "Buzz";
        console.log(output || number);
    }

    console.log("Star triangle:");
    for (let row = 1; row <= 5; row += 1) {
        console.log("*".repeat(row));
    }

    console.log("\n=== Calculator mini-project ===");

    function calculatorAdd(x, y) {
        return x + y;
    }

    function calculatorSubtract(x, y) {
        return x - y;
    }

    function calculatorMultiply(x, y) {
        return x * y;
    }

    function calculatorDivide(x, y) {
        return y === 0 ? "Error: cannot divide by zero" : x / y;
    }

    function calculate(num1, operator, num2) {
        switch (operator) {
            case "+":
                return calculatorAdd(num1, num2);
            case "-":
                return calculatorSubtract(num1, num2);
            case "*":
                return calculatorMultiply(num1, num2);
            case "/":
                return calculatorDivide(num1, num2);
            case "%":
                return num2 === 0 ? "Error: cannot divide by zero" : num1 % num2;
            case "**":
                return num1 ** num2;
            default:
                return "Invalid operator";
        }
    }

    console.log(`10 + 5 = ${calculate(10, "+", 5)}`);
    console.log(`10 - 5 = ${calculate(10, "-", 5)}`);
    console.log(`10 * 5 = ${calculate(10, "*", 5)}`);
    console.log(`10 / 5 = ${calculate(10, "/", 5)}`);
    console.log(`10 / 0 = ${calculate(10, "/", 0)}`);
    console.log(`10 % 3 = ${calculate(10, "%", 3)}`);
    console.log(`2 ** 3 = ${calculate(2, "**", 3)}`);

    console.log("\n=== Task 8.1: Arrays ===");

    const fruits = ["apple", "banana", "orange"];
    fruits.push("grape");
    fruits.unshift("mango");
    fruits.pop();
    fruits.shift();
    console.log(`First fruit: ${fruits[0]}; length: ${fruits.length}`);

    const numbers = [2, -4, 7, 12, 5];
    console.log(`Doubled: ${numbers.map((number) => number * 2)}`);
    console.log(`Non-negative: ${numbers.filter((number) => number >= 0)}`);
    console.log(`First number > 10: ${numbers.find((number) => number > 10)}`);
    console.log(`Product: ${numbers.reduce((product, number) => product * number, 1)}`);
    console.log(`Includes 7: ${numbers.includes(7)}`);

    console.log("\n=== Task 8.2: Objects ===");

    const person = {
        firstName: "Milkias",
        lastName: "Zeresenayant",
        age: learnerAge,
        isStudent: true,
        hobbies: ["reading", "coding"],
        address: { city: "Nairobi", country: "Kenya" }
    };

    person.phone = "Not provided";
    console.log(`Person: ${person.firstName} ${person.lastName}`);
    console.log(`City: ${person.address.city}`);
    console.log(`Object keys: ${Object.keys(person)}`);
    console.log(`Object values: ${Object.values(person)}`);
    for (const [key, value] of Object.entries(person)) {
        console.log(`${key}: ${value}`);
    }

    const objectCalculator = {
        add(x, y) {
            return x + y;
        },
        subtract(x, y) {
            return x - y;
        },
        multiply: (x, y) => x * y
    };
    console.log(`Object calculator 5 + 3: ${objectCalculator.add(5, 3)}`);

    console.log("\n=== Task 8.3: Array of objects ===");

    const students = [
        { name: "Alice", age: 22, grade: 85, major: "CS" },
        { name: "Bob", age: 20, grade: 72, major: "Math" },
        { name: "Charlie", age: 23, grade: 90, major: "CS" },
        { name: "Diana", age: 21, grade: 88, major: "Physics" },
        { name: "Eve", age: 22, grade: 95, major: "CS" }
    ];

    const names = students.map((student) => student.name);
    const highAchievers = students.filter((student) => student.grade > 80);
    const charlie = students.find((student) => student.name === "Charlie");
    const avgGrade = students.reduce((total, student) => total + student.grade, 0) / students.length;
    const csMajors = students.filter((student) => student.major === "CS");
    const sortedByGrade = [...students].sort((first, second) => second.grade - first.grade);
    const hasTopStudent = students.some((student) => student.grade > 90);
    const allPassing = students.every((student) => student.grade >= 60);

    console.log("Names:", names);
    console.log("High achievers:", highAchievers);
    console.log("Charlie:", charlie);
    console.log(`Average grade: ${avgGrade}`);
    console.log("CS majors:", csMajors);
    console.log("Sorted by grade:", sortedByGrade);
    console.log(`Any grade > 90: ${hasTopStudent}; all passing: ${allPassing}`);

    console.log("\n=== Task 8.4: JSON ===");

    const postsJson = '[{"id":1,"title":"Welcome","likes":12,"published":true},{"id":2,"title":"Draft ideas","likes":0,"published":false},{"id":3,"title":"Week 4 recap","likes":30,"published":true}]';
    const posts = JSON.parse(postsJson);
    const publishedPosts = posts
        .filter((post) => post.published)
        .sort((first, second) => second.likes - first.likes);
    const postSummaries = publishedPosts.map((post) => `${post.title} (${post.likes} likes)`);
    const publishedJson = JSON.stringify(publishedPosts, null, 2);

    console.log("Published posts:", publishedPosts);
    console.log("Post summaries:", postSummaries);
    console.log("Published posts as JSON:", publishedJson);

    console.log("\n=== Student Grade Tracker mini-project ===");

    const gradeTracker = {
        students: [],

        addStudent(name, grades) {
            if (this.getStudent(name)) {
                throw new Error(`A student named ${name} already exists.`);
            }
            const gradeValues = Object.values(grades);
            if (
                gradeValues.length === 0 ||
                !gradeValues.every((grade) => Number.isFinite(grade) && grade >= 0 && grade <= 100)
            ) {
                throw new Error("Provide at least one grade between 0 and 100.");
            }
            this.students.push({ name, grades: { ...grades } });
        },

        getStudent(name) {
            return this.students.find((student) => student.name === name) || null;
        },

        getStudentAverage(name) {
            const student = this.getStudent(name);
            if (!student) return null;
            const grades = Object.values(student.grades);
            return grades.reduce((total, grade) => total + grade, 0) / grades.length;
        },

        getSubjectAverage(subject) {
            const grades = this.students
                .map((student) => student.grades[subject])
                .filter((grade) => Number.isFinite(grade));
            if (grades.length === 0) return null;
            return grades.reduce((total, grade) => total + grade, 0) / grades.length;
        },

        getTopStudent() {
            if (this.students.length === 0) return null;
            return this.students.reduce((topStudent, student) =>
                this.getStudentAverage(student.name) > this.getStudentAverage(topStudent.name)
                    ? student
                    : topStudent
            );
        },

        getStrugglingStudents() {
            return this.students.filter((student) => this.getStudentAverage(student.name) < 70);
        },

        getLetterGrade(mark) {
            if (mark >= 90) return "A";
            if (mark >= 80) return "B";
            if (mark >= 70) return "C";
            if (mark >= 60) return "D";
            return "F";
        },

        generateReportCard(name) {
            const student = this.getStudent(name);
            if (!student) return `Student not found: ${name}`;
            const gradeLines = Object.entries(student.grades)
                .map(([subject, mark]) => `${subject}: ${mark} (${this.getLetterGrade(mark)})`)
                .join("\n");
            const average = this.getStudentAverage(name);
            return `${name}'s Report Card\n${gradeLines}\nAverage: ${average.toFixed(2)} (${this.getLetterGrade(average)})`;
        }
    };

    gradeTracker.addStudent("Alice", { math: 95, english: 88, science: 92 });
    gradeTracker.addStudent("Bob", { math: 72, english: 85, science: 78 });
    gradeTracker.addStudent("Charlie", { math: 60, english: 65, science: 58 });

    console.log(`Alice average: ${gradeTracker.getStudentAverage("Alice").toFixed(2)}`);
    console.log(`Math average: ${gradeTracker.getSubjectAverage("math").toFixed(2)}`);
    console.log(`Top student: ${gradeTracker.getTopStudent().name}`);
    console.log("Students needing help:", gradeTracker.getStrugglingStudents());
    console.log(gradeTracker.generateReportCard("Alice"));

    console.log("\n=== Daily challenges ===");

    function findLargestWithLoop(values) {
        if (values.length === 0) return null;
        let largest = values[0];
        for (const value of values) {
            if (value > largest) largest = value;
        }
        return largest;
    }

    function findLargestWithReduce(values) {
        if (values.length === 0) return null;
        return values.reduce((largest, value) => (value > largest ? value : largest));
    }

    function removeDuplicatesWithSet(values) {
        return [...new Set(values)];
    }

    function removeDuplicatesWithFilter(values) {
        return values.filter((value, index) => values.indexOf(value) === index);
    }

    function isPalindrome(value) {
        const normalized = value.toLowerCase().replace(/[^a-z0-9]/g, "");
        return normalized === [...normalized].reverse().join("");
    }

    console.log(`Reverse string: ${reverseString("hello")}`);
    console.log(`Largest (loop): ${findLargestWithLoop([4, 9, 2, 12, 6])}`);
    console.log(`Largest (reduce): ${findLargestWithReduce([4, 9, 2, 12, 6])}`);
    console.log("Unique (Set):", removeDuplicatesWithSet([1, 2, 2, 3, 4, 4, 5]));
    console.log("Unique (filter):", removeDuplicatesWithFilter([1, 2, 2, 3, 4, 4, 5]));
    console.log(`"racecar" palindrome: ${isPalindrome("racecar")}`);
    console.log(`Phrase palindrome: ${isPalindrome("A man a plan a canal Panama")}`);
})();
