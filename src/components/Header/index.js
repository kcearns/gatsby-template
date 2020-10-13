import React from 'react'
import { StaticQuery, graphql  } from 'gatsby'
import Img from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <StaticQuery
        query = {graphql`
            query {
                Logo: file(relativePath: {eq: "logo.png"}) {
                    childImageSharp {
                    fixed(width: 150, height: 50) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                } 
            }
        `}
        render={data => (
            <nav className="bg-gray-200">
            <div className="container mx-auto px-6 py-2 flex justify-between items-center">
                <a href="/">
                <Img 
                    fixed={data.Logo.childImageSharp.fixed}
                    alt="logo"
                />
                </a>
                <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
                </div>
                <div className="hidden lg:block">
                <ul className="inline-flex">
                    <li><a className="px-4"><FontAwesomeIcon icon={faUserCircle} size="2x" /></a></li>
                </ul>
                </div>
            </div>
            </nav>
        )}
        />
    )
}

export default Header

