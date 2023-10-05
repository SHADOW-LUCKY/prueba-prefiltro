import React ,{useContext,useState} from 'react'
import axios from 'axios'
import { CollectionContext } from '../contexts/CollectionContext';
export default function Post() {
    const [name,setName] = useState('')
    const [description, setDescription] = useState('')
    const [type, setType] = useState('')
    const [imagen, setImagen] = useState('')
    const [available, setAvailable] = useState(true)

    const {collec} = useContext(CollectionContext)
    const postData = async (e) => {
       try {
            e.preventDefault()
            const response = await axios.post(`http://localhost:4579/${collec}/create`,
            collec === 'toppings'?(
                {name,type,imagen,available}
                ):(
                {name,description,imagen,available}
            ))
            console.log(response)
            alert('Ingrediente Agregado')
            window.location.reload();
        } catch (error) {
            console.log(error)
        } 
    }

  return (
    <div>
        <input className="modal-state" id="modal-3" type="checkbox" />
        <div className="modal ">
            <label className="modal-overlay"></label>
            <div className="modal-content flex flex-col gap-5 ">
                <label for="modal-3" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
                <div className="flex flex-col gap-2">
				<h2 className="text-center text-2xl font-semibold">Nuevo Ingrediente</h2>
			</div>

			<section>
				<div className="form-group">
					<div className="form-field">
						<label className="form-label">Nombre de {collec}</label>
						<input  type="text" className="input max-w-full" onChange={(e) => setName(e.target.value)} />
					</div>
                    {collec === 'toppings'?

                        <div className="form-field">
                            <label className="form-label">
                                <span>Tipo de {collec}</span>
                            </label>
                            <div className="form-control">
                                <select name="Type" id="" className="select" onChange={(e) => setType(e.target.value)}>
                                    <option value="Vegetables">Vegetables</option>
                                    <option value="Meat">Meat</option>
                                    <option value="Herbs">Herbs</option>
                                    <option value="Dairy">Dairy Products</option>
                                </select>
                            </div>
                        </div>:
                        <div className="form-field">
                            <label className="form-label">
                                <span>Descripcion </span>
                            </label>
                            <textarea onChange={(e) => setDescription(e.target.value)} placeholder={`Ej: este es el ejemplo de un ${collec}`} type="text" className="textarea textarea-solid" cols="30" rows="10"></textarea>
                        </div>

                    }

                    <div className="form-field">
                        <label className="form-label">
                            <span>Imagen</span>
                        </label>
                        <input onChange={(e) => setImagen(e.target.value)} placeholder='Pon un link Aqui' type="text" className="input max-w-full" />
                    </div>

					<div className="form-field pt-5">
						<div className="form-control justify-between">
							<button type="button" className="btn btn-primary w-full" onClick={postData}>Agregar {collec}</button>
						</div>
					</div>
				</div>

				
			</section>
            </div>
        </div> 
    </div>
  )
}


/* 
<article>
	<label className="btn btn-primary" htmlFor="modal-1">Open Modal</label>

	<input className="modal-state" id="modal-1" type="checkbox" />
	<div className="modal">
		<label className="modal-overlay" htmlFor="modal-1"></label>
		<div className="modal-content flex w-full flex-col gap-5 p-7">
			<label htmlFor="modal-1" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
			
		</div>
	</div>
</article>
*/