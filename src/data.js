// estas funciones son de ejemplo

//export const example = () => {
  //return 'example';
//};

//export const anotherExample = () => {
 /// return 'OMG';
//};
export const filterType=(data, value)=>{
  const array = [];
  data.forEach(objeto =>{
   const typesPokemon = (objeto.type);//imprime todos los tipos de elementos de pokemon
   typesPokemon.forEach(seeType =>{
     if(seeType === value){
       array.push(objeto);//console.log(array);// imprime todos los objetos de pokemones tipo agua
      } 
    })
  });
  return array;
};
  
