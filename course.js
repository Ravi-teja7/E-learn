// Course data with lessons, videos, and notes integration
const courseData = {
    'java-full-stack': {
        title: 'Java Full Stack Development',
        lessons: [
            { id: 1, title: 'Introduction to Java', video: 'https://www.youtube.com/embed/eL5aTjZ06Dw', notes: 'notes.html?course=java-full-stack&lesson=1' },
            { id: 2, title: 'Object-Oriented Programming (OOP)', video: 'https://www.youtube.com/embed/7oE8iXFrk', notes: 'notes.html?course=java-full-stack&lesson=2' },
            { id: 3, title: 'Java Collections Framework', video: 'https://www.youtube.com/embed/8mE_jY6R3-Q', notes: 'notes.html?course=java-full-stack&lesson=3' },
            { id: 4, title: 'Spring Boot Introduction', video: 'https://www.youtube.com/embed/9SGDpanod-4', notes: 'notes.html?course=java-full-stack&lesson=4' },
            { id: 5, title: 'REST APIs with Spring', video: 'https://www.youtube.com/embed/CkKzM8zA9AQ', notes: 'notes.html?course=java-full-stack&lesson=5' },
            { id: 6, title: 'Hibernate Basics', video: 'https://www.youtube.com/embed/7p1l6dP3L1I', notes: 'notes.html?course=java-full-stack&lesson=6' },
            { id: 7, title: 'Maven Build Tool', video: 'https://www.youtube.com/embed/6qO_BF0o8uU', notes: 'notes.html?course=java-full-stack&lesson=7' },
            { id: 8, title: 'Front-End with JSP', video: 'https://www.youtube.com/embed/8mE_jY6R3-Q', notes: 'notes.html?course=java-full-stack&lesson=8' },
            { id: 9, title: 'Database Integration with JDBC', video: 'https://www.youtube.com/embed/Zp-_u8QadWA', notes: 'notes.html?course=java-full-stack&lesson=9' },
            { id: 10, title: 'Deployment to Tomcat', video: 'https://www.youtube.com/embed/42ZEpY8D2GM', notes: 'notes.html?course=java-full-stack&lesson=10' }
        ]
    },
    'python': {
        title: 'Python Programming',
        lessons: [
            { id: 1, title: 'Introduction to Python', video: 'https://www.youtube.com/embed/rfscVS0vtbw', notes: 'notes.html?course=python&lesson=1' },
            { id: 2, title: 'Variables and Data Types', video: 'https://www.youtube.com/embed/khKv-8q7YmY', notes: 'notes.html?course=python&lesson=2' },
            { id: 3, title: 'Control Flow', video: 'https://www.youtube.com/embed/kqtD5dpn9C8', notes: 'notes.html?course=python&lesson=3' },
            { id: 4, title: 'Functions', video: 'https://www.youtube.com/embed/NE57eVcf8-8', notes: 'notes.html?course=python&lesson=4' },
            { id: 5, title: 'Lists and Tuples', video: 'https://www.youtube.com/embed/PKwu15ldZ7k', notes: 'notes.html?course=python&lesson=5' },
            { id: 6, title: 'Dictionaries', video: 'https://www.youtube.com/embed/daefaLgNkwk', notes: 'notes.html?course=python&lesson=6' },
            { id: 7, title: 'File Handling', video: 'https://www.youtube.com/embed/Uh2ebFW8OYM', notes: 'notes.html?course=python&lesson=7' },
            { id: 8, title: 'Object-Oriented Programming (OOP)', video: 'https://www.youtube.com/embed/ZDa-Z5JzLYM', notes: 'notes.html?course=python&lesson=8' },
            { id: 9, title: 'Modules and Packages', video: 'https://www.youtube.com/embed/0oTh1RNy9GQ', notes: 'notes.html?course=python&lesson=9' },
            { id: 10, title: 'Exception Handling', video: 'https://www.youtube.com/embed/NIWwJbo-9_8', notes: 'notes.html?course=python&lesson=10' }
        ]
    },
    'data-science': {
        title: 'Data Science',
        lessons: [
            { id: 1, title: 'Introduction to Data Science', video: 'https://www.youtube.com/embed/ua-CiDNNj30', notes: 'notes.html?course=data-science&lesson=1' },
            { id: 2, title: 'Python for Data Science', video: 'https://www.youtube.com/embed/r-uOLxNrNk8', notes: 'notes.html?course=data-science&lesson=2' },
            { id: 3, title: 'NumPy Basics', video: 'https://www.youtube.com/embed/GB9ByFAAMXU', notes: 'notes.html?course=data-science&lesson=3' },
            { id: 4, title: 'Pandas Introduction', video: 'https://www.youtube.com/embed/vmEHCJofslg', notes: 'notes.html?course=data-science&lesson=4' },
            { id: 5, title: 'Data Visualization', video: 'https://www.youtube.com/embed/3Cfm9z8-0WQ', notes: 'notes.html?course=data-science&lesson=5' },
            { id: 6, title: 'Data Cleaning', video: 'https://www.youtube.com/embed/dNoCzE-oPQE', notes: 'notes.html?course=data-science&lesson=6' },
            { id: 7, title: 'Machine Learning Introduction', video: 'https://www.youtube.com/embed/cKxRvEZd3Mw', notes: 'notes.html?course=data-science&lesson=7' },
            { id: 8, title: 'Scikit-Learn', video: 'https://www.youtube.com/embed/0B4W1qMUbVA', notes: 'notes.html?course=data-science&lesson=8' },
            { id: 9, title: 'Deep Learning', video: 'https://www.youtube.com/embed/aircAruvnKk', notes: 'notes.html?course=data-science&lesson=9' },
            { id: 10, title: 'Data Science Projects', video: 'https://www.youtube.com/embed/hd1iZAYUqGs', notes: 'notes.html?course=data-science&lesson=10' }
        ]
    },
    'web-dev': {
        title: 'Web Development',
        lessons: [
            { id: 1, title: 'HTML Basics', video: 'https://www.youtube.com/embed/UB1O30fR-EE', notes: 'notes.html?course=web-dev&lesson=1' },
            { id: 2, title: 'CSS Basics', video: 'https://www.youtube.com/embed/5Yd_yX4wtQQ', notes: 'notes.html?course=web-dev&lesson=2' },
            { id: 3, title: 'JavaScript Introduction', video: 'https://www.youtube.com/embed/W6NZfCO5SIk', notes: 'notes.html?course=web-dev&lesson=3' },
            { id: 4, title: 'DOM Manipulation', video: 'https://www.youtube.com/embed/0ik6X4DJKCc', notes: 'notes.html?course=web-dev&lesson=4' },
            { id: 5, title: 'Responsive Design', video: 'https://www.youtube.com/embed/S5p_W3pA2iQ', notes: 'notes.html?course=web-dev&lesson=5' },
            { id: 6, title: 'CSS Flexbox', video: 'https://www.youtube.com/embed/fYq5PXgSsbE', notes: 'notes.html?course=web-dev&lesson=6' },
            { id: 7, title: 'JavaScript Events', video: 'https://www.youtube.com/embed/Pu9M4f8D9vc', notes: 'notes.html?course=web-dev&lesson=7' },
            { id: 8, title: 'Bootstrap Introduction', video: 'https://www.youtube.com/embed/1rWn0X9dNjk', notes: 'notes.html?course=web-dev&lesson=8' },
            { id: 9, title: 'Form Handling', video: 'https://www.youtube.com/embed/0Y8l0z2vY9A', notes: 'notes.html?course=web-dev&lesson=9' },
            { id: 10, title: 'Project Setup', video: 'https://www.youtube.com/embed/5Lq0wAM0cJA', notes: 'notes.html?course=web-dev&lesson=10' }
        ]
    }
};

// Export for use in other files (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = courseData;
}