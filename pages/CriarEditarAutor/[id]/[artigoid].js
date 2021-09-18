import router, { useRouter } from "next/router"
import { useState } from "react"

function CriarEditarAutor(props){
    const router = useRouter()
    const id = getAutor()
    const artigoId = getArtigo()
    const  artigo  = props.props.artigos.find ( element => element.id === artigoId)
    
    
    var autor = {order:0,firstName:"",middletName:"",lastName:"",afiliacaoOr:"",afiliacaoIn:"",pais:"",orcIn:"",artigo:artigo}
    if(id >= 1){
         autor  = props.props.autores.find(element => element.id === id)
    }
    
    const [aut,setAut] = useState(autor)

    const CriaOuEditaAutor = async (a) => {
        const requestOption = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( a )
        }
        const res = await fetch('https://uff-devappcorp-api.herokuapp.com/autor',requestOption)
        const autor = await res.json()
        console.log(autor)
        router.back()
    }

    function handleChange(evt){
        const value = evt.target.value
        console.log(JSON.stringify(value))
        setAut({
            ...aut,
            [evt.target.name]:value
        })
    }

    return(
    <div>
        <h4>Criar ou editar autor</h4>
        <form onSubmit={async () => {await CriaOuEditaAutor(aut)}}>
            <label>
                Order
                <input type="number" name="order" defaultValue={aut.order} onChange={handleChange} min="1"/>
            </label>

            <label>
                Primeiro Nome
                <input type="text" name="firstName" defaultValue={aut.firstName} onChange={handleChange}/>
            </label>

            <label>
                Nome do meio
                <input type="text" name="middleName" defaultValue={aut.middleName} onChange={handleChange}/>
            </label>

            <label>
                Último Nome
                <input type="text" name="lastName" defaultValue={aut.lastName} onChange={handleChange}/>
            </label>

            <label>
                Afiliação Original 
                <input defaultValue={aut.afiliacaoOr} name="afiliacaoOr" onChange={handleChange}></input>
            </label>

            <label>
                Afiliação em Inglês 
                <input defaultValue={aut.afiliacaoIn} name="afiliacaoIn" onChange={handleChange}></input>
            </label>

            <label>
                País
                <input defaultValue={aut.pais} name="pais" onChange={handleChange}></input>
            </label>

            <label>
                OrcIn
                <input type="text" name="orcIn" defaultValue={aut.orcIn} onChange={handleChange}/>
            </label>
            
            <input type="submit" value="Enviar"></input>
        </form>
    </div>
    )
    
}


export function getAutor(){
    const router =  useRouter()
    const { id } = router.query
    return Number(id)
}

export function getArtigo(){
    const router = useRouter()
    const { artigoid } = router.query
    return Number(artigoid)
}

CriarEditarAutor.getInitialProps = async (ctx) =>{
    const res = await fetch('https://uff-devappcorp-api.herokuapp.com/autor')
    const autores = await res.json()
    
    const resArtigo = await fetch('https://uff-devappcorp-api.herokuapp.com/artigo')
    const artigos = await resArtigo.json()  
    return{
        props: {
            autores, artigos, 
        },
    }
}

export default CriarEditarAutor