import { useState } from "react";
import axios from "axios";


function EventForm({ refreshEvents }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();   //stop page reload

        await axios.post("http://127.0.0.1:8000/events", {
            name,
            email,
        }); //send data to the backend

        setName("");
        setEmail("");

        refreshEvents();
    };

    return (
        <div>
            <h2>Add Event</h2>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br/>
                <input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br/>
                <button type="submit">Add</button>
            </form>
        </div>
    );

}

export default EventForm;