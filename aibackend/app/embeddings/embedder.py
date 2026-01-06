'''import google.generativeai as genai
import os''' 

'''genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
EMBEDDING_DIM=768

def embed_text(text: str):
    response = genai.embed_content(
        model="models/embedding-001",
        content=text
    )
    return response["embedding"]'''

from sentence_transformers import SentenceTransformer

model = SentenceTransformer("all-MiniLM-L6-v2")
EMBEDDING_DIM = 384

def embed_text(text: str):
    return model.encode(text).tolist()
