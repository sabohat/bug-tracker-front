import TicketsPage from "../../../../components/pages/ticketsPage/allTicketsPage";
const SubmitterTickets = () => {
  return (
    <TicketsPage
      additionalMenuList={["contribute"]}
      link={"/users/submitter"}
    />
  );
};

export default SubmitterTickets;
