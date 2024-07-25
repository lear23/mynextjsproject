import Link from 'next/link'

export default function NotFound(){
    return <section>
        <h1>404</h1>
        <h6>Pagina no encontrada</h6>
        <Link href="/">Volver</Link>
    </section>
}