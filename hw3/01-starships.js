// JavaScript code should be inside of functions

document.addEventListener('DOMContentLoaded', () => {
  initWelcomeSection();
  loadStarships();
  setupFormHandler();
});

const initWelcomeSection = () => {
  const container = document.getElementById('bio');

  const wrapper = document.createElement('div');
  wrapper.className = 'text-center';

  const img = document.createElement('img');
  img.src = '../images/SteveBraich_LinkedIn.jfif';
  img.alt = 'Profile photo of Steve Braich';
  img.className = 'rounded-circle img-fluid mb-3';
  img.style.width = '150px';
  img.style.height = '150px';
  img.style.objectFit = 'cover';

  const text = document.createElement('p');
  text.innerHTML = `
    <strong>My name is Steve Braich and I’m a graduate student in CS 563.</strong>
    I’m passionate about localization, computational linguistics, Natural Language Processing and AI. This quarter, I'm excited to deepen my web development skills and build clean, accessible web applications.`;
  text.className = 'mx-auto';
  text.style.maxWidth = '600px';

  wrapper.appendChild(img);
  wrapper.appendChild(text);
  container.appendChild(wrapper);
};

const fetchData = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  return await res.json();
};

const loadStarships = async () => {
  const container = document.getElementById('starship-list');
  try {
    const data = await fetchData('https://swapi.py4e.com/api/starships/');
    data.results.forEach(starship => {
      const card = createSpaceshipComponent(starship);
      container.appendChild(card);
    });
  } catch (err) {
    console.error('Error fetching starships:', err);
  }
};

const createSpaceshipComponent = (spaceship) => {
  const col = document.createElement('div');
  col.className = 'col-md-4';

  const card = document.createElement('div');
  card.className = 'card h-100 shadow-sm bg-light';

  const body = document.createElement('div');
  body.className = 'card-body';

  // Top: Name and cost
  const header = document.createElement('div');
  header.className = 'd-flex justify-content-between align-items-start mb-1';

  const name = document.createElement('h6');
  name.className = 'fw-bold mb-0';
  name.textContent = spaceship.name;

  const cost = document.createElement('div');
  cost.className = 'fw-bold text-end text-nowrap';
  cost.textContent =
    spaceship.cost_in_credits !== 'unknown'
      ? `${Number(spaceship.cost_in_credits).toLocaleString()} credits`
      : 'n/a credits';

  header.appendChild(name);
  header.appendChild(cost);

  // Manufacturer
  const manufacturer = document.createElement('p');
  manufacturer.className = 'mb-3 text-muted small';
  manufacturer.textContent = `Manufactured by ${spaceship.manufacturer}`;

  // Stats row using grid layout with visible vertical divider
  const statsRow = document.createElement('div');
  statsRow.className = 'row text-center align-items-center';

  const left = document.createElement('div');
  left.className = 'col-5';
  left.innerHTML = `
    <div class="fw-bold">${spaceship.max_atmosphering_speed !== 'unknown' ? spaceship.max_atmosphering_speed : 'n/a'}</div>
    <small class="text-muted">Max atmosphering speed</small>`;

  const divider = document.createElement('div');
  divider.className = 'col-2 d-flex justify-content-center';

  const line = document.createElement('div');
  line.style.borderLeft = '1px solid #ccc';
  line.style.width = '1px';
  line.style.height = '3.5em'; // key fix to match full height of stat block

  divider.appendChild(line);

  const right = document.createElement('div');
  right.className = 'col-5';
  right.innerHTML = `
    <div class="fw-bold">${spaceship.cargo_capacity !== 'unknown' ? Number(spaceship.cargo_capacity).toLocaleString() : 'n/a'}</div>
    <small class="text-muted">Cargo capacity</small>`;

  statsRow.appendChild(left);
  statsRow.appendChild(divider);
  statsRow.appendChild(right);

  // Assemble card
  body.appendChild(header);
  body.appendChild(manufacturer);
  body.appendChild(statsRow);
  card.appendChild(body);
  col.appendChild(card);

  return col;
};

const setupFormHandler = () => {
  const form = document.getElementById('userForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const username = form.username.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value.trim();
    const dob = form.dob.value;
    const pronouns = form.querySelector('input[name="pronouns"]:checked');

    if (!name || !username || !email || !password || !dob || !pronouns) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    const formattedDate = new Date(dob).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    console.group("========= Form Submission =========");
    console.log(`Name: ${name}`);
    console.log(`Username: ${username}`);
    console.log(`Email: ${email}`);
    console.log(`Date of Birth: ${formattedDate}`);
    console.log(`Preferred Pronouns: ${pronouns.value}`);
    console.groupEnd();

    form.reset();
  });
};

