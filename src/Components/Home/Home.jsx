import dp from '../../Icons/dp.png';
import logo from '../../Icons/sb-icon.svg';

export const Home = () => {
    return (
        <section
            id="Home"
            className="pt-28 lg:pt-36"
        >
            <div className="container lg:grid lg:grid-cols-2 
             items-center lg:gap-10">
                <div>
                    <div className="flex items-center gap-3">
                        <figure className="img-box w-9 h-9 rounded-lg">
                            <img src={logo}
                                width={40}
                                height={40}
                                alt="logo"
                                className="img-cover" />
                        </figure>
                        <div className="flex items-center gap-1.5 
                        text-zinc-400 text-sm tracking-wide">
                            <span className="relative w-2 h-2 
                            rounded-full bg-emerald-400">
                                <span className="absolute inset-0
                            rounded-full bg-emerald-400 animate-ping"></span>
                            </span>
                            Available for work
                        </div>

                    </div>
                    <h2 className="headline-1 text-zinc-400 max-w-[15ch] sm:max-w-[20ch]
                    lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                        Hey, I'm Sharon
                    </h2>
                </div>

                <div>
                    <div className="mt-10 lg:mt-0 flex justify-center">
                        <figure className="max-w-[400px] w-full ml-auto bg-gradient-to-t from-zinc-200 via-25%
                        via-zinc-220 to-60% rounded-[60px]">
                            <img
                                src={dp}
                                alt="Sharon Blessy portrait"
                                className="w-full h-auto max-h-[500px] object-contain rounded-xl"
                            />
                        </figure>
                    </div>

                </div>

            </div>
        </section>
    )
}


export default Home;
