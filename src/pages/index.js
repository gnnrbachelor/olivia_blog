import React from "react"
import { Link, graphql } from "gatsby"


export default function Index() {
  return (

   <div className={"indexWrapper"}>
     <div class="card">
       <div className={"nav"}>
         <a href={"https://www.instagram.com/olivewrztartan"}>Instagram</a>
         <a href={"https://twitter.com/devilwrztartan"}>Twitter</a>
         <a href={"https://m.facebook.com/Devilwearstartan-107017574465439/"}>Facebook</a>
      </div>
      <div className={"collageWrapper"}>

        <div className={"collage"}>  
          <div className={"blogTitle"}><Link to="blog"><h2>Blog</h2></Link></div> 
          <div className={"olivia"}><Link to="/"><img src="https://dl.dropboxusercontent.com/s/nqwesknwszrzkfw/olivia_collage.png?dl=0" alt="Olivia" /></Link></div>
        </div>
      </div>
     </div>
   </div>
  )
}

