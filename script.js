$(document).ready(function(){
    animateA('.a');
     animateB('.b');
     animateC('.c');
     animateD('.d');
    animateE('.e');
     
});

function timecycle(){
    
     var today = new Date();
     var time = today.getSeconds();
     return time;
  
}

function bgchange(){
    var bg = document.getElementById('background');
    var time = timecycle();
    if(time>25){
        bg.style.transition='5s';
        bg.style.backgroundColor='#0E185F';
     }else{
        bg.style.transition='5s';
        bg.style.backgroundColor='#B8FFF9';
     }
     document.getElementById("widthcounter").innerHTML = time;
}


function makeNewPosition(){
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    bgchange();

     return [nh,nw];    
    
}

var tempA = 0; 

function animateA(myclass){
    var afish = document.getElementById('a');
    var newqa = makeNewPosition();
    $(myclass).animate({ top: newqa[0], left: newqa[1] }, Math.floor(Math.random() * 2000)+1000,   function(){
       // document.getElementById("widthcounter").innerHTML = newqa[1];
        if(newqa[1]<tempA){
            tempA = newqa[1];
            afish.style.transform='scaleX(1)';
         }else if(newqa[1]>tempA){
            tempA = newqa[1];
            afish.style.transform='scaleX(-1)';
         }
       
          
         
      animateA(myclass);        
    });
    
};

var tempB = 0; 
function animateB(myclass){
    var bfish = document.getElementById('b');
    var newqb = makeNewPosition();
    $(myclass).animate({ top: newqb[0], left: newqb[1] }, Math.floor(Math.random() * 3000)+1000,   function(){
       // document.getElementById("widthcounter").innerHTML = newqb[1];
        if(newqb[1]<tempB){
             tempB = newqb[1];
            bfish.style.transform='scaleX(1)';
         }else{
             tempB = newqb[1];
             bfish.style.transform='scaleX(-1)';
         }
      animateB(myclass);        
    });
    
};

var tempC = 0; 
function animateC(myclass){
    var cfish = document.getElementById('c');
    var newqc = makeNewPosition();
    $(myclass).animate({ top: newqc[0], left: newqc[1] }, Math.floor(Math.random() * 4000)+1000,   function(){
       //document.getElementById("widthcounter").innerHTML = newqc[1];  
       var time = timecycle();
        if(newqc[1]<tempC){
             tempC = newqc[1];
            cfish.style.transform='scaleX(-1)';
         }else{
             tempC = newqc[1];
             cfish.style.transform='scaleX(1)';
         }
       
       
      animateC(myclass);        
    });
    
};

var tempD = 0; 
function animateD(myclass){
    var dfish = document.getElementById('d');
    var newqd = makeNewPosition();
    $(myclass).animate({ top: newqd[0], left: newqd[1] }, Math.floor(Math.random() * 3000)+500,   function(){
       // document.getElementById("widthcounter").innerHTML = newqd[1];
        if(newqd[1]<tempD){
             tempD = newqd[1];
            dfish.style.transform='scaleX(1)';
         }else{
             tempD = newqd[1];
             dfish.style.transform='scaleX(-1)';
         }
      animateD(myclass);        
    });
    
};


var tempE = 0; 
function animateE(myclass){

    var efish = document.getElementById('e');
    var newqe = makeNewPosition();
        $(myclass).animate({ top: newqe[0], left: newqe[1] }, Math.floor(Math.random() * 3000)+500,   function(){
        // document.getElementById("widthcounter").innerHTML = newqd[1];
            if(newqe[1]<tempE){
                tempE = newqe[1];
                efish.style.transform='scaleX(1)';
            }else{
                tempE = newqe[1];
                efish.style.transform='scaleX(-1)';
            }
        animateE(myclass);        
        });
       
   
    
};

