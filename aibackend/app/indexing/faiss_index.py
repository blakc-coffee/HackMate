import faiss
import numpy as np

class FaissIndex:
    def __init__(self, dim: int):
        # Inner Product + normalized vectors = cosine similarity
        self.index = faiss.IndexFlatIP(dim)
        self.metadata = []

    def add(self, vector: list, meta: dict):
        vec = np.array([vector], dtype="float32")
        faiss.normalize_L2(vec)  # VERY IMPORTANT
        self.index.add(vec)
        self.metadata.append(meta)

    def search(self, vector: list, k=5):
        vec = np.array([vector], dtype="float32")
        faiss.normalize_L2(vec)
        scores, indices = self.index.search(vec, k)

        results = []
        for score, idx in zip(scores[0], indices[0]):
            if idx == -1:
                continue
            results.append({
                "score": float(score),
                **self.metadata[idx]
            })
        return results
