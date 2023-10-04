/* react */
import { useState ,useContext } from 'react';
/* imagenes */
import pizzaimg from '../assets/pizza.png';
/* componentes */
import Menu_list from './Menu_list';

const Menu = (props) => {
  /* useState */
  const [open, setOpen] = useState(false)
  /* Return */
    return (
     <div>
       <div className='menuChico'>
        <div className='bg-white py-3 fixed w-full shadow-md lg:hidden'>
            <button className='ml-4' onClick={() => setOpen(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
           
            <div className={`${!open && "hidden"} bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`} onClick={() => setOpen(false)}></div>
  
            <div className={`${open ? "w-80" : "w-0"} bg-cyan-600 min-h-screen fixed top-0 left-0 transition-all duration-300`}>
            
            <div className={`${!open && "hidden"} pt-3`}>
                <button className='ml-4 text-white mb-14' onClick={() => setOpen(false)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className='flex justify-center '>
                  <img
                    src={pizzaimg}
                    className="w-32 rounded-lg shadow-lg"
                    alt="Avatar" />
                </div>
                <div className='text-center text-white text-xl mb-5 '>
                  <h1>Welcome to The Pizza Api</h1>
                </div>
                  <Menu_list />
                </div>
            </div>
        </div>
       </div>

       <div className='menuGrande hidden  lg:flex '>
          <div className=' bg-cyan-600 h-screen ' style={{width:'16.6666666667vw'}}>
            <div className='flex justify-center mt-5'>
              <img
                src={pizzaimg}
                className="w-32 rounded-lg shadow-lg"
                alt="Avatar" />
            </div>
            <div className='text-center text-white text-xl mb-5 '>
              <h1>Welcome to The Pizza Api</h1>
            </div>
            <div>
              <Menu_list />
            </div>
          </div>
      </div> 
       
       
     </div>
    )
}

export default Menu