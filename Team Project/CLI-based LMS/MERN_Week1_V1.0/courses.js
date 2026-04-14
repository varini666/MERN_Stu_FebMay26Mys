const courses = [
    {
        id:1,
        title:"MERN Stack",
        instructor:"Rakesh",
        totalLessons:4,
        lessons:["ReactJS","ExpressJS","NodeJS","MongoDB"],
        level:"Beginner",
        category:"Programming",
        status:"True"
    },
    {
        id:2,
        title:"Cognitive ability",
        instructor:"Prabhu",
        totalLessons:6,
        lessons:["Number system","Proportions","Simple Intrest","Compound Intrest","Speed & Time","Averages"],
        level:"Intermediate",
        category:"Aptitude",
        status:"True"
    },
    {
        id:3,
        title:"Verbal ability",
        instructor:"Ramesh",
        totalLessons:6,
        lessons:["Subject verb agreement","Parts of speech","Tenses","Synonims","Antonims","Passage"],
        level:"Intermediate",
        category:"Verbal",
        status:"false"
    },
    {
        id:4,
        title:"Foundational Course",
        instructor:"Manjunath",
        totalLessons:3,
        lessons:["Art of coding","Java","DS"],
        level:"Beginner",
        category:"Programming",
        status:"false"
    }
];
// console.log(courses);
module.exports = courses;