
const StatisticsCard = () => {
  return ( <div class="bg-purple-400 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-purple-600 dark:border-gray-600 text-white font-medium group">
  <div class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
    <img src='/img/svg/people.svg'></img>
  </div>
  <div class="text-right">
    <p class="text-2xl">t</p>
    <p>Tickets</p>
  </div>
</div>
 );
}
 
export default StatisticsCard;