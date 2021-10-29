import React from 'react';
import '../Service/Service.css'
import img from '../../Img/section.png'

const Service = () => {
    return (
        <section className='service-section'>
            <div className="row ms-5 me-5">
                <div className="col-md-12 text-center mt-5 pt-5 ">
                    <h5>SERVICES WE PROVIDE</h5>
                    <p>We are working with both individuals and businesses from all over the globe <br />
                        to create awesome websites and applications.
</p>
                </div>
               <div className="row mt-5">
                   <div className="col-md-3 text-center ">
                        <img style={{backgroundColor: '#17C2A4'}} className="" src={img} alt="" />
                        <h6 className="mt-2">Branding</h6>
                        <p>lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip</p>
                   </div>
                   <div className="col-md-3  text-center">
                   <img style={{backgroundColor: '#17C2A4'}}src={img} alt="" />
                        <h6 className="mt-2">Branding</h6>
                        <p>lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip</p>
                       </div>
                       <div className="col-md-3  text-center">
                       <img style={{backgroundColor: '#17C2A4'}}src={img} alt="" />
                        <h6 className="mt-2">Branding</h6>
                        <p>lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip</p>
                       </div>
                       <div className="col-md-3  text-center">
                       <img style={{backgroundColor: '#17C2A4'}}src={img} alt="" />
                        <h6 className="mt-2">Branding</h6>
                        <p>lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip</p>
                       </div>

               </div>
            </div>
        </section>
    );
};

export default Service;