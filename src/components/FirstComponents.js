import React from 'react'

//casi no se usan los props
//debe estar F en mayusculas para que lo reconozca
export const FirstComponents = (props) => {
    const  {
        title,
        subtitle = 'Soy un subtitulo'
    } = props;

  return (
    <>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
    </>
    
    /* <Fragment>
        Main
        <h1>Esta es mi pagina</h1>
        <h2>Yeeee</h2>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
    </Fragment> */
  )
}
