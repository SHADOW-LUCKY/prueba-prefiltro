import {createContext,useState} from 'react'

export const CollectionContext = createContext()

export function CollectionContextProvider(props) {
    const [collec , setCollec] = useState('toppings')
    return (
        <CollectionContext.Provider value={{
            collec,
            setCollec
            }} >
            {props.children}
        </CollectionContext.Provider>
    )
}
