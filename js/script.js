window.addEventListener('load',function(){
    new Glider(document.querySelector('.glider-lista'), {
        slidesToShow: 1,
        dots: '.dots',
        draggable: true,

        arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
        }
      });
});

function perfilContent(){
  let body = document.body;
  let perfil = document.querySelector('.perfil');
  body.style.overflowY='hidden';
  perfil.style.visibility='visible';
  perfil.style.opacity=1;
}

window.addEventListener('keydown', keyWhich);

function keyWhich(e) {
  if(e.which==27){
    perfilClose()
    langClose()
  }
}

function perfilClose(){
  let body = document.body;
  let perfil = document.querySelector('.perfil');
  body.style.overflowY='visible';
  perfil.style.visibility='hidden';
  perfil.style.opacity=0;
}

