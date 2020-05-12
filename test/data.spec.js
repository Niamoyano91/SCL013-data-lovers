import { filterType,filterWeakness,orderAlphabetically1,orderAlphabetically2,orderNumber1,orderNumber2} from '../src/data.js';


describe('Filter type', () => {
  test('is a function', () => {
    expect(typeof filterType).toBe('function');
  });

  it('Return filter type', () => {
    const inputType = [{
      name: 'Bulbasaur',
      type: ['Grass', 'Poison'],
    }, {
      name: 'Charmander',
      type: ['Fire'],
    }, {
      name: 'Butterfree',
      type: ['Bug', 'Flying'],
    }, {
      name: 'Ivysaur',
      type: ['Grass', 'Poison'],
    }];
    const outputType = [{
      name: 'Bulbasaur',
      type: ['Grass', 'Poison'],
    }, {
      name: 'Ivysaur',
      type: ['Grass', 'Poison'],
    }];

    expect(filterType(inputType, 'Poison')).toEqual(outputType);
  });
});


describe('Filter weakness fire', () => {
  test('is a function', () => {
    expect(typeof filterWeakness).toBe('function');
  });

  it('Return filter weakness', () => {
    const inputWeakness = [{
      name: 'Bulbasaur',
      weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'],
    }, {
      name: 'Venusaur',
      weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'],
    }, {
      name: 'Fearow',
      weaknesses: ['Electric', 'Rock'],
    }];
    const outputWeakness = [{
      name: 'Bulbasaur',
      weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'],
    }, {
      name: 'Venusaur',
      weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'],
    }];

    expect(filterWeakness(inputWeakness, 'Fire')).toEqual(outputWeakness);
  });
});

describe ( 'Order Alphabetically A~Z' ,  ( )  =>  {
  it ( 'is a function' ,  ( )  =>  {
    expect( typeof  orderAlphabetically1 ) . toBe ( 'function' ) ;
  } ) ;

  it ( 'Return array order alphabetically A~Z' ,  ( )  =>  {
    const  inputArrayOrder  =  [ {  name : 'Venusaur'  } ,  {  name  : 'Bulbasaur'  } ,  {  name  : 'Ivysaur'  } ,  {  name  : 'Charmander'  } ] ;
    const  outputArrayOrder  =  [ {  name  : 'Bulbasaur'  } ,  {  name  : 'Charmander'  } ,  {  name  : 'Ivysaur'  } ,  {  name  : 'Venusaur'  } ] ;
    expect( orderAlphabetically1( inputArrayOrder ) ).toEqual ( outputArrayOrder) ;
  } ) ;
} ) ;

describe ( 'Order Alphabetically Z~A' ,  ( )  =>  {
  it ( 'is a function' ,  ( )  =>  {
    expect ( typeof  orderAlphabetically2 ) . toBe ( 'function' ) ;
  } ) ;

  it ( 'Return array order alphabetically Z~A' ,  ( )  =>  {
    const  inputArrayOrder  =  [ {  name  : 'Bulbasaur'  } ,  {  name  : 'Ivysaur'  } ,  {  name  : 'Venusaur'  } ,  {  name  : 'Charmander'  } ] ;
    const  outputArrayOrder  =  [ {  name : 'Venusaur'  } ,  {  name : 'Ivysaur'  } ,  {  name : 'Charmander'  } ,  {  name : 'Bulbasaur'  } ] ;

    expect ( orderAlphabetically2( inputArrayOrder ) ) . toEqual ( outputArrayOrder ) ;
  } ) ;
} ) ;

describe ( 'Order number from least to greatest ' ,  ( )  =>  {
  it ( 'is a function' ,  ( )  =>  {
    expect ( typeof  orderNumber1 ) . toBe ( 'function' ) ;
  } ) ;

  it ( 'Return array order that orders numbers from least to greatest' ,  ( )  =>  {
    const  inputArrayOrder  =  [ {
      num : '002' ,
      nombre : 'Ivysaur' ,
    } ,  {
      num : '001' ,
      nombre : 'Bulbasaur' ,
    } ,  {
      num : '003' ,
      nombre : 'Venusaur' ,
    } ,  {
      num : '004' ,
      nombre : 'Charmander' ,
    } ] ;
    const  outputArrayOrder  =  [ {
      num : '001' ,
      nombre : 'Bulbasaur' ,
    } ,  {
      num : '002' ,
      nombre : 'Ivysaur' ,
    } ,  {
      num : '003' ,
      nombre : 'Venusaur' ,
    } ,  {
      num : '004' ,
      nombre : 'Charmander' ,
    } ] ;

    expect ( orderNumber1( inputArrayOrder ) ) . toEqual ( outputArrayOrder ) ;
  } ) ;
} ) ;

describe ( 'Order number from greatest to least' ,  ( )  =>  {
  it ( 'is a function' ,  ( )  =>  {
    expect ( typeof  orderNumber2 ) . toBe ( 'function' ) ;
  } ) ;

  it ( 'Return array order that orders numbers from greatest to least' ,  ( )  =>  {
    const  inputArrayOrder  =  [ {
      num : '002' ,
      nombre : 'Ivysaur' ,
    } ,  {
      num : '003' ,
      nombre : 'Venusaur' ,
    } ,  {
      num : '001' ,
      nombre : 'Bulbasaur' ,
    } ,  {  
      num : '004' ,
      nombre : 'Charmander' ,
    } ] ;
    const  outputArrayOrder  =  [ {
      num : '004' ,
      nombre : 'Charmander' ,
    } ,  { 
      num : '003' ,
      nombre : 'Venusaur' ,
    } ,  {
      num : '002' ,
      nombre : 'Ivysaur' ,
    } ,  {
      num : '001' ,
      nombre : 'Bulbasaur' ,
    } ] ;

    expect ( orderNumber2( inputArrayOrder ) ) . toEqual ( outputArrayOrder ) ;
  } ) ;
} ) ;
