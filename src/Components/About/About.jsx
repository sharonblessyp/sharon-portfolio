import React from "react";
import Go from "../../Icons/go.png";
import Py from "../../Icons/python.png";
import Cpp from "../../Icons/c++.png";
import React_img from "../../Icons/react.png";
import Linux from "../../Icons/linux.png";
import K8s from "../../Icons/k8s.png";
import Docker from "../../Icons/docker.png";
import Postgres from "../../Icons/postgresql.png";
import Tailwind from "../../Icons/tailwindCSS.png";
import Redis from "../../Icons/redis.png";
import MaterialUI from "../../Icons/materialUI.png";

const About = () => {
    const tools = [
        { label: "Go", img_link: Go },
        { label: "Python", img_link: Py },
        { label: "C/C++", img_link: Cpp },
        { label: "React", img_link: React_img },
        { label: "TailwindCSS", img_link: Tailwind },
        { label: "PostgreSQL", img_link: Postgres },
        { label: "Linux", img_link: Linux },
        { label: "K8S", img_link: K8s },
        { label: "Docker", img_link: Docker },
        { label: "Redis", img_link: Redis },
        { label: "Material UI", img_link: MaterialUI },
    ];

    // const companies = [
    //     { label: "ColorTokens", timePeriod: "July 2023 - Present", img_link: ColorTokens },
    // ];

    return (
        <div id="About" className="p-10 md:p-24">
            <h1 className="text-2xl md:text-4xl text-zinc-400 font-bold mb-2 ">About</h1>
            <p className="text-zinc-400 mb-10">I've played around with tech like</p>
            <div className="text-zinc h-full w-full flex flex-col md:flex-row gap-10">

                <div className="flex-1 grid grid-cols-3 sm:grid-cols-4 gap-6">
                    {tools.map(({ label, img_link }, index) => (
                        <div key={index} className="p-4 flex flex-col items-center hover:bg-zinc-700 rounded-md duration-200">
                            <img className="h-14 mb-2" src={img_link} alt={label} title={label} />
                            <p className="text-sm">{label}</p>
                        </div>
                    ))}
                </div>

                <div className="flex-1 flex flex-col items-start">
                    <p className="text-zinc-400 text-2xl mb-5">
                        I'm a passionate software developer with a keen interest in cybersecurity. I enjoy solving complex problems and building clean, efficient solutions.
                    </p>
                    <p className="text-zinc-400 text-2xl mb-10">
                        Beyond tech, I'm always curious and open to learning something new. In my free time, I enjoy video games, badminton and chess.
                    </p>
                    {/* {companies.map(({ label, timePeriod, img_link }, index) => (
                        <div key={index} className="p-6 flex flex-row items-center gap-6 bg-zinc-800 rounded-md hover:scale-105 duration-300">
                            <img className="h-20 w-20 object-contain" src={img_link} alt={label} title={label} />
                            <div className="flex flex-col items-start">
                                <h2 className="text-lg font-semibold">{label}</h2>
                                <p className="text-sm font-light">{timePeriod}</p>
                                <p>Built and optimized secure backend services and APIs, focusing on scalable microservices and system performance improvements.</p>
                            </div>
                        </div>
                    ))} */}
                </div>

            </div>
        </div>
    );
};

export default About;
