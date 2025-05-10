import PropTypes
    from 'prop-types';

const ProjectCard = (
    { title, description, imgSrc, projectLink }) => {
    return (
        <div className="relative max-w-sm h-auto p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50
   active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors">
            <figure className="w-full h-42  rounded-lg mb-2">
                <img
                    src={imgSrc}
                    alt={title}
                    loading="lazy"
                    className="w-full h-full"
                />
            </figure>
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
                    <p className="text-sm text-zinc-400 mb-2">{description}</p>
                </div>

                <a
                    href={projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0">
                        <span className="material-symbols-rounded" aria-hidden="true">
                            arrow_outward
                        </span>
                    </div>
                </a>

            </div>

            <a
                href=""
                target='_blank'>

            </a>
        </div>
    )
}

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    projectLink: PropTypes.string.isRequired,
};



export default ProjectCard