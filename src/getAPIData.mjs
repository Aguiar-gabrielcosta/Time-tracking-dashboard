const url = 'http://localhost:3010/data'

export default async function getData(){
    const response = await fetch(url)
    const data = await response.json()

    console.log(data);
}

