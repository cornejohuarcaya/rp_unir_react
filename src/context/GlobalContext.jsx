import React, { createContext, useState } from 'react';
import {  useCarrito }  from '../hooks/useCarrito';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [sessionLanguage, setSessionLanguage] = useState("todos");

  //Manejo de carrito solo con contexto
  const [carrito , setCarrito]=useState( {productos: [{id:1, libro:'1984', cantidad:1, precioUnitario:50 }]} )
      console.log('carrito ' , carrito );

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const addLibro=(libro)=> {  
    const productoExistente = carrito.productos.find((item) => item.id === libro.id);

    if (productoExistente){
      console.log(' actualizando  cantidad ' + JSON.stringify(libro));
      const lista=  carrito.productos.map(item =>
        item.id === libro.id
          ? { ...item, cantidad: (item.cantidad + libro.cantidad) }
          : item
      );
      setCarrito( { productos:[...lista]});
    }
    else
    {
      console.log('agregando libro  ' + JSON.stringify(libro));
      setCarrito( { productos:[...carrito.productos, libro]});      
    }
  };
  const deleteLibro=(libro)=> {  
    const productoExistente = carrito.productos.find((item) => item.id === libro.id);

    if (productoExistente){
      console.log(' borrando  producto ' + JSON.stringify(libro));
      const lista=  carrito.productos.filter(item => item.id !=  libro.id  );
      setCarrito( { productos:[...lista]});
    }
     
  };
  /////////
  const { listaCarrito, AgregarLibro, EliminarLibro } = useCarrito();

  const changeSessionLanguage = (newLanguage) => {
    setSessionLanguage(newLanguage);
  };

  return (
      <GlobalContext.Provider value={{ darkMode, sessionLanguage, carrito,  toggleDarkMode, changeSessionLanguage, addLibro, deleteLibro ,
        listaCarrito,AgregarLibro, EliminarLibro
      }}>
        {children}
      </GlobalContext.Provider>
  );
};
