from sqlalchemy.orm import Session
from models.quiz_score import QuizScore
from schemas.quiz import QuizScoreCreate
from typing import List

def save_quiz_score(db: Session, user_id: int, data: QuizScoreCreate) -> QuizScore:
    score = QuizScore(
        user_id=user_id,
        score=data.score,
        total=data.total
    )
    db.add(score)
    db.commit()
    db.refresh(score)
    return score

def get_quiz_history(db: Session, user_id: int) -> List[QuizScore]:
    return (
        db.query(QuizScore)
        .filter(QuizScore.user_id == user_id)
        .order_by(QuizScore.attempted_at.desc())
        .all()
    )