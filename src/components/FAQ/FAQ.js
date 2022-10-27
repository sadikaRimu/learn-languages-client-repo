import React from 'react';
import { Button, ToastContainer } from 'react-bootstrap';
import { toast } from 'react-toastify';

const FAQ = () => {
    const handleFAQSubmit = (event) => {
        // event.preventDefault();
        const questionField = document.getElementById('exampleFormControlTextarea1');
        const question = questionField.value;
        console.log(question);
        // event.target.reset();
        alert('your question has been submitted. we will answer within 2 hours');
    }
    return (
        <div>
            <ToastContainer />
            <h3 className='text-center'>Frequently ask question</h3>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Feel free to ask any course related question  </label>
                    <textarea name='question' className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    <Button onClick={handleFAQSubmit} className='mt-2' variant='primary'>Submit</Button>
                </div>
            </form >
        </div >
    );
};

export default FAQ;