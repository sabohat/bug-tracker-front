const TicketCard = ({
  ticketTitle,
  ticketProject,
  ticketPriority,
  ticketUpdate,
}) => {
  return (
    <div className="flex justify-center items-center hover:cursor-pointer">
      <div className="container mx-auto">
        <div className="bg-white max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer">
          <div
            className={`h-20 flex items-center justify-between ${
              ticketPriority === "high" ? "bg-red-500" : ""
            } ${ticketPriority === "normal" ? "bg-yellow-500" : ""} ${
              ticketPriority === "low" ? "bg-green-500" : ""
            }`}
          >
            <h1 className="text-white ml-4 border-2 py-2 px-4 rounded-full">
              1
            </h1>
            <p className="mr-10 text-white text-lg capitalize">
              {ticketProject}
            </p>
            <p className="mr-4 text-white font-thin text-lg capitalize">
              {ticketPriority}
            </p>
          </div>

          <p className="py-6 text-lg tracking-wide">{ticketTitle}</p>

          <div className="flex justify-between px-5 mb-2 text-sm text-gray-600">
            <p>Last Update</p>
            <p>{ticketUpdate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
