import ProjectCard from "../../cards/ProjectCard";
import SideBar from "../../SideBar";


const ProjectsPage = ({additionalMenuList, link}) => {
  return ( 
    <div className="relative min-h-screen md:flex">
    <SideBar additionalMenuList={additionalMenuList} link={link} />

     <div className="flex-1 p-10 text-2xlbg-indigo-100">
    
    
   

  {/* Get Last 3 projects */}
  <div className="h-auto">
    <h2 className="font-bold text-2xl">Projects</h2>
    <div className="grid grid-cols-3 gap-5 text-center pt-8">
      <ProjectCard
        projectTitle={"title"}
        projectDesc={"Description"}
        projectStatus={"Finished"}
      ></ProjectCard>
    </div>
  </div>
  </div>
  </div>

   );
}
 
export default ProjectsPage;