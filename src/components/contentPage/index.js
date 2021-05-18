import React from 'react';
import Layout from '../Layout/layout';
import ContentPageBackground from '../../images/claudio-testa-iqeG5xA96M4-unsplash.jpg';
import '../../global_style.scss';

const Content = () => {
    return (
        <>
        <Layout>
            <img src={ContentPageBackground} alt="museum" ></img>
            <div className="content_wrapper">
                Content page
            </div>
        </Layout>
        </>
    )
}

export default Content;