
from sqlalchemy import Column, Integer, String

from database import Base


class Event(Base):
    __tablename__ = "events"
    id = Column(Integer, primary_key = True)
    name = Column(String)
    email = Column(String)