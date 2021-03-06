import Image from 'next/image'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col-reverse items-center  justify-between p-4 lg:flex-row">
        <div>
          <motion.h2
            animate={{
              x: [20, 0],
            }}
            className="text-center text-3xl  font-bold lg:text-6xl"
          >
            Arindam Roy
          </motion.h2>
          <p className="py-2 text-2xl font-semibold">Full Stack Enginner ✨</p>
        </div>

        <motion.div
          animate={{
            rotate: [90, 0],
          }}
        >
          <Image
            className="rounded-full object-cover"
            src="/pic3.png"
            width={300}
            alt="Arindam Roy"
            height={300}
            layout="fixed"
          />
        </motion.div>
      </div>
      <div className="px-4 text-lg">
        <p className="text-2xl font-semibold">
          hey i'm Arindam <span className="text-2xl">👋</span>
        </p>
        <p className="text-md py-2 font-medium  lg:leading-7">
          I'm a Full Stack Enginner specialization in React + Next.js +
          TypeScript + Aws + Firebase with 2+ years if experience bulding
          interactive web application . I'm dedicated to delivering great user
          experiences by working closely with designers , and writing good
          quality coe to maintain a good developer experiences
        </p>
        <div className="flex space-x-8  py-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={'https://twitter.com/Arindam20103910'}
          >
            <Image
              src="https://www.svgrepo.com/show/107798/twitter.svg"
              width={40}
              height={40}
              alt="twitter_logo"
              layout="fixed"
            />
          </a>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={'https://github.com/Roytony'}
            >
              <Image
                src="https://www.svgrepo.com/show/341847/github.svg"
                width={40}
                height={40}
                alt="github_logo"
                layout="fixed"
              />
            </a>
          </div>
          <div>
            <a href="mailto: ar867027@gmail.com">
              <Image
                src="https://www.svgrepo.com/show/2784/mail.svg"
                width={40}
                height={40}
                alt="mail_logo"
                layout="fixed"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
