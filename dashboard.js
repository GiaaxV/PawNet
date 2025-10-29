// Dashboard JavaScript
document.addEventListener('DOMContentLoaded', function() {
    initializeDashboard();
    loadUserData();
    setupDashboardNavigation();
    setupFormHandlers();
});

// Initialize dashboard
function initializeDashboard() {
    // Check if user is logged in
    const currentUser = getCurrentUser();
    if (!currentUser) {
        window.location.href = 'index.html';
        return;
    }
    
    // Update user info in header
    updateUserHeader(currentUser);
    
    // Load saved settings
    loadSavedSettings();
}

// Update user header
function updateUserHeader(user) {
    const userAvatar = document.getElementById('userAvatar');
    const userName = document.getElementById('userName');
    
    if (userAvatar && user.avatar) {
        userAvatar.src = user.avatar;
    }
    
    if (userName) {
        userName.textContent = user.petName || user.firstName || 'Usuario';
    }
}

// Setup dashboard navigation
function setupDashboardNavigation() {
    const menuItems = document.querySelectorAll('.menu-item');
    const sections = document.querySelectorAll('.dashboard-section');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const targetSection = this.getAttribute('data-section');
            
            // Remove active class from all items and sections
            menuItems.forEach(mi => mi.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked item and target section
            this.classList.add('active');
            document.getElementById(targetSection).classList.add('active');
        });
    });
}

// Load user data into forms
function loadUserData() {
    const currentUser = getCurrentUser();
    if (!currentUser) return;
    
    // Load profile data
    if (currentUser.firstName) document.getElementById('firstName').value = currentUser.firstName;
    if (currentUser.lastName) document.getElementById('lastName').value = currentUser.lastName;
    if (currentUser.email) document.getElementById('email').value = currentUser.email;
    if (currentUser.phone) document.getElementById('phone').value = currentUser.phone;
    if (currentUser.location) document.getElementById('location').value = currentUser.location;
    if (currentUser.bio) document.getElementById('bio').value = currentUser.bio;
    if (currentUser.avatar) {
        document.getElementById('avatarPreview').src = currentUser.avatar;
    }
    
    // Load pet data
    if (currentUser.petName) document.getElementById('petName').value = currentUser.petName;
    if (currentUser.petType) document.getElementById('petType').value = currentUser.petType;
    if (currentUser.petBreed) document.getElementById('petBreed').value = currentUser.petBreed;
    if (currentUser.petAge) document.getElementById('petAge').value = currentUser.petAge;
    if (currentUser.petGender) document.getElementById('petGender').value = currentUser.petGender;
    if (currentUser.petWeight) document.getElementById('petWeight').value = currentUser.petWeight;
    if (currentUser.petPersonality) document.getElementById('petPersonality').value = currentUser.petPersonality;
    if (currentUser.petAvatar) {
        document.getElementById('petAvatarPreview').src = currentUser.petAvatar;
    }
}

// Setup form handlers
function setupFormHandlers() {
    // Profile form
    const profileForm = document.getElementById('profileForm');
    profileForm.addEventListener('submit', function(e) {
        e.preventDefault();
        saveProfileData();
    });
    
    // Pet form
    const petForm = document.getElementById('petForm');
    petForm.addEventListener('submit', function(e) {
        e.preventDefault();
        savePetData();
    });
    
    // Avatar upload handlers
    document.getElementById('avatarInput').addEventListener('change', function(e) {
        handleAvatarUpload(e.target.files[0], 'avatarPreview');
    });
    
    document.getElementById('petAvatarInput').addEventListener('change', function(e) {
        handleAvatarUpload(e.target.files[0], 'petAvatarPreview');
    });
    
    // Theme selection
    const themeOptions = document.querySelectorAll('.theme-option');
    themeOptions.forEach(option => {
        option.addEventListener('click', function() {
            themeOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Save profile data
function saveProfileData() {
    const currentUser = getCurrentUser();
    if (!currentUser) return;
    
    // Get form data
    const profileData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        phone: document.getElementById('phone').value,
        location: document.getElementById('location').value,
        bio: document.getElementById('bio').value
    };
    
    // Update user object
    Object.assign(currentUser, profileData);
    
    // Save to localStorage
    saveCurrentUser(currentUser);
    
    // Show success message
    showDashboardMessage('Perfil actualizado exitosamente! ✅', 'success');
    
    // Update header
    updateUserHeader(currentUser);
}

// Save pet data
function savePetData() {
    const currentUser = getCurrentUser();
    if (!currentUser) return;
    
    // Get form data
    const petData = {
        petName: document.getElementById('petName').value,
        petType: document.getElementById('petType').value,
        petBreed: document.getElementById('petBreed').value,
        petAge: parseInt(document.getElementById('petAge').value),
        petGender: document.getElementById('petGender').value,
        petWeight: parseFloat(document.getElementById('petWeight').value),
        petPersonality: document.getElementById('petPersonality').value
    };
    
    // Update user object
    Object.assign(currentUser, petData);
    
    // Save to localStorage
    saveCurrentUser(currentUser);
    
    // Show success message
    showDashboardMessage('Perfil de mascota actualizado exitosamente! 🐾', 'success');
    
    // Update header
    updateUserHeader(currentUser);
}

// Handle avatar upload
function handleAvatarUpload(file, previewId) {
    if (!file || !file.type.startsWith('image/')) {
        showDashboardMessage('Por favor selecciona una imagen válida 📸', 'error');
        return;
    }
    
    if (file.size > 5 * 1024 * 1024) {
        showDashboardMessage('La imagen es muy grande. Máximo 5MB 📏', 'error');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        const preview = document.getElementById(previewId);
        preview.src = e.target.result;
        
        // Save to user data
        const currentUser = getCurrentUser();
        if (previewId === 'avatarPreview') {
            currentUser.avatar = e.target.result;
        } else {
            currentUser.petAvatar = e.target.result;
        }
        saveCurrentUser(currentUser);
        updateUserHeader(currentUser);
        
        showDashboardMessage('Foto actualizada exitosamente! 📸', 'success');
    };
    reader.readAsDataURL(file);
}

// Upload avatar functions
function uploadAvatar() {
    document.getElementById('avatarInput').click();
}

function uploadPetAvatar() {
    document.getElementById('petAvatarInput').click();
}

// Save appearance settings
function saveAppearanceSettings() {
    const activeTheme = document.querySelector('.theme-option.active').getAttribute('data-theme');
    const darkMode = document.getElementById('darkMode').checked;
    
    const settings = {
        theme: activeTheme,
        darkMode: darkMode
    };
    
    // Save to localStorage
    localStorage.setItem('pawnet_appearance', JSON.stringify(settings));
    
    // Apply theme
    applyTheme(activeTheme, darkMode);
    
    showDashboardMessage('Configuración de apariencia guardada! 🎨', 'success');
}

// Apply theme
function applyTheme(theme, darkMode) {
    // Remove existing theme classes
    document.body.classList.remove('dark-mode', 'theme-ocean', 'theme-sunset', 'theme-forest');
    
    // Apply dark mode
    if (darkMode) {
        document.body.classList.add('dark-mode');
    }
    
    // Apply color theme
    if (theme !== 'default') {
        document.body.classList.add(`theme-${theme}`);
    }
    
    // Update CSS variables based on theme
    const root = document.documentElement;
    switch (theme) {
        case 'ocean':
            root.style.setProperty('--primary-color', '#3498db');
            root.style.setProperty('--secondary-color', '#2ecc71');
            root.style.setProperty('--accent-color', '#1abc9c');
            break;
        case 'sunset':
            root.style.setProperty('--primary-color', '#e74c3c');
            root.style.setProperty('--secondary-color', '#f39c12');
            root.style.setProperty('--accent-color', '#e67e22');
            break;
        case 'forest':
            root.style.setProperty('--primary-color', '#27ae60');
            root.style.setProperty('--secondary-color', '#2ecc71');
            root.style.setProperty('--accent-color', '#16a085');
            break;
        default:
            root.style.setProperty('--primary-color', '#ff6b6b');
            root.style.setProperty('--secondary-color', '#4ecdc4');
            root.style.setProperty('--accent-color', '#ffa726');
    }
}

// Save privacy settings
function savePrivacySettings() {
    const currentUser = getCurrentUser();
    if (!currentUser) return;
    
    const privacySettings = {
        publicProfile: document.getElementById('publicProfile').checked,
        showInSearch: document.getElementById('showInSearch').checked,
        allowMessages: document.getElementById('allowMessages').checked
    };
    
    currentUser.privacy = privacySettings;
    saveCurrentUser(currentUser);
    
    showDashboardMessage('Configuración de privacidad guardada! 🔒', 'success');
}

// Save notification settings
function saveNotificationSettings() {
    const currentUser = getCurrentUser();
    if (!currentUser) return;
    
    const notificationSettings = {
        likes: document.getElementById('notifyLikes').checked,
        comments: document.getElementById('notifyComments').checked,
        matches: document.getElementById('notifyMatches').checked,
        messages: document.getElementById('notifyMessages').checked
    };
    
    currentUser.notifications = notificationSettings;
    saveCurrentUser(currentUser);
    
    showDashboardMessage('Configuración de notificaciones guardada! 🔔', 'success');
}

// Change password
function changePassword() {
    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (!currentPassword || !newPassword || !confirmPassword) {
        showDashboardMessage('Por favor completa todos los campos 📝', 'error');
        return;
    }
    
    if (newPassword !== confirmPassword) {
        showDashboardMessage('Las contraseñas no coinciden 🔒', 'error');
        return;
    }
    
    if (newPassword.length < 6) {
        showDashboardMessage('La contraseña debe tener al menos 6 caracteres 🔒', 'error');
        return;
    }
    
    const currentUser = getCurrentUser();
    if (currentUser.password !== currentPassword) {
        showDashboardMessage('La contraseña actual es incorrecta 🔒', 'error');
        return;
    }
    
    // Update password
    currentUser.password = newPassword;
    saveCurrentUser(currentUser);
    
    // Clear form
    document.getElementById('currentPassword').value = '';
    document.getElementById('newPassword').value = '';
    document.getElementById('confirmPassword').value = '';
    
    showDashboardMessage('Contraseña cambiada exitosamente! 🔒', 'success');
}

// Delete account
function deleteAccount() {
    if (confirm('¿Estás seguro de que quieres eliminar tu cuenta? Esta acción no se puede deshacer.')) {
        if (confirm('¿Realmente estás seguro? Se perderán todos tus datos, posts y matches.')) {
            // Remove user data
            localStorage.removeItem('pawnet_currentUser');
            
            // Remove from users list
            const users = JSON.parse(localStorage.getItem('pawnet_users') || '[]');
            const currentUser = getCurrentUser();
            const updatedUsers = users.filter(user => user.email !== currentUser.email);
            localStorage.setItem('pawnet_users', JSON.stringify(updatedUsers));
            
            // Redirect to home
            alert('Tu cuenta ha sido eliminada. Serás redirigido a la página principal.');
            window.location.href = 'index.html';
        }
    }
}

// Load saved settings
function loadSavedSettings() {
    // Load appearance settings
    const appearanceSettings = JSON.parse(localStorage.getItem('pawnet_appearance') || '{}');
    if (appearanceSettings.theme) {
        const themeOption = document.querySelector(`[data-theme="${appearanceSettings.theme}"]`);
        if (themeOption) {
            document.querySelectorAll('.theme-option').forEach(opt => opt.classList.remove('active'));
            themeOption.classList.add('active');
        }
    }
    if (appearanceSettings.darkMode) {
        document.getElementById('darkMode').checked = true;
    }
    
    // Apply saved theme
    applyTheme(appearanceSettings.theme || 'default', appearanceSettings.darkMode || false);
    
    // Load privacy settings
    const currentUser = getCurrentUser();
    if (currentUser && currentUser.privacy) {
        document.getElementById('publicProfile').checked = currentUser.privacy.publicProfile !== false;
        document.getElementById('showInSearch').checked = currentUser.privacy.showInSearch !== false;
        document.getElementById('allowMessages').checked = currentUser.privacy.allowMessages !== false;
    }
    
    // Load notification settings
    if (currentUser && currentUser.notifications) {
        document.getElementById('notifyLikes').checked = currentUser.notifications.likes !== false;
        document.getElementById('notifyComments').checked = currentUser.notifications.comments !== false;
        document.getElementById('notifyMatches').checked = currentUser.notifications.matches !== false;
        document.getElementById('notifyMessages').checked = currentUser.notifications.messages !== false;
    }
}

// Show dashboard message
function showDashboardMessage(message, type = 'success') {
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.message');
    existingMessages.forEach(msg => msg.remove());
    
    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    
    // Insert at the top of the active section
    const activeSection = document.querySelector('.dashboard-section.active');
    const settingsCard = activeSection.querySelector('.settings-card');
    settingsCard.insertBefore(messageDiv, settingsCard.firstChild);
    
    // Remove after 5 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}

// Logout function
function logout() {
    if (confirm('¿Estás seguro de que quieres cerrar sesión?')) {
        localStorage.removeItem('pawnet_currentUser');
        window.location.href = 'index.html';
    }
}