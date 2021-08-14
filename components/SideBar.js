
const SideBar = ({additionalMenuList, link}) => {
  return ( <>
 
   {/* <!-- mobile menu bar --> */}
   

        {/* <!-- sidebar --> */}
        <div className="sidebar bg-purple-300 border-top text-gray-900 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
         
       
          {/* <!-- nav --> */}
          <nav>
            
            <a
            key='key_home'
              href={link}
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-purple-600 hover:text-white"
            >
              {}
              Home
            </a>
            <a
            key='key_projects'
              href={`${link}\\projects`}
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-purple-600 hover:text-white"
            >
              Projects
            </a>
            <a
            key='key_projects'
              href={`${link}\\tickets`}
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-purple-600 hover:text-white"
            >
              Tickets
            </a>
            {
              (additionalMenuList = additionalMenuList?.map((item) => (
                <a
                key={`key_${item}`}
                  href={`${link}\\${item}`}
                  className="capitalize block py-2.5 px-4 rounded transition duration-200 hover:bg-purple-600 hover:text-white"
                >
                  {item}
                </a>
              )))
            }
            <a
            key='key_settings'
              href={`${link}\\settings`}
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-purple-600 hover:text-white"
            >
              Settings
            </a>
   </nav>
        </div>
</> );
}
 
export default SideBar;