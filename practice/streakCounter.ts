import { streakCounter } from "@jsjoeio/streak-counter";

const today = new Date();
const streak = streakCounter(localStorage, today);
console.log(streak);

// streak returns an object:
// {
//    currentCount: 1,
//    lastLoginDate: "11/11/2021",
//    startDate: "11/11/2021",
// }