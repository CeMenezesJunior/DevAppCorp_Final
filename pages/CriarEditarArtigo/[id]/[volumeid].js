import router, { useRouter } from "next/router"
import { useState } from "react"

function CriarEditarArtigo(props){
    const router = useRouter()
    const id = getArtigo()
    const volumeId = getVolume()
    const  volume  = props.props.volumes.find ( element => element.id === volumeId)
    
    
    var artigo = {ordem:"",idioma:"",tituloOr:"",tituloIn:"",resumo:"",keyWordOr:"",keyWordIn:"",numPag:"",volume:volume}
    if(id >= 1){
         artigo  = props.props.artigos.find(element => element.id === id)
    }
    
    const [art,setArt] = useState(artigo)

    const CriaOuEditaArtigo = async (ar) => {
        const requestOption = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( ar )
        }
        const res = await fetch('https://uff-devappcorp-api.herokuapp.com/artigo',requestOption)
        const artigo = await res.json()
        console.log(artigo)
        router.back()
    }

    function handleChange(evt){
        const value = evt.target.value
        console.log(JSON.stringify(value))
        setArt({
            ...art,
            [evt.target.name]:value
        })
    }

    return(
    <div>
        <h4>Criar ou editar artigo</h4>
        <form className="formsContainer" onSubmit={async () => {await CriaOuEditaArtigo(art)}}>
            <label>
                Order
                <input type="text" name="ordem" defaultValue={art.ordem} onChange={handleChange} min="1"/>
            </label>

            <label>
                Idioma
                <input type="text" name="idioma" defaultValue={art.idioma} onChange={handleChange}/>
            </label>

            <label>
                Titulo Original
                <input type="text" name="tituloOr" defaultValue={art.tituloOr} onChange={handleChange}/>
            </label>

            <label>
                Titulo em inglês
                <input defaultValue={art.tituloIn} name="tituloIn" onChange={handleChange}></input>
            </label>

            <label>
                Resumo 
                <textarea defaultValue={art.resumo} name="resumo" onChange={handleChange}></textarea>
            </label>

            <label>
                Palavras chave Originais 
                <input defaultValue={art.keyWordOr} name="keyWordOr" onChange={handleChange}></input>
            </label>

            <label>
                Palavras chave em Inglês 
                <input defaultValue={art.keyWordIn} name="keyWordIn" onChange={handleChange}></input>
            </label>

            <label>
                Número de páginas
                <input type="text" name="numPag" defaultValue={art.numPag} onChange={handleChange} min="1"/>
            </label>
            
            <input type="submit" value="Enviar"></input>
        </form>
    </div>
    )
    
}


export function getArtigo(){
    const router =  useRouter()
    const { id } = router.query
    return Number(id)
}

export function getVolume(){
    const router = useRouter()
    const { volumeid } = router.query
    return Number(volumeid)
}

CriarEditarArtigo.getInitialProps = async (ctx) =>{
    const res = await fetch('https://uff-devappcorp-api.herokuapp.com/artigo')
    const artigos = await res.json()
    
    const resVolume = await fetch('https://uff-devappcorp-api.herokuapp.com/volume')
    const volumes = await resVolume.json()  
    return{
        props: {
            artigos, volumes, 
        },
    }
}

export default CriarEditarArtigo