from typing import Optional

from pydantic import BaseModel, Field


class User(BaseModel):
    id: int
    name: str
    age: int
    email: str
