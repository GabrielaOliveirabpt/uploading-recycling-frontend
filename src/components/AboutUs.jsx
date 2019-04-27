import React from 'react'
import Footer from './Footer'
import Header from './Header'

const AboutUs = props => {

    return (
        <React.Fragment>
            <Header />
            <div className="container">

                <h1 className="display-5 ml-5 pt-4 mb-5 mt-4">Who we are</h1>
                <div className="container">
                    <p>We are Andrea Rodriguez, Gabriela Oliveira, Philipp Langer and Sebastian Thauer. We are students of Web Development at Digital Career Institute and this is our final Project for the one year course.</p>

                    <p>We care about managing your waste and how you are managing your waste, the easy way.
                    Getting rid of your old wallpaper? Look up where it goes. Our app “WasteAid”
                    comes in handy for just that.</p>

                    <p>Technologies we used, got to work with, and learned about with in the process:</p>
                    <p><b>Frontend</b>: Javascript, React, Redux, Bootstrap, axios, OpenStreetMaps, Leaflet, Heroku.</p>
                    <p><b>Backend</b>: Node.js, Express, MongoDB, Mongoose, Morgan, Bcrypt, Jsonwebtoken, Cors.</p>

                </div>

            </div>
            <Footer />
        </React.Fragment>
    )
}


export default AboutUs