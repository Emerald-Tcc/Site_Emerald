var target1 = document.querySelectorAll('.ha')

var efeito1 = 0;

function anime(){
    const windowTop = window.scrollY;
    target1.forEach(function(element){
        if((windowTop) > element.offsetTop + (window.innerHeight * 0.75)  && efeito1 == 0){

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
// 
var target2 = document.querySelectorAll('.he')

var efeito2 = 0;

function anime2(){
    const windowTop = window.scrollY;
    target2.forEach(function(element){
        if((windowTop) > element.offsetTop + (window.innerHeight * 0.75)  && efeito2 == 0){

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
// 
var target3 = document.querySelectorAll('.hi')

var efeito3 = 0;

function anime3(){
    const windowTop = window.scrollY;
    target3.forEach(function(element){
        if((windowTop) > element.offsetTop + (window.innerHeight * 0.75)  && efeito3 == 0){

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















// b.addEventListener('mouseover', function(){
//     var numero = document.querySelector('#b')
//     var min = 1
//     var max = 5000
    
//     for(var i = min; i <= max; i++){
//         setTimeout(function(nr){
//             numero.innerHTML = nr;
//         }, i * 2000 / max, i);
//     }

// })

// c.addEventListener('mouseover', function(){
//     var numero = document.querySelector('#c')
//     var min = 1
//     var max = 12
    
//     for(var i = min; i <= max; i++){
//         setTimeout(function(nr){    
//             numero.innerHTML = nr;
//         }, i * 700 / max, i);
//     }

// })




/*function mv(){
    menuSection.classList.remove('on')
    show = !show;
    window.location = '#mv'
}
*/


    var card = document.querySelector('#card')

    card.addEventListener("click", (e) =>{
        card.classList.toggle("flip")
    })
    
    var card2 = document.querySelector('#card2')
    
    card2.addEventListener("click", (e) =>{
        card2.classList.toggle("flip")
    })    



    
