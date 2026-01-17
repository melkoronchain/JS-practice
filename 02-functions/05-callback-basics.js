function myF () {
    console.log('Hello!');
}

function greet (callBack) {
    callBack();
}

greet(myF); //Hello!