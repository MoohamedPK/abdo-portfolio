import { getImagesFromFolder } from "@/libs/cloudinary"
import { CloudinaryImageProps } from "@/utils/types"
import WorkShowcase from "./work/WorkShowcase"

const Projects = async () => {

    const images = await getImagesFromFolder("portfolio") as CloudinaryImageProps[]

  return (
      <WorkShowcase images={images}/>
  )
}

export default Projects