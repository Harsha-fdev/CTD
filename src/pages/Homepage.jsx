
const Homepage = () => {
  return (
    <>
        {/* Banner Section */}
      <div className='mt-24 mx-auto px-6 py-10 max-w-screen-xl bg-gradient-to-br from-gray-100 to-indigo-300 text-gray-700 rounded-3xl text-center'>
        <h1 className='text-4xl md:text-5xl font-bold'>Your AI-Powered Learning Roadmap Assistant</h1>
        <p className='mt-6 text-xl md:text-2xl max-w-3xl mx-auto'>
          Discover your personalized path to mastery in any tech domain with our intelligent roadmap generator.
        </p>

        <div className='flex justify-center gap-6 mt-8'>
          <button className='bg-black hover:bg-white hover:text-black text-white px-6 py-2 rounded-full transition'>Get Started</button>
          <button className='bg-white text-black hover:bg-black hover:text-white px-6 py-2 rounded-full transition'>Learn More</button>
        </div>
      </div>

      {/* Services Section */}
      <div className='my-10 px-6'>
        <div className='bg-gradient-to-br from-gray-100 to-indigo-300 p-8 rounded-3xl shadow-lg text-gray-700 text-center'>
          <h1 className='text-3xl md:text-4xl font-semibold hover:animate-pulse'>Services we provide!</h1>
          <ul className='mt-6 text-lg md:text-xl list-disc list-inside space-y-2 text-left max-w-xl mx-auto'>
            <li>AI-powered Career Guidance</li>
            <li>Skill-Gap Analysis</li>
            <li>Daily & Weekly Progress Tracking</li>
            <li>Smart Task Recommendations</li>
            <li>Habit & Productivity Coaching</li>
            <li>Time Management & Scheduling Tool</li>
          </ul>
        </div>
      </div>

      {/* Skill Search Section */}
      <div className='my-10 px-6 text-center'>
        <h1 className='text-3xl font-semibold text-gray-700'>What Tech skills do you want to master?</h1>
        <p className='mt-2 text-lg text-gray-700'>Type in any domain skills and get personalised learning Roadmap in seconds.</p>

        <div className='mt-6 flex justify-center'>
          <input 
            type="text" 
            placeholder='Eg: React, NodeJS, DevOps, Cloud Computing...' 
            className='px-4 py-3 rounded-l-lg border border-gray-300 shadow-md min-w-[300px] md:min-w-[400px] focus:outline-none'
          />
          <button className='bg-black text-white hover:bg-gray-700 px-4 py-3 rounded-r-lg transition'>
            Generate
          </button>
        </div>
      </div>

      {/* Subscription Call-To-Action */}
      <div className='my-10 px-6'>
        <div className='bg-gradient-to-br from-gray-100 to-indigo-300 p-6 rounded-3xl shadow-lg text-center text-gray-700'>
          <h1 className='text-3xl font-semibold'>How does our AI Assistant Help You Succeed?</h1>
          <p className='text-xl mt-2'>Our AI will just simply guide you to your desired path.</p>
          <h5 className='text-md mt-1'>In order to join us please choose a plan to get AI Assistance!</h5>
          <button className='mt-4 bg-black text-white px-6 py-2 rounded-xl hover:bg-white hover:text-black hover:ring-2 transition'>
            Subscribe
          </button>
        </div>
      </div>
    </>
  )
}

export default Homepage