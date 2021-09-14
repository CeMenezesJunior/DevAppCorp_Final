import Head from "next/head"
import Link from "next/link"
import { useRouter, UseRouter } from "next/router"

function Home(props){
    const router = useRouter()
    return (
        <div style={{backgroundColor:"green"}}>
            <Head>
                <title>Página Inicial</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="shortcut icon" href="https://avatars.githubusercontent.com/u/46033513?v=4"/>
            </Head>
            
                <button onClick={()=> router.push({
                                        pathname:'/CriarEditarVolume/[id]',
                                        query: {id:0}
                                        })}>Criar Volume</button>
            
            <div className="postsContainer">
                <h4>Volumes</h4>
                
                {
                    props.volumes.map((volume)=>{
                        return(
                            <article className="postsContainer__post">
                                <p>
                                    { volume.sigla }
                                </p>
                                    <button onClick={()=> router.push({
                                        pathname:'/VolumeDetalhe/[id]',
                                        query: {id:volume.id}
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
        </div>
    )
}


export async function getStaticProps(){
    const res = await fetch('https://uff-devappcorp-api.herokuapp.com/volume')
    var volumes = await res.json()
    
    return{
        props: {
            volumes,
        }
    }

}

export default Home