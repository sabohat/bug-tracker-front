import WarningAlert from "../../alerts/Warning"
import ProjectViewBtn from "../../buttons/ProjectViewBtn"
import ErrorCard from "../../cards/ErrorCard"

const TicketData = ({ticketTitle, ticketPriority, ticketType, ticketStatus, ticketProject, ticketAssignedTo, ticketAssignedBy, ticketLink}) => {
  return ( 
    <div class="p-3 shadow-sm bg-white rounded-lg flex justify-between flex-col">
              
                    <div class="text-gray-700 p-4">
                        <div class="grid md:grid-cols-2 text-sm">
                            <div class="grid grid-cols-2">
                                <div class=" py-2 font-semibold">Title</div>
                                <div class=" py-2">{ticketTitle}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class=" py-2 font-semibold">Project</div>
                                <div class=" py-2">{ticketProject}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class=" py-2 font-semibold">Priority</div>
                                <div class=" py-2">{ticketPriority}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class=" py-2 font-semibold">Assigned To</div>
                                <div class=" py-2">{ticketAssignedTo}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class=" py-2 font-semibold">Type</div>
                                <div class=" py-2">{ticketType}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class=" py-2 font-semibold">Assigned By</div>
                                <div class=" py-2">{ticketAssignedBy}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class=" py-2 font-semibold">Status</div>
                                <div class=" py-2">
                                  {ticketStatus}
                                </div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class=" py-2 font-semibold">Link</div>
                                <div class=" py-2">{ticketLink}</div>
                            </div>
                        </div>
                        <div className="py-4"> <ErrorCard/></div>
                        <div>
                        <div class="grid grid-cols-2 py-4">
                                <div class=" py-2 font-semibold">Expected Input</div>
                                <div class=" py-2 bg-indigo-100 input-field">Input
                                dadasdsa
                                dadasdsadas
                                sdadasdas
                                dadasdsadas
                                dadasdsadassdasd
                                lorem23</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class=" py-2 ">Expected Output</div>
                                <div class=" py-2 bg-indigo-100 input-field">Output
                                dadasdsa
                                dadasdsadas
                                sdadasdas
                                dadasdsadas
                                dadasdsadassdasd
                                lorem23 </div>
                            </div>
                        </div>
                    </div>
              <button className="button-basic bottom-0">Edit</button>
                </div>
   );
}
 
export default TicketData;