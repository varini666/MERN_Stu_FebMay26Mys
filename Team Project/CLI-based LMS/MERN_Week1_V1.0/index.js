const readline = require('readline');
const chalk = require('chalk');

const courses = require('./courses');
const user = require('./user');
const enroll = require('./enroll');
const completeLesson = require('./progress');
const withdraw = require('./withdraw');
const { validateChoice } = require('./validator');
const emitter = require('./events');
const { displayCourses } = require('./utils');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Event listeners
emitter.on("enrollmentConfirmed", (course) => {
    console.log(chalk.green(`Enrolled in ${course}`));
});

emitter.on("lessonCompleted", (course) => {
    console.log(chalk.blue(`Lesson completed in ${course}`));
});

emitter.on("courseWithdrawn", (course) => {
    console.log(chalk.yellow(`Withdrawn from ${course}`));
});

function menu() {
    console.log(`
1. View Courses
2. Enroll
3. View Enrolled
4. Complete Lesson
5. Withdraw
6. Exit
`);

    rl.question("Choose option: ", (input) => {
        validateChoice(input, async (err, choice) => {
            if (err) return console.log(chalk.red(err));

            switch (choice) {
                case 1:
                    displayCourses(courses);
                    break;

                case 2:
                    rl.question("Enter Course ID: ", async (id) => {
                        try {
                            await enroll(Number(id));
                        } catch (e) {
                            console.log(chalk.red(e));
                        }
                        menu();
                    });
                    return;

                case 3:
                    console.log(user.enrolledCourses);
                    break;

                case 4:
                    rl.question("Course ID: ", (cid) => {
                        rl.question("Lesson Index: ", async (lid) => {
                            try {
                                const progress = await completeLesson(Number(cid), Number(lid));
                                console.log(chalk.green(`Progress: ${progress}%`));
                            } catch (e) {
                                console.log(chalk.red(e));
                            }
                            menu();
                        });
                    });
                    return;

                case 5:
                    rl.question("Course ID: ", (id) => {
                        console.log(withdraw(Number(id)));
                        menu();
                    });
                    return;

                case 6:
                    rl.close();
                    return;

                default:
                    console.log(chalk.red("Invalid choice"));
            }
            menu();
        });
    });
}

// Start session
rl.question("Enter your name: ", (name) => {
    user.name = name;
    console.log(chalk.green(`Welcome ${name}`));
    emitter.emit("sessionStarted");
    menu();
});