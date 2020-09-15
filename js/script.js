var imgs=Array.from( document.getElementsByClassName("item-img"));
var lightboxContainer=document.getElementById("lightboxContainer");
var lightboxitem=document.getElementById("lightboxitem");
var  lightboxBg=document.getElementById("lightboxBg");
var closebtn=document.getElementById("close");
var nextBtn= document.getElementById("next");
var prevBtn= document.getElementById("prev");
var caruntIndex=0;


for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", openLightbox);
}

function openLightbox(eventInfo){
    lightboxContainer.style.display = "flex";
    var imgSrc=eventInfo.target.src;
    lightboxitem.style.backgroundImage=`url(${imgSrc})`;
    caruntIndex=imgs.indexOf(eventInfo.target);
    console.log(caruntIndex);
}

closebtn.addEventListener("click",closeLightbox)
lightboxBg.addEventListener("click",closeLightbox)
function closeLightbox(){
    lightboxContainer.style.display = "none";
}

nextBtn.addEventListener("click",function(){slide(1)})
prevBtn.addEventListener("click",function(){slide(-1)})

function slide(x){
    caruntIndex+=x;
    if(caruntIndex==imgs.length){
        caruntIndex=0
    }
    else if(caruntIndex<0){
        caruntIndex=imgs.length-1
    }
    var imgSrc=imgs[caruntIndex].src;
    lightboxitem.style.backgroundImage=`url(${imgSrc})`;
}

document.addEventListener("keydown",function(eventInfo){
    if(eventInfo.keyCode==39){
        slide(1)
    }
    else if(eventInfo.keyCode==37){
        slide(-1)
    }
    else if(eventInfo.keyCode==27){
        closeLightbox()
    }
})


/* Seif start */

var images = Array.from(document.querySelectorAll(".portfolioImage"));
var grayLayer = document.querySelector(".grayLayer");
var background = document.querySelector(".background");
var after = document.getElementById("nextImage");
var before = document.getElementById("prevImage");
var close = document.getElementById("closeLayer");
var index;

for(var i = 0; i < images.length; i++)
{
    images[i].addEventListener("click", displayLayer);
}

function displayLayer(e)
{
    var imageAddress = e.target.src;
    background.style.backgroundImage = `url(${imageAddress})`;
    grayLayer.style.display = "flex";
    $("html , body").css("overflow" , "hidden");
    index = images.indexOf(e.target);
}

close.addEventListener("click", colseLayer);

function colseLayer()
{
    grayLayer.style.display = "none";
    $("html , body").css("overflow" , "auto");
}

after.addEventListener("click", next);

function next()
{
    index++;
    if(index >=images.length)
    {
        index = 0;
    }
    var nextPhoto = images[index].src
    background.style.backgroundImage = `url(${nextPhoto})`;
}

before.addEventListener("click", previous)

function previous()
{
    index--;
    if(index < 0)
    {
        index = images.length - 1;
    }
    var previousPhoto = images[index].src;
    background.style.backgroundImage = `url(${previousPhoto})`;
}

document.addEventListener("keyup" , keyboard)

function keyboard(e)
{
  if(e.keyCode == 39)
  {
    next()
  }
  else if(e.keyCode == 37)
  {
    previous()
  }
  else if(e.keyCode == 27)
  {
    remove();
  }
}

/* Seif end */