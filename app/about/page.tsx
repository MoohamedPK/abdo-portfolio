import AboutPage from "@/components/about/AboutPage"
import { getMediaFromFolder } from "@/libs/cloudinary"

const About = async () => {

  const [media, work_media] = await Promise.all([
    getMediaFromFolder("portfolio/about"),
    getMediaFromFolder("portfolio/about/work_media")
  ])

  return (
    <>
      <AboutPage media={media} workMedia={work_media}/>
    </>
  )
}

export default About