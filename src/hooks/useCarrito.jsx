import { useReducer } from 'react';

// Estado inicial
const initialState = {
  productos: [ ],
};

// Reducer
const listaCarritoReducer = (state, action) => {
  switch (action.type) {
    case 'AGREGAR':
      const existe = state.productos.find(p => p.id === action.payload.id);
      if (existe) {
        return {
          ...state,
          productos: state.productos.map(p =>
            p.id === action.payload.id
              ? { ...p, cantidad: p.cantidad + action.payload.cantidad }
              : p
          ),
        };
      }
      return {
        ...state,
        productos: [...state.productos, action.payload],
      };
    case 'UPDATECANT':
      const productoExistente = state.productos.find((item) => item.id === action.payload.id);
      console.log('actualizando ' +  action.payload.id );
      if (productoExistente &&  action.payload.cantidad >0){
       return {
        ...state,
        productos: state.productos.map(item =>
          item.id === action.payload.id
            ? { ...item, cantidad: (action.payload.cantidad ) }
            : item
        )
        }
      }
      else
      {
        return {
          ...state,
          productos: state.productos.filter(p => p.id !== action.payload.id),
        };
      }         
    case 'ELIMINAR':
      return {
        ...state,
        productos: state.productos.filter(p => p.id !== action.payload.id),
      };
    case 'LIMPIAR':
        return {
          ...state,
          productos: [],
        };

    default:
      return state;
  }
};

// Custom hook
export const useCarrito = () => {
  const [listaCarrito, dispatch] = useReducer(listaCarritoReducer, initialState);

  const AgregarLibro = libro => dispatch({ type: 'AGREGAR', payload: libro });
  const EliminarLibro = libro => dispatch({ type: 'ELIMINAR', payload: libro });
  const Limpiar = libro => dispatch({ type: 'LIMPIAR', payload: libro });
  const ActualizarCantidad = libro => dispatch({ type: 'UPDATECANT', payload: libro });

  return {
    listaCarrito,
    AgregarLibro,
    EliminarLibro,
    Limpiar,
    ActualizarCantidad
  };
};
