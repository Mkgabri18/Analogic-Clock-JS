const ORAS = document.querySelector(".oras");
const MINUTOS = document.querySelector(".minutos");
const SEGUNDOS = document.querySelector(".segundos");
const PAISES = document.querySelector(".pais__lista");

let timezone = "Europe/Rome";

function setTimeZone(tz) {
  timezone = tz;
  PAISES.querySelector("a.active").classList.remove("active");
}

function convertTZ(tz) {
  return new Date().toLocaleString("en-US", { timeZone: tz });
}

function getTime() {
  let date = convertTZ(timezone);
  const now = new Date(date);

  const segundos = now.getSeconds();
  const minutos = now.getMinutes();
  const oras = now.getHours();

  // console.log(oras + " " + minutos + " " + segundos);
  const gradosSegundos = (segundos / 60) * 360;
  const gradosMinutos = (minutos / 60) * 360;
  const gradosOras = (oras / 12) * 360;
  // console.log(gradosOras + " " + gradosMinutos + " " + gradosSegundos);

  ORAS.style.transform = `rotate(${gradosOras}deg)`;
  MINUTOS.style.transform = `rotate(${gradosMinutos}deg)`;
  SEGUNDOS.style.transform = `rotate(${gradosSegundos}deg)`;
}

setInterval(getTime, 1000);
