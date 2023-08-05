// document object model
// document.write("Hello World");

// console.log(document.all);



// events

// function show() {
//     document.getElementById("hello").innerHTML = "Hello DOM";
//     document.getElementById("hello").style.backgroundColor = "red";
// }


function focusme() {
    document.getElementById("name").style.backgroundColor = "green";
}
function blurme() {
    document.getElementById("name").style.backgroundColor = "";
}

function changeMe() {
    let x  =  document.getElementById("name").value;
    document.getElementById("hello").innerHTML = x;
}

function inputMe() {
    let x  =  document.getElementById("name").value;
    document.getElementById("hello").innerHTML = x;
}

function selectMe() {
    let x  =  document.getElementById("name").value;
    document.getElementById("hello").innerHTML = x;
}