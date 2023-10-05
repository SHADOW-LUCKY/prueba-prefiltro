import React,{useContext} from 'react'
import axios from 'axios'
import {CollectionContext} from '../contexts/CollectionContext'
import Show from './Show'

export default function Delete() {
    const {collec} = useContext(CollectionContext)
    const deleteData = async (id) => {
        console.log(id);
      /*   try {
            const response = await axios.delete(`http://localhost:4579/${collec}/delete/${id}`);
            console.log(response);
            alert('Ingrediente Eliminado')
            window.location.reload();
        } catch (error) {
            console.log(error);
        }    */
    }
    return (
        <div>
            <Show d={deleteData}/>
        </div>
    )
}
