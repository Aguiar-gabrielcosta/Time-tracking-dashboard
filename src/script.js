import getData from "./getAPIData.mjs";

document.getElementById('daily').addEventListener('click', dailyHours)
document.getElementById("weekly").addEventListener('click', weeklyHours)
document.getElementById("monthly").addEventListener('click', monthlyHours)

function dailyHours(){
    console.log(`uhu!`);
    getData()
}

function weeklyHours(){

}

function monthlyHours(){

}