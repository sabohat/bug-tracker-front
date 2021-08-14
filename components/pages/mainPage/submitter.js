import Navbar from "../../Navbar";
import SideBar from "../../SideBar";
import ProjectCard from "../../cards/ProjectCard";
import TicketCard from "../../cards/TicketCard";

const MainPage = ({ additionalMenuList, link }) => {
  return (
    <>
      <div className="relative min-h-screen md:flex">
<SideBar additionalMenuList={additionalMenuList} link={link}/>
        {/* <!-- content --> */}

        <div className="flex-1 p-10 text-2xlbg-indigo-100">
          {/* Get Last 3 projects */}
          <div className="h-auto">
            <h2 className="font-bold text-2xl">Recent Projects</h2>
            <div className="grid grid-cols-3 gap-5 text-center pt-8">
              <ProjectCard
                projectTitle={"title"}
                projectDesc={"Description"}
                projectStatus={"Finished"}
              ></ProjectCard>
            </div>
          </div>
          <div className="h-auto mt-10">
            {/* render last 3 tickets */}
            <h2 className="font-bold text-2xl">Recent Tickets</h2>
            <div className="grid grid-cols-3 gap-5 text-center pt-8">
              <TicketCard
                ticketTitle={"title of the Ticket goes here"}
                ticketProject={"Description Project nsa"}
                ticketPriority={"high"}
                ticketUpdate={'12/08/2021'}
                ticketLink={'link'}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
