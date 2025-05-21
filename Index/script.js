
function toggleMenu() {
  const menu = document.getElementById("menuLinks");
  menu.classList.toggle("active");
}

function closeMenu() {
  document.getElementById("menuLinks").classList.remove("active");
}

document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector("#o-que-é");
  const strongs = section.querySelectorAll("strong");

  strongs.forEach(strong => {
    const text = strong.textContent;
    strong.innerHTML = ""; // limpa o conteúdo
    text.split("").forEach((char, i) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.animationDelay = `${i * 0.03}s`;
      span.classList.add("letra-animada");
      strong.appendChild(span);
    });
  });
});


tailwind.config = {
  theme: {
      extend: {
          colors: {
              'rose-light': '#FFE4E6',
              'rose-medium': '#FDA4AF',
              'rose-dark': '#FB7185',
              'nude': '#F5E1DA',
              'nude-dark': '#E8C4B8',
              'mint': '#ECFDF5',
          },
          fontFamily: {
              'playfair': ['"Playfair Display"', 'serif'],
              'montserrat': ['Montserrat', 'sans-serif'],
          }
      }
  }
}


function updateCountdown() {
  const eventDate = new Date('2025-06-19T15:00:00').getTime();
  const now = new Date().getTime();
  const timeLeft = eventDate - now;

  const elements = {
    days: document.getElementById('days'),
    hours: document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds'),
  };

  if (timeLeft < 0) {
    Object.values(elements).forEach(el => el.textContent = '00');
    return;
  }

  const days = String(Math.floor(timeLeft / (1000 * 60 * 60 * 24))).padStart(2, '0');
  const hours = String(Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
  const minutes = String(Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
  const seconds = String(Math.floor((timeLeft % (1000 * 60)) / 1000)).padStart(2, '0');

  const values = { days, hours, minutes, seconds };

  for (const key in values) {
    if (elements[key].textContent !== values[key]) {
      elements[key].textContent = values[key]; // usar textContent evita piscar
    }
  }
}

setInterval(updateCountdown, 1000);
updateCountdown();

