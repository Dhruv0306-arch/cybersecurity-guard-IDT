from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from config.database import get_db
from schemas.user import UserCreate, UserLogin, TokenResponse
from services.auth_service import register_user, login_user, get_user_by_id
from middleware.auth_middleware import get_current_user

router = APIRouter()

@router.post("/register", response_model=TokenResponse)
def register(user_data: UserCreate, db: Session = Depends(get_db)):
    user = register_user(db, user_data)
    token = login_user(db, user.email, user_data.password)
    return token

@router.post("/login", response_model=TokenResponse)
def login(user_data: UserLogin, db: Session = Depends(get_db)):
    return login_user(db, user_data.email, user_data.password)

@router.get("/me")
def me(current_user = Depends(get_current_user)):
    return current_user