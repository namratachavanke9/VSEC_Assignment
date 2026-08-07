const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

let score = 0;

console.log("=================================");
console.log("      WELCOME TO THE QUIZ");
console.log("=================================");

readline.question("\nDo you want to start the quiz? (yes/no): ", function(start) {

    if (start.toLowerCase() != "yes") {
        console.log("\nQuiz Cancelled. Thank You!");
        readline.close();
        return;
    }

    readline.question("\n1. What is the capital of India?\nA) Mumbai\nB) Delhi\nC) Chennai\nD) Kolkata\nAnswer: ", function(answer1) {

        if (answer1.toLowerCase() == "b" || answer1.toLowerCase() == "delhi") {
            score++;
        }

        readline.question("\n2. Which language is mainly used for Web Development?\nA) Python\nB) Java\nC) JavaScript\nD) C++\nAnswer: ", function(answer2) {

            if (answer2.toLowerCase() == "c" || answer2.toLowerCase() == "javascript") {
                score++;
            }

            readline.question("\n3. How many days are there in a week?\nA) 5\nB) 6\nC) 7\nD) 8\nAnswer: ", function(answer3) {

                if (answer3.toLowerCase() == "c" || answer3 == "7") {
                    score++;
                }

                readline.question("\n4. Which planet is known as the Red Planet?\nA) Earth\nB) Venus\nC) Jupiter\nD) Mars\nAnswer: ", function(answer4) {

                    if (answer4.toLowerCase() == "d" || answer4.toLowerCase() == "mars") {
                        score++;
                    }

                    readline.question("\n5. Which symbol is used for comments in JavaScript?\nA) //\nB) ##\nC) <!-- -->\nD) **\nAnswer: ", function(answer5) {

                        if (answer5.toLowerCase() == "a" || answer5 == "//") {
                            score++;
                        }

                        readline.question("\n6. Which company developed JavaScript?\nA) Google\nB) Netscape\nC) Microsoft\nD) Apple\nAnswer: ", function(answer6) {

                            if (answer6.toLowerCase() == "b" || answer6.toLowerCase() == "netscape") {
                                score++;
                            }

                            console.log("\n=================================");
                            console.log("        QUIZ COMPLETED");
                            console.log("=================================");
                            console.log("Your Score: " + score + "/6");

                            if (score == 6) {
                                console.log("Outstanding! 🎉");
                            }
                            else if (score >= 4) {
                                console.log("Very Good! 👍");
                            }
                            else if (score >= 2) {
                                console.log("Good Try! 😊");
                            }
                            else {
                                console.log("Keep Practicing! 💪");
                            }

                            readline.close();

                        });

                    });

                });

            });

        });

    });

});