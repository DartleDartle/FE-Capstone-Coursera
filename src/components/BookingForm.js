import React, { useState } from 'react';

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        // Check if all the fields have been filled out
        if (!date || !time || !guests || !occasion) {
            // If not, alert the user and do not submit the form
            alert('Please fill in all fields.');
            return;
        }
        // If all fields are filled, submit the form
        props.SubmitForm({ date, time, guests, occasion });
    }

    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset className='formstyle'>
                        <div>
                            <label htmlFor='book-date'>Choose Date</label>
                            <input type="date" onChange={(e) => setDate(e.target.value)} id="book-date" value={date} required />
                        </div>
                        <div>
                        <label htmlFor='book-time'>Choose Time:</label>
                        <select id="book-time" value={time} onChange={(e) => setTime(e.target.value)} required>
                            <option value="">Select a time</option>
                            {
                                props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})
                            }
                        </select>
                        </div>
                        <div>
                            <label className="formElementstyle" htmlFor="book-guests">Number of Guests:</label>
                            <select 
                                id='book-guests' 
                                value={guests} 
                                onChange={(e) => setGuests(e.target.value)} 
                                required
                            >
                                <option value="">Select number of guests</option>
                                {
                                    
                                    Array.from({ length: 99 }, (_, i) => i + 1).map(number => (
                                        <option key={number} value={number}>{number}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div>
                            <label  htmlFor="book-occasion">Occasion:</label><br/>
                            <select id="book-occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                                <option value="">Select an occasion</option>
                                <option value="Birthday">Birthday</option>
                                <option value="Anniversary">Anniversary</option>
                                <option value="Normal Lunch/Dinner">Normal Lunch/Dinner</option>
                            </select>
                        </div>
                        <div className='btnReceive'>
                            <input aria-label='On Click' type='submit' value={"Make your reservation"} />
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;
