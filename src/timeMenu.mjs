import getData from "./APIConsumer.mjs"

// Pegar dados da API
const data = getData()

export class TimeMenu{
    static dailyHours(){
        var currentTime = document.querySelectorAll('p.current')
        var previousTime = document.querySelectorAll('p.previous')
        for (let index = 0; index < currentTime.length; index++) {
            data.then((item)=>{
                currentTime[index].innerHTML = `${item[index].timeframes.daily.current}hrs`
                previousTime[index].innerHTML = `Last day - ${item[index].timeframes.daily.previous}hrs`
            })
        }
    }
    
    static weeklyHours(){
        var currentTime = document.querySelectorAll('p.current')
        var previousTime = document.querySelectorAll('p.previous')
        for (let index = 0; index < currentTime.length; index++) {
            data.then((item)=>{
                currentTime[index].innerHTML = `${item[index].timeframes.weekly.current}hrs`
                previousTime[index].innerHTML = `Last day - ${item[index].timeframes.weekly.previous}hrs`
            })
        }
    }
    
    static monthlyHours(){
        var currentTime = document.querySelectorAll('p.current')
        var previousTime = document.querySelectorAll('p.previous')
        for (let index = 0; index < currentTime.length; index++) {
            data.then((item)=>{
                currentTime[index].innerHTML = `${item[index].timeframes.monthly.current}hrs`
                previousTime[index].innerHTML = `Last day - ${item[index].timeframes.monthly.previous}hrs`
            })
        }
    }
}
