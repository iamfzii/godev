window.onload = function () {
    var sec = 00;
    var tens = 00;

    var tensresult = document.getElementById("tens")
    var secresult = document.getElementById("sec")
    var start = document.getElementById("btn-start")
    var stop = document.getElementById("btn-stop")
    var reset = document.getElementById("btn-reset")
    var interval ;

    start.onclick = function (){
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    }

    stop.onclick = function (){
        clearInterval(interval);
    }

    reset.onclick = function (){
        clearInterval(interval);
        tens = 00;
        sec = 00;
        tensresult.innerHTML = tens
        secresult.innerHTML = sec
    }

function startTimer(){
    tens++;

    if (tens <= 9){
        tensresult.innerHTML = "0" + tens
    }

    if (tens > 9){
        tensresult.innerHTML = tens
    }

    if (tens > 99){
        sec++;
        secresult.innerHTML = "0" + sec
        tens = 0;
        tensresult.innerHTML = "0" + 0;
    }

    if (sec > 9){
        secresult.innerHTML = sec
    }


  }
}