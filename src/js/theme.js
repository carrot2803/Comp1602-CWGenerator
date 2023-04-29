const themes = ['dark', 'solar', 'dark-solar', 'light'];
let currentThemeIndex = 0;

// Get the current theme from local storage, if available
const savedTheme = localStorage.getItem("selectedTheme");
if (savedTheme && themes.includes(savedTheme)) 
    currentThemeIndex = themes.indexOf(savedTheme);

document.body.classList.add(themes[currentThemeIndex]);

// Attach a click event listener to all images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', () => {
        currentThemeIndex = (currentThemeIndex + 1) % themes.length;
        const selectedTheme = themes[currentThemeIndex];

        // Set the body class to the next theme
        document.body.className = '';
        document.body.classList.add(selectedTheme);

        // Store the selected theme in local storage
        localStorage.setItem("selectedTheme", selectedTheme);
    });
});