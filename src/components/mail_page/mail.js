const emailList = [
    { id: 1, subject: 'Email 1', body: 'This is the body of email 1', folder: 'inbox' },
    { id: 2, subject: 'Email 2', body: 'This is the body of email 2', folder: 'inbox' },
    { id: 3, subject: 'Email 3', body: 'This is the body of email 3', folder: 'inbox' },
    { id: 4, subject: 'Email 4', body: 'This is the body of email 4', folder: 'inbox' },
    { id: 5, subject: 'Email 5', body: 'This is the body of email 5', folder: 'inbox' },
    { id: 6, subject: 'Email 6', body: 'This is the body of email 6', folder: 'inbox' },
    { id: 7, subject: 'Email 7', body: 'This is the body of email 7', folder: 'inbox' },
    { id: 8, subject: 'Email 8', body: 'This is the body of email 8', folder: 'inbox' },
    { id: 9, subject: 'Email 9', body: 'This is the body of email 9', folder: 'inbox' },
    { id: 10, subject: 'Email 10', body: 'This is the body of email 10', folder: 'inbox' },
];

let currentFolder = 'inbox'; // Default folder

const emailListElement = document.getElementById('email-list');
const emailDetailsElement = document.getElementById('email-details');
const loaderElement = document.getElementById('loader');

// Function to render emails based on the current folder
function renderEmails() {
    emailListElement.innerHTML = '';
    const filteredEmails = emailList.filter(email => email.folder === currentFolder);
    
    if (filteredEmails.length === 0) {
        emailListElement.innerHTML = '<li>No emails found.</li>';
    } else {
        filteredEmails.forEach(email => {
            const li = document.createElement('li');
            li.textContent = email.subject;
            li.onclick = () => showEmailDetails(email);
            emailListElement.appendChild(li);
        });
    }
}

// Function to show email details
function showEmailDetails(email) {
    emailDetailsElement.innerHTML = `
        <h3>${email.subject}</h3>
        <p>${email.body}</p>
        <button class="btn btn-primary" onclick="scanEmail(${email.id})">Scan</button>
    `;
}

// Function to scan email
function scanEmail(emailId) {
    loaderElement.style.display = 'block';
    
    // Simulate a scan with a timeout
    setTimeout(() => {
        loaderElement.style.display = 'none';
        showScanOptions(emailId);
    }, 2000); // Simulate scanning delay
}

// Function to show scan options
function showScanOptions(emailId) {
    emailDetailsElement.innerHTML += `
        <div id="scan-options">
            <button class="btn btn-danger" onclick="deleteEmail(${emailId})">Delete</button>
            <button class="btn btn-warning" onclick="moveToSpam(${emailId})">Move to Spam</button>
        </div>
    `;
}

// Function to delete email
function deleteEmail(emailId) {
    const index = emailList.findIndex(email => email.id === emailId);
    if (index > -1) {
        emailList[index].folder = 'trash'; // Move to trash
        renderEmails();
        emailDetailsElement.innerHTML = '<p>Email moved to Trash.</p>';
    }
}

// Function to move email to spam
function moveToSpam(emailId) {
    const index = emailList.findIndex(email => email.id === emailId);
    if (index > -1) {
        emailList[index].folder = 'spam'; // Move to spam
        renderEmails();
        emailDetailsElement.innerHTML = '<p>Email moved to Spam.</p>';
    }
}

// Function to handle folder switching
function switchFolder(folder) {
    currentFolder = folder;
    renderEmails();
    emailDetailsElement.innerHTML = ''; // Clear email details on folder switch
}

// Add event listeners to sidebar buttons
document.querySelectorAll('.folder-btn').forEach(button => {
    button.addEventListener('click', () => switchFolder(button.getAttribute('data-folder')));
});

// Initial rendering of emails
renderEmails();
