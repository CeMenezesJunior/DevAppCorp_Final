import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"

function Detalhe_Volume(props){
    const router = useRouter()
    const id = getVolume()
    const volume = props.props.volumes.find(element => element.id === id)
    const artigos = props.props.artigos.filter(element => element.volume.id === id)
    
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
            
            <button onClick={()=> router.push({
                                        pathname:'/CriarEditarArtigo/[id]/[volumeid]',
                                        query: {id:0,volumeid:volume.id}
                                    })}>Criar artigo</button>
            
            {
                artigos.map((artigo)=>{
                    return(
                        <article className="postsContainer__post">
                            <p style={{color:"black"}}>
                                {artigo.tituloOr}
                            </p>
                            <button onClick={()=> router.push({
                                        pathname:'/ArtigoDetalhe/[id]',
                                        query: {id:artigo.id}
                                    })}>
                                        Detalhes
                            </button>
                            <button>
                                Excluir
                            </button>

                        </article>
                    )
                })
            }
            
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

    const resArtigo = await fetch('https://uff-devappcorp-api.herokuapp.com/artigo')
    const artigos = await resArtigo.json()

    return{
        props: {
            artigos, volumes, 
        },
    }
}

export default Detalhe_Volume