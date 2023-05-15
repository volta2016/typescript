"use strict";
exports.__esModule = true;
var streak_counter_1 = require("@jsjoeio/streak-counter");
var today = new Date();
var streak = (0, streak_counter_1.streakCounter)(localStorage, today);
console.log(streak);
// streak returns an object:
// {
//    currentCount: 1,
//    lastLoginDate: "11/11/2021",
//    startDate: "11/11/2021",
// }
