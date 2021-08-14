const TicketCard = ({ ticketTitle, ticketProject, ticketPriority, ticketUpdate}) => {
  return (
    <div className="flex justify-center items-center hover:cursor-pointer">
      <div class="container mx-auto">
        <div class="bg-white max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer">
          <div
            class={`h-20 flex items-center justify-between ${
              ticketPriority === "high" ? "bg-red-500" : ""
            } ${ticketPriority === "normal" ? "bg-yellow-500" : ""} ${
              ticketPriority === "low" ? "bg-green-500" : ""
            }`}
          >
            <h1 class="text-white ml-4 border-2 py-2 px-4 rounded-full">1</h1>
            <p class="mr-10 text-white text-lg capitalize">{ticketProject}</p>
            <p class="mr-4 text-white font-thin text-lg capitalize">
              {ticketPriority}
            </p>
          </div>

          <p class="py-6 text-lg tracking-wide">{ticketTitle}</p>
          
          <div class="flex justify-between px-5 mb-2 text-sm text-gray-600">
            
            <p>Last Update</p>
            <p>{ticketUpdate}</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
