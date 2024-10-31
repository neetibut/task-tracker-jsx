const [isInitialLoad, setIsInitialLoad] = useState(true); // Flag to track initial load

// Load tasks from localStorage on initial render
useEffect(() => {
const savedTasks = localStorage.getItem("tasks");
if (savedTasks) {
try {
setTasks(JSON.parse(savedTasks));
} catch (error) {
console.error("Error parsing tasks from localStorage:", error);
setTasks([]); // Fallback to an empty array if parsing fails
}
}
setIsInitialLoad(false); // Mark initial load as complete
}, []);

// Save tasks to localStorage whenever tasks state changes, after initial load
useEffect(() => {
if (!isInitialLoad) {
localStorage.setItem("tasks", JSON.stringify(tasks));
}
}, [tasks, isInitialLoad]);
