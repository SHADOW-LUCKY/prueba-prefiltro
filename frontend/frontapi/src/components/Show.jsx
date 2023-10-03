import { useState , useEffect} from 'react';
import './all.css'

export default () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        try {
            const fetchData = async () => {
                const response = await fetch('http://localhost:4579/toppings/getall');
                const res = await response.json();
                setData(res);
            }
            fetchData();
        } catch (error) {
            console.log(error);
        }
    },[]);
    return (
        <div className="bg-slate-400 flex gap-4 md:w-full lg:w-4/6 flex-wrap justify-center overflow-y-auto">
            {data.map((item) => (
                <div className="w-1/4 rounded overflow-hidden shadow-lg bg-slate-600" key={item.id}>
                <img className="w-full" src={item.imagen} alt="Sunset in the mountains"/>
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