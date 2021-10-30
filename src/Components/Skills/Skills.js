import React from 'react';
import '../Skills/Skills.css';

import $  from 'jquery';



const Skills = () => {
   
    $('svg.radial-progress').each(function( index, value ) { 
        $(this).find($('circle.complete')).removeAttr( 'style' );
      });
    $(window).scroll(function(){
        $('svg.radial-progress').each(function( index, value ) { 
          // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
          if ( 
              $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
              $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
          ) {
              // Get percentage of progress
             const percent = $(value).data('percentage');
              // Get radius of the svg's circle.complete
             const radius = $(this).find($('circle.complete')).attr('r');
              // Get circumference (2πr)
           const   circumference = 2 * Math.PI * radius;
              // Get stroke-dashoffset value based on the percentage of the circumference
            const  strokeDashOffset = circumference - ((percent * circumference) / 100);
              // Transition progress for 1.25 seconds
              $(this).find($('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 125);
          }
        });
      }).trigger('scroll');
    return (
       <section className="skill-section">
           <div className="row text-center ms-5 me-5 ">
             <div className="col-md-12 mt-5">
                 <h5>WE GOT SKILLS!</h5>
                 <p>lorem ipsum dolor sit amet, consectetur adip orem ipsum dolor sit amet, consectetur adip</p>
             </div>

          </div>
          <div className="row">
       
        <div className="col-md-3  text-center">
         <svg class="radial-progress" data-percentage="90" viewBox="0 0 80 80">
  <circle class="incomplete" cx="40" cy="40" r="35"></circle>
  <circle class="complete" cx="40" cy="40" r="35" style={{strokeDashoffset:'39.58406743523136'}}></circle>
  <text class="percentage" x="50%" y="57%" transform="matrix(0, 1, -1, 0, 80, 0)">90%</text>
</svg>
<p className=''>WEB DESIGN</p>
     </div>
     <div className="col-md-3 text-center">
         <svg class="radial-progress" data-percentage="70" viewBox="0 0 80 80">
  <circle class="incomplete" cx="40" cy="40" r="35"></circle>
  <circle class="complete" cx="40" cy="40" r="35" style={{strokeDashoffset:'39.58406743523136'}}></circle>
  <text class="percentage" x="50%" y="57%" transform="matrix(0, 1, -1, 0, 80, 0)">70%</text>
</svg>
<p className=''>HTML/CSS</p>
     </div>
     <div className="col-md-3 text-center">
         <svg class="radial-progress" data-percentage="70" viewBox="0 0 80 80">
  <circle class="incomplete" cx="40" cy="40" r="35"></circle>
  <circle class="complete" cx="40" cy="40" r="35" style={{strokeDashoffset:'39.58406743523136'}}></circle>
  <text class="percentage" x="50%" y="57%" transform="matrix(0, 1, -1, 0, 80, 0)">70%</text>
</svg>
<p className=''>GRAPHIC DESIGN</p>
     </div>
     <div className="col-md-3 text-center">
         <svg class="radial-progress" data-percentage="80" viewBox="0 0 80 80">
  <circle class="incomplete" cx="40" cy="40" r="35"></circle>
  <circle class="complete" cx="40" cy="40" r="35" style={{strokeDashoffset:'39.58406743523136'}}></circle>
  <text class="percentage" x="50%" y="57%" transform="matrix(0, 1, -1, 0, 80, 0)">80%</text>
</svg>
<p className=''>UI/UX</p>
     </div>
       
</div>
        
       </section>
    );
};

export default Skills;