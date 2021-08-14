const ProjectCard = ({projectTitle, projectDesc, projectStatus}) => {
  return (
    <div className="flex justify-center items-center hover:cursor-pointer">
      <div className="container flex justify-center">
        <div className="max-w-sm ">
          <div className=" relative shadow-lg shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105 rounded-lg">
            
            <div className="py-6 px-8 rounded-lg bg-yellow-300">
              <h1 className="capitalize text-gray-900 font-bold text-2xl mb-3">
            {projectTitle}
              </h1>
              <p className="text-gray-700 tracking-wide">
                {projectDesc}
                Project Description Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Eum, labore. Ea debitis beatae sequi deleniti.
              </p>
              <button className="mt-6 py-2 px-4 bg-gray-100 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-2xl transition duration-300">
                View Project
              </button>
            </div>
            <div className="absolute -top-2 -right-2 py-2 px-4 bg-green-400 rounded-lg">
              <span className="text-md capitalize">{projectStatus}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
