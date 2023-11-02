import getData from "./getAPIData.mjs";
import { TimeMenu } from "./timeMenu.mjs";

document.getElementById('daily').addEventListener('select', TimeMenu.dailyHours())
document.getElementById("weekly").addEventListener('select', TimeMenu.weeklyHours())
document.getElementById("monthly").addEventListener('select', TimeMenu.monthlyHours())

