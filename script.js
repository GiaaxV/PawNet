// Datos de ejemplo para Panamá
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
        userAvatar: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=70&h=70&fit=crop&crop=face",
        background: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=200&h=300&fit=crop",
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
        image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=300&h=200&fit=crop",
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
        location: "Ciudad de Panamá - Fundación Amigos de los Animales",
        image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=300&h=250&fit=crop",
        description: "Charlie es un cachorro muy juguetón que busca una familia amorosa en Panamá. Le encanta jugar con pelotas y es muy sociable con otros perros.",
        contact: "WhatsApp: +507 6123-4567"
    },
    {
        id: 2,
        name: "Whiskers",
        breed: "Gato Común",
        age: "2 años",
        location: "Chorrera - Refugio Gatitos Felices",
        image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=300&h=250&fit=crop",
        description: "Whiskers es un gato muy cariñoso y tranquilo. Perfecto para familias panameñas con niños. Ya está esterilizado y vacunado.",
        contact: "WhatsApp: +507 6234-5678"
    },
    {
        id: 3,
        name: "Buddy",
        breed: "Golden Retriever",
        age: "5 años",
        location: "Pedregal - Asociación Patitas Panameñas",
        image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=300&h=250&fit=crop",
        description: "Buddy es un perro adulto muy bien educado. Ideal para personas en Panamá que buscan un compañero tranquilo y obediente.",
        contact: "WhatsApp: +507 6345-6789"
    },
    {
        id: 4,
        name: "Luna",
        breed: "Husky Siberiano",
        age: "3 años",
        location: "Tocumen - Rescate Canino PTY",
        image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300&h=250&fit=crop",
        description: "Luna es una perra muy activa que necesita una familia con experiencia. Perfecta para actividades al aire libre en el clima panameño.",
        contact: "WhatsApp: +507 6456-7890"
    },
    {
        id: 5,
        name: "Milo",
        breed: "Gato Siamés",
        age: "1 año",
        location: "Albrook - Hogar Temporal Felino",
        image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=300&h=250&fit=crop",
        description: "Milo es un gato joven muy inteligente y juguetón. Busca una familia en Panamá que le dé mucho amor y atención.",
        contact: "WhatsApp: +507 6567-8901"
    }
];

// Variables globales
let currentUser = null;
let likedPosts = new Set();

// Authentication System
function getCurrentUser() {
    const userData = localStorage.getItem('petverse_currentUser');
    return userData ? JSON.parse(userData) : null;
}

function saveCurrentUser(user) {
    localStorage.setItem('petverse_currentUser', JSON.stringify(user));
    currentUser = user;
}

function getAllUsers() {
    const users = localStorage.getItem('petverse_users');
    return users ? JSON.parse(users) : [];
}

function saveAllUsers(users) {
    localStorage.setItem('petverse_users', JSON.stringify(users));
}

function findUserByEmail(email) {
    const users = getAllUsers();
    return users.find(user => user.email === email);
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
                <button class="btn-secondary" onclick="goToDashboard()">Dashboard</button>
                <button class="btn-secondary" onclick="logout()">Cerrar Sesión</button>
            </div>
        `;

        // Update create post area
        const profilePic = document.querySelector('.create-post .profile-pic');
        if (profilePic) {
            profilePic.src = currentUser.petAvatar || currentUser.avatar || 'https://via.placeholder.com/50';
        }

        const postInput = document.querySelector('.post-input');
        if (postInput) {
            postInput.placeholder = `¿Qué está haciendo ${currentUser.petName || 'tu mascota'} hoy en Panamá? 🐕🇵🇦`;
        }
    } else {
        // User is not logged in
        authButtons.innerHTML = `
            <button class="btn-secondary" onclick="showLogin()">Iniciar Sesión</button>
            <button class="btn-primary" onclick="showRegister()">Registrarse</button>
        `;
    }
}

function goToDashboard() {
    window.location.href = 'dashboard.html';
}

function logout() {
    if (confirm('¿Estás seguro de que quieres cerrar sesión?')) {
        localStorage.removeItem('petverse_currentUser');
        currentUser = null;
        updateAuthUI();
        showNotification('Sesión cerrada exitosamente 👋');
    }
}

// Inicialización
document.addEventListener('DOMContentLoaded', function () {
    // Initialize authentication
    currentUser = getCurrentUser();
    updateAuthUI();
    setupAuthForms();

    // Load content
    loadFeed();
    loadStories();
    loadReels();
    loadMatches();
    loadAdoptions();
    setupNavigation();
    initializeUploadFeatures();
});

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
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Remover clase active de todos los links
            navLinks.forEach(l => l.classList.remove('active'));

            // Agregar clase active al link clickeado
            this.classList.add('active');

            // Mostrar la sección correspondiente
            const targetSection = this.getAttribute('href').substring(1);
            showSection(targetSection);
        });
    });
}

function showSection(sectionId) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));

    // Mostrar la sección seleccionada
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
}

// Feed Functions
function loadFeed() {
    const feedContainer = document.getElementById('feed');
    feedContainer.innerHTML = '';

    samplePosts.forEach(post => {
        const postElement = createPostElement(post);
        feedContainer.appendChild(postElement);
    });
}

function createPostElement(post) {
    const postDiv = document.createElement('div');
    postDiv.className = 'post-card';

    // Determine if it's a video post
    const mediaElement = post.isVideo ?
        `<video src="${post.image}" class="post-image" controls></video>` :
        `<img src="${post.image}" alt="Post image" class="post-image">`;

    postDiv.innerHTML = `
        <div class="post-card-header">
            <img src="${post.userAvatar}" alt="${post.user}" class="profile-pic">
            <div>
                <h4>${post.user}</h4>
                <p style="color: #999; font-size: 0.9rem;">${post.timeAgo} • ${post.location}</p>
            </div>
        </div>
        <div class="post-card-content">
            <p style="margin-bottom: 1rem;">${post.caption}</p>
            ${mediaElement}
        </div>
        <div class="post-actions-bar">
            <button class="action-btn ${likedPosts.has(post.id) ? 'liked' : ''}" onclick="toggleLike(${post.id})">
                <i class="fas fa-heart"></i> ${post.likes}
            </button>
            <button class="action-btn" onclick="showComments(${post.id})">
                <i class="fas fa-comment"></i> ${post.comments}
            </button>
            <button class="action-btn" onclick="sharePost(${post.id})">
                <i class="fas fa-share"></i> Compartir
            </button>
        </div>
    `;
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
    storyDiv.innerHTML = `
        <img src="${story.userAvatar}" alt="${story.user}" class="story-avatar">
        <p class="story-username">${story.user}</p>
    `;
    storyDiv.onclick = () => viewStory(story.id);
    return storyDiv;
}

function createStoryGridElement(story) {
    const storyDiv = document.createElement('div');
    storyDiv.className = 'story-card';
    storyDiv.innerHTML = `
        <img src="${story.background}" alt="Story background" class="story-background">
        <div class="story-overlay">
            <div class="story-user-info">
                <img src="${story.userAvatar}" alt="${story.user}" class="story-user-avatar">
                <span>${story.user}</span>
            </div>
            <p class="story-text">${story.text}</p>
            <p style="font-size: 0.8rem; opacity: 0.8;">${story.timeAgo} • ${story.location}</p>
        </div>
    `;
    storyDiv.onclick = () => viewStory(story.id);
    return storyDiv;
}

function viewStory(storyId) {
    const story = sampleStories.find(s => s.id === storyId);
    if (story) {
        alert(`Viendo historia de ${story.user}: "${story.text}" desde ${story.location} 📱`);
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
        <button class="reel-play-btn" onclick="playReel(${reel.id})">
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
            <button class="reel-action-btn ${likedPosts.has(reel.id + 1000) ? 'liked' : ''}" onclick="toggleReelLike(${reel.id})">
                <i class="fas fa-heart"></i>
                <span style="font-size: 0.7rem; margin-top: 2px;">${reel.likes}</span>
            </button>
            <button class="reel-action-btn" onclick="showReelComments(${reel.id})">
                <i class="fas fa-comment"></i>
                <span style="font-size: 0.7rem; margin-top: 2px;">${reel.comments}</span>
            </button>
            <button class="reel-action-btn" onclick="shareReel(${reel.id})">
                <i class="fas fa-share"></i>
                <span style="font-size: 0.7rem; margin-top: 2px;">${reel.shares}</span>
            </button>
        </div>
    `;
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
    const post = samplePosts.find(p => p.id === postId);
    if (!post) return;

    if (likedPosts.has(postId)) {
        likedPosts.delete(postId);
        post.likes--;
    } else {
        likedPosts.add(postId);
        post.likes++;
    }

    loadFeed(); // Recargar el feed para actualizar los likes
}

function showComments(postId) {
    alert('Función de comentarios en desarrollo 💬');
}

function sharePost(postId) {
    alert('¡Post compartido! 🎉');
}

// Matches Functions
function loadMatches() {
    const matchesGrid = document.getElementById('matchesGrid');
    matchesGrid.innerHTML = '';

    sampleMatches.forEach(match => {
        const matchElement = createMatchElement(match);
        matchesGrid.appendChild(matchElement);
    });
}

function createMatchElement(match) {
    const matchDiv = document.createElement('div');
    matchDiv.className = 'match-card';
    matchDiv.innerHTML = `
        <img src="${match.image}" alt="${match.name}" class="match-image">
        <div class="match-info">
            <h3 class="match-name">${match.name}</h3>
            <p class="match-details">${match.breed} • ${match.age}<br>📍 ${match.location}, ${match.district}</p>
            <p style="color: #666; font-size: 0.9rem; margin-bottom: 1rem;">${match.personality}</p>
            <div class="match-actions">
                <button class="btn-match btn-pass" onclick="passMatch(${match.id})">
                    <i class="fas fa-times"></i> Pasar
                </button>
                <button class="btn-match btn-like" onclick="likeMatch(${match.id})">
                    <i class="fas fa-heart"></i> Me gusta
                </button>
            </div>
        </div>
    `;
    return matchDiv;
}

function likeMatch(matchId) {
    const match = sampleMatches.find(m => m.id === matchId);
    if (match) {
        alert(`¡Es un match con ${match.name} de ${match.location}! 💕 Ahora pueden chatear y organizar una cita en Panamá.`);
    }
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
    adoptionDiv.innerHTML = `
        <img src="${adoption.image}" alt="${adoption.name}" class="adoption-image">
        <div class="adoption-info">
            <h3 class="adoption-name">${adoption.name}</h3>
            <p class="adoption-details">${adoption.breed} • ${adoption.age}</p>
            <p class="adoption-location">📍 ${adoption.location}</p>
            <p style="color: #666; line-height: 1.6; margin-bottom: 1rem;">${adoption.description}</p>
            <p style="color: #ff6b6b; font-size: 0.9rem; margin-bottom: 1.5rem;"><i class="fab fa-whatsapp"></i> ${adoption.contact}</p>
            <button class="btn-adopt" onclick="adoptPet(${adoption.id})">
                <i class="fas fa-heart"></i> Adoptar
            </button>
        </div>
    `;
    return adoptionDiv;
}

function adoptPet(adoptionId) {
    const pet = sampleAdoptions.find(a => a.id === adoptionId);
    if (pet) {
        alert(`¡Gracias por tu interés en adoptar a ${pet.name}! 🏠 Contacta directamente: ${pet.contact}. ¡Dale una segunda oportunidad en Panamá!`);
    }
}

// Post Creation Functions
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
            id: samplePosts.length + 1,
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
    const caption = document.getElementById('videoCaption').value;
    const location = document.getElementById('videoLocation').value || 'Panamá';

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
            id: samplePosts.length + 1,
            user: "Tu Mascota",
            userAvatar: "https://via.placeholder.com/50",
            image: window.currentVideoFile.data, // For now, we'll use the video as image
            caption: caption + " 🎥",
            likes: 0,
            comments: 0,
            timeAgo: "Ahora",
            location: location,
            isVideo: true
        };

        // Add to beginning of posts array
        samplePosts.unshift(newPost);

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

    }, 3000);
}

function createStory() {
    alert('¡Crear historia! 📱 Comparte momentos especiales de tu mascota en Panamá que desaparecen en 24 horas');
}

function createReel() {
    alert('¡Crear Reel! 🎬 Graba videos cortos y divertidos de tu mascota con música. ¡Perfecto para mostrar trucos y momentos graciosos!');
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
        showNotification(`¡Bienvenido de vuelta, ${result.user.petName || result.user.firstName}! 🐾🇵🇦`);

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
        showNotification(`¡Cuenta creada exitosamente! 🎉 Bienvenido ${result.user.petName} a PetVerse Panamá 🇵🇦`);

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
    const newPost = {
        id: samplePosts.length + 1,
        user: "Tu Mascota",
        userAvatar: "https://via.placeholder.com/50",
        image: image || "https://via.placeholder.com/500x400",
        caption: content,
        likes: 0,
        comments: 0,
        timeAgo: "Ahora"
    };

    samplePosts.unshift(newPost);
    loadFeed();
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

// Efectos visuales adicionales
document.addEventListener('DOMContentLoaded', function () {
    // Agregar efecto de carga
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);

    // Efecto parallax suave en el scroll
    window.addEventListener('scroll', function () {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.main-content');
        if (parallax) {
            parallax.style.transform = `translateY(${scrolled * 0.1}px)`;
        }
    });
});