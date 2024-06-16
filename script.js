document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    document.querySelector('header').classList.toggle('dark-theme');
    document.querySelector('.profile').classList.toggle('dark-theme');
    this.classList.toggle('dark-theme');
  });
  