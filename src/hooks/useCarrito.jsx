import { useReducer } from 'react';

// Estado inicial
const initialState = {
  productos: [{ id: 1, libro: '1984', cantidad: 1, precioUnitario: 50 }],
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

    case 'ELIMINAR':
      return {
        ...state,
        productos: state.productos.filter(p => p.id !== action.payload.id),
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

  return {
    listaCarrito,
    AgregarLibro,
    EliminarLibro,
  };
};
