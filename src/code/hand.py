import cv2 #Para usar la cámara, dibujar texto y mostrar video.
import mediapipe as mp #La librería que detecta manos y los 21 puntos de cada una.

mp_hands = mp.solutions.hands #sistema de detección de manos
mp_draw = mp.solutions.drawing_utils #dibuja los puntos y líneas de la mano

def dedo_arriba(landmarks, dedo_tip, dedo_pip):
    """Devuelve True si la punta del dedo está más arriba que su articulación PIP."""
    return landmarks[dedo_tip].y < landmarks[dedo_pip].y

cap = cv2.VideoCapture(0) #Abrir la camara principal(0)

with mp_hands.Hands(
        max_num_hands=1, #detecta una mano
        min_detection_confidence=0.7, #qué tan seguro debe estar para detectar
        min_tracking_confidence=0.7) as hands: #qué tan seguro debe estar para seguir

    while True:
        ret, frame = cap.read() #leer cada frame
        frame = cv2.flip(frame, 1) #voltea la imagen para que parezca un espejo.
        rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        results = hands.process(rgb)

        if results.multi_hand_landmarks: #MediaPipe detecta una mano
            # Detectar si la mano es izquierda o derecha
            handedness = results.multi_handedness[0].classification[0].label

            for hand_landmarks in results.multi_hand_landmarks:
                mp_draw.draw_landmarks(frame, hand_landmarks, mp_hands.HAND_CONNECTIONS)

                lm = hand_landmarks.landmark

                # Índices de puntas y articulaciones PIP
                dedos_tips = [4, 8, 12, 16, 20]
                dedos_pip = [3, 6, 10, 14, 18]

                # DETECCIÓN PULGAR ABIERTO (AMBAS MANOS)
                if handedness == "Right":
                    pulgar_abierto = lm[4].x > lm[3].x
                else:  # Left
                    pulgar_abierto = lm[4].x < lm[3].x

                # DETECCIÓN MANO ABIERTA
                dedos_abiertos = []
                dedos_abiertos.append(pulgar_abierto)

                # Otros dedos iguales para ambas manos
                for tip, pip in zip(dedos_tips[1:], dedos_pip[1:]):
                    dedos_abiertos.append(dedo_arriba(lm, tip, pip))

                if all(dedos_abiertos):
                    cv2.putText(frame, f"Mano abierta ({handedness})", (10, 50),
                                cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)

                # DETECCIÓN PULGAR ARRIBA (👍)
                # Pulgar apunta hacia arriba (más alto que la base del índice)
                pulgar_hacia_arriba = lm[4].y < lm[5].y

                # Detectar dedos cerrados (más estables)
                indice_cerrado  = lm[8].y  > lm[7].y
                medio_cerrado   = lm[12].y > lm[11].y
                anular_cerrado  = lm[16].y > lm[15].y
                meñique_cerrado = lm[20].y > lm[19].y

                pulgar_arriba = (
                    pulgar_abierto and           # tu detección del pulgar extendido
                    pulgar_hacia_arriba and      # se asegura que realmente está vertical
                    indice_cerrado and medio_cerrado and
                    anular_cerrado and meñique_cerrado
                )

                if pulgar_arriba:
                    cv2.putText(frame, f"Pulgar arriba ({handedness})", (10, 100),
                                cv2.FONT_HERSHEY_SIMPLEX, 1, (0,255,255), 2)

                # DETECCIÓN SEÑALAR 👉 (SOLO ÍNDICE ARRIBA)
                senalar = (
                    dedos_abiertos[0] == False and  # Pulgar cerrado
                    dedos_abiertos[1] == True and   # Índice arriba
                    dedos_abiertos[2] == False and
                    dedos_abiertos[3] == False and
                    dedos_abiertos[4] == False
                )

                if senalar:
                    cv2.putText(frame, f"Senalar ({handedness})", (10, 150),
                                cv2.FONT_HERSHEY_SIMPLEX, 1, (255,0,255), 2)

                # DETECCIÓN DOS DEDOS ✌️ (ÍNDICE + MEDIO)
                dos_dedos = (
                    dedos_abiertos[1] == True and  # Índice
                    dedos_abiertos[2] == True and  # Medio
                    dedos_abiertos[3] == False and
                    dedos_abiertos[4] == False
                )

                if dos_dedos:
                    cv2.putText(frame, f"Dos dedos ({handedness})", (10, 200),
                                cv2.FONT_HERSHEY_SIMPLEX, 1, (0,128,255), 2)
                    
                # PUÑO CERRADO (✊)
                puno_cerrado = (
                    not pulgar_abierto and      # pulgar cerrado
                    lm[8].y  > lm[7].y  and     # índice cerrado
                    lm[12].y > lm[11].y and     # medio cerrado
                    lm[16].y > lm[15].y and     # anular cerrado
                    lm[20].y > lm[19].y         # meñique cerrado
                )

                if puno_cerrado:
                    cv2.putText(frame, f"Puno cerrado ({handedness})", (10, 250),
                                cv2.FONT_HERSHEY_SIMPLEX, 1, (0,0,255), 2)

        cv2.imshow("Deteccion Gestos", frame)
        if cv2.waitKey(1) & 0xFF == 27: #Esc = salir
            break

cap.release()
cv2.destroyAllWindows()
