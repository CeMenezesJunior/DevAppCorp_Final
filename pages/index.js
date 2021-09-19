import Head from "next/head"
import { useRouter, UseRouter } from "next/router"

function Home(props){
    const router = useRouter()

    const DeleteVolume = async (vol) => {
        const requestOption = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( vol )
        }
        await fetch('https://uff-devappcorp-api.herokuapp.com/volume',requestOption)
    }

    return (
        <div>
            <Head>
                <title>Página Inicial</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="shortcut icon" href="https://avatars.githubusercontent.com/u/46033513?v=4"/>
            </Head>
            
                <button className="botaoCriar" onClick={()=> router.push({
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
                                <div className="botoesLista">
                                    <button className="botaoPrincipal" onClick={()=> router.push({
                                        pathname:'/VolumeDetalhe/[id]',
                                        query: {id:volume.id}
                                    })}>
                                        Detalhes
                                    </button>
                                    <form onSubmit={async() => {await DeleteVolume(volume)}}>
                                        <input className="botaoDeletar" type="submit" value="Deletar"></input>
                                    </form>
                                </div>
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