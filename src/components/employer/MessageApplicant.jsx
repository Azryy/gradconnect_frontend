import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

const MessageApplicant = () => {
    const form = useRef();
    const sendMail = (e)=>{
        e.preventDefault();

        emailjs
          .sendForm('service_5p2yf59', 'template_zk5wza9', form.current, {
            publicKey: 'cqcQ-KZF48GznFCc6',
          })
          .then(
            () => {
                toast.success('Message sent successfully');
              console.log('SUCCESS!');
            },
            (error) => {
                toast.error('Failed to send message');
              console.log('FAILED...', error.text);
            },
          );
          e.target.reset();
    }
    return (
        <div className='flex items-center justify-center '>
            <form ref={form} onSubmit={sendMail} action="" className='flex flex-col items-center justify-center mt-[5%]'>
                <h1 className='flex items-center justify-center font-semibold text-3xl my-4'>Message your Applicant</h1>
                <Input name="user_name" className='my-2' type="text" placeholder="Enter your full name"></Input>
                <Input name="user_email" className='my-2' type="text" placeholder="Enter your email"></Input>
                <Input name="applicant_email" className='my-2' type="text" placeholder="Enter applicant email"></Input>
                <Input name="subject" className='my-2' type="text" placeholder="Enter the subject"></Input>

                <textarea name='message' className='w-96 h-40 my-2 p-2 border' placeholder="Enter your message to the applicant" cols={50} rows={7}></textarea>
                <Button type="submit" className='my-4'>Send Message</Button>
            </form>
        </div>
    )
}

export default MessageApplicant
