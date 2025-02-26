// Mock data for demonstration
const questionBankData = {
    btech: {
        semesters: [1, 2, 3, 4, 5, 6, 7, 8],
        subjects: {
            1: ['Engineering Mathematics-I', 'Engineering Physics', 'Basic Electrical Engineering', 'Programming Fundamentals', 'Engineering Graphics'],
            2: ['Engineering Mathematics-II', 'Engineering Chemistry', 'Basic Electronics', 'Object-Oriented Programming', 'Digital Logic Design'],
            3: ['Data Structures', 'Computer Organization', 'Discrete Mathematics', 'Database Management Systems', 'Web Technologies'],
            4: ['Operating Systems', 'Computer Networks', 'Design and Analysis of Algorithms', 'Software Engineering', 'Microprocessors'],
            5: ['Compiler Design', 'Machine Learning', 'Computer Graphics', 'Cloud Computing', 'Information Security'],
            6: ['Artificial Intelligence', 'Big Data Analytics', 'Mobile Computing', 'Internet of Things', 'Software Testing'],
            7: ['Distributed Systems', 'Natural Language Processing', 'Blockchain Technology', 'Project Management', 'Elective I'],
            8: ['Deep Learning', 'Quantum Computing', 'Ethics in Computing', 'Major Project', 'Elective II']
        }
    },
    mtech: {
        semesters: [1, 2, 3, 4],
        subjects: {
            1: ['Advanced Algorithms', 'Machine Learning', 'Research Methodology', 'Advanced Database Systems'],
            2: ['Cloud Computing', 'Big Data Analytics', 'Software Architecture', 'Advanced Computer Networks'],
            3: ['Thesis Work I', 'Advanced AI', 'Elective I', 'Elective II'],
            4: ['Thesis Work II', 'Research Publication', 'Seminar']
        }
    },
    bca: {
        semesters: [1, 2, 3, 4, 5, 6],
        subjects: {
            1: ['Computer Fundamentals', 'Mathematics-I', 'Digital Electronics', 'Communication Skills'],
            2: ['C Programming', 'Mathematics-II', 'Operating Systems', 'Business Communication'],
            3: ['Data Structures', 'Object-Oriented Programming', 'Computer Networks', 'DBMS'],
            4: ['Java Programming', 'Web Technologies', 'Software Engineering', 'Computer Architecture'],
            5: ['Python Programming', 'Mobile App Development', 'Information Security', 'E-Commerce'],
            6: ['Project Work', 'Cloud Computing', 'Machine Learning Basics', 'Professional Ethics']
        }
    },
    mca: {
        semesters: [1, 2, 3, 4],
        subjects: {
            1: ['Advanced Java', 'Data Structures & Algorithms', 'Database Technologies', 'Computer Networks'],
            2: ['Web Development', 'Software Engineering', 'Cloud Computing', 'Machine Learning'],
            3: ['AI & Expert Systems', 'Mobile Computing', 'Information Security', 'Project Phase-I'],
            4: ['Project Phase-II', 'Seminar', 'Industry Training']
        }
    },
    cse: {
        name: 'B.Tech - Computer Science & Engineering',
        semesters: {
            sem1: {
                papers: [
                    {
                        title: '2024 End Semester',
                        subject: 'Engineering Mathematics-I',
                        type: 'pdf',
                        size: '2.8 MB',
                        id: 'cse_math1_2024'
                    },
                    {
                        title: '2024 End Semester',
                        subject: 'Engineering Physics',
                        type: 'pdf',
                        size: '2.3 MB',
                        id: 'cse_physics_2024'
                    },
                    {
                        title: '2024 End Semester',
                        subject: 'Basic Electrical Engineering',
                        type: 'pdf',
                        size: '1.9 MB',
                        id: 'cse_bee_2024'
                    }
                ]
            },
            sem2: {
                papers: [
                    {
                        title: '2024 End Semester',
                        subject: 'Engineering Mathematics-II',
                        type: 'pdf',
                        size: '2.5 MB',
                        id: 'cse_math2_2024'
                    },
                    {
                        title: '2024 End Semester',
                        subject: 'Programming in C',
                        type: 'pdf',
                        size: '2.1 MB',
                        id: 'cse_c_2024'
                    },
                    {
                        title: '2024 End Semester',
                        subject: 'Engineering Chemistry',
                        type: 'pdf',
                        size: '1.8 MB',
                        id: 'cse_chem_2024'
                    }
                ]
            },
            sem3: {
                papers: [
                    {
                        title: '2023 End Semester',
                        subject: 'Data Structures',
                        type: 'pdf',
                        size: '3.2 MB',
                        id: 'cse_ds_2023'
                    },
                    {
                        title: '2023 End Semester',
                        subject: 'Object Oriented Programming',
                        type: 'pdf',
                        size: '2.7 MB',
                        id: 'cse_oop_2023'
                    }
                ]
            }
            // Add more semester data
        }
    },
    'cse-ai': {
        name: 'B.Tech - CSE (Artificial Intelligence)',
        semesters: {
            sem1: {
                papers: [
                    {
                        title: '2024 End Semester',
                        subject: 'Engineering Mathematics-I',
                        type: 'pdf',
                        size: '2.8 MB',
                        id: 'ai_math1_2024'
                    },
                    {
                        title: '2024 End Semester',
                        subject: 'Introduction to AI',
                        type: 'pdf',
                        size: '2.4 MB',
                        id: 'ai_intro_2024'
                    }
                ]
            }
            // Add more semester data
        }
    }
    // Add data for other branches
};

// Mock data for papers and resources
const resourcesData = {
    endSemPapers: [
        {
            title: 'End Semester Exam 2024',
            date: 'Dec 2024',
            downloadUrl: '#',
            size: '2.5 MB'
        },
        {
            title: 'End Semester Exam 2023',
            date: 'Dec 2023',
            downloadUrl: '#',
            size: '2.3 MB'
        }
    ],
    midSemPapers: [
        {
            title: 'Mid Semester Exam 2024',
            date: 'Oct 2024',
            downloadUrl: '#',
            size: '1.8 MB'
        },
        {
            title: 'Mid Semester Exam 2023',
            date: 'Oct 2023',
            downloadUrl: '#',
            size: '1.5 MB'
        }
    ],
    assignments: [
        {
            title: 'Assignment 1 - Topic Name',
            date: 'Sep 2024',
            downloadUrl: '#',
            size: '500 KB'
        },
        {
            title: 'Assignment 2 - Topic Name',
            date: 'Oct 2024',
            downloadUrl: '#',
            size: '750 KB'
        }
    ],
    teacherNotes: [
        {
            title: 'Chapter 1 - Introduction',
            author: 'Prof. John Doe',
            downloadUrl: '#',
            size: '1.2 MB'
        },
        {
            title: 'Chapter 2 - Advanced Concepts',
            author: 'Prof. Jane Smith',
            downloadUrl: '#',
            size: '1.5 MB'
        }
    ]
};

// Course and semester data
const courseData = {
    btech: {
        name: 'B.Tech',
        semesters: [
            {
                id: 'sem1',
                name: 'Semester 1',
                description: 'Foundation Courses',
                icon: 'book-open',
                papers: 15,
                assignments: 10
            },
            {
                id: 'sem2',
                name: 'Semester 2',
                description: 'Core Fundamentals',
                icon: 'laptop-code',
                papers: 12,
                assignments: 8
            },
            {
                id: 'sem3',
                name: 'Semester 3',
                description: 'Advanced Concepts',
                icon: 'microchip',
                papers: 14,
                assignments: 12
            },
            {
                id: 'sem4',
                name: 'Semester 4',
                description: 'Professional Core',
                icon: 'code',
                papers: 13,
                assignments: 9
            },
            {
                id: 'sem5',
                name: 'Semester 5',
                description: 'Specialization',
                icon: 'brain',
                papers: 16,
                assignments: 11
            },
            {
                id: 'sem6',
                name: 'Semester 6',
                description: 'Advanced Topics',
                icon: 'layer-group',
                papers: 15,
                assignments: 10
            },
            {
                id: 'sem7',
                name: 'Semester 7',
                description: 'Industry Focus',
                icon: 'industry',
                papers: 12,
                assignments: 8
            },
            {
                id: 'sem8',
                name: 'Semester 8',
                description: 'Project & Electives',
                icon: 'project-diagram',
                papers: 10,
                assignments: 6
            }
        ]
    },
    mtech: {
        name: 'M.Tech',
        semesters: [
            {
                id: 'sem1',
                name: 'Semester 1',
                description: 'Advanced Core',
                icon: 'graduation-cap',
                papers: 10,
                assignments: 8
            },
            {
                id: 'sem2',
                name: 'Semester 2',
                description: 'Specialization',
                icon: 'microscope',
                papers: 8,
                assignments: 6
            },
            {
                id: 'sem3',
                name: 'Semester 3',
                description: 'Research Focus',
                icon: 'flask',
                papers: 6,
                assignments: 4
            },
            {
                id: 'sem4',
                name: 'Semester 4',
                description: 'Thesis',
                icon: 'book',
                papers: 4,
                assignments: 2
            }
        ]
    }
    // Add similar data for BCA and MCA
};

// Current state
let currentBranch = '';
let currentSemester = '';
let currentFilter = 'all';

// Update content based on selections
function updateContent() {
    const branchSelect = document.getElementById('branchSelect');
    const semesterSelect = document.getElementById('semesterSelect');
    
    currentBranch = branchSelect.value;
    currentSemester = semesterSelect.value;
    
    if (currentBranch && currentSemester) {
        displayResources();
    } else {
        clearResources();
    }
}

// Display resources based on current selections
function displayResources() {
    const branchData = questionBankData[currentBranch];
    if (!branchData || !branchData.semesters[currentSemester]) {
        clearResources();
        return;
    }

    const semesterData = branchData.semesters[currentSemester];
    const resourcesGrid = document.querySelector('.resources-grid');

    // Clear existing content
    resourcesGrid.innerHTML = '';

    // Add papers section
    if (semesterData.papers && semesterData.papers.length > 0) {
        const papersSection = createResourceSection('papers', 'End Semester Papers', 'file-alt', semesterData.papers);
        resourcesGrid.appendChild(papersSection);
    }

    // Add assignments section
    if (semesterData.assignments && semesterData.assignments.length > 0) {
        const assignmentsSection = createResourceSection('assignments', 'Assignments', 'tasks', semesterData.assignments);
        resourcesGrid.appendChild(assignmentsSection);
    }

    // Add notes section
    if (semesterData.notes && semesterData.notes.length > 0) {
        const notesSection = createResourceSection('notes', 'Teacher Notes', 'book', semesterData.notes);
        resourcesGrid.appendChild(notesSection);
    }

    // Apply current filter
    filterResources(currentFilter);
}

// Create a resource section
function createResourceSection(type, title, icon, resources) {
    const section = document.createElement('div');
    section.className = 'resource-section';
    section.dataset.type = type;

    section.innerHTML = `
        <h3><i class="fas fa-${icon}"></i> ${title}</h3>
        <div class="resource-cards">
            ${resources.map(resource => `
                <div class="resource-card">
                    <div class="resource-icon">
                        <i class="fas fa-file-${resource.type}"></i>
                    </div>
                    <div class="resource-info">
                        <h4>${resource.title}</h4>
                        <p>${resource.subject}</p>
                        <span class="meta">${resource.type.toUpperCase()} • ${resource.size}</span>
                    </div>
                    <button class="download-btn" onclick="downloadResource('${resource.id}')">
                        <i class="fas fa-download"></i>
                    </button>
                </div>
            `).join('')}
        </div>
    `;

    return section;
}

// Filter resources by type
function filterResources(type) {
    currentFilter = type;
    
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase().includes(type) || 
            (type === 'all' && btn.textContent.includes('All'))) {
            btn.classList.add('active');
        }
    });
    
    // Show/hide relevant sections
    document.querySelectorAll('.resource-section').forEach(section => {
        if (type === 'all' || section.dataset.type === type) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

// Clear all resources
function clearResources() {
    const resourcesGrid = document.querySelector('.resources-grid');
    resourcesGrid.innerHTML = '';
}

// Download resource function
function downloadResource(resourceId) {
    // In a real application, this would handle the actual download
    console.log('Downloading resource:', resourceId);
    alert('Download started! (Demo only)');
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Set up initial state
    currentFilter = 'all';
    
    // Add event listeners for dropdowns
    document.getElementById('branchSelect').addEventListener('change', updateContent);
    document.getElementById('semesterSelect').addEventListener('change', updateContent);
});

// DOM Elements
const courseSelect = document.getElementById('courseSelect');
const semesterSelect = document.getElementById('semesterSelect');
const subjectSelect = document.getElementById('subjectSelect');

// Update semester options based on course selection
courseSelect.addEventListener('change', () => {
    const course = courseSelect.value;
    semesterSelect.innerHTML = '<option value="">Select Semester</option>';
    subjectSelect.innerHTML = '<option value="">Select Subject</option>';
    
    if (course && questionBankData[course]) {
        questionBankData[course].semesters.forEach(sem => {
            semesterSelect.innerHTML += `<option value="${sem}">Semester ${sem}</option>`;
        });
    }
});

// Update subject options based on semester selection
semesterSelect.addEventListener('change', () => {
    const course = courseSelect.value;
    const semester = semesterSelect.value;
    subjectSelect.innerHTML = '<option value="">Select Subject</option>';
    
    if (course && semester && questionBankData[course].subjects[semester]) {
        questionBankData[course].subjects[semester].forEach(subject => {
            subjectSelect.innerHTML += `<option value="${subject}">${subject}</option>`;
        });
    }
});

// Load question bank content
function loadQuestionBank() {
    const course = courseSelect.value;
    const semester = semesterSelect.value;
    const subject = subjectSelect.value;
    
    if (course && semester && subject) {
        // Load End Semester Papers
        const endSemPapersHtml = generateResourceCards(resourcesData.endSemPapers);
        document.getElementById('endSemPapers').innerHTML = endSemPapersHtml;
        
        // Load Mid Semester Papers
        const midSemPapersHtml = generateResourceCards(resourcesData.midSemPapers);
        document.getElementById('midSemPapers').innerHTML = midSemPapersHtml;
        
        // Load Assignments
        const assignmentsHtml = generateResourceCards(resourcesData.assignments);
        document.getElementById('assignments').innerHTML = assignmentsHtml;
        
        // Load Teacher Notes
        const teacherNotesHtml = generateResourceCards(resourcesData.teacherNotes, true);
        document.getElementById('teacherNotes').innerHTML = teacherNotesHtml;
    } else {
        clearContent();
    }
}

// Generate HTML for resource cards
function generateResourceCards(resources, isTeacherNote = false) {
    if (resources.length === 0) {
        return '<div class="no-content">No content available</div>';
    }
    
    return resources.map(resource => `
        <div class="paper-card">
            <h3>${resource.title}</h3>
            <div class="meta">
                ${isTeacherNote ? 
                    `<p><i class="fas fa-user"></i> ${resource.author}</p>` :
                    `<p><i class="fas fa-calendar"></i> ${resource.date}</p>`
                }
                <p><i class="fas fa-file-alt"></i> ${resource.size}</p>
            </div>
            <button class="download-btn" onclick="downloadResource('${resource.downloadUrl}')">
                <i class="fas fa-download"></i> Download
            </button>
        </div>
    `).join('');
}

// Clear all content sections
function clearContent() {
    const sections = ['endSemPapers', 'midSemPapers', 'assignments', 'teacherNotes'];
    sections.forEach(section => {
        document.getElementById(section).innerHTML = '<div class="no-content">Please select course, semester, and subject</div>';
    });
}

// Show selected course content
function showCourse(courseId) {
    // Update active button
    document.querySelectorAll('.course-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase() === courseId) {
            btn.classList.add('active');
        }
    });

    currentCourse = courseId;
    const course = courseData[courseId];
    
    // Generate semester cards
    const semesterGrid = document.getElementById('btech-content');
    semesterGrid.innerHTML = course.semesters.map(sem => `
        <div class="semester-card" onclick="showSemesterContent('${sem.id}')">
            <div class="semester-icon">
                <i class="fas fa-${sem.icon}"></i>
            </div>
            <h3>${sem.name}</h3>
            <p>${sem.description}</p>
            <div class="resource-count">
                <span><i class="fas fa-file-alt"></i> ${sem.papers} Papers</span>
                <span><i class="fas fa-tasks"></i> ${sem.assignments} Assignments</span>
            </div>
        </div>
    `).join('');

    // Hide semester content if showing a different course
    document.getElementById('semester-content').style.display = 'none';
}

// Show semester content
function showSemesterContent(semesterId) {
    currentSemester = semesterId;
    const contentDiv = document.getElementById('semester-content');
    contentDiv.style.display = 'block';
    
    // Scroll to content
    contentDiv.scrollIntoView({ behavior: 'smooth' });
    
    // Reset filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase() === 'all') {
            btn.classList.add('active');
        }
    });
    
    filterContent('all');
}

// Filter content by type
function filterContent(type) {
    currentFilter = type;
    
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase() === type) {
            btn.classList.add('active');
        }
    });
    
    // Show/hide relevant sections
    document.querySelectorAll('.resource-section').forEach(section => {
        if (type === 'all' || section.dataset.type === type) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    showCourse('btech');
});
