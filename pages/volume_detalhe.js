import Head from "next/head"
import Link from "next/link"
function Detalhe_Volume(props){
    return(
        <div>

            <Head>
                <title>Página Inicial</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="shortcut icon" href="https://avatars.githubusercontent.com/u/46033513?v=4"/>
            </Head>

            <p>Volume</p>
            <p>{props.titulo}</p>
            <Link href="/criar_editar_volume">
                <button>Editar volume</button>
            </Link>
            <Link href="/">
                <button>Tela principal</button>
            </Link>
            
        </div>
    )
}

export default Detalhe_Volume