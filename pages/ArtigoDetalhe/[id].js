import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"

function Detalhe_Artigo(props){
    const router = useRouter()
    const id = getArtigo()
    const artigo = props.props.artigos.find(element=> element.id === id)
    const autores = props.props.autores.filter(element=> element.artigo.id === id)

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

            <p>Artigo</p>
            <p style={{color:"black"}}>{id}</p>
            <p style={{color:"black"}}>{artigo.tituloOr}</p>
            <button onClick={()=> router.push({
                                        pathname:'/CriarEditarArtigo/[id]/[volumeid]',
                                        query: {id:artigo.id,volumeid:artigo.volume.id}
                                    })}>Editar artigo</button>
            <Link href="/">
                <button>Tela principal</button>
            </Link>
            
            <button onClick={()=> router.push({
                                        pathname:'/CriarEditarAutor/[id]/[artigoid]',
                                        query: {id:0,artigoid:artigo.id}
                                    })}>Criar autor</button>

            {
                autores.map((autor)=>{
                    return(
                        <article className="postsContainer__post">
                            <p style={{color:"black"}}>
                                {autor.firstName} {autor.lastName}
                            </p>
                            <button onClick={()=> router.push({
                                        pathname:'/AutorDetalhe/[id]',
                                        query: {id:autor.id}
                                    })}>
                                        Detalhes
                            </button>
                            <form onSubmit={async() => {await DeleteAutor(autor)}}>
                                <input type="submit" value="Deletar"></input>
                            </form>
                        </article>  
                    )
                })
            }
            
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