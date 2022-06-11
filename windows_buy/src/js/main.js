function button_n(){
    var x = document.querySelector("#button_n");
    x.style.display = "flex";
}

function close_button(){
    document.getElementById("button_n").style.display = "none";
    document.getElementById("buy_n").style.display = "none";
    document.querySelector("#show_pop").style.display = "none";
    document.querySelector("#popup").style.display = "none";
    document.querySelector("#end_buy").style.display = "none";
}


function buy(){
    document.querySelector("#buy_n").style.display = "flex"; 
    document.querySelector("#b_img1").classList.add('display_n');
    document.querySelector("#b_img2").classList.add('display_n');
    document.querySelector("#b_img3").classList.add('display_n');
}

function link_active0(){
    document.querySelector("#list0").classList.add('active');
}
function link_active1(){
    document.querySelector("#list1").classList.add('active');
}
function link_active2(){
    document.querySelector("#list2").classList.add('active');
}
function link_active3(){
    document.querySelector("#list3").classList.add('active');
}
function link_active4(){
    document.querySelector("#list4").classList.add('active');
}


function des_ative1(){
    if(document.querySelector("#des_ative1").classList.contains('after_click')){
        document.querySelector("#des_ative1").classList.toggle('after_click');
    }else{
        document.querySelector("#des_ative1").classList.add('after_click');
        if (document.querySelector("#des_ative2").classList.contains('after_click')){
            document.querySelector("#des_ative2").classList.toggle('after_click');
        }else if(document.querySelector("#des_ative3").classList.contains('after_click')){
            document.querySelector("#des_ative3").classList.toggle('after_click');
        }else if(document.querySelector("#des_ative4").classList.contains('after_click')){
            document.querySelector("#des_ative4").classList.toggle('after_click');
        }
    }
}
function des_ative2(){
    if(document.querySelector("#des_ative2").classList.contains('after_click')){
        document.querySelector("#des_ative2").classList.toggle('after_click');
    }else{
        document.querySelector("#des_ative2").classList.add('after_click');
        if (document.querySelector("#des_ative1").classList.contains('after_click')){
            document.querySelector("#des_ative1").classList.toggle('after_click');
        }else if(document.querySelector("#des_ative3").classList.contains('after_click')){
            document.querySelector("#des_ative3").classList.toggle('after_click');
        }else if(document.querySelector("#des_ative4").classList.contains('after_click')){
            document.querySelector("#des_ative4").classList.toggle('after_click');
        }
    }
}
function des_ative3(){
    if(document.querySelector("#des_ative3").classList.contains('after_click')){
        document.querySelector("#des_ative3").classList.toggle('after_click');
    }else{
        document.querySelector("#des_ative3").classList.add('after_click');
        if (document.querySelector("#des_ative2").classList.contains('after_click')){
            document.querySelector("#des_ative2").classList.toggle('after_click');
        }else if(document.querySelector("#des_ative1").classList.contains('after_click')){
            document.querySelector("#des_ative1").classList.toggle('after_click');
        }else if(document.querySelector("#des_ative4").classList.contains('after_click')){
            document.querySelector("#des_ative4").classList.toggle('after_click');
        }
    }
}
function des_ative4(){
    if(document.querySelector("#des_ative4").classList.contains('after_click')){
        document.querySelector("#des_ative4").classList.toggle('after_click');
    }else{
        document.querySelector("#des_ative4").classList.add('after_click');
        if (document.querySelector("#des_ative2").classList.contains('after_click')){
            document.querySelector("#des_ative2").classList.toggle('after_click');
        }else if(document.querySelector("#des_ative3").classList.contains('after_click')){
            document.querySelector("#des_ative3").classList.toggle('after_click');
        }else if(document.querySelector("#des_ative1").classList.contains('after_click')){
            document.querySelector("#des_ative1").classList.toggle('after_click');
        }
    }
}

function s_img1(){
    if(document.querySelector("#b_img0").style.display === "none"){
        document.querySelector("#b_img0").style.display = "inline-flex";
        
    }  
    if(document.querySelector("#s_img1").classList.contains('do_image_more')){
        document.querySelector("#s_img1").classList.toggle('do_image_more');
        document.querySelector("#b_img0").style.display = "none";
    }else{
        document.querySelector("#s_img1").classList.add('do_image_more');
        document.querySelector("#b_img0").style.display = "inline-flex";
        document.querySelector("#b_img1").style.display = "none";
        document.querySelector("#b_img2").style.display = "none";
        document.querySelector("#b_img3").style.display = "none";
        if (document.querySelector("#s_img2").classList.contains('do_image_more')){
            document.querySelector("#s_img2").classList.toggle('do_image_more');
        }else if(document.querySelector("#s_img3").classList.contains('do_image_more')){
            document.querySelector("#s_img3").classList.toggle('do_image_more');
        }else if(document.querySelector("#s_img4").classList.contains('do_image_more')){
            document.querySelector("#s_img4").classList.toggle('do_image_more');
        }
    }
}
function s_img2(){
    if (document.querySelector("#s_img2").classList.contains('do_image_more')){
        document.querySelector("#s_img2").classList.toggle('do_image_more');
        document.querySelector("#b_img1").style.display = "none";
    }else{
        document.querySelector("#s_img2").classList.add('do_image_more');
        document.querySelector("#b_img1").style.display = "inline-flex";
        document.querySelector("#b_img0").style.display = "none";
        document.querySelector("#b_img2").style.display = "none";
        document.querySelector("#b_img3").style.display = "none";
        if(document.querySelector("#s_img1").classList.contains('do_image_more')){
            document.querySelector("#s_img1").classList.toggle('do_image_more');
        }else if(document.querySelector("#s_img3").classList.contains('do_image_more')){
            document.querySelector("#s_img3").classList.toggle('do_image_more');
        }else if(document.querySelector("#s_img4").classList.contains('do_image_more')){
            document.querySelector("#s_img4").classList.toggle('do_image_more');
        }
    }
}
function s_img3(){
    if (document.querySelector("#s_img3").classList.contains('do_image_more')){
        document.querySelector("#s_img3").classList.toggle('do_image_more');
        document.querySelector("#b_img2").style.display = "none";
    }else{
        document.querySelector("#s_img3").classList.add('do_image_more');
        document.querySelector("#b_img2").style.display = "inline-flex";
        document.querySelector("#b_img1").style.display = "none";
        document.querySelector("#b_img0").style.display = "none";
        document.querySelector("#b_img3").style.display = "none";
        if (document.querySelector("#s_img2").classList.contains('do_image_more')){
            document.querySelector("#s_img2").classList.toggle('do_image_more');
        }else if(document.querySelector("#s_img1").classList.contains('do_image_more')){
            document.querySelector("#s_img1").classList.toggle('do_image_more');
        }else if(document.querySelector("#s_img4").classList.contains('do_image_more')){
            document.querySelector("#s_img4").classList.toggle('do_image_more');
        }
    }
}
function s_img4(){
    if (document.querySelector("#s_img4").classList.contains('do_image_more')){
        document.querySelector("#s_img4").classList.toggle('do_image_more');
        document.querySelector("#b_img3").style.display = "none";
    }else{
        document.querySelector("#s_img4").classList.add('do_image_more');
        document.querySelector("#b_img3").style.display = "inline-flex";
        document.querySelector("#b_img1").style.display = "none";
        document.querySelector("#b_img2").style.display = "none";
        document.querySelector("#b_img0").style.display = "none";
        if (document.querySelector("#s_img2").classList.contains('do_image_more')){
            document.querySelector("#s_img2").classList.toggle('do_image_more');
        }else if(document.querySelector("#s_img3").classList.contains('do_image_more')){
            document.querySelector("#s_img3").classList.toggle('do_image_more');
        }else if(document.querySelector("#s_img1").classList.contains('do_image_more')){
            document.querySelector("#s_img1").classList.toggle('do_image_more');
        }
    }
}

function cal_button(){
    document.querySelector("#show_pop").style.display = "flex";
    document.querySelector("#buy_n").style.display = "none";
}

function end_buy(){
    document.querySelector("#show_pop").style.display = "none";
    document.querySelector("#end_buy").style.display = "flex";
}


// timer
// Set the date we're counting down to
var countDownDate = new Date("July 1, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = "0"+hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


setInterval(function () {
    document.querySelector("#popup").style.display = "flex";
}, 60000);


// // photo
// window.addEventListener('DOMContentLoaded', function() {
//     var page = document.querySelector(".page");
//     var shimModalContent = document.querySelector(".shim-modal-content");
//     page.addEventListener("click", function(event){
//         var target = event.target;
//         if(target.closest(".modal-content-window") && !target.closest(".send") && !target.closest(".close"))
//             event.stopPropagation();
//         else if( target.closest(".shim-modal-content") )
//             shimModalContent.classList.remove("shim-modal-show");
//         else shimModalContent.classList.add("shim-modal-show");
//     });
// });

// Import dependencies
