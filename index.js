let timeout;

function toe() {
    timeout = setTimeout(alertFunc, 2000);
}

function alertFunc() {
    alert("EW.. lick agam is better.")
}

function agam() {
    timeout = setTimeout(alertFunct, 2000);
}

function alertFunct() {
    alert("Are u sure? what if he goes brutal on u?")
}

function show() {
    document.getElementById('cardjs').style.display="block";
    document.getElementById("show").style.display="none";
}

function hide() {
    document.getElementById('cardjs').style.display="none";
    document.getElementById("show").style.display="inline";
}