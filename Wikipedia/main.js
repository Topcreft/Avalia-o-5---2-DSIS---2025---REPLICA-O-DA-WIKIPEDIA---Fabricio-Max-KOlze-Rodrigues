document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('btn-alternar-tema');
    const body = document.body;
    themeToggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
    }
});