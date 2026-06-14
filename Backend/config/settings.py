from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    APP_NAME: str
    DEBUG: bool
    SECRET_KEY: str

    DATABASE_URL: str

    JWT_ALGORITHM: str
    JWT_EXPIRE_MINUTES: int

    FRONTEND_URL: str

    class Config:
        env_file = ".env"

settings = Settings()