from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from config.database import get_db
from schemas.quiz import QuizScoreCreate, QuizScoreResponse
from services.quiz_service import save_quiz_score, get_quiz_history
from middleware.auth_middleware import get_current_user

router = APIRouter()

@router.post("/save", response_model=QuizScoreResponse)
def save_score(
    data: QuizScoreCreate,
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):
    return save_quiz_score(db, current_user.id, data)

@router.get("/history", response_model=List[QuizScoreResponse])
def history(
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):
    return get_quiz_history(db, current_user.id)