import Head from "next/head"
import Link from "next/link"
import router, { useRouter } from "next/router"
import { useState } from "react"
import axios from "axios"

function CriarEditarVolume({ ListaVolumes }){
    const router = useRouter()
    const id = getVolume()
    var volume = {sigla:"",numEvento:"",dataInicio:"",descricaoEN:"",descricaoPT:""}
    if(id >= 1){
        volume = ListaVolumes.find(element => element.id === id)
    }
    
    const [vol,setVol] = useState(volume)

    const CriaOuEditaVolume = async (v) => {
        const requestOption = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( v )
        }
        const res = await fetch('https://uff-devappcorp-api.herokuapp.com/volume',requestOption)
        const volume = await res.json()
        console.log(volume)
        router.push('/')
    }

    function handleChange(evt){
        const value = evt.target.value
        setVol({
            ...vol,
            [evt.target.name]:value
        })
    }

    return(
    <div>
        <h4>Criar ou editar volume</h4>
        <form onSubmit={async () => {await CriaOuEditaVolume(vol)}}>
            <label>
                Sigla
                <input type="text" name="sigla" defaultValue={vol.sigla} onChange={handleChange}/>
            </label>
            <label>
                numEvento
                <input type="text" name="numEvento" defaultValue={vol.numEvento} onChange={handleChange}/>
            </label>
            <label>
                dataInicio
                <input type="date" name="dataInicio" defaultValue={vol.dataInicio} onChange={handleChange}/>
            </label>
            <label>
                descricaoEN
                <textarea defaultValue={vol.descricaoEN} name="descricaoEN" onChange={handleChange}></textarea>
            </label>
            <label>
                descricaoPT
                <textarea defaultValue={vol.descricaoPT} name="descricaoPT" onChange={handleChange}></textarea>
            </label>

            
            <input type="submit" value="Enviar"></input>
        </form>
    </div>
    )
    
}


export function getVolume(){
    const router =  useRouter()
    const { id } = router.query
    return Number(id)
}

CriarEditarVolume.getInitialProps = async (ctx) =>{
    const res = await fetch('https://uff-devappcorp-api.herokuapp.com/volume')
    const volumes = await res.json()  
    return {ListaVolumes:volumes}
}

export default CriarEditarVolume