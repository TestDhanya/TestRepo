#For Data validation - defines what data is allowed
#using Pydantic model -- Data Validator

from pydantic import BaseModel


class EventCreate(BaseModel):
    name: str
    email : str