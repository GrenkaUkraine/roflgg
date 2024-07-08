// Arrays with error titles and descriptions
const errorTitles = [
    "Error 404",
    "Critical Error",
    "Fatal System Error",
    "Network Error",
    "Local Disk (C:)",
    "Local Disk (D:)",
    "Local Disk (E:)",
    "Hard Disk (C:)",
    "BDOS",
    "DDOS",
    "System Halted",
    "Kernel Panic",
    "Memory Overflow",
    "File Not Found",
    "Permission Denied",
    "Unknown Device",
    "Disk Full",
    "Invalid Operation",
    "Service Unavailable",
    "Timeout Error",
    "Security Breach",
    "Hardware Failure",
    "Software Crash",
    "Driver Conflict",
    "Stack Overflow",
    "Insufficient Resources",
    "Registry Corrupt",
    "Boot Error",
    "Update Failed",
    "Authentication Failed",
    "Blue Screen of Death",
    "Illegal Operation",
    "Disk Write Error",
    "Disk Read Error",
    "Out of Memory",
    "Application Not Responding",
    "Configuration Error",
    "Initialization Failure",
    "Shutdown Error",
    "Power Failure",
    "Backup Failed",
    "Restore Failed",
    "Malware Detected",
    "Virus Found",
    "Trojan Alert",
    "System Busy",
    "Data Corruption",
    "Resource Conflict",
    "File Access Denied",
    "Network Timeout",
    "Protocol Mismatch",
    "Login Failed",
    "Encryption Error",
    "Decryption Error",
    "Checksum Error",
    "Data Overflow",
    "Buffer Underrun",
    "Buffer Overrun",
    "Device Unreachable",
    "Device Timeout",
    "Path Not Found",
    "Operation Failed",
];

const errorDescriptions = [
    "Page not found.",
    "A critical error has occurred.",
    "The system has encountered a fatal error.",
    "There was a problem connecting to the network.",
    "An unknown error has occurred.",
    "Operation could not be completed.",
    "Memory allocation error.",
    "Network connection lost.",
    "Access violation detected.",
    "Device driver not found.",
    "File system corruption detected.",
    "System resources exhausted.",
    "Operation timed out.",
    "Unauthorized access attempt detected.",
    "Hardware malfunction detected.",
    "Software caused a system failure.",
    "Conflicting software detected.",
    "Registry entry is invalid.",
    "System boot sequence failed.",
    "Update installation failed.",
    "User authentication failed.",
    "Insufficient storage space available.",
    "Read/write error on disk.",
    "System component failure.",
    "Configuration file missing.",
    "Security protocol violation.",
    "Operation aborted by user.",
    "Required service is unavailable.",
    "Critical system file missing.",
    "Operation not permitted.",
    "Unexpected end of file.",
    "Command not recognized.",
    "Printer not found.",
    "Media not inserted.",
    "System overheating.",
    "License key expired.",
    "Service terminated unexpectedly.",
    "Gateway not responding.",
    "Input/output error.",
    "File format not supported.",
    "Archive is corrupted.",
    "Partition table error.",
    "Bad sector detected.",
    "Sector not found.",
    "Service dependency failure.",
    "Session expired.",
    "Maximum connections reached.",
    "Insufficient bandwidth.",
    "Protocol error.",
    "Database connection lost.",
    "Data sync error.",
    "Invalid file handle.",
    "Media write protected.",
    "Network protocol mismatch.",
    "Filesystem read-only.",
    "Data integrity check failed.",
    "Unrecoverable error.",
    "Communication error.",
    "Data transmission failure.",
    "Failed to initialize hardware.",
];

const errorIconPaths = [
    "../src/error-xp/Critical.png",
    "../src/error-xp/Critical.png",
    "../src/error-xp/Critical.png",
    "../src/error-xp/Alert.png"
]

let zIndexCounter = 1; // Counter for z-index of error cards
let errorCount = 0; // Counter for error cards created

// Debug flag to control error count display
let debugMode = false;

// Check if debug mode should be enabled
if (location.search.includes('debug=true')) {
    debugMode = true;
}

// Function to get a random position within the window
function getRandomPosition(element) {
    const x = Math.floor(Math.random() * (window.innerWidth - element.clientWidth));
    const y = Math.floor(Math.random() * (window.innerHeight - element.clientHeight));
    return { x, y };
}

// Function to enable dragging of the error card
function enableDrag(element) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    const dragArea = element.querySelector('.top');

    dragArea.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        // Create a new error card
        const cloneErrorCard = element.cloneNode(true);
        cloneErrorCard.style.zIndex = ++zIndexCounter; // Increment zIndexCounter and assign
        cloneErrorCard.style.left =  (element.offsetLeft - pos1) + "px";
        cloneErrorCard.style.top = (element.offsetTop - pos2) + "px";
        document.body.appendChild(cloneErrorCard); // Append clone to the body

        // Ensure original error card stays in front
        element.style.zIndex = ++zIndexCounter;
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";

        const cloneButtons = cloneErrorCard.querySelectorAll('button');
        cloneButtons.forEach(button => {
            button.classList.add('ghost');
        });

        // Update error count and display
        errorCount++;
        if (debugMode) {
            updateErrorCount();
        }

        // Check if error count exceeds 600, remove oldest clone if necessary
        if (errorCount > 600) {
            const oldestClone = document.querySelector('.error-card + .error-card');
            if (oldestClone) {
                oldestClone.remove();
                errorCount--;
                if (debugMode) {
                    updateErrorCount();
                }
            }
        }
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function playErrorSound() {
    const errorSound = document.getElementById('error-sound');
    errorSound.currentTime = 0; // Rewind to start
    errorSound.play();
}

// Function to show the error card at a random position
function showErrorCard() {
    const errorCard = document.querySelector('.error-card');
    const { x, y } = getRandomPosition(errorCard);
    errorCard.style.left = `${x}px`;
    errorCard.style.top = `${y}px`;

    // Set random error title and description
    const randomTitle = errorTitles[Math.floor(Math.random() * errorTitles.length)];
    const randomDescription = errorDescriptions[Math.floor(Math.random() * errorDescriptions.length)];
    const randomIconPath = errorIconPaths[Math.floor(Math.random() * errorIconPaths.length)];
    document.getElementById('error-title').childNodes[0].textContent = randomTitle;
    document.getElementById('error-description').textContent = randomDescription;
    document.getElementById('error-icon').src = randomIconPath;

    // Enable dragging for the error card
    enableDrag(errorCard);

    // Update error count and display
    errorCount++;
    if (debugMode) {
        updateErrorCount();
    }

    // Check if error count exceeds 600, remove oldest clone if necessary
    if (errorCount > 600) {
        const oldestClone = document.querySelector('.error-card + .error-card');
        if (oldestClone) {
            oldestClone.remove();
            errorCount--;
            if (debugMode) {
                updateErrorCount();
            }
        }
    }

    // Play error sound
    playErrorSound();
}

// Show the error card when the page loads
window.onload = showErrorCard;

// Add event listeners to buttons to show the error card again
document.getElementById('ok-button').addEventListener('click', showErrorCard);
document.getElementById('close-button').addEventListener('click', showErrorCard);

// Function to create and update the error count display
function createErrorCountDisplay() {
    const errorCountDisplay = document.createElement('div');
    errorCountDisplay.id = 'error-count';
    errorCountDisplay.style.position = 'fixed';
    errorCountDisplay.style.top = '10px';
    errorCountDisplay.style.right = '10px';
    errorCountDisplay.style.background = 'rgba(255, 0, 0, 0.5)';
    errorCountDisplay.style.padding = '5px 10px';
    errorCountDisplay.style.color = '#fff';
    errorCountDisplay.style.fontFamily = 'Arial, sans-serif';
    errorCountDisplay.style.fontSize = '16px';
    errorCountDisplay.textContent = `Errors: ${errorCount}`;

    document.body.appendChild(errorCountDisplay);
}

// Initialize error count display if in debug mode
if (debugMode) {
    createErrorCountDisplay();
}

// Function to update the error count display
function updateErrorCount() {
    const errorCountElement = document.getElementById('error-count');
    if (errorCountElement) {
        errorCountElement.textContent = `Errors: ${errorCount}`;
    }
}
