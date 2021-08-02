import Navbar from './Navbar';
import Footer from './Footer';
import{ useRouter} from 'next/router'

const Layout = ({children}) => {
  const router = useRouter();
const showNavbar = router.pathname === '/login'|| 'signup' || '/' ? false : true;
const showFooter = router.pathname === '/login'|| 'signup' || '/' ? false : true;


  return ( 
    
    <div className="layout">
    {showNavbar && <Navbar />}
    {children }
    {showFooter && <Footer/>}
    </div>
    );
}
 
export default Layout;