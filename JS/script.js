const colors = document.getElementsByClassName('header-one');
for(colour of colors){
    colour.style.color = 'Salmon';
}
const borderR = document.getElementsByClassName('card');
for(bRadius of borderR){
    bRadius.style.backgroundColor = 'linen';
}
document.getElementById('shoes-btn').addEventListener('click', function(){
    event.target.remove(event.target);
})
document.getElementById('shoes2-btn').addEventListener('click', function(){
    event.target.remove(event.target);
})
document.getElementById('shoes3-btn').addEventListener('click', function(){
    event.target.remove(event.target);
})

// onclick diye
document.getElementById('bag-one').addEventListener('click', function(){
   console.log('dami bag kivabe kinba?');
})
document.getElementById('bag-two').addEventListener('click', function(){
   console.log('reasonable kine felo');
})
document.getElementById('bag-three').addEventListener('click', function(){
   console.log('ei bag tmr dkr nei');
})
// write email then send button will be open

document.getElementById('mail-confirm').addEventListener
('keyup', function(event){
  const deleteBtn = document.getElementById('send-btn');
   if(event.target.value == 'email'){
    deleteBtn.removeAttribute('disabled')
   }
   else{
    deleteBtn.setAttribute('disabled', true);
   }
})

// subscription area color change with double click
window.ondblclick=Background_change_color_dbl;

function Background_change_color_dbl ()
{document.getElementById('subscribe').style.backgroundColor="lightgreen"}




