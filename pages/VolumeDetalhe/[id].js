import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"

function Detalhe_Volume(props){
    const router = useRouter()
    const id = getVolume()
    const volume = props.props.volumes.find(element => element.id === id)
    const artigos = props.props.artigos.filter(element => element.volume.id === id)
    artigos.sort(function(a ,b){
        if(a.ordem<b.ordem){
            return -1
        }
        if(a.ordem>b.ordem){
            return 1
        }
        else{
            return 0
        }
    })

    const DeleteArtigo = async (artigo) => {
        const requestOption = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( artigo )
        }
        await fetch('https://uff-devappcorp-api.herokuapp.com/artigo',requestOption)
    }

    return(
        <div>

            <Head>
                <title>Página Inicial</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="shortcut icon" href="https://avatars.githubusercontent.com/u/46033513?v=4"/>
            </Head>
            <div className="detalheContainer">
                <p>Volume</p>
                <p>Id: {id}</p>
                <p>Sigla: {volume.sigla}</p>
                <p>Número Evento: {volume.numEvento}</p>
                <p>Data Inicio: {volume.dataInicio}</p>
                <p>Descrição em Inglês: {volume.descricaoEN}</p>
                <p>Descrição em Português: {volume.descricaoPT}</p>
                <button className="botaoCriar" onClick={()=> router.push({
                                            pathname:'/CriarEditarVolume/[id]',
                                            query: {id:volume.id}
                                        })}>Editar volume</button>
                <Link href="/">
                    <button className="botaoPrincipal">Tela principal</button>
                </Link>
                
                <button className="botaoCriar" onClick={()=> router.push({
                                            pathname:'/CriarEditarArtigo/[id]/[volumeid]',
                                            query: {id:0,volumeid:volume.id}
                                        })}>Criar artigo</button>
                
            </div>
            <div className="postsContainer">
            <p> Artigos relacionados</p>
            {
                artigos.map((artigo)=>{
                    return(
                        <article className="postsContainer__post">
                            <p>
                                {artigo.tituloOr}
                            </p>
                            <div className="botoesLista">
                                <button className="botaoPrincipal" onClick={()=> router.push({
                                            pathname:'/ArtigoDetalhe/[id]',
                                            query: {id:artigo.id}
                                        })}>
                                            Detalhes
                                </button>
                                <form onSubmit={async() => {await DeleteArtigo(artigo)}}>
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