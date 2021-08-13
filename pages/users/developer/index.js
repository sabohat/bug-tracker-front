import MainPage from "../../../components/pages/mainPage/main";

const DeveloperMainPage = () => {
  return ( <MainPage additionalMenuList={['contribute']} link={'/users/submitter'}/> );
}
 
export default DeveloperMainPage;