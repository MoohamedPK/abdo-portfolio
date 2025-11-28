import { getMediaFromFolder } from "@/libs/cloudinary";
import { CloudinaryMediaProps } from "@/utils/types";
import WorkShowcase from "./work/WorkShowcase";

const Projects = async () => {
  const images = (await getMediaFromFolder(
    "portfolio"
  )) as CloudinaryMediaProps[];

  return (
    <main className="bg">
      <WorkShowcase images={images} />
    </main>
  );
};

export default Projects;
