document.addEventListener('DOMContentLoaded', () => {
    const menuDisplay = document.getElementById('menu-display');
    const recommendBtn = document.getElementById('recommend-btn');
    const themeToggle = document.getElementById('theme-toggle');

    const menus = [
        { name: 'Bibimbap', category: 'Korean', image: 'images/bibimbap.jpg' },
        { name: 'Kimchi Jjigae', category: 'Korean', image: 'images/kimchi-jjigae.jpg' },
        { name: 'Bulgogi', category: 'Korean', image: 'images/bulgogi.jpg' },
        { name: 'Sushi', category: 'Japanese', image: 'images/sushi.jpg' },
        { name: 'Ramen', category: 'Japanese', image: 'images/ramen.jpg' },
        { name: 'Tonkatsu', category: 'Japanese', image: 'images/sushi.jpg' }, // Reuse sushi as placeholder
        { name: 'Jajangmyeon', category: 'Chinese', image: 'images/jajangmyeon.jpg' },
        { name: 'Tangsu-yuk', category: 'Chinese', image: 'images/jajangmyeon.jpg' }, // Reuse
        { name: 'Dim Sum', category: 'Chinese', image: 'images/jajangmyeon.jpg' }, // Reuse
        { name: 'Pasta', category: 'Western', image: 'images/pasta.jpg' },
        { name: 'Steak', category: 'Western', image: 'images/steak.jpg' },
        { name: 'Pizza', category: 'Western', image: 'images/pizza.jpg' },
        { name: 'Tteokbokki', category: 'Flour-based', image: 'images/bibimbap.jpg' }, // Reuse
        { name: 'Gimbap', category: 'Flour-based', image: 'images/bibimbap.jpg' }, // Reuse
        { name: 'Fried Chicken', category: 'Western', image: 'images/chicken.jpg' }
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
        
        const img = document.createElement('img');
        img.src = menu.image;
        img.alt = menu.name;
        img.classList.add('menu-image');
        
        const info = document.createElement('div');
        info.classList.add('menu-info');
        
        const category = document.createElement('div');
        category.classList.add('menu-category');
        category.textContent = menu.category;
        
        const name = document.createElement('div');
        name.classList.add('menu-name');
        name.textContent = menu.name;
        
        info.appendChild(category);
        info.appendChild(name);
        card.appendChild(img);
        card.appendChild(info);
        menuDisplay.appendChild(card);
    }

    recommendBtn.addEventListener('click', () => {
        const selectedMenu = getRandomMenu();
        displayMenu(selectedMenu);
    });
});
