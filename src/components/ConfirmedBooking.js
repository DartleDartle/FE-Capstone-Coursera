import React from 'react';
import GoBackTimer from './GoBackTimer';

const ConfirmedBooking = () => {
    return (
        <div className='confirm'>
            <div>
                <h1>Booking has been <span>confirmed!</span></h1>
                <GoBackTimer/>
            </div>
        </div>
    );
};

export default ConfirmedBooking;