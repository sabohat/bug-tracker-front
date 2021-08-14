
const StatisticsCard = ({svgTitle, cardTitle, cardData}) => {
  return ( <div className="bg-purple-400 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-purple-600 dark:border-gray-600 text-white font-medium group">
  <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
  {/* <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="stroke-current text-purple-700 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg> */}
<img src='/img/svg/money.svg'></img>
</div>
  <div className="text-right">
    <p className="text-2xl">{cardData}</p>
    <p>{cardTitle}</p>
  </div>
</div>
 );
}
 
export default StatisticsCard;