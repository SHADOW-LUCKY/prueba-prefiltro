/* contextos */
import { CollectionContext } from '../contexts/CollectionContext';
/* react functions */
import { useContext } from 'react';

export default function List() {
    const value = useContext(CollectionContext)

    const arraymenus = ['toppings','quesos','salsas','bordes']

    return (
        arraymenus.map((item) => (
          <div key={item} className='text-center text-white text-xl hover:bg-orange-400 cursor-pointer py-3 mb-2' onClick={() => value.setCollec(item)}>{`Ver ${item}`}</div>
        ))
    )
}
