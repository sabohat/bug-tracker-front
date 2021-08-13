import Navbar from "../../Navbar";
import SideBar from "../../SideBar";


const MainPage = ({ additionalMenuList, link }) => {
  return (
    <>
    <Navbar/> 
    <div className="relative min-h-screen md:flex">
        
       <SideBar additionalMenuList={additionalMenuList} link={link}/>

        {/* <!-- content --> */}
        <div className="flex-1 p-10 text-2xl font-bold">
Main Content
        </div>
      </div></>
      

  );
};

export default MainPage;
