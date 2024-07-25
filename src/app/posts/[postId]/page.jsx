'use client'
import { Suspense } from "react"
import Posts from "../page"

import Link from 'next/link'

async function loadPost(id){
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await res.json()
  return data
}

async function Page({params}) {


 const post = await loadPost(params.postId)
  return (
    <div className="m-6">
      <h1>{post.id}. {post.title}</h1>
      <h2>{post.body}</h2>
      <Link href="/posts">Volver</Link>

      <hr />

      <div>Otras Publicaciones</div>
      
    <Suspense fallback={<div>Loading...</div>}>
      <Posts />
    </Suspense>
 

    </div>
  )
}

export default Page