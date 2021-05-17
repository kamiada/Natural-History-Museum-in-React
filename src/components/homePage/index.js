import React from 'react';
import Layout from '../Layout/layout';
import BackgroundImage from '../../images/kevin-mueller-1gUES9J7Ph8-unsplash.jpg'

const Home = () => {
    return (
        <>
        <Layout>
            <div className="home_wrapper">
            <img src={BackgroundImage} alt="museum" ></img>
                Home page
            </div>
        </Layout>
        </>
    )
}

export default Home;