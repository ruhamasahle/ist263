// sticky navbar
// window.onscroll=function() {elementInViewport()};

// var navbar = document.getElementById('navbar')
// var sticky = navbar.offsetTop;

// function myFunction() {
//     if (window.pageYOffset >= sticky){
//         navbar.classList.add('sticky')
//     } else {
//         navbar.classlist.remove('sticky');
//     }
// }
// var myElement = document.getElementById('navbar');
// var bounding = myElement.getBoundingClientRect();



//   function elementInViewport() {

//     var bounding = myElement.getBoundingClientRect();

//     if (bounding.left >= 0 && bounding.left >= 0 && bounding.bottom <= (window.innerWidth || document.documentElement.clientWidth) && bounding.top <= (window.innerWidth || document.documentElement.clientWidth)) {

//         navbar.classList.add('sticky');
//     } else {

//         navbar.classList.remove('sticky');
//     }
// }


// let counter1=0;
// let counter2=1;

// const sections = document.querySelectorAll("section");

// window.addEventListener("wheel", (e)=> {
//     const deltaY = e.deltaY> 0;
// if (deltaY){
//     counter1 ++;
//     counter2 ++;
// } else {
//     counter1--;
//     counter2--;
// }
// if(counter1 === 3){
//     Array.from(sections).forEach((section)=> {
//         section.style.left="0";
//     });
//     counter1=0;
//     counter2=1;
//     return; 
// }

// if(counter1 === -1){
//     Array.from(sections).forEach(section=> {
//         if(section.classList[0]==='section-three'){
//             return;
//         }
//         section.style.left="-100vw"
//     })
//     counter1=2;
//     counter2=3;
// }

// document.querySelector(
//     `.section-${deltaY ? counter1 : counter2 }`
// ).style.left = `${deltaY ? "-100vw" : "0"}`;
// });















/* slide scroll
const button = document.getElementById('slide');

button.onClick = function () {
  document.getElementById('container').scrollLeft += 20;
};
 

$('#home').addClass('active');


$("#home").click(function() {
    $('container, section').animate({
        scrollLeft:$("#one").offset().top-66
    }, 1000);
 return false;
});

$("#zem").click(function() {
    $('container, section') .animate({
        scrollTop:$("#two").offset().top-112
    }, 1000);
 return false;
});

$("#alk").click(function() {
    $('container, section') .animate({
        scrollLeft:$("#three").offset().left-112
    }, 1000);
 return false;
});

// two zem. three Alked

$('#two').waypoint(function() {
      
    $(".container ul li").children().removeClass("active");
    $("#zem").addClass("active");
    
  }, { offset: 101 });
  
  $('#three').waypoint(function() {
    $(".container ul li").children().removeClass("active");
    $("#alk").addClass("active");
  }, { offset: 101 });
  
  $('#one').waypoint(function() {
    $(".container ul li").children().removeClass("active");
    $("#home").addClass("active");
  }, { offset: 0 });

// Modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

*/