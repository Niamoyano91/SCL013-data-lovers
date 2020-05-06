import pokemonData from './data/pokemon/pokemon.js';
// import data from './data/lol/lol.js';
import {filterType} from './data.js';

// import data from './data/rickandmorty/rickandmorty.js';

//console.log(example, data);

//select.addEventListener('change', ()) => {

//}

let data= pokemonData.pokemon;
//console.log(data[0].type);

//data.forEach(objeto =>{ //imprime todos los objetos de la data
 // console.log(objeto);
//});

//data.forEach(objeto =>{
 // console.log(objeto.type);//imprime todos los tipos de pokemon
// });

//let pokemon= data.filter(objeto => objeto.name === "Bulbasaur");
//console.log(pokemon); busca los objetos y me muestra l que tiene el nombre Bulbasaur


//const array = [];
//data.forEach(objeto =>{
//const typesPokemon = (objeto.type);//imprime todos los tipos de elementos de pokemon
//typesPokemon.forEach(seeType =>{
   //if(seeType==="Water"){
     //array.push(objeto);//console.log(array);// imprime todos los pokemones tipo agua
    //console.log(array);
  // }
 // })
//});

const rootFather= document.getElementById('rootFather');
rootFather.innerHTML+=`<section id="banner">
<img src="img/imagen-inicial.jpg" alt="imagen pokemon primera generación">
</section>
<div id="root">
  <section id="text1InitialPage">
    <p>Conoce en detalle a cada Pokémon de la Primera Generación.
     Te mostraremos nuevas actualizaciones y mucho más!</p>
  </section>
  <section id="text2InitialPage">
   <p>Únete a otros Entrenadores de todos los rincones que ya han descubierto muchos Pokémon explorando 
    el mundo que les rodea.</p>
  </section>

</div>
<footer>
 <p>©2020 Niantic, Inc. ©2020 Pokémon. ©1995 - 2020 Nintendo / Creatures Inc. / GAME FREAK inc.</p>
</footer>`


// let typePokemon=document.getElementById('water');
// typePokemon.addEventListener('change', ()=>{
// const x=document.getElementById('water').value= 'water';// meda un on
//   console.log(x);
// const y=document.getElementById('bug').value= 'bug';
// console.log(y);
//   //const name= document.getElementsByName('Water')[0].name; //me da el nombre 
//   //console.log(name);

// });

//console.log(document.getElementsByClassName('type'));


//const showPokemon = (fullObject) => {
  //const rootFather= document.getElementById('rootFather');
 // rootFather.innerHTML+=

//};



let type = document.getElementsByClassName('type');//recorre los checkbox
document.getElementById('types').addEventListener('change', () => {
   for (let i = 0; i < type.length; i++) {
     if (type[i].checked === true) {
       let type_pokemon= type[i].value;  //console.log(type_pokemon); memuestra el value de lo que selecciono el usuario en el menu
       const textOne = document.querySelector('#text1InitialPage'); // creo una variable para seleccionar el id            
       textOne.textContent = '';                                    //modifico el texto del contenedor que lo quiero vacio
       const textTwo = document.querySelector('#text2InitialPage');              
       textTwo .textContent = '';
       rootFather.setAttribute('style','background-image:url(img/pasto.jpg)');
       let array_type=[];
       switch(type_pokemon){
         case 'Water':
           array_type=filterType(data,'Water'); //let names = array_type.map(title => title.name);//console.log(names);me imprime todos los nombres
           console.log(array_type);
         break;                               //console.log(imagen);                                      
         case 'Bug':
          array_type=filterType(data,'Bug');
          console.log(array_type);
        break; 
        case 'Dragon':
          array_type=filterType(data,'Dragon');
          console.log(array_type);
        break; 
        case 'Electric':
          array_type=filterType(data,'Electric');
          console.log(array_type);
        break; 
        case 'Ghost':
          array_type=filterType(data,'Ghost');
          console.log(array_type);
        break; 
        case 'Fire':
          array_type=filterType(data,'Fire');
          console.log(array_type);
        break; 
        case 'Ice':
          array_type=filterType(data,'Ice');
          console.log(array_type);
        break; 
        case 'Fighting':
          array_type=filterType(data,'Fighting');
          console.log(array_type);
        break; 
        case 'Normal':
          array_type=filterType(data,'Normal');
          console.log(array_type);
        break; 
        case 'Grass':
          array_type=filterType(data,'Grass');
          console.log(array_type);
        break; 
        case 'Psychic':
          array_type=filterType(data,'Psychic');
          console.log(array_type);
        break; 
        case 'Rock':
          array_type=filterType(data,'Rock');
          console.log(array_type);
        break; 
        case 'Ground':
          array_type=filterType(data,'Ground');
          console.log(array_type);
        break; 
        case 'Rock"':
          array_type=filterType(data,'Rock"');
          console.log(array_type);
        break; 
        case 'Poison':
          array_type=filterType(data,'Poison');
          console.log(array_type);
        break; 
        case 'Flying':
          array_type=filterType(data,'Flying');
          console.log(array_type);
        break;
        default:
        break; 
        }
      }
    }
  });





