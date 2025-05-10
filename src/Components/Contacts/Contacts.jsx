import React from 'react'
import { MdOutlineEmail } from "react-icons/md"
import { CiLinkedin } from "react-icons/ci"
import { FaGithub } from "react-icons/fa"


const Contacts = () => {
    const socialLinks = [
        {
            icon: MdOutlineEmail,
            href: "mailto:sharonblessyp2001@gmail.com"
        },
        {
            icon: CiLinkedin,
            href: "https://www.linkedin.com/in/sharon-blessy-p-383a58224/",
        },
        {
            icon: FaGithub,
            href: "https://github.com/sharonblessyp",
        },
    ];

    return (
        <div id="Contacts" className="p-10 md:p-24">
            <div className="text-zinc h-full w-full flex flex-col md:flex-row gap-y-10 md:gap-x-20">
                <div className="mb-12 lg:mb-0 lg:flex-col">
                    <h1 className="text-2xl md:text-4xl text-zinc-400 font-bold mb-2 ">Contact me for collaboration</h1>
                    <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] lg:max-w-[30ch]">Feel free to reach out!</p>
                    <div className="flex items-center gap-2 mt-auto">
                        {socialLinks.map(({ href, icon }, key) => (
                            <a
                                key={key}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 grid place-items-center ring-inset ring-2 ring-zinc-50/5 rounded-lg transition-[ackground-color,color] hover:bg-zinc-50 hover:text-zinc-950 active:bg-zinc-50/80"
                            >
                                {React.createElement(icon)}
                            </a>
                        ))}
                    </div>
                </div>
                <form
                    action="https://getform.io/f/apjnwlea"
                    method="POST"
                    className="xl:pl-10 2xl:pl-20">

                    <div className="md:grid md:items-center md:grid-cols-2 md:gap-2">
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className='="label'>
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                autoComplete="name"
                                required
                                placeholder="Enter your name"
                                className="text-field" />
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className='="label'>
                                Email
                            </label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                autoComplete="email"
                                required
                                placeholder="Enter your email"
                                className="text-field" />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="message"
                            className='="label'>
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            required
                            placeholder="Hello :)"
                            className="text-field resize-y min-h-32 max-h-80" >
                        </textarea>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary [&]:max-w-full w-full justify-center mb-20">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contacts