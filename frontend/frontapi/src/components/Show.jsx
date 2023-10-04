/* react */
import { useState , useEffect, useContext} from 'react';
/* contextos */
import { CollectionContext } from '../contexts/CollectionContext';

/* Tailwind CSS */
import './all.css'

const Show = (props) => {

    const [data, setData] = useState([]);

    const {collec} = useContext(CollectionContext)

    useEffect(() => {          
        try {
            const fetchData = async () => {
                const response = await fetch(`http://localhost:4579/${collec}/getall`);
                const res = await response.json();
                setData(res);
            }
            fetchData();
        } catch (error) {
            console.log(error);
        }
    },[collec]);
    /* Return */
    return (
        <div className="bg-slate-400 flex  md:w-full lg:w-5/6 flex-wrap justify-center overflow-y-auto ">
            {data.map((item) => (
        <div className="lg:w-1/6 sm:w-60 md:w-1/4 m-2 w-full  rounded overflow-hidden shadow-lg  bg-slate-600" key={item._id}  >
            <img className="w-full h-fit" src={item.imagen} alt="..."/>
                <div className="px-4 py-4">
                  <div className="font-bold text-xl mb-2">{item.name}</div>
                  <p className="text-gray-700 text-base">
                    Type: {item.type} 
                  </p>
                </div>
              </div>
            ))}
        </div>
    )
}

export default Show