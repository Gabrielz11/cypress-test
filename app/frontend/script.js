const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('loginBtn');
const messageDiv = document.getElementById('message');

// Function to toggle button state
function toggleButton() {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    
    const isEmailValid = email !== '';
    const isPasswordValid = password !== '';
    
    // Toggle error visibility
    document.getElementById('email-error').classList.toggle('show-error', !isEmailValid);
    document.getElementById('password-error').classList.toggle('show-error', !isPasswordValid);
    
    loginBtn.disabled = !(isEmailValid && isPasswordValid);
}

// Add event listeners to inputs
emailInput.addEventListener('input', toggleButton);
passwordInput.addEventListener('input', toggleButton);
emailInput.addEventListener('blur', toggleButton);
passwordInput.addEventListener('blur', toggleButton);

// Handle form submission
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = emailInput.value;
    const password = passwordInput.value;
    
    // Clear previous messages
    messageDiv.className = 'message';
    messageDiv.textContent = '';
    messageDiv.style.display = 'none';
    
    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            // Success
            messageDiv.textContent = 'Login efetuado com sucesso!';
            messageDiv.className = 'message success';
            messageDiv.style.display = 'block';
            
            // Save user in local storage
            localStorage.setItem('userEmail', data.user.email);
            
            // Redirect after a short delay
            setTimeout(() => {
                window.location.href = 'home.html';
            }, 1500);
            
        } else {
            // Failure
            messageDiv.textContent = data.message || 'Erro ao fazer login.';
            messageDiv.className = 'message error';
            messageDiv.style.display = 'block';
        }
    } catch (error) {
        console.error('Error:', error);
        messageDiv.textContent = 'Erro ao conectar com o servidor.';
        messageDiv.className = 'message error';
        messageDiv.style.display = 'block';
    }
});
