

// navbar scroll  fix navbar on scroll 

let nav = document.querySelector(".navbar");
window.onscroll = function()
{
    if(document.documentElement.scrollTop >100)
    {
        nav.classList.add("nav-scroll");
    }
    else
    {
        nav.classList.remove("nav-scroll");
    }
}








// close manu when click on link 

let navbar = document.querySelectorAll(".nav-link");
let collaps = document.querySelector(".navbar-collapse.collapse");

navbar.forEach(function(a)
{
    a.addEventListener("click", function(){
        collaps.classList.remove("show")
        closeicon.classList.add("hide");
        mobilemanue.classList.remove("hide")
    })
})










// add active class to clicked link active linke  

let activeClass = document.querySelectorAll(".navbar ul li a");


for (item of activeClass) {
    item.addEventListener('click', (e) => {
        activeClass.forEach(elem => {

            elem.classList.remove('active');
        });
        e.target.classList.add("active")
    });
};

// mobile icon close change section 

let mobilemanue = document.getElementById("mobile-manue");
let closeicon = document.getElementById("close-icon");
mobilemanue.addEventListener("click", function(){
closeicon.classList.remove("hide");
mobilemanue.classList.add("hide")

})
closeicon.addEventListener("click", function(){
    closeicon.classList.add("hide");
    mobilemanue.classList.remove("hide")
    
    })


    

// scroll on top 
const idScroll = document.getElementById("scrolltop");


window.addEventListener('scroll',(event) => 
{ 
    idScroll.classList.toggle("active", window.scrollY > 50);
 
})

idScroll.addEventListener("click", () => 
{
    window.scrollTo(0, 0);
})



// swiperr 1 

  var swiper = new Swiper(".swiper1", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: true,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'false',  
    mousewheel: true,
    keyboard: true,  
  });

 
  // swipper 2 

  var myswiper = new Swiper(".myswiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: true,
    loop: true, 
    mousewheel: true,
    keyboard: true,  
 


    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
    },
  });

    // swipper 3 

    var myswiper3 = new Swiper(".myswiper3", {
      slidesPerView: 2,
      spaceBetween:30,
      autoplay: true,
      loop: true, 
      mousewheel: true,
      keyboard: true,  
   
  
  
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        576: {
            slidesPerView: 1,
        },
        950: {
            slidesPerView: 2,
        },
      },
    });


    // counter section start 

    const counters = document.querySelectorAll(".number");
    // let interval = 5000;
    counters.forEach(counter => {
        let startCounter = 0;
        let endCounter = parseInt(counter.getAttribute("data-target"));
        // let duration = interval/endvalue;
        let playCounter = setInterval(function () {
            startCounter += 1;
            counter.textContent = startCounter;
            if (startCounter == endCounter) {
                clearInterval(playCounter);
            }
        }, 5000 / endCounter)
    
    
        const updateCounter = () => {
            const target = counter.getAttribute("data-target");
    
            setInterval(function () {
                for (let i = startCounter; i <= target; i++) {
                    startCounter++;
                }
            }, 5000)
        }
    
    
    });  