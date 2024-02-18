var menu = document.querySelector('#icon-menu');
var content = document.querySelector('#ul');
menu.addEventListener('click', function(){
   
    
    content.style.display='block';
    
})
var close = document.querySelector('#icon-close');
var content = document.querySelector('#ul');
close.addEventListener('click', function(){
   
    
    content.style.display='none';
    
})

var cartOne = document.querySelector("#cart-img");
var cartTwo =document.querySelector("#cart-info")
cartOne.addEventListener('click', function(){
    cartTwo.style.opacity ='1';
})
var cartOne = document.querySelector("#cart-img");
var cartTwo =document.querySelector("#cart-info")
cartOne.addEventListener('dblclick', function(){
    cartTwo.style.opacity ='0';
})