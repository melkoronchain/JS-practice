const getData = (url) =>
    new Promise ((resolve,reject) =>
        fetch(url)
.then(response => response.json())
.then(json => resolve(json))
.catch (error => reject(error))
    )

getData('https://jsonplaceholder.typicode.com/todos/1')
      .then(json => console.log(json))
      .catch (error => console.error(error))