# ✋ Detección de Gestos con IA (MediaPipe + OpenCV)

Aplicación desarrollada en **Python** creada para **experimentar, analizar y demostrar diferentes usos de herramientas de detección de gestos mediante inteligencia artificial**, utilizando visión por computadora en tiempo real.

El proyecto emplea la cámara web para detectar manos, analizar sus puntos clave y reconocer distintos gestos de forma automática.

---

## 🎯 Objetivo del proyecto

- Explorar el uso de **IA aplicada a visión por computadora**
- Aprender el funcionamiento de **MediaPipe Hands**
- Detectar y clasificar gestos de la mano en tiempo real
- Servir como base para futuros proyectos de interacción humano–computadora

---

## 🛠️ Tecnologías utilizadas

- **Python**
- **MediaPipe**
- **OpenCV**
- **Visión por Computadora**
- **Inteligencia Artificial**

---

## ✋ Gestos detectados

La aplicación reconoce los siguientes gestos:

- 🖐️ **Mano abierta**
- 👍 **Pulgar arriba**
- 👉 **Señalar (índice extendido)**
- ✌️ **Dos dedos**
- ✊ **Puño cerrado**
- Detección de **mano izquierda y derecha**

Cada gesto se muestra en pantalla junto con el video de la cámara.

---

## 📁 Estructura del proyecto
Hand/
├─ hand.py
└─ README.md

---

## ⚙️ Requisitos

- Python **3.10 o 3.11** (recomendado)
- Cámara web funcional

---

## 📦 Instalación

1️⃣ Crear entorno virtual (opcional pero recomendado)
```bash
python -m venv venv
venv\Scripts\activate

2️⃣ Instalar dependencias
pip install mediapipe opencv-python

▶️ Ejecución
Ejecuta el script principal:
python hand.py