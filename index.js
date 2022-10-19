function receivesAFunction (callback) {

callback()
}

function returnsANamedFunction (){

    return function namefuction(){
        console.log('something')
    }
}

function returnsAnAnonymousFunction (){
    return function (){
        console.log('onething')
    }
}