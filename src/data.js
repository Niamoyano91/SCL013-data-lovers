
//Filtro por tipo//
export const filterType=(data, value)=>{
  const array = [];
  data.forEach(object =>{
   const typesPokemon = (object.type);//imprime todos los tipos de elementos de pokemon
   typesPokemon.forEach(seeType =>{
     if(seeType === value){
       array.push(object);//console.log(array);// imprime todos los objetos de pokemones tipo agua
      } 
    })
  });
  return array;
};


//Filtro por debilidad//
export const filterWeakness=(data, value)=>{
  const array = [];
  data.forEach(obj =>{
   const WeaknessPokemon = (obj.weaknesses);//imprime todos los tipos de elementos de pokemon
   WeaknessPokemon.forEach(seeWeakness=>{
     if(seeWeakness === value){
       array.push(obj);//console.log(array);// imprime todos los objetos de pokemones tipo agua
      } 
    })
  });
  return array;
};


//Filtro por orden Alfabetico A~Z//
export  const  orderAlphabetically1  =  ( data )  =>  {
  const orderAlphabeticallyA =  data. sort ( ( objeto1 ,  objeto2 )  =>  ( ( objeto1 . name  >  objeto2 . name ) ? 1 : - 1 ) ) ;
  return orderAlphabeticallyA;
} ;

//Filtro por orden Alfabetico Z~A//
export  const  orderAlphabetically2  =  ( data )  =>  {
  const orderAlphabeticallyD =  data. sort ( ( objeto1 ,  objeto2 )  =>  ( ( objeto1 . name  >  objeto2 . name ) ? -1 : 1 ) ) ;
  return orderAlphabeticallyD;
} ;

//Filtro por orden númerico ascendente//
export  const  orderNumber1  =  ( data )  =>  {
  const orderNumberA=  data. sort ( ( objeto1 ,  objeto2 )  =>  ( ( objeto1 . num  >  objeto2 . num ) ? 1 : -1 ) ) ;
  return orderNumberA;
} ;

//Filtro por orden númerico descendente//
export  const  orderNumber2  =  ( data )  =>  {
  const orderNumberD =  data. sort ( ( objeto1 ,  objeto2 )  =>  ( ( objeto1 . num  >  objeto2 . num ) ? -1 : 1 ) ) ;
  return orderNumberD;
} ;

//Filtro por busqueda//
export const search = (array, incomeInput) => array.filter( // filter crea un array con todos los elementos que cumplan la condición name
  (obj) => obj.name.toLowerCase().startsWith(incomeInput), // El método startsWith() indica si un string inicia con los caracteres de otro string, regresando true o false según sea el caso.
);


