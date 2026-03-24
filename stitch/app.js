/**
 * The Coding Science - Main JavaScript
 * Handles interactivity, dark mode, navigation, and form functionality
 */

// Dark Mode Toggle
function initDarkMode() {
  const html = document.documentElement;
  const isDark = localStorage.getItem('theme') === 'dark';
  
  if (isDark) {
    html.classList.add('dark');
  }
}

function toggleDarkMode() {
  const html = document.documentElement;
  const isDark = html.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Initialize dark mode on load
document.addEventListener('DOMContentLoaded', function() {
  initDarkMode();
  initializeEventListeners();
});

// Event Listeners
function initializeEventListeners() {
  // Mobile menu toggle
  const menuButton = document.querySelector('header button');
  if (menuButton) {
    menuButton.addEventListener('click', toggleMobileMenu);
  }

  // Navigation links
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', handleNavigation);
  });

  // Buttons
  const buttons = document.querySelectorAll('button[data-action]');
  buttons.forEach(button => {
    const action = button.getAttribute('data-action');
    button.addEventListener('click', () => handleButtonAction(action, button));
  });

  // Course filtering
  initializeCourseFilters();
  
  // Form handling
  initializeFormHandling();
  
  // Search functionality
  initializeSearch();
}

// Mobile Menu Toggle
function toggleMobileMenu() {
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  if (mobileMenu) {
    mobileMenu.classList.toggle('hidden');
  }
}

// Navigation
function handleNavigation(e) {
  const href = e.target.getAttribute('href');
  if (href && href.startsWith('/')) {
    // Local navigation
    window.location.href = href;
  }
}

// Button Actions
function handleButtonAction(action, button) {
  switch(action) {
    case 'start-learning':
      window.location.href = '/browse_courses/code.html';
      break;
    case 'view-course':
      showCourseModal(button.dataset.courseId);
      break;
    case 'enroll':
      handleEnrollment(button.dataset.courseId);
      break;
    case 'submit-quiz':
      submitQuiz();
      break;
    case 'new-discussion':
      showNewDiscussionModal();
      break;
    case 'edit-profile':
      showEditProfileModal();
      break;
    default:
      console.log('Action:', action);
  }
}

// Course Filtering
function initializeCourseFilters() {
  const filterButtons = document.querySelectorAll('[data-filter]');
  const courses = document.querySelectorAll('[data-course]');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      filterCourses(filter, courses, filterButtons, this);
    });
  });
}

function filterCourses(filter, courses, buttons, activeButton) {
  // Update active button
  buttons.forEach(btn => btn.classList.remove('bg-primary', 'text-white'));
  activeButton.classList.add('bg-primary', 'text-white');
  
  // Filter courses
  courses.forEach(course => {
    if (filter === 'all' || course.getAttribute('data-course') === filter) {
      fadeIn(course);
    } else {
      fadeOut(course);
    }
  });
}

// Fade Animations
function fadeOut(element) {
  element.style.transition = 'opacity 0.3s ease-out';
  element.style.opacity = '0';
  element.style.pointerEvents = 'none';
}

function fadeIn(element) {
  element.style.transition = 'opacity 0.3s ease-in';
  element.style.opacity = '1';
  element.style.pointerEvents = 'auto';
}

// Form Handling
function initializeFormHandling() {
  const forms = document.querySelectorAll('form[data-form]');
  forms.forEach(form => {
    form.addEventListener('submit', handleFormSubmit);
  });

  // Input validation
  const inputs = document.querySelectorAll('input[type="email"], input[type="password"]');
  inputs.forEach(input => {
    input.addEventListener('blur', validateInput);
  });
}

function handleFormSubmit(e) {
  e.preventDefault();
  
  const form = e.target;
  const formType = form.getAttribute('data-form');
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  
  // Validate form
  if (!validateFormData(data, formType)) {
    showNotification('Please fill in all required fields', 'error');
    return;
  }

  // Simulate form submission
  simulateFormSubmission(data, formType);
}

function validateInput(e) {
  const input = e.target;
  const type = input.type;
  let isValid = true;

  if (type === 'email') {
    isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value);
    input.classList.toggle('border-red-500', !isValid);
  } else if (type === 'password') {
    isValid = input.value.length >= 8;
    input.classList.toggle('border-red-500', !isValid);
  }

  return isValid;
}

function validateFormData(data, formType) {
  if (formType === 'login') {
    return data.email && data.password;
  } else if (formType === 'register') {
    return data.name && data.email && data.password && data.confirmPassword;
  }
  return true;
}

function simulateFormSubmission(data, formType) {
  // Simulate network request
  setTimeout(() => {
    if (formType === 'login') {
      localStorage.setItem('user', JSON.stringify(data));
      showNotification('Login successful!', 'success');
      window.location.href = '/student_profile_dashboard/code.html';
    } else if (formType === 'register') {
      localStorage.setItem('user', JSON.stringify(data));
      showNotification('Registration successful!', 'success');
      window.location.href = '/student_profile_dashboard/code.html';
    }
  }, 1000);
}

// Modal Functions
function showModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
  }
}

function showCourseModal(courseId) {
  console.log('Opening course:', courseId);
  showNotification('Redirecting to course details...', 'info');
  // Navigate to course details page
  window.location.href = `/course_details/code.html?id=${courseId}`;
}

function showNewDiscussionModal() {
  console.log('Show new discussion modal');
  showNotification('Open discussion form', 'info');
}

function showEditProfileModal() {
  console.log('Show edit profile modal');
  showNotification('Open profile editor', 'info');
}

// Quiz Functions
function submitQuiz() {
  const questions = document.querySelectorAll('[data-question]');
  let answered = 0;
  let correct = 0;

  questions.forEach(question => {
    const selected = question.querySelector('input[type="radio"]:checked');
    if (selected) {
      answered++;
      if (selected.getAttribute('data-correct') === 'true') {
        correct++;
      }
    }
  });

  if (answered === 0) {
    showNotification('Please answer all questions before submitting', 'error');
    return;
  }

  const percentage = Math.round((correct / questions.length) * 100);
  showNotification(`You scored ${percentage}% (${correct}/${questions.length})`, 'success');
}

// Enrollment Function
function handleEnrollment(courseId) {
  const user = JSON.parse(localStorage.getItem('user'));
  
  if (!user) {
    showNotification('Please login to enroll in courses', 'error');
    return;
  }

  showNotification('Enrolling in course...', 'info');
  
  setTimeout(() => {
    showNotification('Successfully enrolled! Redirecting...', 'success');
    window.location.href = '/student_profile_dashboard/code.html';
  }, 1500);
}

// Search Functionality
function initializeSearch() {
  const searchInputs = document.querySelectorAll('input[type="text"][placeholder*="Search"]');
  
  searchInputs.forEach(input => {
    input.addEventListener('input', handleSearch);
  });
}

function handleSearch(e) {
  const query = e.target.value.toLowerCase();
  const searchableElements = document.querySelectorAll('[data-searchable]');
  
  searchableElements.forEach(element => {
    const text = element.textContent.toLowerCase();
    if (text.includes(query)) {
      fadeIn(element);
    } else {
      fadeOut(element);
    }
  });
}

// Notifications
function showNotification(message, type = 'info') {
  // Remove existing notification
  const existing = document.querySelector('[data-notification]');
  if (existing) existing.remove();

  // Create new notification
  const notification = document.createElement('div');
  notification.setAttribute('data-notification', '');
  notification.className = `fixed top-4 right-4 px-6 py-3 rounded-lg text-white font-semibold shadow-lg z-50 animate-slide-in`;
  
  const bgColor = {
    'success': 'bg-emerald-500',
    'error': 'bg-red-500',
    'info': 'bg-blue-500',
    'warning': 'bg-amber-500'
  }[type] || 'bg-blue-500';
  
  notification.className = `fixed top-4 right-4 px-6 py-3 rounded-lg text-white font-semibold shadow-lg z-50 ${bgColor}`;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  // Auto-remove after 3 seconds
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease-out';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Export functions for global use
window.toggleDarkMode = toggleDarkMode;
window.handleSearch = handleSearch;
window.submitQuiz = submitQuiz;
window.handleEnrollment = handleEnrollment;
window.showNotification = showNotification;
