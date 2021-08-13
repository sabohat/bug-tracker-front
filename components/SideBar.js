const SideBar = ({additionalMenuList, link}) => {
  return ( <>
   {/* <!-- mobile menu bar --> */}
   

        {/* <!-- sidebar --> */}
        <div className="sidebar bg-blue-800 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
         
       
          {/* <!-- nav --> */}
          <nav>
            
            <a
              href={link}
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
            >
              {}
              Home
            </a>
            <a
              href={`${link}\\projects`}
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
            >
              Projects
            </a>
            {
              (additionalMenuList = additionalMenuList?.map((item) => (
                <a
                  href={`${link}\\${item}`}
                  className="capitalize block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
                >
                  {item}
                </a>
              )))
            }
            <a
              href={`${link}\\settings`}
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
            >
              Settings
            </a>
   </nav>
        </div>
</> );
}
 
export default SideBar;