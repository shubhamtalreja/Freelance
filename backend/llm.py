from dotenv import load_dotenv
from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate

load_dotenv()

llm = ChatOpenAI(
    model="gpt-4o-mini",
    temperature=0
)

with open("prompts/react_app.txt", encoding="utf-8") as f:
    template = f.read()

prompt = ChatPromptTemplate.from_template(template)

chain = prompt | llm