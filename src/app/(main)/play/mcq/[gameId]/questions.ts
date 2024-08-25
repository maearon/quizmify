enum GameType {
    mcq = 'mcq',
    open_ended = 'open_ended'
}

export const questions = [
    {
        id: "66c595640d63055697fd6a44",
        question: "Which one is not an object oriented programming language?",
        answer: "C",
        options: JSON.stringify(["Java", "C#", "C++", "C"]),
        isCorrect: false,
        questionType: GameType.mcq,
    },
    {
        id: "66c59bd10d63055697fd6a6a",
        question: "Which language is used for styling web pages?",
        answer: "CSS",
        options: JSON.stringify(["HTML", "JQuery", "CSS", "XML"]),
        isCorrect: true,
        questionType: GameType.mcq,
    },
    {
        id: "66c59bd30d63055697fd6a6b",
        question: "There are ____ main components of object oriented programming.",
        answer: "4",
        options: JSON.stringify(["1", "6", "2", "4"]),
        isCorrect: true,
        questionType: GameType.mcq,
    },
    {
        id: "66c60d110d63055697fd6a78",
        question: "Which language is used for web apps?",
        answer: "All",
        options: JSON.stringify(["PHP", "Python", "Javascript", "All"]),
        isCorrect: true,
        questionType: GameType.mcq,
    },
    {
        id: "66c60d190d63055697fd6a79",
        question: "MVC is a ____.",
        answer: "Framework",
        options: JSON.stringify(["Language", "Library", "Framework", "All"]),
        isCorrect: true,
        questionType: GameType.mcq,
    },
    // Add 15 more questions below
    {
        id: "66c60d190d63055697fd6a80",
        question: "What does HTML stand for?",
        answer: "HyperText Markup Language",
        options: JSON.stringify(["HyperText Markup Language", "HyperText Multiple Language", "HyperText Marking Language", "HighText Markup Language"]),
        isCorrect: true,
        questionType: GameType.mcq,
    },
    {
        id: "66c60d190d63055697fd6a81",
        question: "Which company developed JavaScript?",
        answer: "Netscape",
        options: JSON.stringify(["Netscape", "Microsoft", "Sun Microsystems", "IBM"]),
        isCorrect: true,
        questionType: GameType.mcq,
    },
    {
        id: "66c60d190d63055697fd6a82",
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheets",
        options: JSON.stringify(["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"]),
        isCorrect: true,
        questionType: GameType.mcq,
    },
    {
        id: "66c60d190d63055697fd6a83",
        question: "Which HTML element is used to specify a footer for a document or section?",
        answer: "footer",
        options: JSON.stringify(["footer", "section", "div", "header"]),
        isCorrect: true,
        questionType: GameType.mcq,
    },
    {
        id: "66c60d190d63055697fd6a84",
        question: "In which year was the first version of HTML published?",
        answer: "1991",
        options: JSON.stringify(["1991", "1995", "1999", "2001"]),
        isCorrect: true,
        questionType: GameType.mcq,
    },
    {
        id: "66c60d190d63055697fd6a85",
        question: "Which of these is a JavaScript framework?",
        answer: "React",
        options: JSON.stringify(["React", "Angular", "Vue", "All"]),
        isCorrect: true,
        questionType: GameType.mcq,
    },
    {
        id: "66c60d190d63055697fd6a86",
        question: "Which of these is not a programming language?",
        answer: "HTML",
        options: JSON.stringify(["HTML", "Java", "Python", "Ruby"]),
        isCorrect: true,
        questionType: GameType.mcq,
    },
    {
        id: "66c60d190d63055697fd6a87",
        question: "What is the purpose of the 'alt' attribute in an image tag?",
        answer: "To provide alternative text",
        options: JSON.stringify(["To provide alternative text", "To define the image source", "To add a border", "To add a caption"]),
        isCorrect: true,
        questionType: GameType.mcq,
    },
    {
        id: "66c60d190d63055697fd6a88",
        question: "Which of these is a valid CSS selector?",
        answer: "class",
        options: JSON.stringify(["class", "id", "tag", "attribute"]),
        isCorrect: true,
        questionType: GameType.mcq,
    },
    {
        id: "66c60d190d63055697fd6a89",
        question: "What does SQL stand for?",
        answer: "Structured Query Language",
        options: JSON.stringify(["Structured Query Language", "Standard Query Language", "Simple Query Language", "Style Query Language"]),
        isCorrect: true,
        questionType: GameType.mcq,
    },
    {
        id: "66c60d190d63055697fd6a90",
        question: "Which of these is a NoSQL database?",
        answer: "MongoDB",
        options: JSON.stringify(["MongoDB", "MySQL", "PostgreSQL", "Oracle"]),
        isCorrect: true,
        questionType: GameType.mcq,
    },
    {
        id: "66c60d190d63055697fd6a91",
        question: "Which of these programming languages is used for server-side scripting?",
        answer: "PHP",
        options: JSON.stringify(["PHP", "JavaScript", "HTML", "CSS"]),
        isCorrect: true,
        questionType: GameType.mcq,
    },
    {
        id: "66c60d190d63055697fd6a92",
        question: "Which HTML tag is used to define an internal style sheet?",
        answer: "style",
        options: JSON.stringify(["style", "script", "link", "meta"]),
        isCorrect: true,
        questionType: GameType.mcq,
    },
    {
        id: "66c60d190d63055697fd6a93",
        question: "Which attribute is used to define inline CSS styles?",
        answer: "style",
        options: JSON.stringify(["style", "class", "id", "href"]),
        isCorrect: true,
        questionType: GameType.mcq,
    },
    {
        id: "66c60d190d63055697fd6a94",
        question: "Which tag is used to create a hyperlink in HTML?",
        answer: "a",
        options: JSON.stringify(["a", "link", "href", "hyperlink"]),
        isCorrect: true,
        questionType: GameType.mcq,
    }
];
