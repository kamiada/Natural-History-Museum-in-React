import React from 'react';
import Layout from '../Layout/layout';
import BackgroundImage from '../../images/kevin-mueller-1gUES9J7Ph8-unsplash.jpg'
import '../../global_style.scss';
import './home_style.scss';

const Home = () => {
    return (
        <>
        <Layout>
            <img src={BackgroundImage} alt="museum" ></img>
            <div className="home_wrapper">
               <h1>
               WELCOME TO NATURAL HISTORY MUSEUM
               </h1> 
            </div>
        </Layout>
        </>
    )
}

export default Home;