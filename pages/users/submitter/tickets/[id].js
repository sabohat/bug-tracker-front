import TicketPage from "../../../../components/pages/ticketsPage/ticketPage";

const SubmitterTicketPage = () => {
  return ( 
    <TicketPage additionalMenuList={["contribute"]}
    link={"/users/submitter"}/>
  )
}
 
export default SubmitterTicketPage;