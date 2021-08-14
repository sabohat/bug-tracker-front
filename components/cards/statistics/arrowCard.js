const StatisticsArrowCard = ({cardTitle, cardData}) => {
  return ( 
    <div className="statistics-card">
      <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform hover:rotate-12">
      <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="statistics-svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
</div>
      <div className="text-right">
        <p className="text-2xl">{cardData}</p>
        <p>Status</p>
      </div>
    </div>
   );
}
 
export default StatisticsArrowCard;