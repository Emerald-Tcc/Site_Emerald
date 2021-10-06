x = window.screen.width;
y = window.screen.height;
if(x > 700){
    var target1 = document.querySelectorAll('.ha')

    var efeito1 = 0;
    
    function anime(){
        const windowTop = window.scrollY;
        target1.forEach(function(element){
            if((windowTop) > element.offsetTop + (window.innerHeight * 1.5)  && efeito1 == 0){
    
                let numero = document.querySelector('#a')
                let min = 1
                let max = 100
    
                for(let i = min; i <= max; i++){
                    setTimeout(function(nr){
                        numero.innerHTML = nr;
                    }, i * 3000 / max, i);
                } efeito1 = 1;
            }
            console.log(element.offsetTop);
        })
    } 
    
    window.addEventListener('scroll', function(){
        anime();
    })
}

x = window.screen.width;
y = window.screen.height;
if(x < 700){
    var target1 = document.querySelectorAll('.ha')

    var efeito1 = 0;
    
    function anime(){
        const windowTop = window.scrollY;
        target1.forEach(function(element){
            if((windowTop) > element.offsetTop + (window.innerHeight * 0.6)  && efeito1 == 0){
    
                let numero = document.querySelector('#a')
                let min = 1
                let max = 100
    
                for(let i = min; i <= max; i++){
                    setTimeout(function(nr){
                        numero.innerHTML = nr;
                    }, i * 3000 / max, i);
                } efeito1 = 1;
            }
            console.log(element.offsetTop);
        })
    } 
    
    window.addEventListener('scroll', function(){
        anime();
    })    
}

///////////////////////////////////////// animação 2, número 5000

x = window.screen.width;
y = window.screen.height;
if(x > 700){

var target2 = document.querySelectorAll('.he')

var efeito2 = 0;

function anime2(){
    const windowTop = window.scrollY;
    target2.forEach(function(element){
        if((windowTop) > element.offsetTop + (window.innerHeight * 1.5)  && efeito2 == 0){

            let numero = document.querySelector('#b')
            let min = 1
            let max = 5000

            for(let i = min; i <= max; i++){
                setTimeout(function(nr){
                    numero.innerHTML = nr;
                }, i * 4000 / max, i);
            } efeito2 = 1;
        }
        console.log(element.offsetTop);
    })
} 

window.addEventListener('scroll', function(){
    anime2();
})
}

x = window.screen.width;
y = window.screen.height;
if(x < 700){

var target2 = document.querySelectorAll('.he')

var efeito2 = 0;

function anime2(){
    const windowTop = window.scrollY;
    target2.forEach(function(element){
        if((windowTop) > element.offsetTop + (window.innerHeight * 0.6)  && efeito2 == 0){

            let numero = document.querySelector('#b')
            let min = 1
            let max = 5000

            for(let i = min; i <= max; i++){
                setTimeout(function(nr){
                    numero.innerHTML = nr;
                }, i * 4000 / max, i);
            } efeito2 = 1;
        }
        console.log(element.offsetTop);
    })
} 

window.addEventListener('scroll', function(){
    anime2();
})
}

///////////////////////////////////////// animação 3, número 12

x = window.screen.width;
y = window.screen.height;
if(x > 700){
var target3 = document.querySelectorAll('.hi')

var efeito3 = 0;

function anime3(){
    const windowTop = window.scrollY;
    target3.forEach(function(element){
        if((windowTop) > element.offsetTop + (window.innerHeight * 1.5)  && efeito3 == 0){

            let numero = document.querySelector('#c')
            let min = 0
            let max = 12    

            for(let i = min; i <= max; i++){
                setTimeout(function(nr){
                    numero.innerHTML = nr;
                }, i * 2000 / max, i);
            } efeito3 = 1;
        }
        console.log(element.offsetTop);
    })
} 

window.addEventListener('scroll', function(){
    anime3();
})
}

x = window.screen.width;
y = window.screen.height;
if(x < 700){
var target3 = document.querySelectorAll('.hi')

var efeito3 = 0;
        
function anime3(){
    const windowTop = window.scrollY;
        target3.forEach(function(element){
        if((windowTop) > element.offsetTop + (window.innerHeight * 0.6)  && efeito3 == 0){
        
            let numero = document.querySelector('#c')
            let min = 0
            let max = 12    
        
            for(let i = min; i <= max; i++){
                setTimeout(function(nr){
                    numero.innerHTML = nr;
                }, i * 2000 / max, i);
            } efeito3 = 1;
        }
        console.log(element.offsetTop);
    })
} 
        
        window.addEventListener('scroll', function(){
            anime3();
        })        
}

