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
