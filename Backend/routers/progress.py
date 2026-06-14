from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from config.database import get_db
from schemas.progress import ProgressCreate, ProgressResponse, ProgressListResponse
from services.progress_service import mark_module_complete, get_user_progress
from middleware.auth_middleware import get_current_user

router = APIRouter()

@router.post("/update", response_model=ProgressResponse)
def update_progress(
    data: ProgressCreate,
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):
    return mark_module_complete(db, current_user.id, data)

@router.get("/me", response_model=ProgressListResponse)
def get_progress(
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):
    modules = get_user_progress(db, current_user.id)
    return {
        "completed_modules": modules,
        "total_completed": len(modules)
    }