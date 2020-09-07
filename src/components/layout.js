import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`

    let header = (
      <h3
        style={{
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
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
        </div>
      </footer>
    </div>
  )
}

export default Layout
