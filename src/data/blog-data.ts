
import { BlogDataFormat } from "../models/blog-data-format";

export const BlogData: BlogDataFormat[] = [
    {
        articleId: 1,
        articleTitle: 'Understanding Angular Signals: A Modern Approach to Reactivity',
        articleDesc: 'Explore how Angular Signals simplify state management and help developers build reactive and maintainable applications.',
        thumbImg: '/images/angular-logo.png',
        pubDate: '2026-11-20',
        category: 'Angular',
        articleContent: [
            {
                heading: 'Introduction',
                paragraphs: [
                    'Modern web applications need an efficient way to manage data and update the user interface whenever that data changes. Angular provides several tools to manage application state, and Signals are one of its modern reactive features.',
                    'Signals provide a simple way to create, track and update state within an Angular application. They help developers understand how data changes affect the user interface.'
                ]
            },
            {
                heading: 'What are Angular Signals?',
                paragraphs: [
                    'A Signal is a reactive value that notifies Angular when its value changes. Angular tracks where a signal is used and updates the relevant parts of the application when necessary.',
                    'The signal() function creates a writable signal. You can read its value by calling it like a function and update it using set() or update().'
                ]
            },
            {
                heading: 'Understanding Computed Signals',
                paragraphs: [
                    'Computed signals allow developers to create values derived from other signals. They automatically recalculate when their dependencies change.',
                    'For example, an application can calculate the total price of products using their individual price and quantity. Instead of manually updating the total, a computed signal handles the dependency.'
                ]
            },
            {
                heading: 'Why are Signals Useful?',
                paragraphs: [
                    'Signals make component state easier to manage and help reduce unnecessary manual state synchronization.',
                    'They are useful for counters, filters, selected values and other reactive UI features. However, Signals do not replace every RxJS use case. Observables remain useful for asynchronous streams and complex event processing.'
                ]
            },
            {
                heading: 'Conclusion',
                paragraphs: [
                    'Angular Signals provide a modern approach to reactive state management. Understanding signal(), computed() and effect() is a valuable step towards building maintainable Angular applications.',
                    'As I continue learning Angular, Signals have helped me better understand how Angular tracks state and updates the user interface.'
                ]
            }
        ]
    },
    {
        articleId: 2,
        articleTitle: 'Building an AI-Powered Clinical Documentation System',
        articleDesc: 'Speech recognition, speaker diarization and language models can transform doctor-patient conversations into structured clinical notes.',
        thumbImg: '/images/clinic-logo.png',
        pubDate: '2026-11-15',
        category: 'Artificial Intelligence',
        articleContent: [
            {
                heading: 'Introduction',
                paragraphs: [
                    'Healthcare professionals spend a considerable amount of time documenting patient consultations. Recording symptoms, medical history, observations and treatment plans is essential, but manually preparing consultation notes can be time-consuming.',
                    'As part of my final-year project, I explored how artificial intelligence could assist with this process through an AI-powered clinical documentation system.'
                ]
            },
            {
                heading: 'The Problem',
                paragraphs: [
                    'Doctor-patient consultations contain important information such as symptoms, medical history, clinical observations and treatment plans.',
                    'Manually converting these conversations into structured records requires time and attention. Our project explored an automated approach to generating documentation from recorded consultation audio.'
                ]
            },
            {
                heading: 'Audio Transcription Using Whisper',
                paragraphs: [
                    'The first stage of the system converts recorded consultation audio into text using OpenAI Whisper, a speech recognition model.',
                    'The resulting transcript provides the textual representation of the conversation and becomes the input for subsequent processing stages.'
                ]
            },
            {
                heading: 'Speaker Diarization and Clinical Processing',
                paragraphs: [
                    'A consultation generally involves multiple speakers, such as a doctor and a patient. Speaker diarization helps identify who is speaking at different points in the recording.',
                    'The transcribed conversation is then processed to identify relevant clinical information. We explored language models and domain-specific datasets to support the extraction of medical entities and important details.'
                ]
            },
            {
                heading: 'Generating Structured Clinical Notes',
                paragraphs: [
                    'The extracted information is organized using the SOAP format: Subjective, Objective, Assessment and Plan.',
                    'Subjective contains information reported by the patient. Objective contains observations and measurable findings. Assessment represents the clinician’s evaluation, while Plan contains proposed treatment and follow-up instructions.'
                ]
            },
            {
                heading: 'Technologies and Challenges',
                paragraphs: [
                    'The project combined Python, Whisper, Llama 3.2, Hugging Face, PyTorch and SpeechBrain. Each technology contributed to a different stage of the processing pipeline.',
                    'One of the biggest challenges was integrating multiple AI components. We also encountered dependency conflicts, GPU compatibility issues and API usage limitations.',
                    'This experience taught me that building an AI application involves much more than selecting a model. Data processing, integration, testing and reliability are equally important.'
                ]
            },
            {
                heading: 'Conclusion',
                paragraphs: [
                    'The project gave me valuable exposure to practical AI development and showed me how multiple technologies can work together to solve a real-world problem.',
                    'The system is intended to assist clinical documentation rather than replace professional medical judgment. Generated notes must be reviewed by qualified healthcare professionals.'
                ]
            }
        ]
    },
    {
        articleId: 3,
        articleTitle: 'Git and GitHub: A Practical Workflow for Developers',
        articleDesc: 'Learn the fundamentals of version control, commits, branches and remote repositories through a practical developer workflow.',
        thumbImg: '/images/git-github-logo.png',
        pubDate: '2026-11-10',
        category: 'Software Development',
        articleContent: [
            {
                heading: 'Introduction',
                paragraphs: [
                    'Writing code is only one part of software development. As applications grow, developers need a reliable way to track changes, manage different versions and collaborate with others.',
                    'Git and GitHub are important tools that help developers manage source code and work together efficiently.'
                ]
            },
            {
                heading: 'What is Git?',
                paragraphs: [
                    'Git is a distributed version control system that tracks changes made to source code. It allows developers to maintain a history of their work and return to previous versions when necessary.',
                    'A Git repository stores project files along with their version history.'
                ]
            },
            {
                heading: 'Understanding the Git Workflow',
                paragraphs: [
                    'A typical Git workflow involves three important stages: the working directory, the staging area and the repository.',
                    'The working directory is where files are modified. The staging area contains changes selected for the next commit. A commit records those staged changes in the repository.'
                ]
            },
            {
                heading: 'Important Git Commands',
                paragraphs: [
                    'The git status command displays modified, staged and untracked files. The git add command stages changes, while git commit records them with a descriptive message.',
                    'Git push uploads local commits to a remote repository, and git pull retrieves changes from the remote repository.'
                ]
            },
            {
                heading: 'Why are Branches Important?',
                paragraphs: [
                    'Branches allow developers to work on new features without directly modifying the main development branch.',
                    'For example, a developer can create a separate branch for a blog page, complete the feature and then merge the changes into the main branch after review.'
                ]
            },
            {
                heading: 'Conclusion',
                paragraphs: [
                    'Git and GitHub are essential tools in modern software development. Learning their basic workflow makes it easier to manage projects, maintain code history and collaborate with other developers.',
                    'The best way to become comfortable with Git is to use it regularly in personal projects rather than simply memorizing commands.'
                ]
            }
        ]
    },
    {
        articleId: 4,
        articleTitle: 'My Journey from JavaScript to Angular Development',
        articleDesc: 'A look at my learning journey through HTML, CSS, JavaScript and TypeScript before moving into Angular application development.',
        thumbImg: '/images/3rd-angular-logo.webp',
        pubDate: '2026-11-05',
        category: 'Web Development',
        articleContent: [
            {
                heading: 'Introduction',
                paragraphs: [
                    'Starting with frontend development can feel overwhelming. There are several technologies to understand, different frameworks to explore and many concepts that become important when building real applications.',
                    'My journey into Angular development began with the fundamentals of web development: HTML, CSS and JavaScript.'
                ]
            },
            {
                heading: 'Starting with HTML and CSS',
                paragraphs: [
                    'HTML provides the structure of a web page, while CSS controls its appearance. Learning these technologies helped me understand how websites are built from individual elements.',
                    'I explored semantic HTML, forms, CSS selectors, positioning, Flexbox, Grid and responsive design. Understanding layout techniques was especially useful when building responsive interfaces.'
                ]
            },
            {
                heading: 'Learning JavaScript',
                paragraphs: [
                    'JavaScript introduced programming logic into frontend development. I explored variables, functions, arrays, objects, DOM manipulation and event handling.',
                    'Understanding promises and asynchronous JavaScript also helped me prepare for working with APIs and more advanced application features.'
                ]
            },
            {
                heading: 'Moving to TypeScript',
                paragraphs: [
                    'Angular uses TypeScript, so understanding JavaScript alone is not enough. TypeScript adds static typing and features that help developers write more structured code.',
                    'Some important concepts include type annotations, interfaces, classes, access modifiers, generics and modules. Interfaces are particularly useful for defining the structure of application data.'
                ]
            },
            {
                heading: 'Understanding Angular',
                paragraphs: [
                    'Angular introduced a different way of organizing frontend applications. Instead of building everything in a single file, applications can be divided into reusable components.',
                    'I started exploring components, services, dependency injection, signals, routing, lifecycle hooks and reactive forms.',
                    'Understanding how components communicate and how services manage shared data helped me see how larger applications can be organized.'
                ]
            },
            {
                heading: 'Learning Through Projects',
                paragraphs: [
                    'Reading documentation is useful, but implementing concepts in an actual application makes a significant difference.',
                    'While building my personal portfolio, I started applying Angular concepts through reusable components, services, interfaces, routing and category filtering.',
                    'Each feature introduced a new challenge and helped me connect theoretical concepts with practical development.'
                ]
            },
            {
                heading: 'Conclusion',
                paragraphs: [
                    'My journey into Angular development is still ongoing. Moving from basic web technologies to building component-based applications has helped me develop a stronger understanding of frontend development.',
                    'I believe the best way to improve as a developer is to keep building, experiment with new concepts and learn from mistakes along the way.'
                ]
            }
        ]
    }
];
