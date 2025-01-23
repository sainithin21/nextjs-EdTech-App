import { Spotlight } from "./ui/Spotlight"
import Link from "next/link"
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="text-white h-screen md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
       <div className="p-4 relative z-10 w-full text-center">
            <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Master the Art of Music</h1>
            <p  className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">Discover the joy of music from the comfort of your home! Our online platform offers expert-led lessons tailored for all skill levels, whether you're a beginner or looking to refine your talent. Start your musical journey today and unlock your potential with personalized guidance and interactive learning.</p>
            <div className="mt-4">
                <Link href={'/courses'}>
                    <Button borderRadius="1.75rem">
                        Explore Courses
                    </Button>
                </Link>
            </div>
       </div>
    </div>
  )
}

export default HeroSection
