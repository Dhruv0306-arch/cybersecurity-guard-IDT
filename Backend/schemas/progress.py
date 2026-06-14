from pydantic import BaseModel
from datetime import datetime
from typing import List

class ProgressCreate(BaseModel):
    module_name: str

class ProgressResponse(BaseModel):
    id: int
    user_id: int
    module_name: str
    completed_at: datetime

    class Config:
        from_attributes = True

class ProgressListResponse(BaseModel):
    completed_modules: List[ProgressResponse]
    total_completed: int