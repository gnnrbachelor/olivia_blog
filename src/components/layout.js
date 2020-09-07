import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`

    let header = (
      <div className={"blogHeader"}>
      <h3
        style={{
          marginTop: 0,
          fontFamily: `UnifrakturMaguntia`,
          fontSize: `2em`,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/blog`}
        >
          {title}
        </Link>
      </h3>
      <Link to={`/`}><img src="https://dl.dropboxusercontent.com/s/mck5wau9di015xz/olivia_profile.jpg?dl=0" alt="Olivia Profile" className={"profilePic"}/></Link>
     </div>
    )

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        <div>© {new Date().getFullYear()}, Olivia Bachelor</div>
        <div className={"social"}>
          <a href={"https://www.instagram.com/olivewrztartan"}>Instagram</a>
          <a href={"https://twitter.com/devilwrztartan"}>Twitter</a>
          <a href={"https://m.facebook.com/Devilwearstartan-107017574465439/"}>Facebook</a>
           <a href={"https://www.depop.com/devilwearstartan/"}>Depop</a>
        </div>
      </footer>
    </div>
  )
}

export default Layout
