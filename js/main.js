const btnShare = document.getElementById('click');
const socialShare = document.querySelector('.media');

var cont =0;
var screen = window.screen;





btnShare.addEventListener('click', () => {
      cont=cont+1;
      var position = btnShare.getBoundingClientRect();

     if(screen.width>=705){
            if(cont==1){
                  socialShare.style.opacity=1;
                  socialShare.style.left=position.left-120+'px';
                  socialShare.style.top= position.top-70+'px';
            
            }else{
                  socialShare.style.opacity=-1;
                  socialShare.style.left=10+'%';
                  cont=0;
      }
     }else if (screen.width<=704){
           if(cont==1){
                  socialShare.style.opacity=1;
           }
           else{
                  socialShare.style.opacity=-1;
                  cont=0;
           }
     }
})


