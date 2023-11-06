import { TimeMenu } from "./timeMenu.mjs";


// Start condition
TimeMenu.dailyHours()



// Listeners
document.querySelector('input#daily').addEventListener('change', TimeMenu.dailyHours)
document.querySelector('input#weekly').addEventListener('change', TimeMenu.weeklyHours)
document.querySelector('input#monthly').addEventListener('change', TimeMenu.monthlyHours)

