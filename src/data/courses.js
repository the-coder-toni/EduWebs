/* ============================================================
   EduWeb — Static Mock Data
   All content lives here so components stay pure / reusable.
   ============================================================ */

export const instructors = [
  {
    id: 'alex-morgan',
    name: 'Alex Morgan',
    title: 'Senior Front-End Engineer',
    bio: 'Alex has 10+ years of experience building web products at startups and Fortune 500 companies. Passionate about making the web accessible to everyone.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
    courses: 3,
    students: 4200,
  },
  {
    id: 'priya-sharma',
    name: 'Priya Sharma',
    title: 'Full-Stack Developer & Educator',
    bio: 'Priya transitioned from civil engineering to software and has been teaching web development for 6 years. She specializes in making complex concepts simple.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
    courses: 2,
    students: 2800,
  },
  {
    id: 'james-carter',
    name: 'James Carter',
    title: 'React & JavaScript Specialist',
    bio: 'James is a JavaScript enthusiast who maintains several open-source libraries. He believes learning by building real projects is the fastest path to mastery.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
    courses: 2,
    students: 3600,
  },
];

export const courses = [
  {
    id: 'html-fundamentals',
    title: 'HTML Fundamentals',
    tagline: 'The backbone of every webpage',
    level: 'Beginner',
    duration: '4 hours',
    lessons: [
      { id: 1, title: 'What is HTML?',                   duration: '10 min' },
      { id: 2, title: 'HTML Document Structure',          duration: '12 min' },
      { id: 3, title: 'Headings, Paragraphs & Text',     duration: '14 min' },
      { id: 4, title: 'Links & Images',                   duration: '15 min' },
      { id: 5, title: 'Lists — ordered & unordered',     duration: '10 min' },
      { id: 6, title: 'Tables',                           duration: '12 min' },
      { id: 7, title: 'Forms & Input Elements',           duration: '18 min' },
      { id: 8, title: 'Semantic HTML5 Elements',          duration: '16 min' },
    ],
    price: 'Free',
    description:
      'Start your web development journey by mastering HTML — the language that gives webpages their structure. In this course you will learn to write clean, semantic markup that browsers and screen-readers understand.',
    thumbnail: '🌐',
    color: '#e0f2fe',
    instructor: instructors[0],
    featured: true,
  },
  {
    id: 'css-essentials',
    title: 'CSS Essentials',
    tagline: 'Make the web beautiful',
    level: 'Beginner',
    duration: '5 hours',
    lessons: [
      { id: 1, title: 'CSS Syntax & Selectors',           duration: '12 min' },
      { id: 2, title: 'The Box Model',                    duration: '15 min' },
      { id: 3, title: 'Colors, Fonts & Units',            duration: '14 min' },
      { id: 4, title: 'Display & Positioning',            duration: '18 min' },
      { id: 5, title: 'Flexbox Layout',                   duration: '22 min' },
      { id: 6, title: 'CSS Grid',                         duration: '24 min' },
      { id: 7, title: 'Transitions & Animations',         duration: '16 min' },
      { id: 8, title: 'CSS Variables & Custom Properties',duration: '13 min' },
      { id: 9, title: 'Media Queries & Responsive Design',duration: '20 min' },
    ],
    price: 'Free',
    description:
      'Transform plain HTML into visually stunning pages. You will explore the CSS box model, Flexbox, Grid, animations, and responsive design patterns that power modern websites.',
    thumbnail: '🎨',
    color: '#fce7f3',
    instructor: instructors[0],
    featured: true,
  },
  {
    id: 'javascript-basics',
    title: 'JavaScript Basics',
    tagline: 'Bring your pages to life',
    level: 'Beginner',
    duration: '8 hours',
    lessons: [
      { id: 1,  title: 'What is JavaScript?',              duration: '10 min' },
      { id: 2,  title: 'Variables: var, let, const',       duration: '14 min' },
      { id: 3,  title: 'Data Types & Operators',           duration: '16 min' },
      { id: 4,  title: 'Control Flow — if / else / switch',duration: '18 min' },
      { id: 5,  title: 'Loops — for, while, forEach',      duration: '16 min' },
      { id: 6,  title: 'Functions',                        duration: '20 min' },
      { id: 7,  title: 'Arrays & Objects',                 duration: '22 min' },
      { id: 8,  title: 'DOM Manipulation',                 duration: '24 min' },
      { id: 9,  title: 'Events & Event Listeners',         duration: '18 min' },
      { id: 10, title: 'Fetch API & Promises',             duration: '20 min' },
    ],
    price: '$29',
    description:
      'JavaScript makes websites interactive. You will learn variables, control flow, functions, arrays, objects, and how to manipulate the DOM — all through practical hands-on exercises.',
    thumbnail: '⚡',
    color: '#fef9c3',
    instructor: instructors[2],
    featured: true,
  },
  {
    id: 'responsive-design',
    title: 'Responsive Design',
    tagline: 'Build sites that work everywhere',
    level: 'Intermediate',
    duration: '5 hours',
    lessons: [
      { id: 1, title: 'Why Responsive Design?',            duration: '8 min'  },
      { id: 2, title: 'Mobile-First Strategy',             duration: '12 min' },
      { id: 3, title: 'Fluid Grids & Flexible Images',     duration: '16 min' },
      { id: 4, title: 'CSS Breakpoints Deep Dive',         duration: '18 min' },
      { id: 5, title: 'Viewport Meta Tag',                 duration: '10 min' },
      { id: 6, title: 'Responsive Typography',             duration: '14 min' },
      { id: 7, title: 'Building a Responsive Navbar',      duration: '22 min' },
      { id: 8, title: 'Testing on Real Devices',           duration: '14 min' },
    ],
    price: '$39',
    description:
      'Your users are on phones, tablets, laptops, and TVs. Learn to build fluid, adaptable layouts using media queries, Flexbox, Grid, and mobile-first thinking.',
    thumbnail: '📱',
    color: '#dcfce7',
    instructor: instructors[1],
    featured: false,
  },
  {
    id: 'react-for-beginners',
    title: 'React for Beginners',
    tagline: 'Build modern UIs with React',
    level: 'Intermediate',
    duration: '10 hours',
    lessons: [
      { id: 1,  title: 'Why React?',                       duration: '10 min' },
      { id: 2,  title: 'Your First Component',             duration: '14 min' },
      { id: 3,  title: 'JSX Syntax',                       duration: '16 min' },
      { id: 4,  title: 'Props — Passing Data Down',        duration: '18 min' },
      { id: 5,  title: 'State with useState',              duration: '22 min' },
      { id: 6,  title: 'Handling Events',                  duration: '16 min' },
      { id: 7,  title: 'Lists & Keys',                     duration: '14 min' },
      { id: 8,  title: 'Conditional Rendering',            duration: '14 min' },
      { id: 9,  title: 'useEffect & Side Effects',         duration: '24 min' },
      { id: 10, title: 'Fetching Data in React',           duration: '20 min' },
      { id: 11, title: 'React Router Basics',              duration: '22 min' },
      { id: 12, title: 'Building a Mini Project',          duration: '30 min' },
    ],
    price: '$49',
    description:
      'React is the most popular JavaScript library for building user interfaces. You will build real components, manage state, handle routing, and fetch data from APIs — all with hands-on projects.',
    thumbnail: '⚛️',
    color: '#ede9fe',
    instructor: instructors[2],
    featured: true,
  },
  {
    id: 'git-and-github',
    title: 'Git & GitHub',
    tagline: 'Version control for every developer',
    level: 'Beginner',
    duration: '3 hours',
    lessons: [
      { id: 1, title: 'What is Version Control?',          duration: '8 min'  },
      { id: 2, title: 'Installing & Configuring Git',      duration: '10 min' },
      { id: 3, title: 'git init, add, commit',             duration: '14 min' },
      { id: 4, title: 'Branching & Merging',               duration: '18 min' },
      { id: 5, title: 'Resolving Merge Conflicts',         duration: '16 min' },
      { id: 6, title: 'GitHub: push, pull, clone',         duration: '18 min' },
      { id: 7, title: 'Pull Requests & Code Review',       duration: '16 min' },
    ],
    price: 'Free',
    description:
      'Every professional developer uses Git. Learn to track changes, collaborate with teammates on GitHub, create branches, merge pull requests, and never lose work again.',
    thumbnail: '🗂️',
    color: '#ffedd5',
    instructor: instructors[1],
    featured: false,
  },
];

export const features = [
  {
    id: 'expert-instructors',
    icon: '🎓',
    title: 'Expert Instructors',
    description:
      'Learn from industry professionals with years of real-world experience building products used by millions.',
  },
  {
    id: 'hands-on-projects',
    icon: '🛠️',
    title: 'Hands-On Projects',
    description:
      'Every course includes practical projects so you practice what you learn and build a portfolio while studying.',
  },
  {
    id: 'learn-at-your-pace',
    icon: '⏱️',
    title: 'Learn at Your Pace',
    description:
      'Access course content anytime, anywhere. Pause, rewind, and revisit lessons as many times as you need.',
  },
  {
    id: 'community',
    icon: '🤝',
    title: 'Supportive Community',
    description:
      'Join thousands of fellow learners, ask questions in our forums, and get feedback on your code.',
  },
];

export const testimonials = [
  {
    id: 1,
    text: "EduWeb changed my career. I went from zero coding knowledge to landing a front-end developer job in 8 months. The courses are incredibly well structured.",
    name: 'Sara L.',
    role: 'Junior Front-End Developer',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sara',
  },
  {
    id: 2,
    text: 'The React for Beginners course is the clearest React course I have ever taken. Alex explains everything in a way that actually sticks.',
    name: 'Marco R.',
    role: 'Computer Science Student',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marco',
  },
  {
    id: 3,
    text: 'I took the HTML + CSS courses and built my first portfolio site in a weekend. The instructors are patient and the projects are fun.',
    name: 'Aisha K.',
    role: 'Graphic Designer learning to code',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha',
  },
];
