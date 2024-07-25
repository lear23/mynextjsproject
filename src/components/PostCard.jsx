"use client"
import Link from 'next/link'

function PostCard({ post }) {
    return(
        <div className='bg-gray-900 p-10'>
            <Link href={`/posts/${post.id}`}>
            <h3 className=' text-xl font-bold mb-4'>
                {post.id}. {post.title}
            </h3>
            </Link>
            <p className='text-slate-300'>{post.body}</p>
            <button onClick={() => {
                alert("Skarpa dig")
            }}>click</button>
        </div> 
   
    );
      
}

export default PostCard;