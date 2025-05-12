import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const CheackoutItem=({libro})=>{

    const { deleteLibro } = useContext(GlobalContext);

    const handleEliminar=(e)=>
    {
        deleteLibro(libro);
    }

return (
       
    <div className='car-item'  >
        <table>
            <tbody>
        <tr>
            <td>{libro.cantidad} </td> 
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
export default CheackoutItem;