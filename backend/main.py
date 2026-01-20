import json
import uuid
import os
from fastapi import FastAPI
from pydantic import BaseModel
from llm import chain
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

PROJECT_ROOT = "../sandbox"
os.makedirs(PROJECT_ROOT, exist_ok=True)


class GenerateRequest(BaseModel):
    prompt: str


@app.post("/generate")
async def generate_app(data: GenerateRequest):
    # NEW LangChain invocation
    response = await chain.ainvoke({"prompt": data.prompt})

    # AIMessage -> string
    result = response.content

    # Parse JSON safely
    project = json.loads(result)

    project_id = str(uuid.uuid4())[:8]
    project_path = os.path.join(PROJECT_ROOT, project_id)

    os.makedirs(project_path, exist_ok=True)

    for file, content in project["files"].items():
        full_path = os.path.join(project_path, file)
        os.makedirs(os.path.dirname(full_path), exist_ok=True)
        with open(full_path, "w", encoding="utf-8") as f:
            f.write(content)

    return {
        "projectId": project_id,
        "files": project["files"]
    }
