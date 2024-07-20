document.querySelectorAll(".elem").forEach(function(elem){
    var rotate=0;
    var diffrot=0;
    elem.addEventListener("mousemove",function(dets){
        var diff= dets.clientY- elem.getBoundingClientRect().top;
        diffrot= dets.clientX-rotate;
        rotate=dets.clientX;
        gsap.to(elem.querySelector("img"),{
            opacity:9999,
            ease:power1,
            top:diff,
            left:dets.clientX,
            rotate:gsap.utils.clamp(-20,20,diffrot)
        });
    });
});
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function firstpageanim(){
    var tl=gsap.timeline();

    tl.from("#nav",{
        y:'-10',
        opacity:0,
        duration:1.5,
        delay:.5,
        ease:Expo.easeInOut
    })
    .to(".boundingelem",{
        y:'0',
        ease:Expo.easeInOut,
        delay:-1,
        duration:2,
        stagger:.2  
    })
    .from("#herofooter",{
        y:'-10',
        opacity:0,
        duration:1.5,
        delay:-1,
        ease:Expo.easeInOut 
    })
}
function circleskew(){
    
    var xscale=1;
    var yscale=1;
    var xprev=0;
    var yprev=0;
    
    window.addEventListener("mousemove",function(dets){
        xscale= gsap.utils.clamp(.8,1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8,1.2,dets.clientY - yprev);
       
        xprev= dets.clientX;
        yprev= dets.clientY;
        
         circlemove(xscale,yscale);
        });
    }
 circleskew();   
function circlemove(xscale,yscale){
    window.addEventListener("mousemove",function(dets){
   document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`
    })
}
circlemove();
firstpageanim();




