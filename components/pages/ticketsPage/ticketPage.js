import StatisticsCard from "../../cards/StatisticsCard"
import SideBar from "../../SideBar";
const TicketPage = ({additionalMenuList, link}) => {
  return (  
    <div className="relative min-h-screen md:flex">
    <SideBar additionalMenuList={additionalMenuList} link={link} />

     <div className="flex-1 p-10 text-2xlbg-indigo-100">
     <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
       <StatisticsCard/>
</div>
</div>
</div>
);
}
 
export default TicketPage;