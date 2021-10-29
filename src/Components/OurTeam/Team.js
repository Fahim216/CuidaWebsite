import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons'
import '../OurTeam/Team.css'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import fahim from '../../Img/IMG_20200204_135043.jpg';

const Team = () => {
    return (
      <section className='team-section'>
          <div className="row text-center ms-5 me-5 ">
             <div className="col-md-12 mt-5 mb-5">
                 <h5>MEET OUR BEAUTIFUL TEAM</h5>
                 <p>We are small team of designers and developers.Who helps brands with big ideas.</p>
             </div>

          </div>
         <div className="row ms-5 me-5">
             <div className="col-md-3  text-center">
             <img className="img-fluid rounded-circle profile-img" src={fahim} alt="" />
                 <h6>Anni Hayathe</h6>
                 <p>CEO/Marketing</p>
                 <p>lorem ipsum dolor sit amet, consectetur adip</p>
                 <div className="mb-4 social-links">
                <a href=""> <FontAwesomeIcon icon={faFacebook}/></a>
                <a href=""><FontAwesomeIcon icon={faTwitter}/></a>
                 <a href=""><FontAwesomeIcon icon={faInstagram}/></a>
                 </div>
             </div>
             
             <div className="col-md-3  text-center">
             <img className="img-fluid rounded-circle profile-img" src={fahim} alt="" />
                 <h6>Anni Hayathe</h6>
                 <p>CEO/Marketing</p>
                 <p>lorem ipsum dolor sit amet, consectetur adip</p>
                 <div className="mb-4 social-links">
                <a href=""> <FontAwesomeIcon icon={faFacebook}/></a>
                <a href=""><FontAwesomeIcon icon={faTwitter}/></a>
                 <a href=""><FontAwesomeIcon icon={faInstagram}/></a>
                 </div>
                 </div>
                 <div className="col-md-3  text-center">
                 <img className="img-fluid rounded-circle profile-img" src={fahim} alt="" />
                 <h6>Anni Hayathe</h6>
                 <p>CEO/Marketing</p>
                 <p>lorem ipsum dolor sit amet, consectetur adip</p>
                 <div className="mb-4 social-links">
                <a href=""> <FontAwesomeIcon icon={faFacebook}/></a>
                <a href=""><FontAwesomeIcon icon={faTwitter}/></a>
                 <a href=""><FontAwesomeIcon icon={faInstagram}/></a>
                 </div>
                 </div>
                 <div className="col-md-3  text-center">
                 <img className="img-fluid rounded-circle profile-img" src={fahim} alt="" />
                 <h6>Anni Hayathe</h6>
                 <p>CEO/Marketing</p>
                 <p>lorem ipsum dolor sit amet, consectetur adip</p>
                 <div className="mb-4 social-links">
                <a href=""> <FontAwesomeIcon icon={faFacebook}/></a>
                <a href=""><FontAwesomeIcon icon={faTwitter}/></a>
                 <a href=""><FontAwesomeIcon icon={faInstagram}/></a>
                 </div>
                 </div>
         </div>
      </section>
    );
};

export default Team;