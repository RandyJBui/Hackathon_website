// var hour = 0
// var min = 0
// var sec = 0

var countDownDate = new Date('April 28, 2050 0:0:0').getTime();
var value_casted = 0
// submit btn
// idea: get element, string cast to int, outputt to log for prove
// var form = document.getElementById("forms")
// form.addEventListener('submit', function(event){
//     // prevents resubmission
//     event.preventDefault()
    
//     var value = document.getElementById("time-increment").value
//     value_casted += parseInt(value)
// })

var timedes = document.getElementById("time-desc");
// code for the btns
var added1 = true
var added2 = true
var added3 = true
var added4 = true
var btn1 = document.getElementById("timer-btn1")
btn1.addEventListener('click', function(event){
    if(added1){
    value_casted+= 300000000000
    added1 = false;
}
fade(timedes)
var timer = setInterval(function(){
    clearInterval(timer)
    timedes.innerHTML="The utilization of green transportation allows us to reduce the amount of carbon emmissions that is expelled. It will reduce personal vehicle emissions."
    unfade(timedes)
}, 1100)


})

var btn2 = document.getElementById("timer-btn2")
btn2.addEventListener('click', function(event){
    if(added2){
        value_casted+= 200000000000
        added2 = false;
    }
    fade(timedes)
    var timer = setInterval(function(){
        clearInterval(timer)
        timedes.innerHTML="Many of our energy source comes from unclean sources such as oil and coal. Using cleaner energy souce would decrease the amount of carbon footprint drastically."
        unfade(timedes)
    }, 1100)
})

var btn3 = document.getElementById("timer-btn3")
btn3.addEventListener('click', function(event){
    if(added3){
        value_casted+= 50000000000
        added3 = false;
    }
    fade(timedes)
    var timer = setInterval(function(){
        clearInterval(timer)
        timedes.innerHTML="Packaging is one of the major contributor for pollution, reducing their impact on nature would help with reducing our carbon footprint"
        unfade(timedes)
    }, 1100)
})

var btn4 = document.getElementById("timer-btn4")
btn4.addEventListener('click', function(event){
    if(added4){
        value_casted+= 100000000000
        added4 = false;
    }
    fade(timedes)
    var timer = setInterval(function(){
        clearInterval(timer)
        timedes.innerHTML="Eco product helps our environment by not releasing toxic materials, creating a better alternative for people to reduce their carbon footprints"
        unfade(timedes)
    }, 1100)
})



var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = (countDownDate + value_casted) - now;
    // var distance = countDownDate - now;
    var year = Math.floor(distance/(1000*60*60*24*30*12))
    var months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30))%12;
    var days = (Math.floor(distance / (1000 * 60 * 60 * 24)) % 30);
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // this code gives tthe timer variable a value
    document.getElementById("year").innerHTML = year
    document.getElementById("month").innerHTML = months 
    document.getElementById("days").innerHTML = days
    document.getElementById("hours").innerHTML = hours
    document.getElementById("minutes").innerHTML = minutes
    document.getElementById("seconds").innerHTML = seconds

}, 1000);
function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            //element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 10);
}
function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}
// var x = 1;
// var y = 2;

// console.log("hi i am ${x} and i am ${y}")
// var test = document.getElementById("inc-btn")
// test.addEventListener('click', function(event){
//     console.log(test.value)
// })