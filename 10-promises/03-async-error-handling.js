const myAsync =  async ()=> {
    throw new Error ('Fatal Error!')
}

myAsync()
.then (value =>console.log(value))
.catch (error =>console.log(error.message))