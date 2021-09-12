import Head from "next/head"
import Link from "next/link"

function Home(props){
    return (
        <div style={{backgroundColor:"green"}}>
            <Head>
                <title>Página Inicial</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="shortcut icon" href="https://avatars.githubusercontent.com/u/46033513?v=4"/>
            </Head>
            <div className="postsContainer">
                <h4>Volumes</h4>
                <article className="postsContainer_post">
                    <p>Volume nome</p>
                    <Link href="/volume_detalhe">
                        <button>
                            Detalhe
                        </button>
                    </Link>
                    <button>
                        Deletar
                    </button>
                </article>
                {/* {
                    props.repos.map((volume)=>{
                        <article className="postsContainer__post">
                            <a >
                                {volume.nome}
                            </a>
                            <a>
                                Detalhes
                            </a>
                            <a>
                                Deletar
                            </a>
                        </article>
                    })
                } */}
            </div>
        </div>
    )
}

export default Home