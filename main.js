document.addEventListener('DOMContentLoaded', () => {
    const menuDisplay = document.getElementById('menu-display');
    const recommendBtn = document.getElementById('recommend-btn');
    const themeToggle = document.getElementById('theme-toggle');
    const langToggle = document.getElementById('lang-toggle');

    const menus = [
        { name: 'Bibimbap', nameKo: '비빔밥', category: 'Korean', categoryKo: '한식', image: 'images/bibimbap.jpg' },
        { name: 'Kimchi Jjigae', nameKo: '김치찌개', category: 'Korean', categoryKo: '한식', image: 'images/kimchi-jjigae.jpg' },
        { name: 'Bulgogi', nameKo: '불고기', category: 'Korean', categoryKo: '한식', image: 'images/bulgogi.jpg' },
        { name: 'Sushi', nameKo: '초밥', category: 'Japanese', categoryKo: '일식', image: 'images/sushi.jpg' },
        { name: 'Ramen', nameKo: '라멘', category: 'Japanese', categoryKo: '일식', image: 'images/ramen.jpg' },
        { name: 'Tonkatsu', nameKo: '돈카츠', category: 'Japanese', categoryKo: '일식', image: 'images/sushi.jpg' },
        { name: 'Jajangmyeon', nameKo: '짜장면', category: 'Chinese', categoryKo: '중식', image: 'images/jajangmyeon.jpg' },
        { name: 'Tangsu-yuk', nameKo: '탕수육', category: 'Chinese', categoryKo: '중식', image: 'images/jajangmyeon.jpg' },
        { name: 'Dim Sum', nameKo: '딤섬', category: 'Chinese', categoryKo: '중식', image: 'images/jajangmyeon.jpg' },
        { name: 'Pasta', nameKo: '파스타', category: 'Western', categoryKo: '양식', image: 'images/pasta.jpg' },
        { name: 'Steak', nameKo: '스테이크', category: 'Western', categoryKo: '양식', image: 'images/steak.jpg' },
        { name: 'Pizza', nameKo: '피자', category: 'Western', categoryKo: '양식', image: 'images/pizza.jpg' },
        { name: 'Tteokbokki', nameKo: '떡볶이', category: 'Flour-based', categoryKo: '분식', image: 'images/bibimbap.jpg' },
        { name: 'Gimbap', nameKo: '김밥', category: 'Flour-based', categoryKo: '분식', image: 'images/bibimbap.jpg' },
        { name: 'Fried Chicken', nameKo: '치킨', category: 'Western', categoryKo: '양식', image: 'images/chicken.jpg' }
    ];

    const categoryColors = {
        'Korean': 'var(--korean-color)',
        'Japanese': 'var(--japanese-color)',
        'Chinese': 'var(--chinese-color)',
        'Western': 'var(--western-color)',
        'Flour-based': 'var(--flour-color)'
    };

    // Language Management
    let currentLang = localStorage.getItem('lang') || 'en';
    applyLanguage(currentLang);

    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'ko' : 'en';
        localStorage.setItem('lang', currentLang);
        applyLanguage(currentLang);
        // Re-display current menu card if one is shown
        const existingCard = menuDisplay.querySelector('.menu-card');
        if (existingCard && lastSelectedMenu) {
            displayMenu(lastSelectedMenu);
        }
    });

    function applyLanguage(lang) {
        langToggle.textContent = lang === 'en' ? 'EN' : 'KO';
        document.documentElement.setAttribute('lang', lang);

        document.querySelectorAll('[data-en]').forEach(el => {
            el.textContent = el.getAttribute(`data-${lang}`);
        });

        document.querySelectorAll('[data-en-placeholder]').forEach(el => {
            el.placeholder = el.getAttribute(`data-${lang}-placeholder`);
        });
    }

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

    let lastSelectedMenu = null;

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
        category.textContent = currentLang === 'ko' ? menu.categoryKo : menu.category;

        const name = document.createElement('div');
        name.classList.add('menu-name');
        name.textContent = currentLang === 'ko' ? menu.nameKo : menu.name;

        info.appendChild(category);
        info.appendChild(name);
        card.appendChild(img);
        card.appendChild(info);
        menuDisplay.appendChild(card);
    }

    recommendBtn.addEventListener('click', () => {
        const selectedMenu = getRandomMenu();
        lastSelectedMenu = selectedMenu;
        displayMenu(selectedMenu);
    });
});
