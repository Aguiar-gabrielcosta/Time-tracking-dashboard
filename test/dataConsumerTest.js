import { DataConsumer } from "../src/dataConsumer.mjs";

export class DataConsumerTest{
    static consumeDataTest1(){
        // Dado o path ../data/data.json
        const dataBase = new DataConsumer('../data/data.json')
        // Quando solicito os dados do primeiro elemento, do dia, atual
        let information = dataBase.data.then((info)=>{return info[0].timeframes.daily.current})
        // Deve me dizer que o valor é 5
        information.then((info)=>{console.log(`# ===> consumeDataTest1 result: ${info === 5}`)})
    }
    static consumeDataTest2(){
        // Dado o path ../data/data.json
        const dataBase = new DataConsumer('../data/data.json')
        // Quando solicito os dados do quarto elemento, da semana, anterior
        let information = dataBase.data.then((info)=>{return info[3].timeframes.weekly.previous})
        // Deve me dizer que o valor é 5
        information.then((info)=>{console.log(`# ===> consumeDataTest2 result: ${info === 5}`)})
    }
    static consumeDataTest3(){
        // Dado o path ../data/data.json
        const dataBase = new DataConsumer('../data/data.json')
        // Quando solicito os dados do quarto elemento, da semana, anterior
        let information = dataBase.data.then((info)=>{return info[3].timeframes.weekly.previous})
        // Deve me dizer que o valor não e 20
        information.then((info)=>{console.log(`# ===> consumeDataTest3 result: ${info !== 20}`)})
    }
}