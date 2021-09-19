import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"

function Detalhe_Artigo(props){
    const router = useRouter()
    const id = getArtigo()
    const artigo = props.props.artigos.find(element=> element.id === id)
    const autores = props.props.autores.filter(element=> element.artigo.id === id)
    autores.sort(function(a ,b){
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

    const DeleteAutor = async (autor) => {
        const requestOption = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( autor )
        }
        await fetch('https://uff-devappcorp-api.herokuapp.com/autor',requestOption)
    }

    return(
        <div>

            <Head>
                <title>Página Inicial</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="shortcut icon" href="https://avatars.githubusercontent.com/u/46033513?v=4"/>
            </Head>
            <div className="detalheContainer">
                <p>Artigo</p>
                <p>Id: {id}</p>
                <p>Título Original: {artigo.tituloOr}</p>
                <p>Ordem: {artigo.ordem}</p>
                <button className="botaoCriar" onClick={()=> router.push({
                                            pathname:'/CriarEditarArtigo/[id]/[volumeid]',
                                            query: {id:artigo.id,volumeid:artigo.volume.id}
                                        })}>Editar artigo</button>
                <Link href="/">
                    <button className="botaoPrincipal" >Tela principal</button>
                </Link>
                
                <button className="botaoCriar" onClick={()=> router.push({
                                            pathname:'/CriarEditarAutor/[id]/[artigoid]',
                                            query: {id:0,artigoid:artigo.id}
                                        })}>Criar autor</button>
            </div>
            <div className="postsContainer">
            <p>Autores Associados</p>
            {
                autores.map((autor)=>{
                    return(
                        <article className="postsContainer__post">
                            <p>
                                {autor.firstName} {autor.lastName}
                            </p>
                            <div className="botoesLista">
                                <button className="botaoPrincipal" onClick={()=> router.push({
                                            pathname:'/AutorDetalhe/[id]',
                                            query: {id:autor.id}
                                        })}>
                                            Detalhes
                                </button>
                                <form onSubmit={async() => {await DeleteAutor(autor)}}>
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

export function getArtigo(){
    const router =  useRouter()
    const { id } = router.query
    return Number(id)
}

Detalhe_Artigo.getInitialProps = async (ctx) =>{
    const res = await fetch('https://uff-devappcorp-api.herokuapp.com/artigo')
    const artigos = await res.json()
    
    const resAutores = await fetch('https://uff-devappcorp-api.herokuapp.com/autor')
    const autores = await resAutores.json()

    return{
        props: {
            artigos, autores, 
        },
    }
}

export default Detalhe_Artigo