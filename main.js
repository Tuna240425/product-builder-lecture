document.addEventListener('DOMContentLoaded', () => {
    const menuDisplay = document.getElementById('menu-display');
    const recommendBtn = document.getElementById('recommend-btn');
    const themeToggle = document.getElementById('theme-toggle');

    const menus = [
        { name: 'Bibimbap', category: 'Korean' },
        { name: 'Kimchi Jjigae', category: 'Korean' },
        { name: 'Bulgogi', category: 'Korean' },
        { name: 'Sushi', category: 'Japanese' },
        { name: 'Ramen', category: 'Japanese' },
        { name: 'Tonkatsu', category: 'Japanese' },
        { name: 'Jajangmyeon', category: 'Chinese' },
        { name: 'Tangsu-yuk', category: 'Chinese' },
        { name: 'Dim Sum', category: 'Chinese' },
        { name: 'Pasta', category: 'Western' },
        { name: 'Steak', category: 'Western' },
        { name: 'Pizza', category: 'Western' },
        { name: 'Tteokbokki', category: 'Flour-based' },
        { name: 'Gimbap', category: 'Flour-based' },
        { name: 'Fried Chicken', category: 'Western' }
    ];

    const categoryColors = {
        'Korean': 'var(--korean-color)',
        'Japanese': 'var(--japanese-color)',
        'Chinese': 'var(--chinese-color)',
        'Western': 'var(--western-color)',
        'Flour-based': 'var(--flour-color)'
    };

    // Theme Management
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);

    themeToggle.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        let newTheme = theme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    }

    function getRandomMenu() {
        const randomIndex = Math.floor(Math.random() * menus.length);
        return menus[randomIndex];
    }

    function displayMenu(menu) {
        menuDisplay.innerHTML = '';
        
        const card = document.createElement('div');
        card.classList.add('menu-card');
        card.style.setProperty('--card-color', categoryColors[menu.category]);
        
        const category = document.createElement('div');
        category.classList.add('menu-category');
        category.textContent = menu.category;
        
        const name = document.createElement('div');
        name.classList.add('menu-name');
        name.textContent = menu.name;
        
        card.appendChild(category);
        card.appendChild(name);
        menuDisplay.appendChild(card);
    }

    recommendBtn.addEventListener('click', () => {
        const selectedMenu = getRandomMenu();
        displayMenu(selectedMenu);
    });
});
