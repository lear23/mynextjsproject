'use client'
import {useRouter} from "next/navigation"//förut hette det next/router


export default function AboutPage (){
   const router = useRouter();
   
    return (
    <section className="m-10">
        <h1>Hello New World</h1>

        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, odit optio blanditiis earum harum illum similique officia dignissimos sed quae iure? Ullam voluptas veritatis, mollitia corrupti delectus eos soluta vero quia illum, repellat ut quae assumenda adipisci quos aperiam architecto esse culpa, necessitatibus reprehenderit illo placeat tenetur similique vitae. Sunt neque alias, numquam doloribus ipsam cum beatae repellat nobis consectetur illo obcaecati nihil perferendis debitis hic quas voluptas quaerat sit dicta vitae sed? Laboriosam natus dolorem quasi praesentium sit adipisci at, repudiandae optio fugit rerum tenetur delectus? Minus nobis in sint incidunt veniam nulla corrupti aliquid nam consequuntur, possimus animi.</p>

      <button className=" bg-sky-400 px-3 py-2 rounded-lg mt-4" onClick={()=>{
        //Query to the server.
          router.push("/")
    }}>click</button>

       
    </section>
    
    )   
}