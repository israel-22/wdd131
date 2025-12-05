// Fetch any JSON file
export async function loadJSON(path) {
    try {
        const response = await fetch(path);
        if (!response.ok) throw new Error(`HTTP error! ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error("Error loading JSON:", error);
        return null;
    }
}

// Create an element with classes
export function createElement(tag, classes = []) {
    const element = document.createElement(tag);
    classes.forEach(cls => element.classList.add(cls));
    return element;
}

// Smooth scroll to top
export function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
