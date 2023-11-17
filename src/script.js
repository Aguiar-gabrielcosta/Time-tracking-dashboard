import { TimeMenu } from "./timeMenu.mjs";
import { exitButton, hoveringButton } from "./hoveringButton.mjs";

// Start condition
TimeMenu.dailyHours()



// Listeners
// Daily, Weekly, Monthly modes
document.querySelector('input#daily').addEventListener('change', TimeMenu.dailyHours)
document.querySelector('input#weekly').addEventListener('change', TimeMenu.weeklyHours)
document.querySelector('input#monthly').addEventListener('change', TimeMenu.monthlyHours)

// Hover buttons effect
document.querySelectorAll('button').forEach((element)=>{
    element.addEventListener('mouseover', hoveringButton)
    element.addEventListener('mouseout', exitButton)
})

