const texto = document.querySelector(".texto").innerHTML;
document.querySelector(".texto").innerHTML = "";
let index = 0;
let intervalo;

// Creamos el observer para el elemento #texto
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    // Si el elemento es visible
    if (entry.isIntersecting) {
      // Iniciamos la función que muestra las letras
      intervalo = setInterval(mostrarLetras, 50);
    } else {
      // Si el elemento no es visible, detenemos la función
      clearInterval(intervalo);
      index = 0;
    document.querySelector(".texto").innerHTML = "";
    }
  });
});

observer.observe(document.querySelector(".texto"));

function mostrarLetras() {
  if (index < texto.length) {
    document.querySelector(".texto").innerHTML += texto.charAt(index);
    index++;
  } else {
    // Si ya se mostró todo el texto, detenemos el intervalo
    clearInterval(intervalo);
  }
}



