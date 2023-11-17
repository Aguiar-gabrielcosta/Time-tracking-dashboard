import * as fs from 'node:fs/promises'

export class DataConsumer{
    #path
    #data
    constructor(path){
        this.#path = path
        this.#data = this.#parseContent(this.#consumeData(this.#path))
    }

    async #consumeData(path){
        const content = await fs.readFile(path, {encoding: 'utf-8'}, (err, res) => {
            if (err){ throw err}
            else {return res}
        });
        return content
    }

    #parseContent(content){
        const data = content.then((cnt)=> {
            return JSON.parse(cnt)
        })
        return data
    }

    get data(){
        return this.#data
    }
}