
#SQLite Database
from sqlalchemy import create_engine 
from sqlalchemy.orm import sessionmaker, declarative_base

DATABASE_URL = "sqlite:///./events.db"

engine = create_engine(DATABASE_URL) #connection creator

SessionLocal = sessionmaker(bind=engine) #for database operation

Base = declarative_base() #used to create tables