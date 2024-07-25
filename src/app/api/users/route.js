import { NextResponse } from "next/server";


export async function GET(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return NextResponse.json(data)

}
export async function POST(request){

    const {name, apellido} = await request.json()
    console.log(name, apellido)

    return NextResponse.json({
        message: "Creando Datos"
    })
}
export function PUT(){

    return NextResponse.json({
        message: "Editando datos!!"
    })
}
export function DELETE(){

    return NextResponse.json({
        message: "Borrando datos!!"
    })
}
