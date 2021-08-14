import Navbar from './Navbar';
import Footer from './Footer';
import{ useRouter} from 'next/router'

const Layout = ({children}) => {
const router = useRouter();
const routeArray = ['/users/login', '/users/signup', '/']
const showNavbar = routeArray.includes(router.pathname) ? false : true;



  return ( 
    <div className='layout'>
    {showNavbar && <Navbar />}

    
    {children}
    {showNavbar && <Footer/>}
    </div>
    );
}
 
export default Layout;