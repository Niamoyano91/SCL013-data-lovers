import pokemonData from './data/pokemon/pokemon.js';
import { filterType, filterWeakness, orderAlphabetically1, orderAlphabetically2, orderNumber1, orderNumber2 } from './data.js';

let data = pokemonData.pokemon;

const rootFather = document.getElementById('rootFather');
rootFather.innerHTML +=   `<section id="banner">
<img class="inicialImg" src="./Img/imagenInicial.jpg" alt="imagen pokemon primera generación">
</section>
<div id="root">
<section id="text1InitialPage">
  <p class= "paragraph" >Conoce en detalle a cada Pokémon de la Primera Generación.
    Te mostraremos nuevas actualizaciones y mucho más!</p>
</section>
<section id="text2InitialPage">
  <p class= "paragraph" >Únete a otros Entrenadores de todos los rincones que ya han descubierto muchos Pokémon explorando
    el mundo que les rodea.</p>
</section>

</div>
<footer>
<p class= "paragraph">©2020 creator Nia Moyano/ Contacto niamoyano@gmail.com / Laboratoria 2020</p>
</footer>`




const cards = (array) => {
  const listPokemons = document.getElementById('rootPokemonList');
  let listAllPokemon = '';

  for (let i = 0; i < array.length; i += 1) {
    listAllPokemon += 
    `<div id="rootPokemonList">
    <div class="boxPokemon">
      <div class="transparentConteinerPokemon">
        <p class=titlePokemon>${array[i].name}</p>
        <div class="page">
          <a href="#" class="botton"><img class="picturePokemon" alt="Imagen de Pokemon" src='${array[i].img}'></a>
        </div>
      </div>
    </div>
  </div>
  </div>`;
    listPokemons.innerHTML = listAllPokemon;
    let imgenButton = document.getElementsByClassName("botton");
    for (let i = 0; i < imgenButton.length; i++) {
      let pictureImgen = imgenButton[i];

      pictureImgen.addEventListener("click", function () {
        const rootModalPokemon = document.getElementById("rootModalPokemon");
        rootModalPokemon.innerHTML =
        `<div class="transparentBackground">
        <div class="modal">
          <div class="modalClose">
            <span>x</span>
          </div>
          <div class="modalTitle">${array[i].name}</div>
          <div class=""><img class="modalImagen" alt="Imagen de Pokemon" src='${array[i].img}'>
          <div class="modalInformation">
          <p> <img class="iconsModal"src="img/icono-tipoo.png">${array[i].type}</p>
          <p> <img class="iconsModal"src="img/buscadorr.png">${array[i].num}</p>
          <p> <img class="iconsModal"src="img/icono-alturaa.png">${array[i].height}</p>
          <p> <img class="iconsModal"src="img/icono-pesoo.png">${array[i].weight}</p>
          <p> <img class="iconsModal"src="img/icono-caramelo.png">${array[i].candy_count}</p>
          <p> <img class="iconsModal"src="img/icono-brujulaa.png">${array[i].spawn_chance}</p>
          <p> <img class="iconsModal"src="img/icono-reloj.png">${array[i].spawn_time}</p>
          <p> <img class="iconsModal"src="img/icon-huevoo.png">${array[i].egg}</p>
          <p> <img class="iconsModal"src="img/icono-peligroo.png">${array[i].weaknesses}</p>
          </div>

          </div>
    
        </div>
      </div>`;
        document.getElementsByClassName("transparentBackground")[0].style.display = "block"
        document.getElementsByClassName("modalClose")[0].addEventListener("click", function () {
          document.getElementsByClassName("transparentBackground")[0].style.display = "none"
          document.getElementById("rootModalPokemon").innerHTML = "";

        });
      });
    }
  }
};




const cards2 = (array) => {
  const listPokemons = document.getElementById('rootPokemonList');
  let listAllPokemonType = '';

  for (let i = 0; i < array.length; i += 1) {
    listAllPokemonType += `<div id="rootPokemonList">
                           <div class = "boxPokemon">
                           <h2 class= titlePokemon>${array[i].num}</h2>
                          <div class = "transparentConteinerPokemon">
                          
                          <p class= titlePokemon>${array[i].name}</p>
                          <div class="page">
                          <a href="#" class="botton" ><img class="picturePokemon" alt="Imagen de Pokemon" src='${array[i].img}'></a>
                          </div>
                             </div>
                             </div>
                             </div>
                             </div>`;
    listPokemons.innerHTML = listAllPokemonType;



  }
};


let type = document.getElementsByClassName('type');//recorre los checkbox
document.getElementById('types').addEventListener('change', () => {
  for (let i = 0; i < type.length; i++) {
    if (type[i].checked === true) {
      let type_pokemon = type[i].value;  //console.log(type_pokemon); memuestra el value de lo que selecciono el usuario en el menu
      const textOne = document.querySelector('#text1InitialPage'); // creo una variable para seleccionar el id            
      textOne.textContent = '';                                    //modifico el texto del contenedor que lo quiero vacio
      const textTwo = document.querySelector('#text2InitialPage');
      textTwo.textContent = '';
      rootFather.setAttribute('style', 'background-image:url(./Img/pasto.jpg)');
      let array_type = [];
      switch (type_pokemon) {
        case 'Water':
          array_type = filterType(data, 'Water'); //let names = array_type.map(title => title.name);//console.log(names);me imprime todos los nombres
          cards(array_type);
          break;                               //console.log(imagen);                                      
        case 'Bug':
          array_type = filterType(data, 'Bug');
          cards(array_type);
          break;
        case 'Dragon':
          array_type = filterType(data, 'Dragon');
          cards(array_type);
          break;
        case 'Electric':
          array_type = filterType(data, 'Electric');
          cards(array_type);
          break;
        case 'Ghost':
          array_type = filterType(data, 'Ghost');
          cards(array_type);
          break;
        case 'Fire':
          array_type = filterType(data, 'Fire');
          cards(array_type);
          break;
        case 'Ice':
          array_type = filterType(data, 'Ice');
          cards(array_type);
          break;
        case 'Fighting':
          array_type = filterType(data, 'Fighting');
          cards(array_type);
          break;
        case 'Normal':
          array_type = filterType(data, 'Normal');
          cards(array_type);
          break;
        case 'Grass':
          array_type = filterType(data, 'Grass');
          cards(array_type);
          break;
        case 'Psychic':
          array_type = filterType(data, 'Psychic');
          cards(array_type);
          break;
        case 'Rock':
          array_type = filterType(data, 'Rock');
          cards(array_type);
          break;
        case 'Ground':
          array_type = filterType(data, 'Ground');
          cards(array_type);
          break;
        case 'Rock"':
          array_type = filterType(data, 'Rock"');
          cards(array_type);
          break;
        case 'Poison':
          array_type = filterType(data, 'Poison');
          cards(array_type);
          break;
        case 'Flying':
          array_type = filterType(data, 'Flying');
          cards(array_type);
          break;
        default:
          break;
      }
    }
  }
});

let weakness = document.getElementsByClassName('weaknesses');//recorre los checkbox
document.getElementById('weaknessesPokemon').addEventListener('change', () => {
  for (let i = 0; i < weakness.length; i++) {
    if (weakness[i].checked === true) {
      let pokemon_weakness = weakness[i].value;  //console.log(type_pokemon); memuestra el value de lo que selecciono el usuario en el menu
      const textOne = document.querySelector('#text1InitialPage'); // creo una variable para seleccionar el id            
      textOne.textContent = '';                                    //modifico el texto del contenedor que lo quiero vacio
      const textTwo = document.querySelector('#text2InitialPage');
      textTwo.textContent = '';
      rootFather.setAttribute('style', 'background-image:url(./Img/pasto2.jpg)');
      let array_weaknesses = [];
      switch (pokemon_weakness) {
        case 'Water':
          array_weaknesses = filterWeakness(data, 'Water'); //let names = array_type.map(title => title.name);//console.log(names);me imprime todos los nombres
          cards(array_weaknesses);
          break;                               //console.log(imagen);                                      
        case 'Bug':
          array_weaknesses = filterWeakness(data, 'Bug');
          cards(array_weaknesses);
          break;
        case 'Dragon':
          array_weaknesses = filterWeakness(data, 'Dragon');
          cards(array_weaknesses);
          break;
        case 'Electric':
          array_weaknesses = filterWeakness(data, 'Electric');
          cards(array_weaknesses);
          break;
        case 'Ghost':
          array_weaknesses = filterWeakness(data, 'Ghost');
          cards(array_weaknesses);
          break;
        case 'Fire':
          array_weaknesses = filterWeakness(data, 'Fire');
          cards(array_weaknesses);
          break;
        case 'Ice':
          array_weaknesses = filterWeakness(data, 'Ice');
          cards(array_weaknesses);
          break;
        case 'Fighting':
          array_weaknesses = filterWeakness(data, 'Fighting');
          cards(array_weaknesses);
          break;
        case 'Normal':
          array_weaknesses = filterWeakness(data, 'Normal');
          cards(array_weaknesses);
          break;
        case 'Grass':
          array_weaknesses = filterWeakness(data, 'Grass');
          cards(array_weaknesses);
          break;
        case 'Psychic':
          array_weaknesses = filterWeakness(data, 'Psychic');
          cards(array_weaknesses);
          break;
        case 'Rock':
          array_weaknesses = filterWeakness(data, 'Rock');
          cards(array_weaknesses);
          break;
        case 'Ground':
          array_weaknesses = filterWeakness(data, 'Ground');
          cards(array_weaknesses);
          break;
        case 'Rock"':
          array_weaknesses = filterWeakness(data, 'Rock"');
          cards(array_weaknesses);
          break;
        case 'Poison':
          array_weaknesses = filterWeakness(data, 'Poison');
          cards(array_weaknesses);
          break;
        case 'Flying':
          array_weaknesses = filterWeakness(data, 'Flying');
          cards(array_weaknesses);
          break;
        default:
          break;
      }
    }
  }
});




let order = document.getElementsByClassName('order');//recorre los checkbox
document.getElementById('orderPokemon').addEventListener('change', () => {
  for (let i = 0; i < order.length; i++) {
    if (order[i].checked === true) {
      let pokemon_order = order[i].value;  //console.log(type_pokemon); memuestra el value de lo que selecciono el usuario en el menu
      const textOne = document.querySelector('#text1InitialPage'); // creo una variable para seleccionar el id            
      textOne.textContent = '';                                    //modifico el texto del contenedor que lo quiero vacio
      const textTwo = document.querySelector('#text2InitialPage');
      textTwo.textContent = '';
      rootFather.setAttribute('style', 'background-image:url(./Img/pasto2.jpg)');
      let array_order = [];
      switch (pokemon_order) {
        case 'a_z':
          array_order = orderAlphabetically1(data, 'a_z'); //let names = array_type.map(title => title.name);//console.log(names);me imprime todos los nombres
          cards(array_order);
          break;                               //console.log(imagen);                                      
        case 'z_a':
          array_order = orderAlphabetically2(data, 'z_a');
          cards(array_order);
          break;
        case 'menor_mayor':
          array_order = orderNumber1(data, 'menor_mayor');
          cards2(array_order);
          break;
        case 'mayor_menor':
          array_order = orderNumber2(data, 'mayor_menor');
          cards2(array_order);
          break;
        default:
          break;
      }
    }
  }
});