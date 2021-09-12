import Head from "next/head"
import Link from "next/link"

function CriarEditarVolume(props){
    return(
    <div>
        <h4>Criar editar volume</h4>
        {/* <form>
             <label>
                 titulo
                 <input type="text" name="name"/>
             </label>
             <input type="submit" value="Enviar"/>
        </form> */}
        <Link href="/">
            <button>
                Página Inicial
            </button>
        </Link>
    </div>
    )
}

export default CriarEditarVolume