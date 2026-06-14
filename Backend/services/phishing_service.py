from sqlalchemy.orm import Session
from models.phishing_score import PhishingScore
from schemas.phishing import PhishingScoreCreate
from typing import List

def save_phishing_score(db: Session, user_id: int, data: PhishingScoreCreate) -> PhishingScore:
    score = PhishingScore(
        user_id=user_id,
        score=data.score,
        total=data.total
    )
    db.add(score)
    db.commit()
    db.refresh(score)
    return score

def get_phishing_history(db: Session, user_id: int) -> List[PhishingScore]:
    return (
        db.query(PhishingScore)
        .filter(PhishingScore.user_id == user_id)
        .order_by(PhishingScore.attempted_at.desc())
        .all()
    )