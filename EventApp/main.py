
#Create APIs

from models import Event

from fastapi import FastAPI

from database import Base, SessionLocal
from database import engine
from fastapi.middleware.cors import CORSMiddleware

from schemas import EventCreate

Base.metadata.create_all(bind=engine)

app = FastAPI()

#CORS(for React)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

#get events
@app.get("/events")
def get_events():
    db = SessionLocal()
    events = db.query(Event).all()
    db.close()
    return events

#Add a new registration
@app.post("/events")
def add_event(event: EventCreate):
    db = SessionLocal()
    new_event = Event(name=event.name, email = event.email)

    db.add(new_event)
    db.commit()
    db.close()
    return {"message":"Registered Successfully"}

#delete record using id
@app.delete("/events/{id}")
def delete_event(id: int):
    db = SessionLocal()
    event = db.query(Event).filter(Event.id == id).first()

    if not event:
        db.close()
        return {"error":"Registration not found"}
    
    db.delete(event)
    db.commit()
    db.close()
    return {"message":"Deleted successfully"}