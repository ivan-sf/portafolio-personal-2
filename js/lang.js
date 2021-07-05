
langSpa();
function config(){
    lang = document.querySelector('.lang');
    lang.style.opacity = .5;
    lang.style.width = '200px';
    lang.style.height = '100px';
   }
   
   function langSpa(){
     let subTitle = document.querySelector('.sub-title');
     let menuOne = document.querySelector('.menuOne');
     let menuTwo = document.querySelector('.menuTwo');
     let menuThree = document.querySelector('.menuThree');
     let titleBanner = document.querySelector('.title-banner');
     let subTitleBanner = document.querySelector('.sub-title-banner');
     let tooltiptext = document.querySelector('.tooltiptext');
     let textProfile = document.querySelector('.text-profile');
     let titleHobbies = document.querySelector('.title-hobbies');
     let listHobbies1 = document.querySelector('.list-hobbies-1');
     let listHobbies2 = document.querySelector('.list-hobbies-2');
     let listHobbies3 = document.querySelector('.list-hobbies-3');
     let listHobbies4 = document.querySelector('.list-hobbies-4');
     let listHobbies5 = document.querySelector('.list-hobbies-5');
     let listHobbies6 = document.querySelector('.list-hobbies-6');
     let listHobbies7 = document.querySelector('.list-hobbies-7');
     let footer = document.querySelector('.footer');
     let el1 = document.querySelector('.el1');
     let el2 = document.querySelector('.el2');
     let el3 = document.querySelector('.el3');
     
     subTitle.innerHTML='CREATIVIDAD | DESARROLLO';
     menuOne.innerHTML='Inicio';
     menuTwo.innerHTML='Proyectos';
     menuThree.innerHTML='Perfil';
     titleBanner.innerHTML='Hola!';
     subTitleBanner.innerHTML='Soy Ivan Santander <i class="fal fa-paw fa-active"></i>  <i class="fas fa-cat fa-hidden"></i> un creativo digital especializado en la web.';
     tooltiptext.innerHTML='Desde Pasto Col. La majestuosa Ciudad sorpresa.';
     textProfile.innerHTML='Hola soy Ivan. Tecnólogo en Automatización y estudiante de Ing. industrial, Tengo una gran pasión por la Web y estoy en un proceso de aprendizaje y crecimiento en todos los temas digitales.';
     titleHobbies.innerHTML='Pasatiempos !';
     listHobbies1.innerHTML='Web.';
     listHobbies2.innerHTML='Escribir.';
     listHobbies3.innerHTML='Diseñar.';
     listHobbies4.innerHTML='Escuchar musica.';
     listHobbies5.innerHTML='Cine & Series.';
     listHobbies6.innerHTML='Dibujo.';
     listHobbies7.innerHTML='Cuidar mascotas.';
     footer.innerHTML=`<p>Creado con <span>♥</span> Por <strong>Ivan Santander Figueroa</strong></p> 
     <div class="">
         <a target="_blank" href="https://www.instagram.com/ivn.io/">
             <i class="fab fa-instagram"></i>
         </a>
         <a target="_blank" href="https://wa.link/2xwu1o">
             <i class="fab fa-whatsapp"></i>
         </a>
         <a target="_blank" href="https://github.com/ivan-sf/">
             <i class="fab fa-github"></i>
         </a>
     </div>`
     el1.innerHTML=`<h1>Monet's Queen</h1>
     <h2>
         TIENDA EN LINEA
         <br>
         <span>
             2021
         </span>
         <br><br>
         <a href="http://monets.ivansantander.com/" target="_blank">VER DEMO</a>
     </h2>
     <div class="circle"></div>
     <img class="glider-img-1" src="img/1.png" alt="">`;
     el2.innerHTML=`<h1>Sitio Oficial</h1>
     <h2>
         Sitio web
         <br>
         <span>
             2021
         </span>
         <br><br>
         <a href="#carousel">MUY PRONTO</a>
     </h2>
     <div class="box"></div>
     <img class="glider-img-1" src="img/2.png" alt="">`;
     el3.innerHTML=`<h1>Cinetflix Gratis</h1>
     <h2>
         Sitio web
         <br>
         <span>
             2021
         </span>
         <br><br>
         <a href="#carousel">MUY PRONTO</a>
     </h2>
     <div class="triangle"></div>
     <img class="glider-img-1" src="img/3.png" alt="">`;
   }
   
   function langEng(){
     let subTitle = document.querySelector('.sub-title');
     let menuOne = document.querySelector('.menuOne');
     let menuTwo = document.querySelector('.menuTwo');
     let menuThree = document.querySelector('.menuThree');
     let titleBanner = document.querySelector('.title-banner');
     let subTitleBanner = document.querySelector('.sub-title-banner');
     let tooltiptext = document.querySelector('.tooltiptext');
     let textProfile = document.querySelector('.text-profile');
     let titleHobbies = document.querySelector('.title-hobbies');
     let listHobbies1 = document.querySelector('.list-hobbies-1');
     let listHobbies2 = document.querySelector('.list-hobbies-2');
     let listHobbies3 = document.querySelector('.list-hobbies-3');
     let listHobbies4 = document.querySelector('.list-hobbies-4');
     let listHobbies5 = document.querySelector('.list-hobbies-5');
     let listHobbies6 = document.querySelector('.list-hobbies-6');
     let listHobbies7 = document.querySelector('.list-hobbies-7')        
     let footer = document.querySelector('.footer');
     let el1 = document.querySelector('.el1');
     let el2 = document.querySelector('.el2');
     let el3 = document.querySelector('.el3');
     
   
     subTitle.innerHTML='CREATIVITY | DEVELOPMENT';
     menuOne.innerHTML='Home';
     menuTwo.innerHTML='Projects';
     menuThree.innerHTML='Profile';
     titleBanner.innerHTML='Hello!';
     subTitleBanner.innerHTML='I am Ivan Santander <i class="fal fa-paw fa-active"></i>  <i class="fas fa-cat fa-hidden"></i> a digital creative specialized in the web.';
     tooltiptext.innerHTML='From Pasto Col. The majestic Surprise City.';
     textProfile.innerHTML='Hello, I am Ivan. Automation Technologist and Industrial Engineering student, I have a great passion for the Web and I am in a process of learning and growth in all digital subjects.';
     titleHobbies.innerHTML='Hobbies !';
     listHobbies1.innerHTML='Web.';
     listHobbies2.innerHTML='Write.';
     listHobbies3.innerHTML='Design.';
     listHobbies4.innerHTML='Listen to music.';
     listHobbies5.innerHTML='Cine & Series.';
     listHobbies6.innerHTML='Draw.';
     listHobbies7.innerHTML='Care for pets.';
     footer.innerHTML=`<p>Created whit <span>♥</span> by <strong>Ivan Santander Figueroa</strong></p> 
     <div class="">
         <a target="_blank" href="https://www.instagram.com/ivn.io/">
             <i class="fab fa-instagram"></i>
         </a>
         <a target="_blank" href="https://wa.link/2xwu1o">
             <i class="fab fa-whatsapp"></i>
         </a>
         <a target="_blank" href="https://github.com/ivan-sf/">
             <i class="fab fa-github"></i>
         </a>
     </div>`
     el1.innerHTML=`<h1>Monet's Queen</h1>
     <h2>
         Ecommerce
         <br>
         <span>
             2021
         </span>
         <br><br>
         <a href="http://monets.ivansantander.com/" target="_blank">VIEW DEMO</a>
     </h2>
     <div class="circle"></div>
     <img class="glider-img-1" src="img/1.png" alt="">`;
     el2.innerHTML=`<h1>Website Oficial</h1>
     <h2>
         Website
         <br>
         <span>
             2021
         </span>
         <br><br>
         <a href="#carousel">COMING SOON</a>
     </h2>
     <div class="box"></div>
     <img class="glider-img-1" src="img/2.png" alt="">`;
     el3.innerHTML=`<h1>Cinetflix Free</h1>
     <h2>
         Website
         <br>
         <span>
             2021
         </span>
         <br><br>
         <a href="#carousel">COMING SOON</a>
     </h2>
     <div class="triangle"></div>
     <img class="glider-img-1" src="img/3.png" alt="">`;
   }
   
   function langFr(){
     let subTitle = document.querySelector('.sub-title');
     let menuOne = document.querySelector('.menuOne');
     let menuTwo = document.querySelector('.menuTwo');
     let menuThree = document.querySelector('.menuThree');
     let titleBanner = document.querySelector('.title-banner');
     let subTitleBanner = document.querySelector('.sub-title-banner');
     let tooltiptext = document.querySelector('.tooltiptext');
     let textProfile = document.querySelector('.text-profile');
     let titleHobbies = document.querySelector('.title-hobbies');
     let listHobbies1 = document.querySelector('.list-hobbies-1');
     let listHobbies2 = document.querySelector('.list-hobbies-2');
     let listHobbies3 = document.querySelector('.list-hobbies-3');
     let listHobbies4 = document.querySelector('.list-hobbies-4');
     let listHobbies5 = document.querySelector('.list-hobbies-5');
     let listHobbies6 = document.querySelector('.list-hobbies-6');
     let listHobbies7 = document.querySelector('.list-hobbies-7');
     let footer = document.querySelector('.footer');
     let el1 = document.querySelector('.el1');
     let el2 = document.querySelector('.el2');
     let el3 = document.querySelector('.el3');
     
     
     
     subTitle.innerHTML='CRÉATIVITÉ | DÉVELOPPEMENT';
     menuOne.innerHTML='Bienvenue';
     menuTwo.innerHTML='Projets';
     menuThree.innerHTML='Profil';
     titleBanner.innerHTML='Salut!';
     subTitleBanner.innerHTML='Je suis Ivan Santander <i class="fal fa-paw fa-active"></i>  <i class="fas fa-cat fa-hidden"></i> un créatif digital spécialisé dans le web.';
     tooltiptext.innerHTML='De Pasto Col. La majestueuse ville surprise.';
     textProfile.innerHTML="Bonjour, je suis Ivan. Technologue en automatisation et étudiante en génie industriel, j'ai une grande passion pour le Web et je suis dans une démarche d'apprentissage et de croissance dans toutes les matières numériques.";
     titleHobbies.innerHTML='Passe-temps !';
     listHobbies1.innerHTML='Wèb.';
     listHobbies2.innerHTML='Écrire.';
     listHobbies3.innerHTML='Conception.';
     listHobbies4.innerHTML='Écouter de la musique.';
     listHobbies5.innerHTML='Cinéma & Séries.';
     listHobbies6.innerHTML='Il a dessiné.';
     listHobbies7.innerHTML='Soins pour animaux de compagnie.';
     footer.innerHTML=`<p>Créé avec <span>♥</span> par <strong>Ivan Santander Figueroa</strong></p> 
     <div class="">
         <a target="_blank" href="https://www.instagram.com/ivn.io/">
             <i class="fab fa-instagram"></i>
         </a>
         <a target="_blank" href="https://wa.link/2xwu1o">
             <i class="fab fa-whatsapp"></i>
         </a>
         <a target="_blank" href="https://github.com/ivan-sf/">
             <i class="fab fa-github"></i>
         </a>
     </div>`
     el1.innerHTML=`<h1>Monet's Queen</h1>
     <h2>
        Commerce électronique
         <br>
         <span>
             2021
         </span>
         <br><br>
         <a href="http://monets.ivansantander.com/" target="_blank">VOIR LA DÉMO</a>
     </h2>
     <div class="circle"></div>
     <img class="glider-img-1" src="img/1.png" alt="">`;
     el2.innerHTML=`<h1>Site officiel</h1>
     <h2>
        Site Internet
         <br>
         <span>
             2021
         </span>
         <br><br>
         <a href="#carousel">COMING SOON</a>
     </h2>
     <div class="box"></div>
     <img class="glider-img-1" src="img/2.png" alt="">`;
     el3.innerHTML=`<h1>Cinetflix libre</h1>
     <h2>
        Site Internet
         <br>
         <span>
             2021
         </span>
         <br><br>
         <a href="#carousel">COMING SOON</a>
     </h2>
     <div class="triangle"></div>
     <img class="glider-img-1" src="img/3.png" alt="">`;
   }
   
function langClose(){
    let lang = document.querySelector('.lang');
    lang.style.opacity=0;
}