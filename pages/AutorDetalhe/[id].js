import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"

function Detalhe_Autor({ ListaAutores }){
    const router = useRouter()
    const id = getAutor()
    const autor = ListaAutores.find(element=> element.id === id)

    return(
        <div>

            <Head>
                <title>Página Inicial</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="shortcut icon" href="https://avatars.githubusercontent.com/u/46033513?v=4"/>
            </Head>
            <div className="detalheContainer">
                <p>Autor</p>
                <p>Id: {id}</p>
                <p>Nome: {autor.firstName} {autor.lastName}</p>
                <p>Ordem: {autor.ordem}</p>
                <button className="botaoCriar" onClick={()=> router.push({
                                            pathname:'/CriarEditarAutor/[id]/[artigoid]',
                                            query: {id:autor.id,artigoid:autor.artigo.id}
                                        })}>Editar autor</button>
                <Link href="/">
                    <button className="botaoPrincipal">Tela principal</button>
                </Link>
            </div>
        </div>
    )
}

export function getAutor(){
    const router =  useRouter()
    const { id } = router.query
    return Number(id)
}

Detalhe_Autor.getInitialProps = async (ctx) =>{
    const res = await fetch('https://uff-devappcorp-api.herokuapp.com/autor')
    const autores = await res.json()  
    return {ListaAutores:autores}
}

export default Detalhe_Autor