import React from 'react'

function Hero() {
    return (
        <div className="py-20" style={{background: 'url("/heroBg.jpg")', 'background-size': 'cover', 'background-repeat': 'no-repeat'}}>
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold mb-2 text-white">
                A global Peer-to-Peer job market
                </h2>
                <h3 className="text-2xl mb-8 text-gray-200">
                Connect, Work and Earn
                </h3>

                <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
                <a href="#anonymous">Learn More</a>
                </button>
            </div>
        </div>
    )
}

export default Hero