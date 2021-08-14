const StatisticsPeopleCard = ({ cardTitle, cardData }) => {
  return (
    <div className="statistics-card">
      <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform hover:rotate-12">
        <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="statistics-svg"xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
      </div>
      <div className="text-right">
        <p className="text-2xl">{cardData}</p>
        <p>Developer</p>
      </div>
    </div>
  );
};

export default StatisticsPeopleCard;
