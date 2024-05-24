import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { DiBootstrap, DiCss3, DiGit, DiGithubBadge, DiGo, DiHtml5, DiJsBadge } from "react-icons/di";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h1 className="my-20 text-center text-4xl">Technologies</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-2">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-2">
                <FaNodeJs className="text-7xl text-green-500"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-2">
                <DiBootstrap ctjsLine className="text-7xl text-purple-600"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-2">
                <DiCss3 className="text-7xl text-blue-500"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-2">
                <DiJsBadge className="text-7xl text-yellow-500"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-2">
                <DiHtml5 className="text-7xl text-orange-500"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-2">
                <DiGit className="text-7xl text-red-500"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-2">
                <DiGithubBadge className="text-7xl text-gray-600"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-2">
                <DiGo className="text-7xl text-sky-400"/>
            </div> 
        </div>
    </div>
  )
}

export default Technologies
