const StatisticsBagCard = ({ cardTitle, cardData }) => {
  return (
    <div className="statistics-card">
      <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform hover:rotate-12">
      <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="statistics-svg"xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
 </div>
      <div className="text-right">
        <p className="text-2xl">{cardData}</p>
        <p>Messages</p>
      </div>
    </div>
  );
};

export default StatisticsBagCard;
