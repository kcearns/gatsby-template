import React from 'react'
import { StaticQuery, graphql  } from 'gatsby'
import Img from 'gatsby-image'

function Features() {
    return (
        <StaticQuery
        query = {graphql`
            query {
                cryptoImage: file(relativePath: {eq: "crypto.png"}) {
                    childImageSharp {
                    fluid(maxWidth: 600) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                privacyImage: file(relativePath: {eq: "privacy.png"}) {
                    childImageSharp {
                    fluid(maxWidth: 600) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                reputationImage: file(relativePath: {eq: "reputation.png"}) {
                    childImageSharp {
                    fluid(maxWidth: 600) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }   
        `}
        render={data => (
            <section className="container mx-auto px-6 p-10">
                <div className="flex items-center flex-wrap mb-20">
                    <div className="w-full md:w-1/2">
                    <h4 className="text-3xl text-gray-800 font-bold mb-3" id="anonymous">Anonymous Identities</h4>
                    <p className="text-gray-600 mb-8">Authentication is provided with Metamask or any other Web3 wallet. No spam, advertising or recruiters to get in your way.</p>
                    </div>
                    <div className="w-full md:w-1/2">
                    <Img 
                        fluid={data.privacyImage.childImageSharp.fluid}
                        alt="privacy"
                    />
                    </div>
                </div>

                <div className="flex items-center flex-wrap mb-20">
                    <div className="w-full md:w-1/2">
                    <Img 
                        fluid={data.reputationImage.childImageSharp.fluid}
                        alt="reputation"
                    />
                    </div>
                    <div className="w-full md:w-1/2 pl-10">
                    <h4 className="text-3xl text-gray-800 font-bold mb-3">Reputation</h4>
                    <p className="text-gray-600 mb-8">Rather than your name, let your reputation speak for itself.</p>
                    </div>
                </div>

                <div className="flex items-center flex-wrap mb-20">
                    <div className="w-full md:w-1/2">
                    <h4 className="text-3xl text-gray-800 font-bold mb-3">Work and Earn Cryptocurrency</h4>
                    <p className="text-gray-600 mb-8">Cross border, government and bank safe cryptocurrency earnings.</p>
                    </div>
                    <div className="w-full md:w-1/2">
                    <Img 
                        fluid={data.cryptoImage.childImageSharp.fluid}
                        alt="cypto"
                    />
                    </div>
                </div>
        </section>
        )}
        />
    )
}

export default Features