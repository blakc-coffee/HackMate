from app.indexing.faiss_index import FaissIndex
from app.embeddings.embedder import embed_text, EMBEDDING_DIM
from app.utils.text_builders import solo_to_text, team_to_text
from fastapi import FastAPI

index = FaissIndex(dim=EMBEDDING_DIM)

app = FastAPI(
    title="HackMate AI Backend",
    version="0.1"
)

@app.get("/")
def health_check():
    return {"status": "AI backend running"}

def add_solos_to_index(solos):
    for solo in solos:
        text = solo_to_text(solo)
        vector = embed_text(text)
        index.add(vector, {
            "id": solo["id"],
            "type": "solo"
        })

def add_teams_to_index(teams):
    for team in teams:
        text = team_to_text(team)
        vector = embed_text(text)
        index.add(vector, {
            "id": team["id"],
            "type": "team"
        })

def find_matches_for_solo(solo_profile, k=5):
    text = solo_to_text(solo_profile)
    vector = embed_text(text)
    return index.search(vector, k)
