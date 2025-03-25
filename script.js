// Efecto parallax para el fondo basado en el movimiento del mouse
document.addEventListener("mousemove", (e) => {
    const background = document.getElementById("background");
    // Calcula la posición relativa del cursor respecto al centro de la ventana
    const x = (e.clientX / window.innerWidth) - 0.5;
    const y = (e.clientY / window.innerHeight) - 0.5;
    // Define un desplazamiento máximo (en píxeles)
    const maxOffset = 30;
    const offsetX = maxOffset * x;
    const offsetY = maxOffset * y;
    // Mantiene la transformación base para centrar y suma el offset
    background.style.transform = `translate(-50%, -50%) translate(${offsetX}px, ${offsetY}px)`;
  });
  