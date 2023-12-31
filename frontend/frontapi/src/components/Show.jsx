/* react */
import { useState , useEffect, useContext} from 'react';
/* contextos */
import { CollectionContext } from '../contexts/CollectionContext';
/* componentes */
import Post from './Post';
/* axios */
import axios from 'axios';
/* Tailwind CSS */
import './all.css'

const Show = () => {
    /* useState */
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(false);
    /* contexto */
    const {collec} = useContext(CollectionContext)
    /* funciones */
    const deleteData = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:4579/${collec}/delete/${id}`);
            console.log(response);
            alert('Ingrediente Eliminado')
            window.location.reload(); 
        } catch (error) {
            console.log(error);
        }    
    }
    /* useEffect */
    useEffect(() => {          
        try {
            const fetchData = async () => {
                setLoad(true);
                const response = await fetch(`http://localhost:4579/${collec}/getall`);
                const res = await response.json();
                setData(res);
                setLoad(false);
            }
            fetchData();
            
        } catch (error) {
            console.log(error);
        }
    },[collec]);
    /* Return */
    return (
    <div className="bg-slate-400 flex md:w-full lg:w-5/6 flex-wrap h-screen  overflow-y-auto">
        
        <div className="absolute lg:flex w-full lg:w-5/6 lg:justify-start lg:p-2 hidden" >
            <label className="btn btn-primary absolute " htmlFor="modal-3" >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            </label>
        </div>
        
        {load?(<div className="absolute w-full lg:w-5/6 h-screen flex justify-center items-center">
            <div>
                <div className="spinner-wave spinner-xl">
	                <div className="spinner-wave-dot"></div>
	                <div className="spinner-wave-dot"></div>
	                <div className="spinner-wave-dot"></div>
	                <div className="spinner-wave-dot"></div>
                </div>
            </div>
        </div>):(<div className="flex flex-wrap justify-center h-screen">
        {data.map((item) => (
        <div className="lg:w-1/6 sm:w-60 md:w-1/4 m-2 w-full rounded overflow-hidden shadow-lg h-fit bg-slate-600 h-70" key={item._id}>
            <img className="w-full h-fit" src={item.imagen} alt="..."/>
                <div className="px-4 py-4">
                  <div className="font-bold text-xl mb-2">{item.name}</div>
                  <p className="text-gray-700 text-base">
                    {item.type? `Type: ${item.type}` : `Description: ${item.description}`}
                  </p>
                </div>
                <div className="flex content-end p-2 ">
                    <button type='button' className="rounded p-2 btn-solid-error" onClick={() => deleteData(item._id)} >Delete</button>
                </div>
              </div>
            ))}
        </div>)}
        <Post />
    </div>
    )
}


/* 
 */
export default Show