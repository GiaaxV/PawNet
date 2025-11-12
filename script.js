// Datos de ejemplo
const samplePosts = [
    {
        id: 1,
        user: "Luna",
        userAvatar: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=100&h=100&fit=crop&crop=face",
        image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500&h=400&fit=crop",
        caption: "¡Día perfecto en el Parque Omar! 🌞 Luna está súper feliz corriendo entre las flores 🌸 #PanamáCity",
        likes: 42,
        comments: 8,
        timeAgo: "2h",
        location: "Parque Omar, Ciudad de Panamá"
    },
    {
        id: 2,
        user: "Max",
        userAvatar: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=100&h=100&fit=crop&crop=face",
        image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=500&h=400&fit=crop",
        caption: "Sesión de fotos en Casco Viejo 📸 ¿Qué les parece mi pose? 😎 #CascoViejo #Panamá",
        likes: 67,
        comments: 12,
        timeAgo: "4h",
        location: "Casco Viejo, Ciudad de Panamá"
    },
    {
        id: 3,
        user: "Mimi",
        userAvatar: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=100&h=100&fit=crop&crop=face",
        image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500&h=400&fit=crop",
        caption: "Siesta de domingo en Pedregal... 😴 No molestar por favor 💤 #Pedregal #DomingoRelajado",
        likes: 89,
        comments: 15,
        timeAgo: "6h",
        location: "Pedregal, Ciudad de Panamá"
    }
];

const sampleStories = [
    {
        id: 1,
        user: "Coco",
        userAvatar: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=70&h=70&fit=crop&crop=face",
        background: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=200&h=300&fit=crop",
        text: "Explorando Albrook 🌳",
        timeAgo: "3h",
        location: "Albrook, Ciudad de Panamá"
    },
    {
        id: 2,
        user: "Toby",
        userAvatar: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=70&h=70&fit=crop&crop=face",
        background: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=200&h=300&fit=crop",
        text: "Playa en Panamá 🏖️",
        timeAgo: "5h",
        location: "Costa del Este"
    },
    {
        id: 3,
        user: "Bella",
        userAvatar: "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=70&h=70&fit=crop&crop=face",
        background: "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=200&h=300&fit=crop",
        text: "Veterinario en Multiplaza 🏥",
        timeAgo: "1h",
        location: "Multiplaza, Punta Pacífica"
    },
    {
        id: 4,
        user: "Rocky",
        userAvatar: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=70&h=70&fit=crop&crop=face",
        background: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=200&h=300&fit=crop",
        text: "Entrenamiento en Tocumen 💪",
        timeAgo: "30min",
        location: "Tocumen, Panamá"
    }
];

const sampleReels = [
    {
        id: 1,
        user: "Luna_PTY",
        userAvatar: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=40&h=40&fit=crop&crop=face",
        video: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=600&fit=crop",
        description: "¡Corriendo por el Parque Omar como una campeona! 🏃‍♀️🐕 #ParqueOmar #PanamáCity #CorriendoLibre",
        likes: 234,
        comments: 45,
        shares: 12,
        location: "Parque Omar, Ciudad de Panamá"
    },
    {
        id: 2,
        user: "Max_507",
        userAvatar: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=40&h=40&fit=crop&crop=face",
        video: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=600&fit=crop",
        description: "Trucos nuevos aprendidos en Chorrera 🎪 ¿Cuál les gusta más? #TrucosDePerro #Chorrera #Panamá",
        likes: 189,
        comments: 67,
        shares: 23,
        location: "La Chorrera, Panamá Oeste"
    },
    {
        id: 3,
        user: "Mimi_Pty",
        userAvatar: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=40&h=40&fit=crop&crop=face",
        video: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=600&fit=crop",
        description: "Momento zen en mi rincón favorito de Pedregal 🧘‍♀️😸 #ZenCat #Pedregal #RelaxMode",
        likes: 156,
        comments: 34,
        shares: 8,
        location: "Pedregal, Ciudad de Panamá"
    }
];

const sampleMatches = [
    {
        id: 1,
        name: "Bella",
        breed: "Labrador",
        age: "2 años",
        location: "Ciudad de Panamá",
        image: "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=300&h=200&fit=crop",
        personality: "Juguetona y cariñosa",
        district: "San Francisco"
    },
    {
        id: 2,
        name: "Rocky",
        breed: "Pastor Alemán",
        age: "3 años",
        location: "Chorrera",
        image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=300&h=200&fit=crop",
        personality: "Protector y leal",
        district: "Panamá Oeste"
    },
    {
        id: 3,
        name: "Coco",
        breed: "Persa",
        age: "1 año",
        location: "Pedregal",
        image: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=300&h=200&fit=crop",
        personality: "Tranquilo y elegante",
        district: "Ciudad de Panamá"
    },
    {
        id: 4,
        name: "Toby",
        breed: "Beagle",
        age: "4 años",
        location: "Tocumen",
        image: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=300&h=200&fit=crop",
        personality: "Aventurero y sociable",
        district: "Panamá Este"
    },
    {
        id: 5,
        name: "Princesa",
        breed: "Chihuahua",
        age: "1 año",
        location: "Albrook",
        image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=300&h=200&fit=crop",
        personality: "Pequeña pero valiente",
        district: "Ciudad de Panamá"
    },
    {
        id: 6,
        name: "Simba",
        breed: "Golden Retriever",
        age: "2 años",
        location: "Costa del Este",
        image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=300&h=200&fit=crop",
        personality: "Amigable y energético",
        district: "Punta Pacífica"
    }
];

const sampleAdoptions = [
    {
        id: 1,
        name: "Charlie",
        breed: "Mestizo",
        age: "6 meses",
        gender: "Macho",
        location: "San Miguelito, Provincia de Panamá",
        foundation: "Fundación San Francisco de Asís",
        image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=300&h=250&fit=crop",
        description: "Charlie es un cachorro muy juguetón que busca una familia amorosa. Le encanta jugar con pelotas y es muy sociable con otros perros.",
        phone: "383-3080",
        whatsapp: "+507 6980-5087",
        instagram: "@ponteenalgo",
        status: "Disponible",
        vaccinated: true,
        sterilized: false
    },
    {
        id: 2,
        name: "Bella",
        breed: "Labrador Mix",
        age: "2 años",
        gender: "Hembra",
        location: "Ciudad de Panamá",
        foundation: "Fundación Spay Panamá",
        image: "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=300&h=250&fit=crop",
        description: "Bella es una perra muy cariñosa y tranquila. Perfecta para familias con niños. Ya está esterilizada y vacunada.",
        whatsapp: "Contactar vía Instagram",
        instagram: "@fundacionspaypty",
        status: "Disponible",
        vaccinated: true,
        sterilized: true
    },
    {
        id: 3,
        name: "Max",
        breed: "Pastor Alemán",
        age: "4 años",
        gender: "Macho",
        location: "Gorgona, Panamá",
        foundation: "Panama Andy's Animal Rescue",
        image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=300&h=250&fit=crop",
        description: "Max es un perro adulto muy bien educado y protector. Ideal para familias que buscan un compañero leal y obediente.",
        whatsapp: "Contactar vía Instagram",
        instagram: "@panamandysanimalrescue",
        status: "Disponible",
        vaccinated: true,
        sterilized: true
    },
    {
        id: 4,
        name: "Luna",
        breed: "Gata Común",
        age: "1 año",
        gender: "Hembra",
        location: "Ciudad de Panamá",
        foundation: "Defensores de Animales Panamá",
        image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=300&h=250&fit=crop",
        description: "Luna es una gatita muy activa y juguetona. Perfecta para familias que buscan una compañera cariñosa y divertida.",
        phone: "6372-9107",
        whatsapp: "+507 6524-1314",
        instagram: "@defensoresanimalespty",
        status: "Disponible",
        vaccinated: true,
        sterilized: true
    },
    {
        id: 5,
        name: "Coco",
        breed: "Golden Retriever",
        age: "3 años",
        gender: "Hembra",
        location: "Boquete, Provincia de Chiriquí",
        foundation: "Amigos de Animales - Boquete",
        image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=300&h=250&fit=crop",
        description: "Coco es una perra muy inteligente y cariñosa. Ideal para familias activas que disfruten de caminatas y actividades al aire libre.",
        whatsapp: "+507 6361-5098",
        status: "Disponible",
        vaccinated: true,
        sterilized: true
    },
    {
        id: 6,
        name: "Milo",
        breed: "Gato Siamés",
        age: "8 meses",
        gender: "Macho",
        location: "San Miguelito, Provincia de Panamá",
        foundation: "Fundación San Francisco de Asís",
        image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=300&h=250&fit=crop",
        description: "Milo es un gatito joven muy inteligente y juguetón. Busca una familia que le dé mucho amor y atención.",
        phone: "383-3080",
        whatsapp: "+507 6980-5087",
        instagram: "@ponteenalgo",
        status: "Disponible",
        vaccinated: true,
        sterilized: false
    }
];

// Variables globales
let currentUser = null;
let likedPosts = new Set();

// Authentication System
function getCurrentUser() {
    const userData = localStorage.getItem('pawnet_currentUser');
    return userData ? JSON.parse(userData) : null;
}

function saveCurrentUser(user) {
    localStorage.setItem('pawnet_currentUser', JSON.stringify(user));
    currentUser = user;
}

function getAllUsers() {
    const users = localStorage.getItem('pawnet_users');
    return users ? JSON.parse(users) : [];
}

function saveAllUsers(users) {
    localStorage.setItem('pawnet_users', JSON.stringify(users));
}

function findUserByEmail(email) {
    const users = getAllUsers();
    return users.find(user => user.email === email);
}

// Post Management Functions
function saveUserPost(post) {
    const currentUser = getCurrentUser();
    if (!currentUser) return;
    
    // Get existing user posts
    const userPosts = getUserPosts(currentUser.id);
    
    // Add new post
    userPosts.unshift(post);
    
    // Save to localStorage
    localStorage.setItem(`pawnet_posts_${currentUser.id}`, JSON.stringify(userPosts));
    
    console.log('💾 Post guardado para usuario:', currentUser.id);
    console.log('📋 Total posts del usuario:', userPosts.length);
}

function getUserPosts(userId) {
    const posts = localStorage.getItem(`pawnet_posts_${userId}`);
    return posts ? JSON.parse(posts) : [];
}

function loadUserPostsFromStorage() {
    const currentUser = getCurrentUser();
    if (!currentUser) return [];
    
    const userPosts = getUserPosts(currentUser.id);
    console.log('📂 Cargando posts del usuario desde localStorage:', userPosts.length);
    
    // Add user posts to samplePosts if not already there
    userPosts.forEach(post => {
        if (!samplePosts.find(p => p.id === post.id)) {
            samplePosts.unshift(post);
        }
    });
    
    return userPosts;
}

// Story Management Functions
function saveUserStory(story) {
    const currentUser = getCurrentUser();
    if (!currentUser) return;
    
    const userStories = getUserStories(currentUser.id);
    userStories.unshift(story);
    localStorage.setItem(`pawnet_stories_${currentUser.id}`, JSON.stringify(userStories));
    console.log('💾 Historia guardada para usuario:', currentUser.id);
}

function getUserStories(userId) {
    const stories = localStorage.getItem(`pawnet_stories_${userId}`);
    return stories ? JSON.parse(stories) : [];
}

function loadUserStoriesFromStorage() {
    const currentUser = getCurrentUser();
    if (!currentUser) return [];
    
    const userStories = getUserStories(currentUser.id);
    userStories.forEach(story => {
        if (!sampleStories.find(s => s.id === story.id)) {
            sampleStories.unshift(story);
        }
    });
    return userStories;
}

// Reel Management Functions
function saveUserReel(reel) {
    const currentUser = getCurrentUser();
    if (!currentUser) return;
    
    const userReels = getUserReels(currentUser.id);
    userReels.unshift(reel);
    localStorage.setItem(`pawnet_reels_${currentUser.id}`, JSON.stringify(userReels));
    console.log('💾 Reel guardado para usuario:', currentUser.id);
}

function getUserReels(userId) {
    const reels = localStorage.getItem(`pawnet_reels_${userId}`);
    return reels ? JSON.parse(reels) : [];
}

function loadUserReelsFromStorage() {
    const currentUser = getCurrentUser();
    if (!currentUser) return [];
    
    const userReels = getUserReels(currentUser.id);
    userReels.forEach(reel => {
        if (!sampleReels.find(r => r.id === reel.id)) {
            sampleReels.unshift(reel);
        }
    });
    return userReels;
}

function registerUser(userData) {
    const users = getAllUsers();

    // Check if user already exists
    if (findUserByEmail(userData.email)) {
        return { success: false, message: 'Ya existe una cuenta con este email 📧' };
    }

    // Create new user
    const newUser = {
        id: Date.now(),
        ...userData,
        createdAt: new Date().toISOString(),
        avatar: 'https://via.placeholder.com/100',
        petAvatar: 'https://via.placeholder.com/100'
    };

    // Add to users array
    users.push(newUser);
    saveAllUsers(users);

    return { success: true, user: newUser };
}

function loginUser(email, password) {
    const user = findUserByEmail(email);

    if (!user) {
        return { success: false, message: 'No existe una cuenta con este email 📧' };
    }

    if (user.password !== password) {
        return { success: false, message: 'Contraseña incorrecta 🔒' };
    }

    return { success: true, user: user };
}

function updateAuthUI() {
    const authButtons = document.querySelector('.auth-buttons');
    const currentUser = getCurrentUser();

    if (currentUser) {
        // User is logged in
        authButtons.innerHTML = `
            <div class="user-menu">
                <img src="${currentUser.avatar || 'https://via.placeholder.com/40'}" alt="Usuario" class="user-avatar">
                <span class="user-name">${currentUser.petName || currentUser.firstName || 'Usuario'}</span>
                <button class="btn-secondary" onclick="logout()">Cerrar Sesión</button>
            </div>
        `;

        // Update sidebar user info
        updateSidebarUserInfo(currentUser);

        // Update create post area
        const profilePic = document.querySelector('.create-post .profile-pic');
        if (profilePic) {
            profilePic.src = currentUser.petAvatar || currentUser.avatar || 'https://via.placeholder.com/50';
        }

        const postInput = document.querySelector('.post-input');
        if (postInput) {
            postInput.placeholder = `¿Qué está haciendo ${currentUser.petName || 'tu mascota'} hoy en Panamá? 🐕🇵🇦`;
        }

        // Auto-reload profile if we're on the profile section
        const profileSection = document.getElementById('profile');
        if (profileSection && profileSection.classList.contains('active')) {
            loadUserProfile();
        }
    } else {
        // User is not logged in
        authButtons.innerHTML = `
            <button class="btn-secondary" onclick="showLogin()">Iniciar Sesión</button>
            <button class="btn-primary" onclick="showRegister()">Registrarse</button>
        `;
    }
}

function updateSidebarUserInfo(user) {
    const sidebarUserInfo = document.getElementById('sidebarUserInfo');
    if (sidebarUserInfo && user) {
        sidebarUserInfo.innerHTML = `
            <img src="${user.petAvatar || user.avatar || 'https://via.placeholder.com/40'}" alt="Usuario" class="sidebar-avatar">
            <div class="user-details">
                <span class="username">${user.petName || user.firstName || 'Mi Mascota'}</span>
                <span class="user-status">Configuración y perfil</span>
            </div>
            <i class="fas fa-chevron-right user-arrow"></i>
        `;
        
        // Make sure the click handler is set
        sidebarUserInfo.onclick = goToDashboard;
    }
}

function goToDashboard() {
    window.location.href = 'dashboard.html';
}

function logout() {
    if (confirm('¿Estás seguro de que quieres cerrar sesión?')) {
        localStorage.removeItem('pawnet_currentUser');
        currentUser = null;
        updateAuthUI();
        showNotification('Sesión cerrada exitosamente 👋');
    }
}

// Inicialización
document.addEventListener('DOMContentLoaded', function () {
    console.log('🚀 PawNet iniciando...');

    try {
        // Initialize authentication
        currentUser = getCurrentUser();
        console.log('✅ Usuario actual:', currentUser);

        updateAuthUI();
        console.log('✅ Auth UI actualizada');

        setupAuthForms();
        console.log('✅ Formularios de auth configurados');

        // Load user content from storage
        if (currentUser) {
            loadUserPostsFromStorage();
            loadUserStoriesFromStorage();
            loadUserReelsFromStorage();
            loadLikes();
            console.log('✅ Contenido del usuario cargado desde localStorage');
        }

        // Load content
        loadFeed();
        console.log('✅ Feed cargado');

        loadStories();
        console.log('✅ Historias cargadas');

        loadReels();
        console.log('✅ Reels cargados');

        loadMatches();
        console.log('✅ Matches cargados');

        loadAdoptions();
        console.log('✅ Adopciones cargadas');

        loadUserProfile();
        console.log('✅ Perfil de usuario cargado');

        setupNavigation();
        console.log('✅ Navegación configurada');

        initializeUploadFeatures();
        console.log('✅ Funciones de upload inicializadas');

        setupTextPost();
        console.log('✅ Post de texto configurado');

        console.log('🎉 PawNet cargado completamente!');
        
        // Test navigation after everything is loaded
        setTimeout(() => {
            console.log('🧪 Probando navegación...');
            testNavigation();
        }, 1000);
        
    } catch (error) {
        console.error('❌ Error al inicializar PawNet:', error);
    }
});

// Test function to verify navigation works
function testNavigation() {
    const sections = document.querySelectorAll('.section');
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    
    console.log('🔍 Test de navegación:');
    console.log('   Secciones encontradas:', sections.length);
    console.log('   Enlaces de sidebar:', sidebarLinks.length);
    
    sections.forEach(section => {
        console.log(`   - ${section.id}: ${section.classList.contains('active') ? 'ACTIVA' : 'inactiva'}`);
    });
    
    // Test clicking on stories
    console.log('🧪 Probando click en Stories...');
    showSection('stories');
}

// Simple navigation function for direct calls
window.navigateToSection = function(sectionId) {
    console.log('🎯 Navegación directa a:', sectionId);
    showSection(sectionId);
}

// Initialize upload features
function initializeUploadFeatures() {
    // Prevent default drag behaviors on the entire document
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        document.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    // Add keyboard shortcuts
    document.addEventListener('keydown', function (e) {
        // Ctrl/Cmd + U for upload photo
        if ((e.ctrlKey || e.metaKey) && e.key === 'u') {
            e.preventDefault();
            uploadPhoto();
        }

        // Ctrl/Cmd + Shift + U for upload video
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'U') {
            e.preventDefault();
            uploadVideo();
        }

        // Escape to close modals
        if (e.key === 'Escape') {
            const openModals = document.querySelectorAll('.modal[style*="block"]');
            openModals.forEach(modal => {
                modal.style.display = 'none';
                if (modal.id === 'uploadPhotoModal') cancelPhotoUpload();
                if (modal.id === 'uploadVideoModal') cancelVideoUpload();
            });
        }
    });
}

// Navegación
function setupNavigation() {
    console.log('🔧 Configurando navegación...');
    
    // Setup header navigation
    const navLinks = document.querySelectorAll('.nav-link');
    console.log('📍 Enlaces de header encontrados:', navLinks.length);

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            console.log('🔗 Click en navegación header:', this.getAttribute('href'));

            const targetSection = this.getAttribute('href').substring(1);
            console.log('📄 Mostrando sección:', targetSection);
            showSection(targetSection);
        });
    });

    // Setup sidebar navigation
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    console.log('📍 Enlaces de sidebar encontrados:', sidebarLinks.length);

    sidebarLinks.forEach(link => {
        // Skip dashboard link as it goes to external page
        if (link.getAttribute('href') === 'dashboard.html') {
            return;
        }

        link.addEventListener('click', function (e) {
            e.preventDefault();
            console.log('🔗 Click en navegación sidebar:', this.getAttribute('href'));

            const targetSection = this.getAttribute('href').substring(1);
            console.log('📄 Mostrando sección:', targetSection);
            showSection(targetSection);
        });
    });
}

function showSection(sectionId) {
    console.log('📄 Cambiando a sección:', sectionId);

    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.section');
    console.log('📋 Secciones encontradas:', sections.length);
    sections.forEach((section, index) => {
        console.log(`   Sección ${index}: ${section.id} - ${section.classList.contains('active') ? 'activa' : 'inactiva'}`);
        section.classList.remove('active');
    });

    // Mostrar la sección seleccionada
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        console.log('✅ Sección activada:', sectionId);
        console.log('   Clases de la sección:', targetSection.className);

        // Update navigation links
        updateNavigation(sectionId);

        // Auto-load profile data when navigating to profile
        if (sectionId === 'profile') {
            loadUserProfile();
        }

        // Load specific content based on section
        switch(sectionId) {
            case 'stories':
                loadStories();
                break;
            case 'reels':
                loadReels();
                break;
            case 'matches':
                loadMatches();
                break;
            case 'adoption':
                loadAdoptions();
                break;
        }
    } else {
        console.error('❌ Sección no encontrada:', sectionId);
        console.log('   Secciones disponibles:', Array.from(sections).map(s => s.id));
    }
}

function updateNavigation(activeSection) {
    // Update header navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${activeSection}`) {
            link.classList.add('active');
        }
    });

    // Update sidebar navigation
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    sidebarLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${activeSection}`) {
            link.classList.add('active');
        }
    });
}

// Feed Functions
function loadFeed() {
    const feedContainer = document.getElementById('feed');
    feedContainer.innerHTML = '';

    samplePosts.forEach(post => {
        const postElement = createPostElement(post);
        feedContainer.appendChild(postElement);
    });
    
    // Load recommendations
    loadRecommendations();
}

// Recommendations Functions
function loadRecommendations() {
    const recommendationsList = document.getElementById('recommendationsList');
    if (!recommendationsList) return;
    
    const currentUser = getCurrentUser();
    const allUsers = getAllUsers();
    
    // Filter out current user and get random users
    let recommendations = allUsers.filter(user => {
        if (!currentUser) return true;
        return user.id !== currentUser.id;
    });
    
    // If no registered users, create sample recommendations
    if (recommendations.length === 0) {
        recommendations = createSampleRecommendations();
    }
    
    // Shuffle and take first 5
    recommendations = shuffleArray(recommendations).slice(0, 5);
    
    recommendationsList.innerHTML = '';
    recommendations.forEach(user => {
        const recElement = createRecommendationElement(user);
        recommendationsList.appendChild(recElement);
    });
}

function createSampleRecommendations() {
    return [
        {
            id: 'sample1',
            petName: 'Max',
            petBreed: 'Golden Retriever',
            location: 'Ciudad de Panamá',
            petAvatar: 'https://via.placeholder.com/50/FFB6C1/000000?text=Max',
            firstName: 'María'
        },
        {
            id: 'sample2',
            petName: 'Luna',
            petBreed: 'Husky Siberiano',
            location: 'Costa del Este',
            petAvatar: 'https://via.placeholder.com/50/87CEEB/000000?text=Luna',
            firstName: 'Carlos'
        },
        {
            id: 'sample3',
            petName: 'Rocky',
            petBreed: 'Bulldog Francés',
            location: 'Casco Viejo',
            petAvatar: 'https://via.placeholder.com/50/98FB98/000000?text=Rocky',
            firstName: 'Ana'
        },
        {
            id: 'sample4',
            petName: 'Bella',
            petBreed: 'Labrador',
            location: 'Albrook',
            petAvatar: 'https://via.placeholder.com/50/DDA0DD/000000?text=Bella',
            firstName: 'José'
        },
        {
            id: 'sample5',
            petName: 'Coco',
            petBreed: 'Poodle',
            location: 'Punta Pacífica',
            petAvatar: 'https://via.placeholder.com/50/F0E68C/000000?text=Coco',
            firstName: 'Laura'
        }
    ];
}

function createRecommendationElement(user) {
    const div = document.createElement('div');
    div.className = 'recommendation-item';
    
    const isFollowing = checkIfFollowing(user.id);
    
    div.innerHTML = `
        <img src="${user.petAvatar || user.avatar || 'https://via.placeholder.com/50'}" 
             alt="${user.petName || user.firstName}" 
             class="recommendation-avatar">
        <div class="recommendation-info">
            <div class="recommendation-name">${user.petName || user.firstName}</div>
            <div class="recommendation-details">${user.petBreed || 'Mascota'} • ${user.location || 'Panamá'}</div>
        </div>
        <button class="follow-btn ${isFollowing ? 'following' : ''}" data-user-id="${user.id}">
            ${isFollowing ? 'Siguiendo' : 'Seguir'}
        </button>
    `;
    
    // Add follow button event
    const followBtn = div.querySelector('.follow-btn');
    followBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFollow(user.id, followBtn);
    });
    
    // Add click to view profile
    div.addEventListener('click', () => {
        viewUserProfile(user);
    });
    
    return div;
}

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function toggleFollow(userId, button) {
    const currentUser = getCurrentUser();
    if (!currentUser) {
        showNotification('Debes iniciar sesión para seguir usuarios 🔒');
        showLogin();
        return;
    }
    
    const following = getFollowing();
    const index = following.indexOf(userId);
    
    if (index > -1) {
        // Unfollow
        following.splice(index, 1);
        button.textContent = 'Seguir';
        button.classList.remove('following');
        showNotification('Dejaste de seguir a este usuario');
    } else {
        // Follow
        following.push(userId);
        button.textContent = 'Siguiendo';
        button.classList.add('following');
        showNotification('¡Ahora sigues a este usuario! 🎉');
    }
    
    saveFollowing(following);
    
    // Update profile if active
    const profileSection = document.getElementById('profile');
    if (profileSection && profileSection.classList.contains('active')) {
        loadUserProfile();
    }
}

function getFollowing() {
    const currentUser = getCurrentUser();
    if (!currentUser) return [];
    
    const following = localStorage.getItem(`pawnet_following_${currentUser.id}`);
    return following ? JSON.parse(following) : [];
}

function saveFollowing(following) {
    const currentUser = getCurrentUser();
    if (!currentUser) return;
    
    localStorage.setItem(`pawnet_following_${currentUser.id}`, JSON.stringify(following));
}

function checkIfFollowing(userId) {
    const following = getFollowing();
    return following.includes(userId);
}

function getFollowers(userId) {
    // Get all users and check who follows this user
    const allUsers = getAllUsers();
    let followers = [];
    
    allUsers.forEach(user => {
        const userFollowing = localStorage.getItem(`pawnet_following_${user.id}`);
        if (userFollowing) {
            const followingList = JSON.parse(userFollowing);
            if (followingList.includes(userId)) {
                followers.push(user.id);
            }
        }
    });
    
    return followers;
}

function getFollowingCount() {
    return getFollowing().length;
}

function getFollowersCount(userId) {
    return getFollowers(userId).length;
}

function showFollowers() {
    const currentUser = getCurrentUser();
    if (!currentUser) return;
    
    const followerIds = getFollowers(currentUser.id);
    const allUsers = getAllUsers();
    const followers = allUsers.filter(user => followerIds.includes(user.id));
    
    if (followers.length === 0) {
        showNotification('Aún no tienes seguidores 😊');
        return;
    }
    
    showUserListModal('Seguidores', followers);
}

function showFollowing() {
    const currentUser = getCurrentUser();
    if (!currentUser) return;
    
    const followingIds = getFollowing();
    const allUsers = getAllUsers();
    const following = allUsers.filter(user => followingIds.includes(user.id));
    
    // Add sample users if following them
    const sampleUsers = createSampleRecommendations();
    sampleUsers.forEach(sample => {
        if (followingIds.includes(sample.id)) {
            following.push(sample);
        }
    });
    
    if (following.length === 0) {
        showNotification('Aún no sigues a nadie 😊');
        return;
    }
    
    showUserListModal('Siguiendo', following);
}

function showUserListModal(title, users) {
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.id = 'userListModal';
    
    let usersHTML = users.map(user => `
        <div class="recommendation-item" style="margin-bottom: 0.5rem;">
            <img src="${user.petAvatar || user.avatar || 'https://via.placeholder.com/50'}" 
                 alt="${user.petName || user.firstName}" 
                 class="recommendation-avatar">
            <div class="recommendation-info">
                <div class="recommendation-name">${user.petName || user.firstName}</div>
                <div class="recommendation-details">${user.petBreed || 'Mascota'} • ${user.location || 'Panamá'}</div>
            </div>
        </div>
    `).join('');
    
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 500px;">
            <span class="close" onclick="closeUserListModal()">&times;</span>
            <h2>${title}</h2>
            <div style="max-height: 400px; overflow-y: auto; margin-top: 1rem;">
                ${usersHTML}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

function closeUserListModal() {
    const modal = document.getElementById('userListModal');
    if (modal) {
        modal.remove();
    }
}

function viewUserProfile(user) {
    showNotification(`Ver perfil de ${user.petName || user.firstName} - Próximamente 👀`);
}

function createPostElement(post) {
    const postDiv = document.createElement('div');
    postDiv.className = 'post-card';
    
    console.log('🖼️ Creando post para:', post.user, 'con imagen:', post.image ? 'SÍ' : 'NO');

    // Determine media element (only if there's an image/video)
    let mediaElement = '';
    if (post.image) {
        mediaElement = post.isVideo ?
            `<video src="${post.image}" class="post-image" controls></video>` :
            `<img src="${post.image}" alt="Post image" class="post-image" onerror="console.error('Error cargando imagen:', this.src)">`;
    }

    postDiv.innerHTML = `
        <div class="post-card-header">
            <img src="${post.userAvatar}" alt="${post.user}" class="profile-pic">
            <div>
                <h4>${post.user}</h4>
                <p style="color: #999; font-size: 0.9rem;">${post.timeAgo} • ${post.location}</p>
            </div>
        </div>
        <div class="post-card-content">
            <p style="margin-bottom: ${post.image ? '1rem' : '0'}; font-size: ${post.isTextOnly ? '1.1rem' : '1rem'}; line-height: 1.6;">${post.caption}</p>
            ${mediaElement}
        </div>
        <div class="post-actions-bar">
            <button class="action-btn like-btn ${likedPosts.has(post.id) ? 'liked' : ''}" data-post-id="${post.id}">
                <i class="fas fa-heart"></i> <span class="like-count">${post.likes}</span>
            </button>
            <button class="action-btn comment-btn" data-post-id="${post.id}">
                <i class="fas fa-comment"></i> ${post.comments}
            </button>
            <button class="action-btn share-btn" data-post-id="${post.id}">
                <i class="fas fa-share"></i> Compartir
            </button>
        </div>
    `;
    
    // Add event listeners
    const likeBtn = postDiv.querySelector('.like-btn');
    const commentBtn = postDiv.querySelector('.comment-btn');
    const shareBtn = postDiv.querySelector('.share-btn');
    
    likeBtn.addEventListener('click', () => toggleLike(post.id));
    commentBtn.addEventListener('click', () => showComments(post.id));
    shareBtn.addEventListener('click', () => sharePost(post.id));
    
    return postDiv;
}

// Stories Functions
function loadStories() {
    const storiesContainer = document.getElementById('storiesContainer');
    const storiesGrid = document.getElementById('storiesGrid');

    if (storiesContainer) {
        storiesContainer.innerHTML = '';
        sampleStories.forEach(story => {
            const storyElement = createStoryBarElement(story);
            storiesContainer.appendChild(storyElement);
        });
    }

    if (storiesGrid) {
        storiesGrid.innerHTML = '';
        sampleStories.forEach(story => {
            const storyElement = createStoryGridElement(story);
            storiesGrid.appendChild(storyElement);
        });
    }
}

function createStoryBarElement(story) {
    const storyDiv = document.createElement('div');
    storyDiv.className = 'story-item';
    storyDiv.style.cursor = 'pointer';
    storyDiv.innerHTML = `
        <img src="${story.userAvatar}" alt="${story.user}" class="story-avatar">
        <p class="story-username">${story.user}</p>
    `;
    storyDiv.addEventListener('click', () => viewStory(story.id));
    return storyDiv;
}

function createStoryGridElement(story) {
    const storyDiv = document.createElement('div');
    storyDiv.className = 'story-card';
    storyDiv.style.cursor = 'pointer';
    storyDiv.innerHTML = `
        <div class="story-time">${story.timeAgo}</div>
        <img src="${story.background}" alt="Story background" class="story-background">
        <div class="story-overlay">
            <div class="story-user-info">
                <img src="${story.userAvatar}" alt="${story.user}" class="story-user-avatar">
                <span>${story.user}</span>
            </div>
            <p class="story-text">${story.text}</p>
            <p class="story-location">📍 ${story.location}</p>
        </div>
    `;
    storyDiv.addEventListener('click', () => viewStory(story.id));
    return storyDiv;
}

function viewStory(storyId) {
    const story = sampleStories.find(s => s.id === storyId);
    if (story) {
        // Create story viewer modal
        const modal = document.createElement('div');
        modal.className = 'story-viewer-modal';
        modal.innerHTML = `
            <div class="story-viewer">
                <button class="story-close">&times;</button>
                <div class="story-progress">
                    <div class="story-progress-bar"></div>
                </div>
                <img src="${story.background}" alt="Story" class="story-viewer-image">
                <div class="story-viewer-info">
                    <div class="story-viewer-user">
                        <img src="${story.userAvatar}" alt="${story.user}" class="story-viewer-avatar">
                        <span>${story.user}</span>
                        <span class="story-viewer-time">${story.timeAgo}</span>
                    </div>
                    <p class="story-viewer-text">${story.text}</p>
                    <p class="story-viewer-location">📍 ${story.location}</p>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Add close button event listener
        const closeBtn = modal.querySelector('.story-close');
        closeBtn.addEventListener('click', closeStoryViewer);
        
        // Auto close after 5 seconds
        setTimeout(() => {
            closeStoryViewer();
        }, 5000);
        
        // Animate progress bar
        const progressBar = modal.querySelector('.story-progress-bar');
        progressBar.style.animation = 'storyProgress 5s linear forwards';
    }
}

function closeStoryViewer() {
    const modal = document.querySelector('.story-viewer-modal');
    if (modal) {
        modal.remove();
    }
}

// Reels Functions
function loadReels() {
    const reelsContainer = document.getElementById('reelsContainer');
    if (!reelsContainer) return;

    reelsContainer.innerHTML = '';
    sampleReels.forEach(reel => {
        const reelElement = createReelElement(reel);
        reelsContainer.appendChild(reelElement);
    });
}

function createReelElement(reel) {
    const reelDiv = document.createElement('div');
    reelDiv.className = 'reel-item';
    reelDiv.innerHTML = `
        <img src="${reel.video}" alt="Reel video" class="reel-video">
        <button class="reel-play-btn">
            <i class="fas fa-play"></i>
        </button>
        <div class="reel-overlay">
            <div class="reel-user-info">
                <img src="${reel.userAvatar}" alt="${reel.user}" class="reel-user-avatar">
                <span class="reel-username">${reel.user}</span>
            </div>
            <p class="reel-description">${reel.description}</p>
            <p style="font-size: 0.8rem; opacity: 0.8;">📍 ${reel.location}</p>
        </div>
        <div class="reel-actions">
            <button class="reel-action-btn reel-like-btn ${likedPosts.has(reel.id + 1000) ? 'liked' : ''}" data-reel-id="${reel.id}">
                <i class="fas fa-heart"></i>
                <span style="font-size: 0.7rem; margin-top: 2px;">${reel.likes}</span>
            </button>
            <button class="reel-action-btn reel-comment-btn" data-reel-id="${reel.id}">
                <i class="fas fa-comment"></i>
                <span style="font-size: 0.7rem; margin-top: 2px;">${reel.comments}</span>
            </button>
            <button class="reel-action-btn reel-share-btn" data-reel-id="${reel.id}">
                <i class="fas fa-share"></i>
                <span style="font-size: 0.7rem; margin-top: 2px;">${reel.shares}</span>
            </button>
        </div>
    `;
    
    // Add event listeners
    const playBtn = reelDiv.querySelector('.reel-play-btn');
    const likeBtn = reelDiv.querySelector('.reel-like-btn');
    const commentBtn = reelDiv.querySelector('.reel-comment-btn');
    const shareBtn = reelDiv.querySelector('.reel-share-btn');
    
    playBtn.addEventListener('click', () => playReel(reel.id));
    likeBtn.addEventListener('click', () => toggleReelLike(reel.id));
    commentBtn.addEventListener('click', () => showReelComments(reel.id));
    shareBtn.addEventListener('click', () => shareReel(reel.id));
    
    return reelDiv;
}

function playReel(reelId) {
    const reel = sampleReels.find(r => r.id === reelId);
    if (reel) {
        alert(`▶️ Reproduciendo reel de ${reel.user} desde ${reel.location}`);
    }
}

function toggleReelLike(reelId) {
    const reel = sampleReels.find(r => r.id === reelId);
    if (!reel) return;

    const likeKey = reelId + 1000; // Para evitar conflictos con posts
    if (likedPosts.has(likeKey)) {
        likedPosts.delete(likeKey);
        reel.likes--;
    } else {
        likedPosts.add(likeKey);
        reel.likes++;
    }

    loadReels();
}

function showReelComments(reelId) {
    alert('Comentarios del reel en desarrollo 💬');
}

function shareReel(reelId) {
    const reel = sampleReels.find(r => r.id === reelId);
    if (reel) {
        alert(`¡Reel de ${reel.user} compartido! 🎬`);
    }
}

function toggleLike(postId) {
    const currentUser = getCurrentUser();
    if (!currentUser) {
        showNotification('Debes iniciar sesión para dar like 🔒');
        showLogin();
        return;
    }

    const post = samplePosts.find(p => p.id === postId);
    if (!post) return;

    // Initialize likes if undefined
    if (typeof post.likes !== 'number') {
        post.likes = 0;
    }

    // Toggle like
    if (likedPosts.has(postId)) {
        likedPosts.delete(postId);
        post.likes = Math.max(0, post.likes - 1); // Never go below 0
    } else {
        likedPosts.add(postId);
        post.likes++;
        showNotification('❤️ ¡Te gustó esta publicación!');
    }

    // Save likes to localStorage
    saveLikes();

    // Update only the like button and count
    updateLikeButton(postId, post.likes);
}

function updateLikeButton(postId, likes) {
    // Find all like buttons for this post
    const likeButtons = document.querySelectorAll(`[data-post-id="${postId}"]`);
    likeButtons.forEach(btn => {
        if (btn.classList.contains('like-btn')) {
            const likeCount = btn.querySelector('.like-count');
            if (likeCount) {
                likeCount.textContent = likes;
            }
            
            if (likedPosts.has(postId)) {
                btn.classList.add('liked');
            } else {
                btn.classList.remove('liked');
            }
        }
    });
}

function saveLikes() {
    const currentUser = getCurrentUser();
    if (!currentUser) return;
    
    const likesArray = Array.from(likedPosts);
    localStorage.setItem(`pawnet_likes_${currentUser.id}`, JSON.stringify(likesArray));
}

function loadLikes() {
    const currentUser = getCurrentUser();
    if (!currentUser) return;
    
    const likes = localStorage.getItem(`pawnet_likes_${currentUser.id}`);
    if (likes) {
        const likesArray = JSON.parse(likes);
        likedPosts = new Set(likesArray);
    }
}

function showComments(postId) {
    const currentUser = getCurrentUser();
    if (!currentUser) {
        showNotification('Debes iniciar sesión para comentar 🔒');
        showLogin();
        return;
    }

    const post = samplePosts.find(p => p.id === postId);
    if (!post) return;

    // Store current post ID
    window.currentCommentPostId = postId;

    // Open modal
    const modal = document.getElementById('commentsModal');
    modal.style.display = 'block';

    // Load comments
    loadComments(postId);

    // Setup comment input
    setupCommentInput();
}

function setupCommentInput() {
    const commentInput = document.getElementById('commentInput');
    const postBtn = document.getElementById('postCommentBtn');
    const closeBtn = document.getElementById('closeCommentsModal');

    // Remove old listeners
    postBtn.replaceWith(postBtn.cloneNode(true));
    const newPostBtn = document.getElementById('postCommentBtn');

    newPostBtn.addEventListener('click', postComment);

    commentInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            postComment();
        }
    });

    closeBtn.addEventListener('click', () => {
        closeModal('commentsModal');
        document.getElementById('commentInput').value = '';
    });
}

function loadComments(postId) {
    const commentsContainer = document.getElementById('commentsContainer');
    const comments = getPostComments(postId);

    if (comments.length === 0) {
        commentsContainer.innerHTML = `
            <div class="no-comments">
                <i class="fas fa-comments"></i>
                <p>No hay comentarios aún</p>
                <p style="font-size: 0.9rem;">¡Sé el primero en comentar!</p>
            </div>
        `;
        return;
    }

    commentsContainer.innerHTML = '';
    comments.forEach(comment => {
        const commentElement = createCommentElement(comment);
        commentsContainer.appendChild(commentElement);
    });

    // Scroll to bottom
    commentsContainer.scrollTop = commentsContainer.scrollHeight;
}

function createCommentElement(comment) {
    const div = document.createElement('div');
    div.className = 'comment-item';
    div.innerHTML = `
        <img src="${comment.userAvatar}" alt="${comment.userName}" class="comment-avatar">
        <div class="comment-content">
            <div class="comment-author">${comment.userName}</div>
            <div class="comment-text">${comment.text}</div>
            <div class="comment-time">${comment.timeAgo}</div>
        </div>
    `;
    return div;
}

function postComment() {
    const commentInput = document.getElementById('commentInput');
    const text = commentInput.value.trim();

    if (!text) {
        showNotification('Escribe algo para comentar 💬');
        return;
    }

    const currentUser = getCurrentUser();
    const postId = window.currentCommentPostId;

    const newComment = {
        id: Date.now(),
        postId: postId,
        userName: currentUser.petName || currentUser.firstName,
        userAvatar: currentUser.petAvatar || currentUser.avatar || 'https://via.placeholder.com/40',
        text: text,
        timeAgo: 'Ahora',
        createdAt: new Date().toISOString()
    };

    // Save comment
    saveComment(newComment);

    // Update post comment count
    const post = samplePosts.find(p => p.id === postId);
    if (post) {
        post.comments++;
        updateCommentCount(postId, post.comments);
    }

    // Reload comments
    loadComments(postId);

    // Clear input
    commentInput.value = '';

    showNotification('💬 Comentario publicado');
}

function saveComment(comment) {
    const comments = getAllComments();
    comments.push(comment);
    localStorage.setItem('pawnet_comments', JSON.stringify(comments));
}

function getAllComments() {
    const comments = localStorage.getItem('pawnet_comments');
    return comments ? JSON.parse(comments) : [];
}

function getPostComments(postId) {
    const allComments = getAllComments();
    return allComments.filter(c => c.postId === postId);
}

function updateCommentCount(postId, count) {
    const commentButtons = document.querySelectorAll(`[data-post-id="${postId}"]`);
    commentButtons.forEach(btn => {
        if (btn.classList.contains('comment-btn')) {
            const countText = btn.childNodes[2]; // The text node after the icon
            if (countText) {
                countText.textContent = ` ${count}`;
            }
        }
    });
}

function sharePost(postId) {
    alert('¡Post compartido! 🎉');
}

// Matches Functions
function loadMatches() {
    const matchesGrid = document.getElementById('matchesGrid');
    if (!matchesGrid) return;
    
    matchesGrid.innerHTML = '';

    sampleMatches.forEach(match => {
        const matchElement = createMatchElement(match);
        matchesGrid.appendChild(matchElement);
    });
    
    // Setup filters
    setupMatchFilters();
}

function setupMatchFilters() {
    const animalTypeFilter = document.getElementById('animalTypeFilter');
    const breedFilter = document.getElementById('breedFilter');
    const provinceFilter = document.getElementById('provinceFilter');
    const ageFilter = document.getElementById('ageFilter');
    
    if (animalTypeFilter) {
        animalTypeFilter.addEventListener('change', updateBreedOptions);
    }
    
    // Add filter functionality (can be expanded later)
    if (breedFilter) {
        breedFilter.addEventListener('change', filterMatches);
    }
    
    if (provinceFilter) {
        provinceFilter.addEventListener('change', filterMatches);
    }
    
    if (ageFilter) {
        ageFilter.addEventListener('change', filterMatches);
    }
}

function filterMatches() {
    // This function can be expanded to actually filter the matches
    console.log('🔍 Filtrando matches...');
    // For now, just reload all matches
    // In the future, you can filter based on selected values
}

function createMatchElement(match) {
    console.log('🎴 Creando tarjeta de match para:', match.name, 'ID:', match.id);
    
    const matchDiv = document.createElement('div');
    matchDiv.className = 'match-card';
    matchDiv.innerHTML = `
        <div class="match-badge">Nuevo</div>
        <img src="${match.image}" alt="${match.name}" class="match-image">
        <div class="match-info">
            <h3 class="match-name">${match.name}</h3>
            <p class="match-details">${match.breed} • ${match.age}<br>📍 ${match.location}, ${match.district}</p>
            <div class="match-personality">"${match.personality}"</div>
            <div class="match-actions">
                <button class="btn-match btn-pass" data-match-id="${match.id}">
                    <i class="fas fa-times"></i> Pasar
                </button>
                <button class="btn-match btn-like" data-match-id="${match.id}">
                    <i class="fas fa-heart"></i> Me gusta
                </button>
            </div>
        </div>
    `;
    
    // Add event listeners
    const passBtn = matchDiv.querySelector('.btn-pass');
    const likeBtn = matchDiv.querySelector('.btn-like');
    
    console.log('🔘 Botones encontrados - Pass:', !!passBtn, 'Like:', !!likeBtn);
    
    if (passBtn) {
        passBtn.addEventListener('click', (e) => {
            console.log('❌ Click en Pasar para:', match.name);
            e.stopPropagation();
            passMatch(match.id);
        });
    }
    
    if (likeBtn) {
        likeBtn.addEventListener('click', (e) => {
            console.log('💕 Click en Me gusta para:', match.name);
            e.stopPropagation();
            likeMatch(match.id);
        });
    }
    
    return matchDiv;
}

function likeMatch(matchId) {
    console.log('💕 likeMatch llamada con ID:', matchId);
    
    const currentUser = getCurrentUser();
    console.log('👤 Usuario actual:', currentUser);
    
    if (!currentUser) {
        console.log('⚠️ No hay usuario logueado');
        showNotification('Debes iniciar sesión para hacer matches 🔒');
        showLogin();
        return;
    }

    const match = sampleMatches.find(m => m.id === matchId);
    console.log('🔍 Match encontrado:', match);
    
    if (match) {
        console.log('✅ Mostrando animación de match exitoso');
        // Show match success animation
        showMatchSuccess(match);

        // Create match record
        const matchRecord = {
            id: Date.now(),
            users: [currentUser.id, matchId],
            petNames: [currentUser.petName, match.name],
            createdAt: new Date().toISOString(),
            status: 'active'
        };

        // Save match to localStorage
        const matches = JSON.parse(localStorage.getItem('pawnet_matches') || '[]');
        matches.push(matchRecord);
        localStorage.setItem('pawnet_matches', JSON.stringify(matches));
        console.log('💾 Match guardado en localStorage');

        // Redirect to chat after animation
        setTimeout(() => {
            console.log('💬 Redirigiendo al chat...');
            hideMatchSuccess();
            openChat(matchRecord, match);
        }, 2500);
    } else {
        console.error('❌ No se encontró el match con ID:', matchId);
    }
}

function showMatchSuccess(match) {
    const animation = document.createElement('div');
    animation.className = 'match-success-animation';
    animation.id = 'matchSuccessAnimation';
    animation.innerHTML = `
        <div class="match-success-content">
            <h2>¡Es un Match! 💕</h2>
            <p>¡Felicidades! Ahora puedes chatear con el dueño de ${match.name}</p>
            <div style="font-size: 3rem; margin: 1rem 0;">🐾❤️🐾</div>
        </div>
    `;
    document.body.appendChild(animation);
}

function hideMatchSuccess() {
    const animation = document.getElementById('matchSuccessAnimation');
    if (animation) {
        animation.remove();
    }
}

function openChat(matchRecord, matchData) {
    // Switch to chat section
    showSection('chat');

    // Update navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(l => l.classList.remove('active'));

    // Load chat interface
    loadChatInterface(matchRecord, matchData);
}

function loadChatInterface(matchRecord, matchData) {
    const matchInfo = document.getElementById('matchInfo');
    const chatMessages = document.getElementById('chatMessages');

    // Load match info
    matchInfo.innerHTML = `
        <img src="${matchData.image}" alt="${matchData.name}">
        <div class="match-info-text">
            <h3>${matchData.name}</h3>
            <p>${matchData.breed} • ${matchData.age} • ${matchData.location}</p>
        </div>
    `;

    // Load existing messages (if any)
    const messages = JSON.parse(localStorage.getItem(`pawnet_chat_${matchRecord.id}`) || '[]');
    displayMessages(messages);

    // Store current match for message sending
    window.currentMatch = matchRecord;
    window.currentMatchData = matchData;
    
    // Setup chat event listeners
    setupChatEventListeners();
}

function setupChatEventListeners() {
    // Back button
    const backBtn = document.getElementById('backToMatchesBtn');
    if (backBtn) {
        backBtn.replaceWith(backBtn.cloneNode(true)); // Remove old listeners
        const newBackBtn = document.getElementById('backToMatchesBtn');
        newBackBtn.addEventListener('click', backToMatches);
    }
    
    // Send message button
    const sendBtn = document.getElementById('sendMessageBtn');
    if (sendBtn) {
        sendBtn.replaceWith(sendBtn.cloneNode(true));
        const newSendBtn = document.getElementById('sendMessageBtn');
        newSendBtn.addEventListener('click', sendMessage);
    }
    
    // Message input (Enter key)
    const messageInput = document.getElementById('messageInput');
    if (messageInput) {
        messageInput.replaceWith(messageInput.cloneNode(true));
        const newMessageInput = document.getElementById('messageInput');
        newMessageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
    
    // Request meeting button
    const meetingBtn = document.getElementById('requestMeetingBtn');
    if (meetingBtn) {
        meetingBtn.replaceWith(meetingBtn.cloneNode(true));
        const newMeetingBtn = document.getElementById('requestMeetingBtn');
        newMeetingBtn.addEventListener('click', requestMeeting);
    }
    
    // Share location button
    const locationBtn = document.getElementById('shareLocationBtn');
    if (locationBtn) {
        locationBtn.replaceWith(locationBtn.cloneNode(true));
        const newLocationBtn = document.getElementById('shareLocationBtn');
        newLocationBtn.addEventListener('click', shareLocation);
    }
}

function displayMessages(messages) {
    const chatMessages = document.getElementById('chatMessages');
    const currentUser = getCurrentUser();

    if (messages.length === 0) {
        chatMessages.innerHTML = `
            <div style="text-align: center; color: #666; padding: 2rem;">
                <i class="fas fa-comments" style="font-size: 2rem; margin-bottom: 1rem; color: #ddd;"></i>
                <p>¡Inicia la conversación! Saluda y organiza un encuentro para vuestras mascotas 🐾</p>
            </div>
        `;
        return;
    }

    chatMessages.innerHTML = '';
    messages.forEach(message => {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${message.senderId === currentUser.id ? 'sent' : 'received'}`;

        const time = new Date(message.timestamp).toLocaleTimeString('es-ES', {
            hour: '2-digit',
            minute: '2-digit'
        });

        messageDiv.innerHTML = `
            <div class="message-bubble">
                ${message.text}
                <div class="message-time">${time}</div>
            </div>
        `;

        chatMessages.appendChild(messageDiv);
    });

    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function passMatch(matchId) {
    const matchCard = event.target.closest('.match-card');
    matchCard.style.opacity = '0.5';
    setTimeout(() => {
        matchCard.remove();
    }, 500);
}

// Adoption Functions
function loadAdoptions() {
    const adoptionGrid = document.getElementById('adoptionGrid');
    adoptionGrid.innerHTML = '';

    sampleAdoptions.forEach(adoption => {
        const adoptionElement = createAdoptionElement(adoption);
        adoptionGrid.appendChild(adoptionElement);
    });
}

function createAdoptionElement(adoption) {
    const adoptionDiv = document.createElement('div');
    adoptionDiv.className = 'adoption-card';
    
    // Create features array
    const features = [];
    if (adoption.vaccinated) features.push('Vacunado');
    if (adoption.sterilized) features.push('Esterilizado');
    features.push(adoption.gender);
    
    const featuresHTML = features.map(feature => 
        `<span class="adoption-feature">${feature}</span>`
    ).join('');
    
    adoptionDiv.innerHTML = `
        <div class="adoption-status-badge">${adoption.status}</div>
        <img src="${adoption.image}" alt="${adoption.name}" class="adoption-image">
        <div class="adoption-info">
            <h3 class="adoption-name">${adoption.name}</h3>
            <p class="adoption-details">${adoption.breed} • ${adoption.age}</p>
            
            <div class="adoption-foundation">
                <div class="adoption-foundation-name">${adoption.foundation}</div>
                <div class="adoption-location">📍 ${adoption.location}</div>
            </div>
            
            <p class="adoption-description">${adoption.description}</p>
            
            <div class="adoption-features">
                ${featuresHTML}
            </div>
            
            <div class="adoption-actions">
                <button class="btn-contact" data-adoption-id="${adoption.id}">
                    <i class="fas fa-phone"></i> Contactar
                </button>
                <button class="btn-adopt" data-adoption-id="${adoption.id}">
                    <i class="fas fa-heart"></i> Adoptar
                </button>
            </div>
        </div>
    `;
    
    // Add event listeners
    const contactBtn = adoptionDiv.querySelector('.btn-contact');
    const adoptBtn = adoptionDiv.querySelector('.btn-adopt');
    
    contactBtn.addEventListener('click', () => contactFoundation(adoption.id));
    adoptBtn.addEventListener('click', () => adoptPet(adoption.id));
    
    return adoptionDiv;
}

function contactFoundation(adoptionId) {
    const pet = sampleAdoptions.find(a => a.id === adoptionId);
    if (!pet) return;
    
    // Create contact modal
    const modal = document.createElement('div');
    modal.className = 'adoption-contact-modal';
    modal.innerHTML = `
        <div class="adoption-contact-content">
            <span class="close" onclick="closeAdoptionContact()">&times;</span>
            <div class="contact-header">
                <img src="${pet.image}" alt="${pet.name}" class="contact-pet-image">
                <div class="contact-pet-info">
                    <h3>${pet.name}</h3>
                    <p>${pet.breed} • ${pet.age} • ${pet.gender}</p>
                </div>
            </div>
            
            <div class="contact-foundation">
                <h4>${pet.foundation}</h4>
                <p>📍 ${pet.location}</p>
                
                <div class="contact-options">
                    ${pet.phone ? `
                        <a href="tel:${pet.phone}" class="contact-btn phone-btn">
                            <i class="fas fa-phone"></i>
                            <div>
                                <strong>Llamar</strong>
                                <span>${pet.phone}</span>
                            </div>
                        </a>
                    ` : ''}
                    
                    ${pet.whatsapp && pet.whatsapp !== 'Contactar vía Instagram' ? `
                        <a href="https://wa.me/${pet.whatsapp.replace(/[^0-9]/g, '')}" target="_blank" class="contact-btn whatsapp-btn">
                            <i class="fab fa-whatsapp"></i>
                            <div>
                                <strong>WhatsApp</strong>
                                <span>${pet.whatsapp}</span>
                            </div>
                        </a>
                    ` : ''}
                    
                    ${pet.instagram ? `
                        <a href="https://instagram.com/${pet.instagram.replace('@', '')}" target="_blank" class="contact-btn instagram-btn">
                            <i class="fab fa-instagram"></i>
                            <div>
                                <strong>Instagram</strong>
                                <span>${pet.instagram}</span>
                            </div>
                        </a>
                    ` : ''}
                </div>
                
                <div class="contact-message">
                    <p><strong>Mensaje sugerido:</strong></p>
                    <div class="suggested-message">
                        "Hola, vi a ${pet.name} en PawNet y me interesa conocer más sobre el proceso de adopción. ¿Podrían darme más información? Gracias."
                    </div>
                    <button class="btn-copy" onclick="copyMessage('${pet.name}')">
                        <i class="fas fa-copy"></i> Copiar mensaje
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

function closeAdoptionContact() {
    const modal = document.querySelector('.adoption-contact-modal');
    if (modal) {
        modal.remove();
    }
}

function copyMessage(petName) {
    const message = `Hola, vi a ${petName} en PawNet y me interesa conocer más sobre el proceso de adopción. ¿Podrían darme más información? Gracias.`;
    navigator.clipboard.writeText(message).then(() => {
        showNotification('Mensaje copiado al portapapeles ✅');
    });
}

function adoptPet(adoptionId) {
    const currentUser = getCurrentUser();
    if (!currentUser) {
        showNotification('Debes iniciar sesión para adoptar 🔒');
        showLogin();
        return;
    }

    const pet = sampleAdoptions.find(a => a.id === adoptionId);
    if (!pet) return;

    // Show adoption success animation
    showAdoptionInterest(pet);

    // Create adoption chat record
    const adoptionRecord = {
        id: Date.now(),
        petId: adoptionId,
        petName: pet.name,
        foundation: pet.foundation,
        userId: currentUser.id,
        createdAt: new Date().toISOString(),
        status: 'interested'
    };

    // Save adoption interest to localStorage
    const adoptions = JSON.parse(localStorage.getItem('pawnet_adoptions') || '[]');
    adoptions.push(adoptionRecord);
    localStorage.setItem('pawnet_adoptions', JSON.stringify(adoptions));

    // Redirect to chat after animation
    setTimeout(() => {
        hideAdoptionInterest();
        openAdoptionChat(adoptionRecord, pet);
    }, 2500);
}

function showAdoptionInterest(pet) {
    const animation = document.createElement('div');
    animation.className = 'adoption-success-animation';
    animation.id = 'adoptionSuccessAnimation';
    animation.innerHTML = `
        <div class="adoption-success-content">
            <h2>¡Excelente Decisión! 🏠</h2>
            <p>Estás a punto de darle un hogar a ${pet.name}</p>
            <div style="font-size: 3rem; margin: 1rem 0;">🐾❤️🏡</div>
            <p style="font-size: 0.9rem; color: #666;">Conectando con ${pet.foundation}...</p>
        </div>
    `;
    document.body.appendChild(animation);
}

function hideAdoptionInterest() {
    const animation = document.getElementById('adoptionSuccessAnimation');
    if (animation) {
        animation.remove();
    }
}

function openAdoptionChat(adoptionRecord, pet) {
    // Switch to chat section
    showSection('chat');

    // Update navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(l => l.classList.remove('active'));

    // Load adoption chat interface
    loadAdoptionChatInterface(adoptionRecord, pet);
}

function loadAdoptionChatInterface(adoptionRecord, pet) {
    const matchInfo = document.getElementById('matchInfo');
    const chatMessages = document.getElementById('chatMessages');

    // Load foundation info
    matchInfo.innerHTML = `
        <img src="${pet.image}" alt="${pet.name}">
        <div class="match-info-text">
            <h3>${pet.name} - ${pet.foundation}</h3>
            <p>${pet.breed} • ${pet.age} • ${pet.location}</p>
        </div>
    `;

    // Load initial adoption message
    const initialMessage = {
        id: Date.now(),
        text: `Hola, me interesa adoptar a ${pet.name}. ¿Podrían darme más información sobre el proceso de adopción? Gracias.`,
        sender: 'user',
        time: new Date().toLocaleTimeString('es-PA', { hour: '2-digit', minute: '2-digit' })
    };

    displayAdoptionMessages([initialMessage], adoptionRecord);

    // Store current adoption for message sending
    window.currentAdoption = adoptionRecord;
    window.currentAdoptionPet = pet;
    
    // Setup chat event listeners
    setupChatEventListeners();
}

function displayAdoptionMessages(messages, adoptionRecord) {
    const chatMessages = document.getElementById('chatMessages');
    const currentUser = getCurrentUser();

    if (messages.length === 0) {
        chatMessages.innerHTML = `
            <div style="text-align: center; color: #666; padding: 2rem;">
                <i class="fas fa-home" style="font-size: 2rem; margin-bottom: 1rem; color: #ddd;"></i>
                <p>Inicia la conversación sobre la adopción 🐾</p>
            </div>
        `;
        return;
    }

    chatMessages.innerHTML = '';
    messages.forEach(message => {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${message.sender === 'user' ? 'sent' : ''}`;
        
        const avatar = message.sender === 'user' 
            ? (currentUser.petAvatar || currentUser.avatar || 'https://via.placeholder.com/40')
            : 'https://via.placeholder.com/40/4caf50/ffffff?text=F';
        
        messageDiv.innerHTML = `
            <img src="${avatar}" alt="Avatar" class="message-avatar">
            <div class="message-content">
                <p class="message-text">${message.text}</p>
                <span class="message-time">${message.time}</span>
            </div>
        `;
        chatMessages.appendChild(messageDiv);
    });

    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function closeAdoptionInterest() {
    const modal = document.querySelector('.adoption-interest-modal');
    if (modal) {
        modal.remove();
    }
}

// Post Creation Functions
function setupTextPost() {
    const textInput = document.getElementById('textPostInput');
    const publishBtn = document.getElementById('publishTextPostBtn');
    
    if (!textInput || !publishBtn) return;
    
    // Auto-resize textarea
    textInput.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = Math.min(this.scrollHeight, 150) + 'px';
    });
    
    // Publish on button click
    publishBtn.addEventListener('click', publishTextPost);
    
    // Publish on Enter (Shift+Enter for new line)
    textInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            publishTextPost();
        }
    });
}

function publishTextPost() {
    const currentUser = getCurrentUser();
    if (!currentUser) {
        showNotification('Debes iniciar sesión para publicar 🔒');
        showLogin();
        return;
    }
    
    const textInput = document.getElementById('textPostInput');
    const text = textInput.value.trim();
    
    if (!text) {
        showNotification('Escribe algo para publicar 📝');
        return;
    }
    
    // Create new text post
    const newPost = {
        id: Date.now(),
        user: currentUser.petName || currentUser.firstName,
        userAvatar: currentUser.petAvatar || currentUser.avatar || 'https://via.placeholder.com/50',
        image: null, // No image for text posts
        caption: text,
        likes: 0,
        comments: 0,
        timeAgo: 'Ahora',
        location: currentUser.location || 'Panamá',
        isTextOnly: true
    };
    
    // Add to posts array
    samplePosts.unshift(newPost);
    
    // Save to localStorage
    saveUserPost(newPost);
    
    // Reload feed
    loadFeed();
    
    // Clear input
    textInput.value = '';
    textInput.style.height = 'auto';
    
    // Show success notification
    showNotification('¡Publicación creada! 🎉');
    
    // Update profile if active
    const profileSection = document.getElementById('profile');
    if (profileSection && profileSection.classList.contains('active')) {
        loadUserProfile();
    }
}

function uploadPhoto() {
    const currentUser = getCurrentUser();
    if (!currentUser) {
        showNotification('Debes iniciar sesión para subir fotos 🔒');
        showLogin();
        return;
    }
    document.getElementById('uploadPhotoModal').style.display = 'block';
    setupPhotoUpload();
}

function uploadVideo() {
    const currentUser = getCurrentUser();
    if (!currentUser) {
        showNotification('Debes iniciar sesión para subir videos 🔒');
        showLogin();
        return;
    }
    document.getElementById('uploadVideoModal').style.display = 'block';
    setupVideoUpload();
}

// Photo Upload Functions
function setupPhotoUpload() {
    const photoInput = document.getElementById('photoInput');
    const uploadArea = document.getElementById('photoUploadArea');
    const preview = document.getElementById('photoPreview');
    const previewImage = document.getElementById('previewImage');

    // File input change event
    photoInput.addEventListener('change', function (e) {
        handlePhotoFile(e.target.files[0]);
    });

    // Drag and drop events
    uploadArea.addEventListener('dragover', function (e) {
        e.preventDefault();
        uploadArea.classList.add('dragover');
    });

    uploadArea.addEventListener('dragleave', function (e) {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
    });

    uploadArea.addEventListener('drop', function (e) {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
        const files = e.dataTransfer.files;
        if (files.length > 0 && files[0].type.startsWith('image/')) {
            handlePhotoFile(files[0]);
        } else {
            showNotification('Por favor selecciona un archivo de imagen válido 📸');
        }
    });

    // Click to upload
    uploadArea.addEventListener('click', function () {
        photoInput.click();
    });
}

function handlePhotoFile(file) {
    const validation = validatePhotoFile(file);
    if (!validation.valid) {
        showNotification(validation.message);
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        const previewImage = document.getElementById('previewImage');
        const uploadArea = document.getElementById('photoUploadArea');
        const preview = document.getElementById('photoPreview');

        previewImage.src = e.target.result;
        uploadArea.style.display = 'none';
        preview.style.display = 'block';

        // Store the file data for later use
        window.currentPhotoFile = {
            data: e.target.result,
            name: file.name,
            type: file.type,
            size: file.size
        };

        // Show file info
        showNotification(`Imagen cargada: ${file.name} (${formatFileSize(file.size)}) ✅`);
    };
    reader.readAsDataURL(file);
}

function cancelPhotoUpload() {
    const uploadArea = document.getElementById('photoUploadArea');
    const preview = document.getElementById('photoPreview');
    const photoCaption = document.getElementById('photoCaption');
    const photoLocation = document.getElementById('photoLocation');

    uploadArea.style.display = 'block';
    preview.style.display = 'none';
    photoCaption.value = '';
    photoLocation.value = '';
    window.currentPhotoFile = null;
}

function publishPhoto() {
    const currentUser = getCurrentUser();
    if (!currentUser) {
        showNotification('Debes iniciar sesión para publicar fotos 🔒');
        closeModal('uploadPhotoModal');
        showLogin();
        return;
    }

    const caption = document.getElementById('photoCaption').value;
    const location = document.getElementById('photoLocation').value || currentUser.location || 'Panamá';

    if (!window.currentPhotoFile) {
        showNotification('No hay imagen seleccionada 📸');
        return;
    }

    if (!caption.trim()) {
        showNotification('Por favor escribe algo sobre la foto 📝');
        return;
    }

    // Show loading
    const publishBtn = document.querySelector('#uploadPhotoModal .btn-primary');
    const originalText = publishBtn.textContent;
    publishBtn.innerHTML = '<span class="upload-loading">Publicando...</span>';
    publishBtn.disabled = true;

    // Simulate upload delay
    setTimeout(() => {
        // Create new post
        const newPost = {
            id: Date.now(),
            user: currentUser.petName || currentUser.firstName,
            userAvatar: currentUser.petAvatar || currentUser.avatar || "https://via.placeholder.com/50",
            image: window.currentPhotoFile.data,
            caption: caption,
            likes: 0,
            comments: 0,
            timeAgo: "Ahora",
            location: location
        };

        // Add to beginning of posts array
        samplePosts.unshift(newPost);
        console.log('✅ Nueva foto agregada:', newPost);
        console.log('📋 Total posts:', samplePosts.length);

        // Save to localStorage
        saveUserPost(newPost);

        // Reload feed
        loadFeed();

        // Close modal and reset
        closeModal('uploadPhotoModal');
        cancelPhotoUpload();

        // Reset button
        publishBtn.textContent = originalText;
        publishBtn.disabled = false;

        // Show success notification
        showNotification('¡Foto publicada exitosamente! 🎉');
        
        // Update user profile if we're on the profile section
        const profileSection = document.getElementById('profile');
        if (profileSection && profileSection.classList.contains('active')) {
            loadUserProfile();
        }

    }, 2000);
}

// Video Upload Functions
function setupVideoUpload() {
    const videoInput = document.getElementById('videoInput');
    const uploadArea = document.getElementById('videoUploadArea');
    const preview = document.getElementById('videoPreview');
    const previewVideo = document.getElementById('previewVideo');

    // File input change event
    videoInput.addEventListener('change', function (e) {
        handleVideoFile(e.target.files[0]);
    });

    // Drag and drop events
    uploadArea.addEventListener('dragover', function (e) {
        e.preventDefault();
        uploadArea.classList.add('dragover');
    });

    uploadArea.addEventListener('dragleave', function (e) {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
    });

    uploadArea.addEventListener('drop', function (e) {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
        const files = e.dataTransfer.files;
        if (files.length > 0 && files[0].type.startsWith('video/')) {
            handleVideoFile(files[0]);
        } else {
            showNotification('Por favor selecciona un archivo de video válido 🎥');
        }
    });

    // Click to upload
    uploadArea.addEventListener('click', function () {
        videoInput.click();
    });
}

function handleVideoFile(file) {
    const validation = validateVideoFile(file);
    if (!validation.valid) {
        showNotification(validation.message);
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        const previewVideo = document.getElementById('previewVideo');
        const uploadArea = document.getElementById('videoUploadArea');
        const preview = document.getElementById('videoPreview');

        previewVideo.src = e.target.result;
        uploadArea.style.display = 'none';
        preview.style.display = 'block';

        // Store the file data for later use
        window.currentVideoFile = {
            data: e.target.result,
            name: file.name,
            type: file.type,
            size: file.size
        };

        // Show file info
        showNotification(`Video cargado: ${file.name} (${formatFileSize(file.size)}) ✅`);
    };
    reader.readAsDataURL(file);
}

function cancelVideoUpload() {
    const uploadArea = document.getElementById('videoUploadArea');
    const preview = document.getElementById('videoPreview');
    const videoCaption = document.getElementById('videoCaption');
    const videoLocation = document.getElementById('videoLocation');

    uploadArea.style.display = 'block';
    preview.style.display = 'none';
    videoCaption.value = '';
    videoLocation.value = '';
    window.currentVideoFile = null;
}

function publishVideo() {
    const currentUser = getCurrentUser();
    if (!currentUser) {
        showNotification('Debes iniciar sesión para publicar videos 🔒');
        closeModal('uploadVideoModal');
        showLogin();
        return;
    }
    
    const caption = document.getElementById('videoCaption').value;
    const location = document.getElementById('videoLocation').value || currentUser.location || 'Panamá';

    if (!window.currentVideoFile) {
        showNotification('No hay video seleccionado 🎥');
        return;
    }

    if (!caption.trim()) {
        showNotification('Por favor describe el video 📝');
        return;
    }

    // Show loading
    const publishBtn = document.querySelector('#uploadVideoModal .btn-primary');
    const originalText = publishBtn.textContent;
    publishBtn.innerHTML = '<span class="upload-loading">Publicando...</span>';
    publishBtn.disabled = true;

    // Simulate upload delay
    setTimeout(() => {
        // Create new post with video
        const newPost = {
            id: Date.now(),
            user: currentUser.petName || currentUser.firstName,
            userAvatar: currentUser.petAvatar || currentUser.avatar || "https://via.placeholder.com/50",
            image: window.currentVideoFile.data,
            caption: caption + " 🎥",
            likes: 0,
            comments: 0,
            timeAgo: "Ahora",
            location: location,
            isVideo: true
        };

        // Add to beginning of posts array
        samplePosts.unshift(newPost);

        // Save to localStorage
        saveUserPost(newPost);

        // Reload feed
        loadFeed();

        // Close modal and reset
        closeModal('uploadVideoModal');
        cancelVideoUpload();

        // Reset button
        publishBtn.textContent = originalText;
        publishBtn.disabled = false;

        // Show success notification
        showNotification('¡Video publicado exitosamente! 🎬');
        
        // Update user profile if we're on the profile section
        const profileSection = document.getElementById('profile');
        if (profileSection && profileSection.classList.contains('active')) {
            loadUserProfile();
        }

    }, 3000);
}

function createStory() {
    const currentUser = getCurrentUser();
    if (!currentUser) {
        showNotification('Debes iniciar sesión para crear historias 🔒');
        showLogin();
        return;
    }
    
    const modal = document.getElementById('createStoryModal');
    modal.style.display = 'block';
    setupStoryModal();
}

function setupStoryModal() {
    const storyInput = document.getElementById('storyInput');
    const selectBtn = document.getElementById('selectStoryBtn');
    const closeBtn = document.getElementById('closeStoryModal');
    const cancelBtn = document.getElementById('cancelStoryBtn');
    const publishBtn = document.getElementById('publishStoryBtn');
    
    // Remove old listeners
    selectBtn.replaceWith(selectBtn.cloneNode(true));
    const newSelectBtn = document.getElementById('selectStoryBtn');
    
    newSelectBtn.addEventListener('click', () => {
        storyInput.click();
    });
    
    storyInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            previewStory(file);
        }
    });
    
    closeBtn.addEventListener('click', () => {
        closeModal('createStoryModal');
        resetStoryModal();
    });
    
    cancelBtn.addEventListener('click', () => {
        closeModal('createStoryModal');
        resetStoryModal();
    });
    
    publishBtn.addEventListener('click', publishStory);
}

function previewStory(file) {
    const uploadArea = document.getElementById('storyUploadArea');
    const previewArea = document.getElementById('storyPreview');
    const mediaPreview = document.getElementById('storyMediaPreview');
    
    uploadArea.style.display = 'none';
    previewArea.style.display = 'block';
    
    const reader = new FileReader();
    reader.onload = (e) => {
        if (file.type.startsWith('image/')) {
            mediaPreview.innerHTML = `<img src="${e.target.result}" alt="Story preview" style="width: 100%; max-height: 400px; object-fit: cover; border-radius: 10px;">`;
        } else if (file.type.startsWith('video/')) {
            mediaPreview.innerHTML = `<video src="${e.target.result}" controls style="width: 100%; max-height: 400px; border-radius: 10px;"></video>`;
        }
    };
    reader.readAsDataURL(file);
}

function publishStory() {
    const currentUser = getCurrentUser();
    const storyText = document.getElementById('storyText').value;
    const storyLocation = document.getElementById('storyLocation').value;
    const storyInput = document.getElementById('storyInput');
    
    if (!storyInput.files[0]) {
        showNotification('Por favor selecciona una imagen o video 📸');
        return;
    }
    
    // Create story object
    const newStory = {
        id: Date.now(),
        user: currentUser.petName || currentUser.firstName,
        userAvatar: currentUser.petAvatar || currentUser.avatar || 'https://via.placeholder.com/50',
        background: URL.createObjectURL(storyInput.files[0]),
        text: storyText || '¡Mira mi historia! 🐾',
        location: storyLocation || 'Panamá',
        timeAgo: 'Ahora',
        isVideo: storyInput.files[0].type.startsWith('video/')
    };
    
    // Add to stories array
    sampleStories.unshift(newStory);
    
    // Save to localStorage
    saveUserStory(newStory);
    
    // Reload stories
    loadStories();
    
    // Close modal and reset
    closeModal('createStoryModal');
    resetStoryModal();
    
    showNotification('¡Historia publicada! 📱 Desaparecerá en 24 horas');
}

function resetStoryModal() {
    document.getElementById('storyUploadArea').style.display = 'block';
    document.getElementById('storyPreview').style.display = 'none';
    document.getElementById('storyInput').value = '';
    document.getElementById('storyText').value = '';
    document.getElementById('storyLocation').value = '';
    document.getElementById('storyMediaPreview').innerHTML = '';
}

function createReel() {
    const currentUser = getCurrentUser();
    if (!currentUser) {
        showNotification('Debes iniciar sesión para crear reels 🔒');
        showLogin();
        return;
    }
    
    const modal = document.getElementById('createReelModal');
    modal.style.display = 'block';
    setupReelModal();
}

function setupReelModal() {
    const reelInput = document.getElementById('reelInput');
    const selectBtn = document.getElementById('selectReelBtn');
    const closeBtn = document.getElementById('closeReelModal');
    const cancelBtn = document.getElementById('cancelReelBtn');
    const publishBtn = document.getElementById('publishReelBtn');
    
    // Remove old listeners
    selectBtn.replaceWith(selectBtn.cloneNode(true));
    const newSelectBtn = document.getElementById('selectReelBtn');
    
    newSelectBtn.addEventListener('click', () => {
        reelInput.click();
    });
    
    reelInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.type.startsWith('video/')) {
                previewReel(file);
            } else {
                showNotification('Por favor selecciona un archivo de video 🎥');
            }
        }
    });
    
    closeBtn.addEventListener('click', () => {
        closeModal('createReelModal');
        resetReelModal();
    });
    
    cancelBtn.addEventListener('click', () => {
        closeModal('createReelModal');
        resetReelModal();
    });
    
    publishBtn.addEventListener('click', publishReel);
}

function previewReel(file) {
    const uploadArea = document.getElementById('reelUploadArea');
    const previewArea = document.getElementById('reelPreview');
    const videoPreview = document.getElementById('previewReel');
    
    uploadArea.style.display = 'none';
    previewArea.style.display = 'block';
    
    const reader = new FileReader();
    reader.onload = (e) => {
        videoPreview.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

function publishReel() {
    const currentUser = getCurrentUser();
    const reelDescription = document.getElementById('reelDescription').value;
    const reelLocation = document.getElementById('reelLocation').value;
    const reelInput = document.getElementById('reelInput');
    
    if (!reelInput.files[0]) {
        showNotification('Por favor selecciona un video 🎥');
        return;
    }
    
    // Create reel object
    const newReel = {
        id: Date.now(),
        user: currentUser.petName || currentUser.firstName,
        userAvatar: currentUser.petAvatar || currentUser.avatar || 'https://via.placeholder.com/50',
        video: URL.createObjectURL(reelInput.files[0]),
        description: reelDescription || '¡Mira mi reel! 🎬',
        location: reelLocation || 'Panamá',
        likes: 0,
        comments: 0,
        shares: 0
    };
    
    // Add to reels array
    sampleReels.unshift(newReel);
    
    // Save to localStorage
    saveUserReel(newReel);
    
    // Reload reels
    loadReels();
    
    // Close modal and reset
    closeModal('createReelModal');
    resetReelModal();
    
    showNotification('¡Reel publicado! 🎬 Ahora todos pueden verlo');
}

function resetReelModal() {
    document.getElementById('reelUploadArea').style.display = 'block';
    document.getElementById('reelPreview').style.display = 'none';
    document.getElementById('reelInput').value = '';
    document.getElementById('reelDescription').value = '';
    document.getElementById('reelLocation').value = '';
    document.getElementById('previewReel').src = '';
}

function addFilter() {
    alert('¡Filtros divertidos próximamente! 🎭 Orejitas de perro, gafas de sol, corazones, sombreros panameños y más...');
}

// Modal Functions
function showLogin() {
    document.getElementById('loginModal').style.display = 'block';
    closeModal('registerModal');
}

function showRegister() {
    document.getElementById('registerModal').style.display = 'block';
    closeModal('loginModal');
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Cerrar modales al hacer click fuera
window.onclick = function (event) {
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    const uploadPhotoModal = document.getElementById('uploadPhotoModal');
    const uploadVideoModal = document.getElementById('uploadVideoModal');

    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    }
    if (event.target === registerModal) {
        registerModal.style.display = 'none';
    }
    if (event.target === uploadPhotoModal) {
        uploadPhotoModal.style.display = 'none';
        cancelPhotoUpload();
    }
    if (event.target === uploadVideoModal) {
        uploadVideoModal.style.display = 'none';
        cancelVideoUpload();
    }
    
    // Close adoption modals
    if (event.target.classList.contains('adoption-contact-modal')) {
        closeAdoptionContact();
    }
    if (event.target.classList.contains('adoption-interest-modal')) {
        closeAdoptionInterest();
    }
}

// Utility functions for file handling
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function isValidImageType(type) {
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    return validTypes.includes(type.toLowerCase());
}

function isValidVideoType(type) {
    const validTypes = ['video/mp4', 'video/mov', 'video/avi', 'video/quicktime', 'video/webm'];
    return validTypes.includes(type.toLowerCase());
}

// Enhanced file validation
function validatePhotoFile(file) {
    if (!file) {
        return { valid: false, message: 'No se seleccionó ningún archivo 📸' };
    }

    if (!isValidImageType(file.type)) {
        return { valid: false, message: 'Formato no soportado. Usa JPG, PNG, GIF o WebP 📸' };
    }

    if (file.size > 10 * 1024 * 1024) {
        return { valid: false, message: `Archivo muy grande (${formatFileSize(file.size)}). Máximo 10MB 📏` };
    }

    return { valid: true };
}

function validateVideoFile(file) {
    if (!file) {
        return { valid: false, message: 'No se seleccionó ningún archivo 🎥' };
    }

    if (!isValidVideoType(file.type)) {
        return { valid: false, message: 'Formato no soportado. Usa MP4, MOV, AVI o WebM 🎥' };
    }

    if (file.size > 50 * 1024 * 1024) {
        return { valid: false, message: `Archivo muy grande (${formatFileSize(file.size)}). Máximo 50MB 📏` };
    }

    return { valid: true };
}

// Form Handlers
function setupAuthForms() {
    // Login form
    const loginForm = document.querySelector('#loginModal .auth-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            handleLogin();
        });
    }

    // Register form
    const registerForm = document.querySelector('#registerModal .auth-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function (e) {
            e.preventDefault();
            handleRegister();
        });
    }
}

function handleLogin() {
    const email = document.querySelector('#loginModal input[type="email"]').value;
    const password = document.querySelector('#loginModal input[type="password"]').value;

    if (!email || !password) {
        showNotification('Por favor completa todos los campos 📝');
        return;
    }

    const result = loginUser(email, password);

    if (result.success) {
        saveCurrentUser(result.user);
        closeModal('loginModal');
        updateAuthUI();
        showNotification(`¡Bienvenido de vuelta, ${result.user.petName || result.user.firstName}! 🐾`);

        // Clear form
        document.querySelector('#loginModal input[type="email"]').value = '';
        document.querySelector('#loginModal input[type="password"]').value = '';
    } else {
        showNotification(result.message);
    }
}

function handleRegister() {
    const form = document.querySelector('#registerModal .auth-form');

    const ownerName = form.querySelector('input[placeholder="Nombre del dueño"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const password = form.querySelector('input[type="password"]').value;
    const petName = form.querySelector('input[placeholder="Nombre de tu mascota"]').value;
    const petType = form.querySelector('select').value;

    // Validation
    if (!ownerName || !email || !password || !petName || !petType) {
        showNotification('Por favor completa todos los campos 📝');
        return;
    }

    if (password.length < 6) {
        showNotification('La contraseña debe tener al menos 6 caracteres 🔒');
        return;
    }

    if (!isValidEmail(email)) {
        showNotification('Por favor ingresa un email válido 📧');
        return;
    }

    const userData = {
        firstName: ownerName.split(' ')[0],
        lastName: ownerName.split(' ').slice(1).join(' '),
        email: email,
        password: password,
        petName: petName,
        petType: petType,
        location: 'Ciudad de Panamá' // Default location
    };

    const result = registerUser(userData);

    if (result.success) {
        saveCurrentUser(result.user);
        closeModal('registerModal');
        updateAuthUI();
        showNotification(`¡Cuenta creada exitosamente! 🎉 Bienvenido ${result.user.petName} a PawNet 🐾`);

        // Clear form
        form.reset();
    } else {
        showNotification(result.message);
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Funciones adicionales para mejorar la experiencia
function addNewPost(content, image) {
    const currentUser = getCurrentUser();
    if (!currentUser) return;
    
    const newPost = {
        id: samplePosts.length + 1,
        user: currentUser.petName || currentUser.firstName,
        userAvatar: currentUser.petAvatar || currentUser.avatar || "https://via.placeholder.com/50",
        image: image || "https://via.placeholder.com/500x400",
        caption: content,
        likes: 0,
        comments: 0,
        timeAgo: "Ahora",
        location: currentUser.location || "Panamá"
    };

    samplePosts.unshift(newPost);
    loadFeed();
    
    // Update user profile if we're on the profile section
    const profileSection = document.getElementById('profile');
    if (profileSection && profileSection.classList.contains('active')) {
        loadUserProfile();
    }
}

// Simulación de notificaciones
function showNotification(message) {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(45deg, #ff6b6b, #ffa726);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 15px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 3000;
        animation: slideIn 0.3s ease-out;
    `;
    notification.textContent = message;

    document.body.appendChild(notification);

    // Remover después de 3 segundos
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Agregar estilos para la animación de notificación
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Funciones de búsqueda y filtrado
function searchPets(query) {
    // Implementar búsqueda en el futuro
    console.log('Buscando:', query);
}

function filterByLocation(location) {
    // Implementar filtro por ubicación
    console.log('Filtrando por ubicación:', location);
}

function filterByAge(age) {
    // Implementar filtro por edad
    console.log('Filtrando por edad:', age);
}

// Breed options by animal type
const breedOptions = {
    dog: [
        'Labrador Retriever', 'Golden Retriever', 'Pastor Alemán', 'Bulldog Francés',
        'Beagle', 'Poodle', 'Rottweiler', 'Yorkshire Terrier', 'Chihuahua',
        'Boxer', 'Husky Siberiano', 'Dálmata', 'Cocker Spaniel', 'Mestizo'
    ],
    cat: [
        'Persa', 'Siamés', 'Maine Coon', 'Ragdoll', 'British Shorthair',
        'Bengalí', 'Abisinio', 'Russian Blue', 'Sphynx', 'Angora',
        'Gato Común', 'Mestizo'
    ],
    rabbit: [
        'Holandés', 'Angora', 'Lop', 'Rex', 'Flemish Giant',
        'Netherland Dwarf', 'Lionhead', 'Mini Rex', 'Común'
    ],
    bird: [
        'Canario', 'Periquito', 'Cacatúa', 'Loro', 'Agapornis',
        'Ninfa', 'Jilguero', 'Diamante Mandarín', 'Otro'
    ],
    other: ['Otro', 'Mixto', 'No especificado']
};

function updateBreedOptions() {
    const animalType = document.getElementById('animalTypeFilter').value;
    const breedFilter = document.getElementById('breedFilter');

    // Clear current options
    breedFilter.innerHTML = '<option value="">Raza</option>';

    if (animalType && breedOptions[animalType]) {
        breedOptions[animalType].forEach(breed => {
            const option = document.createElement('option');
            option.value = breed.toLowerCase().replace(/\s+/g, '-');
            option.textContent = breed;
            breedFilter.appendChild(option);
        });
    } else {
        breedFilter.innerHTML = '<option value="">Selecciona primero el tipo de animal</option>';
    }
}

// Load user profile
function loadUserProfile() {
    const currentUser = getCurrentUser();
    const profileHeader = document.getElementById('profileHeader');

    if (!currentUser) {
        profileHeader.innerHTML = `
            <div class="profile-login-prompt">
                <i class="fas fa-user-circle profile-login-icon"></i>
                <h2>Inicia sesión para ver tu perfil</h2>
                <p>Conecta con otros dueños de mascotas y comparte momentos especiales</p>
                <button class="btn-primary" id="profileLoginBtn">Iniciar Sesión</button>
            </div>
        `;
        
        // Add event listener to login button
        const loginBtn = document.getElementById('profileLoginBtn');
        if (loginBtn) {
            loginBtn.addEventListener('click', showLogin);
        }
        return;
    }

    // Get real counts
    const followersCount = getFollowersCount(currentUser.id);
    const followingCount = getFollowingCount();
    const postsCount = getUserPosts(currentUser.id).length;

    profileHeader.innerHTML = `
        <img src="${currentUser.petAvatar || currentUser.avatar || 'https://via.placeholder.com/150'}" 
             alt="Mascota" class="profile-avatar">
        <div class="profile-info">
            <h2>${currentUser.petName || 'Mi Mascota'}</h2>
            <p class="breed">${currentUser.petBreed || 'Raza no especificada'} • ${currentUser.petAge || '?'} años</p>
            <p class="bio">${currentUser.petPersonality || currentUser.bio || 'Sin descripción'}</p>
            <div class="profile-stats">
                <span class="stat-item" onclick="showFollowers()">
                    <strong>${followersCount}</strong> Seguidores
                </span>
                <span class="stat-item" onclick="showFollowing()">
                    <strong>${followingCount}</strong> Siguiendo
                </span>
                <span class="stat-item" id="userPostCount">
                    <strong>${postsCount}</strong> Posts
                </span>
            </div>
            <div class="profile-owner">
                <p><strong>Dueño:</strong> ${currentUser.firstName || 'Usuario'} ${currentUser.lastName || ''}</p>
                <p><strong>Ubicación:</strong> ${currentUser.location || 'No especificada'}</p>
            </div>
        </div>
        <button class="btn-primary" id="editProfileBtn">Editar Perfil</button>
    `;

    // Add event listener to edit profile button
    const editBtn = document.getElementById('editProfileBtn');
    if (editBtn) {
        editBtn.addEventListener('click', goToDashboard);
    }

    loadUserPosts();
}

// Load user posts
function loadUserPosts() {
    const currentUser = getCurrentUser();
    if (!currentUser) return;

    const userPostsGrid = document.getElementById('userPostsGrid');
    const userName = currentUser.petName || currentUser.firstName;
    const userPosts = samplePosts.filter(post => post.user === userName);
    
    console.log('👤 Usuario actual:', userName);
    console.log('📋 Posts del usuario:', userPosts.length);
    console.log('📋 Todos los posts:', samplePosts.map(p => ({ user: p.user, caption: p.caption.substring(0, 30) })));

    const userPostCountElement = document.getElementById('userPostCount');
    if (userPostCountElement) {
        userPostCountElement.innerHTML = `<strong>${userPosts.length}</strong> Posts`;
    }

    if (userPosts.length === 0) {
        userPostsGrid.innerHTML = `
            <div class="no-posts">
                <i class="fas fa-camera no-posts-icon"></i>
                <h3>Aún no has publicado nada</h3>
                <p>Comparte los momentos especiales de tu mascota</p>
                <button class="btn-primary" id="uploadFirstPhotoBtn">Subir Primera Foto</button>
            </div>
        `;
        
        // Add event listener to upload button
        const uploadBtn = document.getElementById('uploadFirstPhotoBtn');
        if (uploadBtn) {
            uploadBtn.addEventListener('click', uploadPhoto);
        }
        return;
    }

    userPostsGrid.innerHTML = '';
    userPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'user-post-item';
        postElement.innerHTML = `
            <img src="${post.image}" alt="Post" class="user-post-image">
            <div class="user-post-overlay">
                <div class="user-post-stats">
                    <span><i class="fas fa-heart"></i> ${post.likes}</span>
                    <span><i class="fas fa-comment"></i> ${post.comments}</span>
                </div>
            </div>
        `;
        userPostsGrid.appendChild(postElement);
    });
}

// Chat Functions
function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value.trim();

    if (!messageText || !window.currentMatch) return;

    const currentUser = getCurrentUser();
    const message = {
        id: Date.now(),
        senderId: currentUser.id,
        text: messageText,
        timestamp: new Date().toISOString()
    };

    // Save message
    const chatKey = `pawnet_chat_${window.currentMatch.id}`;
    const messages = JSON.parse(localStorage.getItem(chatKey) || '[]');
    messages.push(message);
    localStorage.setItem(chatKey, JSON.stringify(messages));

    // Clear input
    messageInput.value = '';

    // Refresh messages
    displayMessages(messages);

    // Show notification
    showNotification('Mensaje enviado ✅');
}

function handleMessageKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function requestMeeting() {
    if (!window.currentMatchData) return;

    const message = `¡Hola! Me gustaría organizar un encuentro para que ${getCurrentUser().petName || 'mi mascota'} y ${window.currentMatchData.name} puedan conocerse. ¿Qué te parece si nos encontramos en un parque? 🐾`;

    document.getElementById('messageInput').value = message;
    sendMessage();
}

function shareLocation() {
    if (!window.currentMatchData) return;

    const message = `📍 Estoy cerca de ${getCurrentUser().location || 'Ciudad de Panamá'}. ¿Te queda bien esta zona para el encuentro?`;

    document.getElementById('messageInput').value = message;
    sendMessage();
}

function backToMatches() {
    showSection('matches');

    // Update navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(l => l.classList.remove('active'));
    document.querySelector('a[href="#matches"]').classList.add('active');
}

// Debug function to check posts
function debugPosts() {
    console.log('🔍 Debug de posts:');
    console.log('Total posts:', samplePosts.length);
    samplePosts.forEach((post, index) => {
        console.log(`Post ${index + 1}:`, {
            user: post.user,
            hasImage: !!post.image,
            imageType: typeof post.image,
            imageLength: post.image ? post.image.length : 0,
            caption: post.caption.substring(0, 50) + '...'
        });
    });
}

// Call this function from console to debug: debugPosts()
window.debugPosts = debugPosts;