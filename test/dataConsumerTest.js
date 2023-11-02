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

    static consumeAllDataTest(){
        // Dado o path ../data/data.json
        const dataBase = new DataConsumer('../data/data.json')
        // Quando solicito o primeiro objeto no arquivo
        let information = dataBase.data
        // Deve me devolver um objeto com titulo work, timeframes daily (5,7), weekly (32, 36), monthly (103, 128)
        information.then((info)=>{console.log('# ===> consumeAllDataTest result: '+(
            info[0].title === 'Work' &&
            info[0].timeframes.daily.current === 5 &&
            info[0].timeframes.daily.previous === 7 &&
            info[0].timeframes.weekly.current === 32 &&
            info[0].timeframes.weekly.previous === 36 &&
            info[0].timeframes.monthly.current === 103 &&
            info[0].timeframes.monthly.previous === 128
            ));})
    }
}