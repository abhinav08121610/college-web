// Existing navigation code
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const searchBox = document.querySelector('.search-box input');
const searchButton = document.querySelector('.search-box button');
const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');
const modal = document.getElementById('applyModal');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Handle search
searchButton.addEventListener('click', () => {
    const searchTerm = searchBox.value.trim();
    if (searchTerm) {
        console.log('Searching for:', searchTerm);
        // Implement search functionality
    }
});

// Allow search on Enter key
searchBox.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchButton.click();
    }
});

// Mobile dropdown handling
if (window.innerWidth <= 768) {
    dropdownTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const content = trigger.nextElementSibling;
            
            // Close all other dropdowns
            document.querySelectorAll('.dropdown-content').forEach(dropdown => {
                if (dropdown !== content) {
                    dropdown.style.display = 'none';
                }
            });

            // Toggle current dropdown
            if (content.style.display === 'flex') {
                content.style.display = 'none';
            } else {
                content.style.display = 'flex';
                content.style.opacity = '1';
                content.style.transform = 'translateY(0)';
            }
        });
    });
}

// Navigation functionality
const nav = document.querySelector('nav');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Hamburger menu toggle
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// Curriculum Functions
function showSemesterContent(semesterId) {
    const semesterContent = document.getElementById('semester-content');
    // Semester content data
    const content = {
        sem1: {
            subjects: [
                'Engineering Mathematics-I',
                'Engineering Physics',
                'Basic Electrical Engineering',
                'Programming for Problem Solving',
                'Engineering Graphics & Design',
                'Engineering Chemistry',
                'Professional English'
            ],
            credits: 28
        },
        sem2: {
            subjects: [
                'Engineering Mathematics-II',
                'Basic Electronics',
                'Object-Oriented Programming',
                'Data Structures',
                'Digital Logic Design'
            ],
            credits: 24
        },
        sem3: {
            subjects: [
                'Workshop Practice',
                'Basic Fitting',
                'Sheet Metal Work',
                'Basic Welding',
                'Basic Electrical',
                'Basic Electronics',
                'Computer Fundamentals'
            ],
            credits: 26
        }
        // Add more semesters as needed
    };

    if (content[semesterId]) {
        const data = content[semesterId];
        semesterContent.innerHTML = `
            <div class="semester-details-card">
                <h3>Semester Details</h3>
                <div class="subjects-list">
                    <h4>Subjects:</h4>
                    <ul>
                        ${data.subjects.map(subject => `
                            <li>
                                <i class="fas fa-book-open"></i>
                                ${subject}
                            </li>
                        `).join('')}
                    </ul>
                    <p class="credits">
                        <i class="fas fa-graduation-cap"></i>
                        Total Credits: ${data.credits}
                    </p>
                </div>
            </div>
        `;
        semesterContent.style.display = 'block';
    }
}

// Curriculum page functions
function showSemesterDetails(semesterId) {
    const modal = document.getElementById('semesterModal');
    const content = {
        sem1: {
            title: 'First Semester',
            subjects: [
                {
                    name: 'Data Structures and Algorithms',
                    code: 'CS101',
                    credits: 4,
                    description: 'Study of fundamental data structures, algorithms, and their practical implementation.',
                    topics: [
                        'Arrays and Linked Lists',
                        'Stacks and Queues',
                        'Trees and Graphs',
                        'Sorting and Searching',
                        'Algorithm Analysis'
                    ]
                },
                {
                    name: 'Database Management Systems',
                    code: 'CS102',
                    credits: 4,
                    description: 'Introduction to database concepts, design, and implementation.',
                    topics: [
                        'SQL Fundamentals',
                        'Database Design',
                        'Normalization',
                        'Transaction Management',
                        'Query Optimization'
                    ]
                },
                {
                    name: 'Web Development Fundamentals',
                    code: 'CS103',
                    credits: 4,
                    description: 'Core concepts of web development including frontend and backend technologies.',
                    topics: [
                        'HTML5 & CSS3',
                        'JavaScript Basics',
                        'Node.js Introduction',
                        'RESTful APIs',
                        'Web Security'
                    ]
                },
                {
                    name: 'Python Programming',
                    code: 'CS104',
                    credits: 4,
                    description: 'Introduction to Python programming language and its applications.',
                    topics: [
                        'Python Basics',
                        'Object-Oriented Programming',
                        'File Handling',
                        'Libraries and Frameworks',
                        'Python for Web'
                    ]
                },
                {
                    name: 'Software Engineering',
                    code: 'CS105',
                    credits: 4,
                    description: 'Principles of software development and project management.',
                    topics: [
                        'SDLC Models',
                        'Agile Methodology',
                        'Version Control',
                        'Testing Strategies',
                        'Project Planning'
                    ]
                },
                {
                    name: 'Cloud Computing',
                    code: 'CS106',
                    credits: 4,
                    description: 'Introduction to cloud platforms, services, and deployment.',
                    topics: [
                        'Cloud Architecture',
                        'AWS Services',
                        'Docker & Containers',
                        'Cloud Security',
                        'Serverless Computing'
                    ]
                },
                {
                    name: 'Backend Development',
                    code: 'CS107',
                    credits: 4,
                    description: 'Advanced concepts in server-side programming and architecture.',
                    topics: [
                        'Server Architecture',
                        'API Development',
                        'Database Integration',
                        'Authentication & Authorization',
                        'Performance Optimization'
                    ]
                }
            ],
            credits: 28
        },
        sem2: {
            title: 'Second Semester',
            subjects: [
                'Engineering Mathematics-II',
                'Basic Electronics',
                'Object-Oriented Programming',
                'Data Structures',
                'Digital Logic Design'
            ],
            credits: 24
        },
        sem3: {
            title: 'Third Semester',
            subjects: [
                'Workshop Practice',
                'Basic Fitting',
                'Sheet Metal Work',
                'Basic Welding',
                'Basic Electrical',
                'Basic Electronics',
                'Computer Fundamentals'
            ],
            credits: 26
        }
    };

    if (content[semesterId]) {
        const data = content[semesterId];
        if (semesterId === 'sem1') {
            // Detailed view for first semester
            document.getElementById('semester-content').innerHTML = `
                <div class="semester-details-card">
                    <h3>${data.title}</h3>
                    <div class="subjects-list">
                        ${data.subjects.map(subject => `
                            <div class="subject-card">
                                <div class="subject-header">
                                    <h4>
                                        <i class="fas fa-laptop-code"></i>
                                        ${subject.name}
                                    </h4>
                                    <span class="subject-code">${subject.code}</span>
                                </div>
                                <p class="subject-description">${subject.description}</p>
                                <div class="subject-topics">
                                    <h5>Key Topics:</h5>
                                    <ul>
                                        ${subject.topics.map(topic => `
                                            <li><i class="fas fa-check-circle"></i>${topic}</li>
                                        `).join('')}
                                    </ul>
                                </div>
                                <div class="subject-credits">
                                    <i class="fas fa-graduation-cap"></i>
                                    Credits: ${subject.credits}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    <p class="total-credits">
                        <i class="fas fa-award"></i>
                        Total Credits: ${data.credits}
                    </p>
                </div>
            `;
        } else {
            // Simple view for other semesters
            document.getElementById('semester-content').innerHTML = `
                <div class="semester-details-card">
                    <h3>${data.title}</h3>
                    <div class="subjects-list">
                        <h4>Subjects</h4>
                        <ul>
                            ${data.subjects.map(subject => `
                                <li>
                                    <i class="fas fa-book-open"></i>
                                    ${subject}
                                </li>
                            `).join('')}
                        </ul>
                        <p class="credits">
                            <i class="fas fa-graduation-cap"></i>
                            Total Credits: ${data.credits}
                        </p>
                    </div>
                </div>
            `;
        }
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('semesterModal');
    if (event.target === modal) {
        closeSemesterDetails();
    }
}

// Contact Form Functionality
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    try {
        // Send form data to backend
        const response = await fetch('http://localhost:3000/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        
        const data = await response.json();
        
        if (response.ok) {
            // Show success message
            formStatus.textContent = data.message;
            formStatus.className = 'form-status success';
            contactForm.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 5000);
        } else {
            throw new Error(data.error);
        }
    } catch (error) {
        // Show error message
        formStatus.textContent = error.message || 'Failed to send message. Please try again later.';
        formStatus.className = 'form-status error';
    }
});

// Contact Form Submission
async function submitContactForm(event) {
    event.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('contact-name').value,
        email: document.getElementById('contact-email').value,
        phone: document.getElementById('contact-phone').value,
        subject: document.getElementById('contact-subject').value,
        message: document.getElementById('contact-message').value
    };

    try {
        // Validate phone number
        const validateResponse = await fetch('http://localhost:3000/api/validate-contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ phone: formData.phone })
        });

        if (!validateResponse.ok) {
            const error = await validateResponse.json();
            alert(error.message || 'Please enter a valid 10-digit phone number');
            return;
        }

        // Submit form data
        const response = await fetch('http://localhost:3000/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            alert('Thank you for your message! We will get back to you soon.');
            document.getElementById('contactForm').reset();
        } else {
            throw new Error('Failed to send message');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to send message. Please try again later.');
    }
}

// Load contact information from backend
async function loadContactInfo() {
    try {
        const response = await fetch('http://localhost:3000/api/contact-info');
        const data = await response.json();
        
        // Update contact information in the DOM
        document.querySelector('.contact-phone').textContent = data.phone;
        document.querySelector('.contact-email').textContent = data.email;
        document.querySelector('.contact-instagram').textContent = `@${data.instagram}`;
    } catch (error) {
        console.error('Error loading contact info:', error);
    }
}

// Social Media Links with backend validation
async function openSocialMedia(platform) {
    try {
        const response = await fetch('http://localhost:3000/api/contact-info');
        const data = await response.json();
        
        const links = {
            instagram: `https://instagram.com/${data.instagram}`,
            email: `mailto:${data.email}`,
            phone: `tel:${data.phone}`
        };
        
        window.open(links[platform], '_blank');
    } catch (error) {
        console.error('Error opening social media:', error);
        alert('Failed to open link. Please try again later.');
    }
}

// Copy contact information to clipboard with backend validation
async function copyToClipboard(type) {
    try {
        const response = await fetch('http://localhost:3000/api/contact-info');
        const data = await response.json();
        
        const text = data[type];
        await navigator.clipboard.writeText(text);
        alert('Copied to clipboard!');
    } catch (error) {
        console.error('Failed to copy text:', error);
        alert('Failed to copy text. Please try again.');
    }
}

// Initialize contact information when page loads
document.addEventListener('DOMContentLoaded', loadContactInfo);

// Apply Form Functions
function openApplyForm() {
    const modal = document.getElementById('applyModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    modal.querySelector('.modal-content').classList.add('fade-in');
}

function closeApplyForm() {
    const modal = document.getElementById('applyModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('applyModal');
    if (event.target === modal) {
        closeApplyForm();
    }
}

// Handle form submission
function submitApplicationForm(event) {
    event.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        course: document.getElementById('course').value,
        message: document.getElementById('message').value
    };
    
    // Here you would typically send this data to your server
    console.log('Application submitted:', formData);
    
    // Show success message
    alert('Thank you for your application! We will contact you soon.');
    
    // Reset form and close modal
    event.target.reset();
    closeApplyForm();
}

// Copy to clipboard function
function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            // Show success message
            const tooltip = document.createElement('div');
            tooltip.className = 'copy-tooltip';
            tooltip.textContent = 'Copied!';
            document.body.appendChild(tooltip);

            // Position the tooltip near the cursor
            document.addEventListener('mousemove', function handler(e) {
                tooltip.style.left = (e.clientX + 10) + 'px';
                tooltip.style.top = (e.clientY + 10) + 'px';
                document.removeEventListener('mousemove', handler);
            });

            // Remove tooltip after 2 seconds
            setTimeout(() => {
                tooltip.remove();
            }, 2000);
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
            alert('Failed to copy text. Please try manually.');
        });
}

// Handle contact form submission
function handleContactSubmit(event) {
    event.preventDefault();
    const form = event.target;
    
    // Get form data
    const formData = {
        name: form.querySelector('input[type="text"]').value,
        email: form.querySelector('input[type="email"]').value,
        phone: form.querySelector('input[type="tel"]').value,
        message: form.querySelector('textarea').value
    };

    // Validate phone number
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) {
        alert('Please enter a valid 10-digit phone number');
        return;
    }

    // Create email body
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}
    `;

    // Open email client with pre-filled data
    const mailtoLink = `mailto:abhinavbhurtiya043@gmail.com?subject=Contact Form Submission from ${formData.name}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;

    // Show success message
    alert('Opening your email client...');
    
    // Reset form
    form.reset();
}

// Add click-to-call functionality
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', (e) => {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (!isMobile) {
            e.preventDefault();
            copyToClipboard(link.href.replace('tel:', ''));
            alert('Phone number copied to clipboard!');
        }
    });
});

// Add styles for copy tooltip
const style = document.createElement('style');
style.textContent = `
    .copy-tooltip {
        position: fixed;
        background: #64ffda;
        color: #1a1a1a;
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 14px;
        pointer-events: none;
        z-index: 1000;
        animation: fadeInOut 2s ease;
    }

    @keyframes fadeInOut {
        0% { opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { opacity: 0; }
    }
`;
document.head.appendChild(style);

// Add animation class to elements when they come into view
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('fade-in');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// DateTime Widget Functionality
function updateTime() {
    const now = new Date();
    const timeDisplay = document.getElementById('current-time');
    const meridiemDisplay = document.getElementById('meridiem');
    const dateDisplay = document.getElementById('current-date');
    
    // Update time with AM/PM
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const meridiem = hours >= 12 ? 'PM' : 'AM';
    const displayHours = (hours % 12 || 12).toString().padStart(2, '0');
    
    timeDisplay.textContent = `${displayHours}:${minutes}:${seconds}`;
    meridiemDisplay.textContent = meridiem;
    
    // Update date with a more readable format
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    dateDisplay.textContent = now.toLocaleDateString('en-US', options);
}

// Update time every second
setInterval(updateTime, 1000);
updateTime(); // Initial call

// Calendar Functionality
let currentDate = new Date();
const calendarPopup = document.getElementById('calendar-popup');
const calendarToggle = document.getElementById('calendar-toggle');
const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');
const calendarMonth = document.getElementById('calendar-month');
const calendarGrid = document.getElementById('calendar-grid');
const dateDisplay = document.getElementById('current-date');

// Update date display
function updateDate() {
    const now = new Date();
    dateDisplay.textContent = now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Initial date update
updateDate();

// Toggle calendar popup
calendarToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    calendarPopup.classList.toggle('show');
    if (calendarPopup.classList.contains('show')) {
        renderCalendar();
    }
});

// Close calendar when clicking outside
document.addEventListener('click', (e) => {
    if (!calendarPopup.contains(e.target) && !calendarToggle.contains(e.target)) {
        calendarPopup.classList.remove('show');
    }
});

// Previous month
prevMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

// Next month
nextMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    // Update header
    calendarMonth.textContent = new Date(year, month).toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric'
    });
    
    // Clear grid with fade effect
    calendarGrid.style.opacity = '0';
    setTimeout(() => {
        calendarGrid.innerHTML = '';
        
        // Get first day of month and total days
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        
        // Previous month days
        const prevMonthDays = new Date(year, month, 0).getDate();
        for (let i = firstDay - 1; i >= 0; i--) {
            const dayDiv = document.createElement('div');
            dayDiv.className = 'calendar-day other-month';
            dayDiv.textContent = prevMonthDays - i;
            calendarGrid.appendChild(dayDiv);
        }
        
        // Current month days
        const today = new Date();
        for (let day = 1; day <= daysInMonth; day++) {
            const dayDiv = document.createElement('div');
            dayDiv.className = 'calendar-day';
            if (year === today.getFullYear() && month === today.getMonth() && day === today.getDate()) {
                dayDiv.classList.add('today');
            }
            dayDiv.textContent = day;
            
            // Add click event to select date
            dayDiv.addEventListener('click', () => {
                document.querySelectorAll('.calendar-day').forEach(d => d.classList.remove('selected'));
                dayDiv.classList.add('selected');
                const selectedDate = new Date(year, month, day);
                dateDisplay.textContent = selectedDate.toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });
                calendarPopup.classList.remove('show');
            });
            
            calendarGrid.appendChild(dayDiv);
        }
        
        // Next month days
        const remainingCells = 42 - (firstDay + daysInMonth);
        for (let day = 1; day <= remainingCells; day++) {
            const dayDiv = document.createElement('div');
            dayDiv.className = 'calendar-day other-month';
            dayDiv.textContent = day;
            calendarGrid.appendChild(dayDiv);
        }
        
        // Fade in effect
        calendarGrid.style.opacity = '1';
    }, 150);
}

// Curriculum Details Page - Year Tabs
function showYear(yearNumber) {
    // Remove active class from all buttons and contents
    document.querySelectorAll('.year-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelectorAll('.year-content').forEach(content => {
        content.classList.remove('active');
    });

    // Add active class to selected button and content
    document.querySelector(`.year-btn:nth-child(${yearNumber})`).classList.add('active');
    document.querySelector(`#year${yearNumber}`).classList.add('active');
}