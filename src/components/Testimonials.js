import React from 'react';
import testimonials from '../testimonials';

const Testimonials = () => {
    return (
            <div className='menu-container'>
            <div className='menu-header'>
                <h2>Testimonials</h2>
            </div>
            <div className='cards2'>
             {
                testimonials.map(testimonial => (
                <div key={testimonial.id} className='testimonials'>
                    <div className='card-container'>
                        <img src={testimonial.image} alt=''/>
                        <h5>{testimonial.name}</h5>                                
                    </div>            
                    <p>{testimonial.description}</p>
                </div>
                
                ))
          }
        </div>

        </div>
    );
};

export default Testimonials;