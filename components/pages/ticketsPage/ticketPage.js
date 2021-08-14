import StatisticsArrowCard from "../../cards/statistics/arrowCard";
import StatisticsBagCard from "../../cards/statistics/badCard";
import StatisticsMoneyCard from "../../cards/statistics/moneyCard";
import StatisticsPeopleCard from "../../cards/statistics/peopleCard";
import SideBar from "../../SideBar";
import CommentCard from "../../cards/Comment";
import TicketData from "./ticketData";
import WarningAlert from "../../alerts/Warning";

const TicketPage = ({ additionalMenuList, link }) => {
  return (
    <div className="relative min-h-screen md:flex">
      <SideBar additionalMenuList={additionalMenuList} link={link} />

      <div className="flex-1 p-10 text-2xlbg-indigo-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatisticsPeopleCard
            cardTitle={"Card title"}
            cardData={"Card Data"}
          />
          <StatisticsMoneyCard
            cardTitle={"Card title"}
            cardData={"Card Data"}
          />

          <StatisticsArrowCard
            cardTitle={"Card title"}
            cardData={"Card Data"}
          />
          <StatisticsBagCard
          cardTitle={"Card title"}
          cardData={"Card Data"}
        />
        
        </div>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3  gap-4">
          <section className="bg-purple-200 p-5 grid gap-4 col-span-2">
            <TicketData/> 
            
          </section>

          <section className="bg-purple-200 p-5 grid gap-4 ">
          <CommentCard/>  
          <CommentCard/>  
          <CommentCard/>    
          </section>
        
        </div>
      </div>
    </div>
  );
};

export default TicketPage;
