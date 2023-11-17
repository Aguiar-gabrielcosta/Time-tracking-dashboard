import getData from "./APIConsumer.mjs"

// Pegar dados da API
const data = getData()

// Elementos HTML
const currentTime = document.querySelectorAll('p.current')
const previousTime = document.querySelectorAll('p.previous')

export class TimeMenu{
    
    static dailyHours(){
        for (let index = 0; index < currentTime.length; index++) {
            data.then((item)=>{
                currentTime[index].innerHTML = `${item[index].timeframes.daily.current}hrs`
                previousTime[index].innerHTML = `Last day - ${item[index].timeframes.daily.previous}hrs`
            })
        }
    }
    
    static weeklyHours(){
        for (let index = 0; index < currentTime.length; index++) {
            data.then((item)=>{
                currentTime[index].innerHTML = `${item[index].timeframes.weekly.current}hrs`
                previousTime[index].innerHTML = `Last week - ${item[index].timeframes.weekly.previous}hrs`
            })
        }
    }
    
    static monthlyHours(){
        for (let index = 0; index < currentTime.length; index++) {
            data.then((item)=>{
                currentTime[index].innerHTML = `${item[index].timeframes.monthly.current}hrs`
                previousTime[index].innerHTML = `Last month - ${item[index].timeframes.monthly.previous}hrs`
            })
        }
    }
}


