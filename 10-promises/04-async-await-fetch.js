const myPromise = async (url) => {
    const res = await fetch(url)
    const json = await res.json()
    return json
}

const url = 'https://jsonplaceholder.typicode.com/todos/1'
try {
const data = await myPromise(url)
console.log(data)
} catch (error){
    console.log(error.message)
}