const toggle = document.getElementById("theme-toggle");
const body = document.body;
toggle.addEventListener('change', (e) =>{
    const isChecked = e.target.checked;
    body.classList.toggle('dark', isChecked);
});

