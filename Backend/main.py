from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from config.database import Base, engine
from routers import auth, quiz, phishing, progress

# Create all tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Cybersecurity Guard API",
    version="1.0.0"
)

# CORS - allow React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Vite default port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routers
app.include_router(auth.router,     prefix="/auth",     tags=["Auth"])
app.include_router(quiz.router,     prefix="/quiz",     tags=["Quiz"])
app.include_router(phishing.router, prefix="/phishing", tags=["Phishing"])
app.include_router(progress.router, prefix="/progress", tags=["Progress"])

@app.get("/")
def root():
    return {"message": "Cybersecurity Guard API is running"}