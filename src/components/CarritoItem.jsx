import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const CarritoItem=({libro})=>{

    const {  updateCant , EliminarLibro, ActualizarCantidad} = useContext(GlobalContext);

     const handleEliminar=(e)=>
    {
        EliminarLibro(libro);
    }
    const handleModificar=(e)=>
    {
        const nuevaCantidad = Number(e.target.value);
        console.log('nueva cantidad ', { ...libro, cantidad: (nuevaCantidad  ) });
         
        ActualizarCantidad({ ...libro, cantidad: (nuevaCantidad  ) })
    }

return (
       
    <div className='card-item'  >
        <table>
            <tbody>
        <tr>
            <td> 
            <input id="cantidad" value={libro.cantidad} type="number" onChange={handleModificar} ></input>
             </td> 
            <td> {libro.libro} </td>
            <td>$ {libro.precioUnitario * libro.cantidad} </td>
        </tr>
        </tbody>
        </table>
    <button className='btnEliminar'  onClick={handleEliminar} >Eliminar</button>
    <hr />

    </div>   
);

}
export default CarritoItem;