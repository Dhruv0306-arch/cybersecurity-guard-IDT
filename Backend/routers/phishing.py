from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from config.database import get_db
from schemas.phishing import PhishingScoreCreate, PhishingScoreResponse
from services.phishing_service import save_phishing_score, get_phishing_history
from middleware.auth_middleware import get_current_user

router = APIRouter()

@router.post("/save", response_model=PhishingScoreResponse)
def save_score(
    data: PhishingScoreCreate,
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):
    return save_phishing_score(db, current_user.id, data)

@router.get("/history", response_model=List[PhishingScoreResponse])
def history(
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):
    return get_phishing_history(db, current_user.id)