from fastapi import FastAPI
from dotenv import load_dotenv
from app.matcher import Matcher
load_dotenv()

app = FastAPI(
    title="HackMate AI Backend",
    version="0.1"
)

matcher = Matcher()

@app.get("/")
def health_check():
    return {"status": "AI backend running"}

