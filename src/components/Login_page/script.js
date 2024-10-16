// Show Login Form
function showLogin() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-tab').classList.add('active');
    document.getElementById('signup-tab').classList.remove('active');
}

// Show Signup Form
function showSignup() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
    document.getElementById('signup-tab').classList.add('active');
    document.getElementById('login-tab').classList.remove('active');
}


document.getElementById('loginForm').addEventListener('submit', function () {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (email && password) {
        alert(`Login with\nEmail: ${email}\nPassword: ${password}`);
      
    } else {
        alert('Please fill out all fields.');
    }
});


document.getElementById('signupForm').addEventListener('submit', function () {
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    if (name && email && password) {
        alert(`Signup with\nName: ${name}\nEmail: ${email}\nPassword: ${password}`);
        
    } else {
        alert('Please fill out all fields.');
    }
});


function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    alert('Google Sign-in successful');
    
}


window.onload = function () {
    
    google.accounts.id.renderButton(
        document.getElementById("g_id_signin_login"),
        { theme: "filled_blue", size: "large", width: "100%" }
    );

    
    google.accounts.id.renderButton(
        document.getElementById("g_id_signin_signup"),
        { theme: "filled_blue", size: "large", width: "100%" }
    );
};


function sendLoginRequest(email, password) {
    
    console.log("Logging in with", email, password);
    
}

function sendSignupRequest(name, email, password) {
    
    console.log("Signing up with", name, email, password);

}

function sendGoogleTokenToBackend(token) {
    
    console.log("Google token:", token);

}
