from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers import usuarios
from app.data.db import engine
from app.data import usuarioDB

# Crear las tablas en la base de datos
usuarioDB.Base.metadata.create_all(bind=engine)

# Crear la aplicación
app = FastAPI(
    title="API Usuarios",
    description="API desarrollada con FastAPI y PostgreSQL",
    version="1.0.0"
)

# Configuración de CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:8081",
        "http://localhost:8082",
        "http://localhost:8083",
        "http://127.0.0.1:8081",
        "http://127.0.0.1:8082",
        "http://127.0.0.1:8083",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Registrar rutas
app.include_router(usuarios.router)

# Ruta de prueba
@app.get("/")
def root():
    return {
        "mensaje": "API funcionando correctamente 🚀"
    }