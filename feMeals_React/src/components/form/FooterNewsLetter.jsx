import React from 'react';
import { toast } from 'react-toastify';

const FooterNewsLetter = () => {

    const handleForm = (event) => {
        event.preventDefault()
        event.target.reset()
        toast.success("Thanks For Subscribe")
    }

    return (
        <>
            <form onSubmit={handleForm}>
                <input type="email" placeholder="Your Email" className="form-control" name="email" autoComplete='off' required />
                <button type="submit"> <i className="fas fa-arrow-right"></i></button>
            </form>
        </>
    );
};

export default FooterNewsLetter;