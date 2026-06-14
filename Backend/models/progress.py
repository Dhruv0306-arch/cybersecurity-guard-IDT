from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from datetime import datetime
from config.database import Base

class Progress(Base):
    __tablename__ = "progress"

    id           = Column(Integer, primary_key=True, index=True)
    user_id      = Column(Integer, ForeignKey("users.id"), nullable=False)
    module_name  = Column(String, nullable=False)  # e.g. "phishing", "passwords"
    completed_at = Column(DateTime, default=datetime.utcnow)

    user = relationship("User", back_populates="progress")