//Create Event List(List View + Delete)
import axios from "axios";

function EventList({ events, refreshEvents}){
    const handleDelete = async (id) => {
        await axios.delete(`http://127.0.0.1:8000/events/${id}`)
        
        refreshEvents();
    };

    return(
        <div>
            <h2> Event List</h2>

            <ul>
                {events.map((event) => (
                    <li key={event.id}>
                        {event.name} - {event.email}

                    <button onClick={() => handleDelete(event.id)}>
                        Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EventList;