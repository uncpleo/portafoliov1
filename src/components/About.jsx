import abimg from "../assets/about.png"

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='my-20 text-center text-4xl'>
        About
        <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex felx-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
                <img src={abimg} alt="Image" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
