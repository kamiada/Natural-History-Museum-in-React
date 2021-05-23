/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Layout from "../Layout/layout";
import ContentPageBackground from "../../images/claudio-testa-iqeG5xA96M4-unsplash.jpg";
import "../../global_style.scss";
import "./content_styles.scss";
import ourScience from "../../images/paul-minami-_AH4fdMyYIg-unsplash.jpg";
import Tile from './Tile';

// const Content = () => {
//   return (
//     <>
//       <Layout>
//         <div className="content_wrapper">
//           {/* <img src={ContentPageBackground} alt="museum"></img> */}
//           <div className="panel_holder">
//             <div className="square_panel_holder">
//               <div className="square">
//                 <div className="square__image">
//                   {/* <img src={ourScience} alt="image of museum"></img> */}
//                 </div>
//                 <div className="square__text">Our science</div>
//               </div>
//               <div className="square">
//                 <div className="square__image">
//                   {/* <img src={ourScience} alt="image of museum"></img> */}
//                 </div>
//                 <div className="square__text">Become our member</div>
//               </div>
//               <div className="square">
//                 <div className="square__image">
//                   {/* <img src={ourScience} alt="image of museum"></img> */}
//                 </div>
//                 <div className="square__text">Try at home</div>
//               </div>
//             </div>
//             <div className="long_panel">
//               <div className="title">
//                 OUR BROKEN PLANET: How we got here and ways to fix it
//               </div>
//             </div>
//             <div className="square_panel_holder">
//               <div className="square">
//                 <div className="square__image">
//                   {/* <img src={ourScience} alt="image of museum"></img> */}
//                 </div>
//                 <div className="square__text">British wildlife</div>
//               </div>

//               <div className="square">
//                 <div className="square__image">
//                   {/* <img src={ourScience} alt="image of museum"></img> */}
//                 </div>
//                 <div className="square__text">Anthropocene</div>
//               </div>

//               <div className="square">
//                 <div className="square__image">
//                   {/* <img src={ourScience} alt="image of museum"></img> */}
//                 </div>
//                 <div className="square__text">Science News</div>
//               </div>

//               <div className="square">
//                 <div className="square__image">
//                   {/* <img src={ourScience} alt="image of museum"></img> */}
//                 </div>
//                 <div className="square__text">What on Earth?</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Layout>
//     </>
//   );
// };

const Content = () => {
  return (
    <>
      <Layout>
        <div className="content_wrapper">
        <Tile image={ourScience} alt_text="museum" text="Our science"/>
        <Tile image={ourScience} alt_text="museum" text="Our science"/>
        <Tile image={ourScience} alt_text="museum" text="Our science"/>
        </div>
      </Layout>
    </>
  );
};

export default Content;
