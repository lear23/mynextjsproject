import { NextResponse } from "next/server";





export async function GET(request, {params}){


    const {searchParams} = new URL(request.url);
    console.log(searchParams)
    console.log(searchParams.get("name"))
    console.log(searchParams.get("username"))

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const data = await res.json()
    return NextResponse.json(data)


    return NextResponse.json('buscando usuario')
}