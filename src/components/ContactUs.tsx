"use client"
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import React, { useState } from 'react'

type ContactForm = {
    firstName : string,
    lastName : string,
    email : string,
    message : string
}
function ContactUs() {

    const [formData , setFormData] = useState<ContactForm>({
        firstName : '',
        lastName : '',
        email : "",
        message : "",
    })
    const [status, setStatus] = useState<'idle' | 'success' | 'error' | 'loading'>('idle');

    const handleSubmit = async(e: React.FormEvent)=>{
        e.preventDefault();
        setStatus('loading')
        try {
            const res = await fetch("/api/send",{
                method : "POST",
                headers : {
                    'Content-Type' : 'application/json',
                },
                body : JSON.stringify({
                    firstName : `${formData.firstName}`,
                    lastName :  `${formData.lastName}`,
                    email : formData.email,
                    message : formData.message
                })
            })
            if(res.ok){
                setStatus('success')
                setFormData({ firstName: '', lastName: '', email: '', message: '' });

            }else{
                setStatus('error')
            }
            
        } catch (error) {
            setStatus('error')
            console.log(error)
        }

    }
  return (
    <section className="bg-black border-t-1 border-b-4 dark:bg-black ">
    < div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
        <div className='p-4 pl-5' >
            <p className="font-medium text-2xl font-mono text-purple-400 dark:text-purple-400 pl-4">Harsh Ranjan Jha</p>

            <p className="mt-2 text-base font-semibold font-mono text-zinc-300/70 md:text-base dark:text-zinc-300/70 pl-4">
            Aspiring Software Developer with expertise in web development. Proficient at problem-solving and creating efficient, scalable web solutions.
             Proven ability to tackle complex challenges and deliver high-quality results.
                </p>

                <div className='flex flex-row mt-4 gap-6 p-4'>
                    
                    <a href="https://x.com/thattallboy987" target="_blank" rel="noopener noreferrer">
                               <Twitter />
                              </a>
                             
                              <a href="https://github.com/harshjha987" target="_blank" rel="noopener noreferrer">
                              <Github />
                              </a>
                              <a href="https://www.linkedin.com/in/hrjha987/" target="_blank" rel="noopener noreferrer">
           <Linkedin />
          </a>
          <a href="https://www.instagram.com/_.that_tall_boy._/" target="_blank" rel="noopener noreferrer">
           <Instagram />
          </a>
          

                </div>
                <div className='p-4 text-sm'>
                    <p className='text-zinc-300/70 font-sans'>©2025. Harsh Ranjan Jha.</p>
                    <p className='text-zinc-300/70 font-sans'>All rights reserved.</p>
                </div>

            
        </div>
        

        
            

            <div className="p-4 py-6 rounded-lg bg-gray-800 dark:bg-gray-800 md:p-8">
                <form onSubmit={handleSubmit}>
                    <div className="-mx-2 md:items-center md:flex">
                        <div className="flex-1 px-2">
                            <label className="block mb-2 text-sm text-gray-200 dark:text-gray-200">First Name</label>
                            <input type="text" name='firstName' value= {formData.firstName} placeholder="John " onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            className="block w-full px-5 py-2.5 mt-2 text-gray-300 placeholder-gray-600 bg-gray-900 border border-gray-700 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className="flex-1 px-2 mt-4 md:mt-0">
                            <label className="block mb-2 text-sm text-gray-200 dark:text-gray-200">Last Name</label>
                            <input type="text" placeholder="Doe" value= {formData.lastName} name='lastName' onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                             className="block w-full px-5 py-2.5 mt-2
                              text-gray-300 placeholder-gray-600
                               bg-gray-900 border border-gray-700 rounded-lg
                                dark:placeholder-gray-600 dark:bg-gray-900
                                 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400
                                  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                    </div>

                    <div className="mt-4">
                        <label className="block mb-2 text-sm text-gray-200 dark:text-gray-200">Email address</label>
                        <input type="email" name='email' onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        value= {formData.email} placeholder="johndoe@example.com" className="block w-full px-5 py-2.5 mt-2 text-gray-300 placeholder-gray-600 bg-gray-900 border border-gray-700 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div className="w-full mt-4">
                        <label className="block mb-2 text-sm text-gray-200 dark:text-gray-200">Message</label>
                        <textarea name='message' value= {formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-300 placeholder-gray-600 bg-gray-900 border border-gray-700 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                    </div>

                    <button type='submit' disabled = {status === 'loading'}
                    className="w-full px-6 py-3 mt-4 
                    text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                       {status === 'loading' ? 'Sending...' : 'Send Message'}
                    </button>
                    {status === 'success' && (
              <p className="mt-2 text-green-500 text-sm font-medium">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="mt-2 text-red-500 text-sm font-medium">Failed to send message. Try again.</p>
            )}
                </form>
            </div>
        </div>
    
</section>
  )
}

export default ContactUs
