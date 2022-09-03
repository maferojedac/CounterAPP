//rafc-React Functional Component (escribirlo + enter)
//rafce-React Functional Component
import React, {Fragment, useState} from 'react' //se importo Fragment
import { AddCounter } from './components/AddCounter';
import { FirstComponents } from './components/FirstComponents'; //se creo y se importo
import { ShowCounter } from './components/ShowCounter';
import { RemoveCounter } from './components/RemoveCounter';

import './styles.css'; //se creo e importo

//todo lo que este declarado fuera del componente, solo se ve a recargar 1 vez
//tiene que estar dentro del return
const myVariable = 'This is a variable'

export const Main = () => {

  const [number, setNumber] = useState(0);
  //recibe un valor y regresa un arreglo una funcion-mismo que L16 y L18
  /* const UseState = (value) => {
    return[value, ()]
  } */

  const onAdd = () => {
    setNumber(number+1)
    console.log('I added one')
  }

  const onRemove = () => {
    setNumber(number-1)
    console.log('I substracted one')
  }
  

//Solo puede regresar 1 item - como es un arbol de componenete, solamente puede regresar 1 raiz
//aunque puede estar encapsulado
//L20-creamos etiquetas propias y de propiedad se le esta pasando number
  return (
    <>
      <FirstComponents title = "Mi titulo" />
      <ShowCounter number={number}/>
      <AddCounter onAddPress={onAdd}/>  
      {/*para decimas extras-RemoveCounter=debe disminuir onRemovePress*/}  
      <RemoveCounter onRemovePress={onRemove}/> 
    </>
    
    /* <div>
    Main
    <h1>Esta es mi pagina</h1>
    <h2>Yeeee</h2>
    </div> */
  );
};
