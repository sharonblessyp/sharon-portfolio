import LORA_Rescue_Bot from "../../Icons/lora_rescue_bot.png"
import Facial_Recognition from "../../Icons/face_recognition.png"
import ProjectCard from './ProjectCard';

const Projects = () => {
    const projects = [
        {
            title: "RESCUE BOT",
            description: `Used LoRa to establish communication between the base station
                          and the bot.The bot is navigated in disaster prone area based on
                          the commands received from base station.`,
            imgSrc: LORA_Rescue_Bot,
            projectLink: "https://github.com/sharonblessyp/LoRa-BASED-COMMUNICATION-FOR-SEARCH-AND-RESCUE-MISSION-ROBOT"

        },
        {
            title: "Smart Attendance",
            description: `Used Haar cascade classifier and Local Binary Pattern Histograms algorithm 
                          for facial recognition integrated with arduino and door lock for attendance management.`,
            imgSrc: Facial_Recognition,
            projectLink: "https://github.com/sharonblessyp/-FACIAL-RECOGNITION-ATTENDANCE-SYSTEM-USING-MACHINE-LEARNING"
        },
    ];

    return (
        <div id="Projects" className="p-10 md:p-24">
            <h1 className="text-2xl md:text-4xl text-zinc-400 font-bold mb-10">Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mx-auto max-w-4xl">
                {projects.map(({ title, description, imgSrc, projectLink }, key) => (
                    <ProjectCard
                        key={key}
                        title={title}
                        description={description}
                        imgSrc={imgSrc}
                        projectLink={projectLink} />
                ))}
            </div>
        </div>
    )
}

export default Projects