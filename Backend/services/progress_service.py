from sqlalchemy.orm import Session
from models.progress import Progress
from schemas.progress import ProgressCreate
from typing import List

def mark_module_complete(db: Session, user_id: int, data: ProgressCreate) -> Progress:
    # Avoid duplicate completions
    existing = (
        db.query(Progress)
        .filter(Progress.user_id == user_id, Progress.module_name == data.module_name)
        .first()
    )
    if existing:
        return existing

    progress = Progress(
        user_id=user_id,
        module_name=data.module_name
    )
    db.add(progress)
    db.commit()
    db.refresh(progress)
    return progress

def get_user_progress(db: Session, user_id: int) -> List[Progress]:
    return (
        db.query(Progress)
        .filter(Progress.user_id == user_id)
        .order_by(Progress.completed_at.desc())
        .all()
    )