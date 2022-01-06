
import { PageSEO } from '@/components/SEO'
import Background from '@/components/Scene'
import siteMetadata from '@/data/siteMetadata'
import Back from '@/components/Scene'
import Typed from "react-typed"
import { useTheme } from 'next-themes';


export default function Home() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      
        <div className = "z-0 absolute h-[28rem] w-8/12 self-center">
        <Back/>
        <div className= "z-10 absolute left-5 top-4">        
            <h1 className="text-4xl  font-extrabold font-family:ui-monospace dark:text-cyan-600 text-black  sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">>Hexdump</h1>
               <div className="text-lg ml-5 font-medium font-family: Times dark:text-stone-100 text-gray-700 leading-relaxed sm:text-lg sm:leading-10 md:text-xl md:leading-relaxed">
               <Typed
                  strings={["physics", "string theory", "existential dread"]}
                  typeSpeed={50}
                  backSpeed={50}
                  loop
                />
              </div>
        </div>        
        </div>

    </>
  )
}
