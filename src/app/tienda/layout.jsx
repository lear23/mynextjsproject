const { Children } = require("react");

function TiendaLayout({Children}){
    return<>

    <nav>
        <h1>Hola Mundo</h1>
        <li>categorias</li>
        <li>productos</li>
        <li>TiendaE</li>
        

        </nav>
       {Children}
    </>
}

export default TiendaLayout