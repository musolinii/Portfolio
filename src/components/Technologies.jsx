import { RiReactjsLine } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { FaLinux } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";

const Technologies = () => {
    return(
        <>
            <div className="border-b border-neutral-800 pb-24">
                <h2 className="my-20 text-center text-4xl">Technologies</h2>
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <RiReactjsLine className="text-7xl text-cyan-400" />
                    </div>
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <GrMysql className="text-7xl text-black-400" />
                    </div>
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <FaLinux className="text-7xl text-white-400" />
                    </div>
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <IoLogoFirebase className="text-7xl text-yellow-400" />
                    </div>
                </div>
            </div>
        </>
    )

}

export default Technologies;