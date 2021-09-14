import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"

function Detalhe_Volume({ ListaVolumes }){
    const router = useRouter()
    const id = getVolume()
    const volume = ListaVolumes.find(element=> element.id === id)
    return(
        <div>

            <Head>
                <title>Página Inicial</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="shortcut icon" href="https://avatars.githubusercontent.com/u/46033513?v=4"/>
            </Head>

            <p>Volume</p>
            <p style={{color:"black"}}>{id}</p>
            <p style={{color:"black"}}>{volume.sigla}</p>
            <button onClick={()=> router.push({
                                        pathname:'/CriarEditarVolume/[id]',
                                        query: {id:volume.id}
                                    })}>Editar volume</button>
            <Link href="/">
                <button>Tela principal</button>
            </Link>
            
        </div>
    )
}

export function getVolume(){
    const router =  useRouter()
    const { id } = router.query
    return Number(id)
}

Detalhe_Volume.getInitialProps = async (ctx) =>{
    const res = await fetch('https://uff-devappcorp-api.herokuapp.com/volume')
    const volumes = await res.json()  
    return {ListaVolumes:volumes}
}

export default Detalhe_Volume