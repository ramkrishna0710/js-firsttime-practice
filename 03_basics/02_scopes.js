// var c = 300
let a = 300
if (true) {
    let a = 20
    const b = 30
    var c = 40
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "ramkrishna"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if (true) {
    const username = "ramkrishna"
    if (username === "ramkrishna") {
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

//++++++++++++++ intresting  ++++++++++++

addone(5)
function addone(num) {
    return num+1
}



const addTwo = function(num){
    return num + 2
}

addTwo(5)