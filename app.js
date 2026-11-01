const filters = [...document.querySelectorAll('[data-filter]')];
const projects = [...document.querySelectorAll('.project')];
const search = document.querySelector('#search');
let category = 'All';

function updateProjects() {
  const query = search.value.trim().toLocaleLowerCase();
  let visible = 0;
  for (const project of projects) {
    const matches = (category === 'All' || project.dataset.category === category)
      && `${project.dataset.search} ${project.textContent}`.toLocaleLowerCase().includes(query);
    project.hidden = !matches;
    if (matches) visible += 1;
  }
  document.querySelector('#count').textContent = String(visible).padStart(2, '0');
  document.querySelector('#empty').hidden = visible !== 0;
  document.querySelector('#results-status').textContent = `${visible} ${visible === 1 ? 'project' : 'projects'} shown`;
}

for (const button of filters) {
  button.addEventListener('click', () => {
    category = button.dataset.filter;
    for (const filter of filters) {
      const selected = filter === button;
      filter.classList.toggle('active', selected);
      filter.setAttribute('aria-pressed', String(selected));
    }
    updateProjects();
  });
}
search.addEventListener('input', updateProjects);
