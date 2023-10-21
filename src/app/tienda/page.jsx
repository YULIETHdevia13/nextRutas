import Link from "next/link";
function Tienda ({children}){
    return <>
    <nav>
        <h1> seccion tienda</h1>
        <ul>
            <li> <Link href="/tienda/categoria">categorias</Link></li>
            <li> <Link href="/tienda/categoria/computadora">computadoras</Link></li>

        </ul>
    </nav>
    </>
}
export default Tienda;