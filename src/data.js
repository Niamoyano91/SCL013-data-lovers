// estas funciones son de ejemplo

//export const example = () => {
  //return 'example';
//};

//export const anotherExample = () => {
 /// return 'OMG';
//};

/*document.getElementById("btnabrir").addEventListener("click",function(){
  document.getElementsByClassName("fondo_transparente")[0].style.display="block" 
  return false
})
document.getElementsByClassName("modal_cerrar")[0].addEventListener("click",function(){
   document.getElementsByClassName("fondo_transparente")[0].style.display="none" 
})*/





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

/*export const filterWeakness=(data, value)=>{
  const array = [];
  const arrayWeaknesses= data.filter(object=>object.weaknesses)
  arrayWeaknesses.forEach(seeWeaknesses =>{
    if(seeWeaknesses === value){
      array.push(arrayWeaknesses);
    };
  })
};*/

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

export  const  orderAlphabetically1  =  ( data )  =>  {
  const orderAlphabeticallyA =  data. sort ( ( objeto1 ,  objeto2 )  =>  ( ( objeto1 . name  >  objeto2 . name ) ? 1 : - 1 ) ) ;
  return orderAlphabeticallyA;
} ;

export  const  orderAlphabetically2  =  ( data )  =>  {
  const orderAlphabeticallyD =  data. sort ( ( objeto1 ,  objeto2 )  =>  ( ( objeto1 . name  >  objeto2 . name ) ? -1 : 1 ) ) ;
  return orderAlphabeticallyD;
} ;

export  const  orderNumber1  =  ( data )  =>  {
  const orderNumberA=  data. sort ( ( objeto1 ,  objeto2 )  =>  ( ( objeto1 . num  >  objeto2 . num ) ? 1 : -1 ) ) ;
  return orderNumberA;
} ;

export  const  orderNumber2  =  ( data )  =>  {
  const orderNumberD =  data. sort ( ( objeto1 ,  objeto2 )  =>  ( ( objeto1 . num  >  objeto2 . num ) ? -1 : 1 ) ) ;
  return orderNumberD;
} ;
