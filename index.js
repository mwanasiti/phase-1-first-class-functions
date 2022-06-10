function receivesAFunction(callback){
    return callback();
}

function returnsANamedFunction(){
    return function namedM(){

    };
}
function returnsAnAnonymousFunction(){
    return function(){

    };
}