const myPromise = () =>
    new Promise ((resolve,reject) =>
        setTimeout (() => resolve(),2000))

const asyncFn = async () => {
    console.log('Timer Starts!')
    const startTimer = performance.now()
    await myPromise()
    const endTimer = performance.now()
    console.log('Timer ended!', endTimer - startTimer)
}