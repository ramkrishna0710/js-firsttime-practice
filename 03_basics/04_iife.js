// Immediately Invoked Function Expression (IIFE)

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    //unnamed IFFE
    console.log( `CONNECTED ${name}`);
} ) ('ram');

