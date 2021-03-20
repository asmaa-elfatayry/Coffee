// get buttons
const $latte_btn=document.querySelector('#latte');
const $mocha_btn=document.querySelector('#mocha');
const $espreso_btn=document.querySelector('#espreso');
const $frappuc_btn=document.querySelector('#Frappuc');
const $ameriecano_btn=document.querySelector('#Americano');
const $cappu_btn=document.querySelector('#Cappuccino');
const $cortado_btn=document.querySelector('#Cortado');
const $affogato_btn=document.querySelector('#Affogato');
const $macchiato_btn=document.querySelector('#Macchiato');
const $turky_btn=document.querySelector('#Turkish');
// get div
let $divLat=document.querySelector('.lat');
let $divMocha=document.querySelector('.mocha');
let $divEspe=document.querySelector('.espresso');
let $divFrap=document.querySelector('.frappuccino');
let $divAmerc=document.querySelector('.americano');
let $divCappu=document.querySelector('.cappuccino');
let $divCort=document.querySelector('.cortado');
let $divAffog=document.querySelector('.affogato');
let $divMaacc=document.querySelector('.macchiato');
let $divTurk=document.querySelector('.turkish');
// author element
let $text=document.querySelector('#head');
let $cup=document.querySelector('#icon');
let $close=document.querySelector('.close');
//event
//1
$latte_btn.addEventListener('click',function(){
    styling();
    showOne();
    
})
//2
$mocha_btn.addEventListener('click',function(){
    styling();
   showTwo();
   
})
//3
$espreso_btn.addEventListener('click',function(){
    styling();
  showThree();
   
})
//4
$frappuc_btn.addEventListener('click',function(){
    styling();
   showFour();
   
    
})
//5
$ameriecano_btn.addEventListener('click',function(){
    styling();
  showFive();
   
});
//6
$cappu_btn.addEventListener('click',function(){
    styling();
   showSix();
   
});
//7
$cortado_btn.addEventListener('click',function(){
    styling();
   showSeven();
   
});
//8
$affogato_btn.addEventListener('click',function(){
    styling();
  showEight();
   
});
//9
$macchiato_btn.addEventListener('click',function(){
    styling();
  showNine();
   
});
//10
$turky_btn.addEventListener('click',function(){
   styling(); 
   showTen();
   
});



function styling(){
    $text.hidden=true;
    $cup.style.top="290px";
    $cup.style.right="470px";
    $cup.style.fontSize="170px";
     $cup.style.transition = "all 1s";
}

function showOne(){
    $divLat.hidden=false;
    $divMocha.hidden=true;
    $divEspe.hidden=true;
    $divFrap.hidden=true;
    $divAmerc.hidden=true;
    $divCappu.hidden=true;
    $divCort.hidden=true;
    $divAffog.hidden=true;
    $divMaacc.hidden=true;
    $divTurk.hidden=true;
};
function showTwo(){
    $divLat.hidden=true;
    $divMocha.hidden=false;
    $divEspe.hidden=true;
    $divFrap.hidden=true;
    $divAmerc.hidden=true;
    $divCappu.hidden=true;
    $divCort.hidden=true;
    $divAffog.hidden=true;
    $divMaacc.hidden=true;
    $divTurk.hidden=true;
};
function showThree(){
    $divLat.hidden=true;
    $divMocha.hidden=true;
    $divEspe.hidden=false;
    $divFrap.hidden=true;
    $divAmerc.hidden=true;
    $divCappu.hidden=true;
    $divCort.hidden=true;
    $divAffog.hidden=true;
    $divMaacc.hidden=true;
    $divTurk.hidden=true;
};
function showFour(){
    $divLat.hidden=true;
    $divMocha.hidden=true;
    $divEspe.hidden=true;
    $divFrap.hidden=false;
    $divAmerc.hidden=true;
    $divCappu.hidden=true;
    $divCort.hidden=true;
    $divAffog.hidden=true;
    $divMaacc.hidden=true;
    $divTurk.hidden=true;
};
function showFive(){
    $divLat.hidden=true;
    $divMocha.hidden=true;
    $divEspe.hidden=true;
    $divFrap.hidden=true;
    $divAmerc.hidden=false;
    $divCappu.hidden=true;
    $divCort.hidden=true;
    $divAffog.hidden=true;
    $divMaacc.hidden=true;
    $divTurk.hidden=true;
};
function showSix(){
    $divLat.hidden=true;
    $divMocha.hidden=true;
    $divEspe.hidden=true;
    $divFrap.hidden=true;
    $divAmerc.hidden=true;
    $divCappu.hidden=false;
    $divCort.hidden=true;
    $divAffog.hidden=true;
    $divMaacc.hidden=true;
    $divTurk.hidden=true;
};
function showSeven(){
    $divLat.hidden=true;
    $divMocha.hidden=true;
    $divEspe.hidden=true;
    $divFrap.hidden=true;
    $divAmerc.hidden=true;
    $divCappu.hidden=true;
    $divCort.hidden=false;
    $divAffog.hidden=true;
    $divMaacc.hidden=true;
    $divTurk.hidden=true;
};
function showEight(){
    $divLat.hidden=true;
    $divMocha.hidden=true;
    $divEspe.hidden=true;
    $divFrap.hidden=true;
    $divAmerc.hidden=true;
    $divCappu.hidden=true;
    $divCort.hidden=true;
    $divAffog.hidden=false;
    $divMaacc.hidden=true;
    $divTurk.hidden=true;
};
function showNine(){
    $divLat.hidden=true;
    $divMocha.hidden=true;
    $divEspe.hidden=true;
    $divFrap.hidden=true;
    $divAmerc.hidden=true;
    $divCappu.hidden=true;
    $divCort.hidden=true;
    $divAffog.hidden=true;
    $divMaacc.hidden=false;
    $divTurk.hidden=true;
};
function showTen(){
    $divLat.hidden=true;
    $divMocha.hidden=true;
    $divEspe.hidden=true;
    $divFrap.hidden=true;
    $divAmerc.hidden=true;
    $divCappu.hidden=true;
    $divCort.hidden=true;
    $divAffog.hidden=true;
    $divMaacc.hidden=true;
    $divTurk.hidden=false;
};
// close button
let $One=document.querySelector('.one');
let $Two=document.querySelector('.two');
let $Three=document.querySelector('.three');
let $Four=document.querySelector('.four');
let $FiVe=document.querySelector('.five');
let $Six=document.querySelector('.six');
let $Seven=document.querySelector('.seven');
let $Eight=document.querySelector('.eight');
let $Nine=document.querySelector('.nine');
let $Ten=document.querySelector('.ten');
function reseat(){
    $text.hidden=false;
    $cup.style.top="60px";
    $cup.style.right="400px";
    $cup.style.fontSize="380px";
    $cup.style.transition = "all 1s";
}
$One.addEventListener('click',function(){
    $divLat.hidden=true;
    reseat();
});
$Two.addEventListener('click',function(){
    $divMocha.hidden=true;
    reseat();
});
$Three.addEventListener('click',function(){
    $divEspe.hidden=true;
    reseat();
});
$Four.addEventListener('click',function(){
    $divFrap.hidden=true;
    reseat();
});
$FiVe.addEventListener('click',function(){
    $divAmerc.hidden=true;
    reseat();
});
$Six.addEventListener('click',function(){
    $divCappu.hidden=true;
    reseat();
});
$Seven.addEventListener('click',function(){
    $divCort.hidden=true;
    reseat();
});
$Eight.addEventListener('click',function(){
    $divAffog.hidden=true;
    reseat();
});
$Nine.addEventListener('click',function(){
    $divMocha.hidden=true;
    reseat();
});
$Ten.addEventListener('click',function(){
    $divTurk.hidden=true;
    reseat();
});