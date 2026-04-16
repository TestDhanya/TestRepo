import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useEffect, useState } from "react";
import EventForm from "./components/EventForm";
import EventList from "./components/EventList";
import axios from "axios";


function App() {
    const [events, setEvents] = useState([]);

    const fetchEvents = async () => {
      try{
        const res = await axios.get("http://127.0.0.1:8000/events");  //get the data from the backend

        setEvents(res.data);
      }catch(err){
        console.log(err)
      }
       
    };

    useEffect(() => {
      fetchEvents();
    })

    return(
      <div style={{ textAlign: "center"}}>
        <h1>Event App</h1>

        <EventForm refreshEvents = {fetchEvents}/>

        <EventList events={events} refreshEvents={fetchEvents}/>

      </div>
    );
}

export default App
