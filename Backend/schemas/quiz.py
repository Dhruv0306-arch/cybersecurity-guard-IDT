from pydantic import BaseModel
from datetime import datetime

class QuizScoreCreate(BaseModel):
    score: int
    total: int

class QuizScoreResponse(BaseModel):
    id: int
    user_id: int
    score: int
    total: int
    attempted_at: datetime

    class Config:
        from_attributes = True