var numberOfDrums=document.querySelectorAll(".drum").length;
var keyq=new Audio('sounds/q.mp3');
var keyw=new Audio('sounds/w.mp3');
var keye=new Audio('sounds/e.mp3');
var keyu=new Audio('sounds/u.mp3');    
var keyr=new Audio('sounds/r.mp3');
var keyt=new Audio('sounds/t.mp3');    
var keyi=new Audio('sounds/i.mp3');
var keyo=new Audio('sounds/o.mp3');
var keyp=new Audio('sounds/p.mp3');
var keya=new Audio('sounds/a.mp3');
var keys=new Audio('sounds/s.mp3');
var keyd=new Audio('sounds/d.mp3');
var keyf=new Audio('sounds/f.mp3');
var keyg=new Audio('sounds/g.mp3');
var keyh=new Audio('sounds/h.mp3');
var keyj=new Audio('sounds/j.mp3');
var keyk=new Audio('sounds/k.mp3');
var keyl=new Audio('sounds/l.mp3');
var keyz=new Audio('sounds/z.mp3');
var keyx=new Audio('sounds/x.mp3');
var keyc=new Audio('sounds/c.mp3');
var keyv=new Audio('sounds/v.mp3');
var keyb=new Audio('sounds/b.mp3');
var keyn=new Audio('sounds/n.mp3');
var keym=new Audio('sounds/m.mp3');
var keyy=new Audio('sounds/y.mp3');



                //clicking with mouse
for(var i=0; i<numberOfDrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var key=this.innerText;
    sound(key);
    buttonAnimation(key);
})
}



                //Stop button
document.getElementById("stop").addEventListener("click",function(){
    keyq.pause();
    keyw.pause();
    keye.pause();
    keyr.pause();
    keyt.pause();
    keyy.pause();
    keyu.pause();
    keyi.pause();
    keyo.pause();
    keyp.pause();
    keya.pause();
    keys.pause();
    keyd.pause();
    keyf.pause();
    keyg.pause();
    keyh.pause();
    keyj.pause();
    keyk.pause();
    keyl.pause();
    keyz.pause();
    keyx.pause();
    keyc.pause();
    keyv.pause();
    keyb.pause();
    keyn.pause();
    keym.pause();
});

document.addEventListener("keypress",function(){
    keyq.pause();
    keyw.pause();
    keye.pause();
    keyr.pause();
    keyt.pause();
    keyy.pause();
    keyu.pause();
    keyi.pause();
    keyo.pause();
    keyp.pause();
    keya.pause();
    keys.pause();
    keyd.pause();
    keyf.pause();
    keyg.pause();
    keyh.pause();
    keyj.pause();
    keyk.pause();
    keyl.pause();
    keyz.pause();
    keyx.pause();
    keyc.pause();
    keyv.pause();
    keyb.pause();
    keyn.pause();
    keym.pause();
});



                        // click
document.addEventListener("keypress",function(event){
    sound(event.key.toUpperCase());
    buttonAnimation(event.key);
});




function sound(key){
    switch(key){
        case "Q":
            keyq.play();
        break;

        case "W":
            keyw.play();
        break;

        case "E":
            keye.play();
        break;

        case "R":
            keyr.play();
        break;

        case "T":
            keyt.play();
        break;

        case "Y":
            keyy.play();
        break;

        case "U":
            keyu.play();
        break;

        case "I":
        keyi.play();
        break;

        case "O":
        keyo.play();
        break;

        case "P":
        keyp.play();
        break;

        case "A":
        keya.play();
        break;

        case "S":
        keys.play();
        break;

        case "D":
        keyd.play();
        break;

        case "F":
        keyf.play();
        break;

        case "G":
        keyg.play();
        break;

        case "H":
        keyh.play();
        break;

        case "J":
        keyj.play();
        break;

        case "K":
        keyk.play();
        break;

        case "L":
        keyl.play();
        break;

        case "Z":
        keyz.play();
        break;
        
        case "X":
        keyx.play();
        break;

        case "C":
        keyc.play();
        break;

        case "V":
        keyv.play();
        break;

        case "B":
        keyb.play();
        break;

        case "N":
        keyn.play();
        break;

        case "M":
        keym.play();
        break;
    }
};

function buttonAnimation(currentKey){
    var currentKey=currentKey.toLowerCase();
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100)
};