/*

Name: Jake Seawell
Date: 2/11/19
Description: This is the JavaScript file for a Travel/Photography
website. This site is for the final project for CS 290.

*/


/* Menu Tab Functions*/

// Open Home Button Right Away
document.getElementById("defaultOpen").click();

// Open Specific Menu Tab
function openTab(event, tabName) 
{
    // Variable declaration
    var i, tabcontent, tablinks;

    // Get all tabContent elements & hide them
    tabcontent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabcontent.length; i++) 
    {
        tabcontent[i].style.display = "none";
    }
  
    // Get all tabLinks elements & remove "active" from class
    tablinks = document.getElementsByClassName("tabLinks");
    for (i = 0; i < tablinks.length; i++) 
    {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    // Show current tab, make its button "active"
    document.getElementById(tabName).style.display = "block"; 
    evt.currentTarget.className += " active";
}
/*****************************/


/* Photo Carousel Functions */

//This function initializes the photo carousel
var slidesIndex, slides;
function initCarousel() {
    slidesIndex = 0;
    slides = document.getElementsByClassName("imageHolder");
    slides[slidesIndex].style.opacity=1;
}
initCarousel();


//This function uses the left/right arrow buttons to
//call the moveSlide function
function nextSlide(n) {
    moveSlide(slidesIndex + n);
}


//This function moves the photos of the carousel 
//to the left or right
function moveSlide(n) {
    var i, current, next;
    var moveSlideClass={
    forCurrent:"",
    forNext:""
    }
    
    if(n > slidesIndex)
    {
        if(n >= slides.length){n = 0}
        moveSlideClass.forCurrent="moveCurrentSlideLeft";
        moveSlideClass.forNext="moveNextSlideLeft";
    }
    else if (n < slidesIndex)
    {
        if(n < 0){n = slides.length-1}
        moveSlideClass.forCurrent="moveCurrentSlideRight";
        moveSlideClass.forNext="moveNextSlideRight";
    }
    if(n != slidesIndex)
    {
        next = slides[n];
        current = slides[slidesIndex];
        for(i=0;i<slides.length;i++)
        {
            slides[i].className = "imageHolder";
            slides[i].style.opacity = 0;
        }
        current.classList.add(moveSlideClass.forCurrent);
        next.classList.add(moveSlideClass.forNext);
        slidesIndex = n;
    }
}
initCarousel();
/*****************************/