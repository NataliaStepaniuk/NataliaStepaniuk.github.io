class AuthException extends Error {
    constructor(code, message) {
      super(message); 
      this.code = code; 
    }
  
    toString() {
      return `${this.code}: ${this.message}`; 
    }
  }
  
  const checkAuth = document.querySelector('.check-auth');
  
  checkAuth.addEventListener('click', () => {
    try {
      if (!isAuth()) {
        throw new AuthException('FORBIDDEN', 'You don\'t have access to this page');
      }
  
      window.open('success.html');
    } catch (e) {
      const dialogBoxId = document.getElementById('dialogBoxId');
      showDialog(e.message); 
    }
  });
  
  function showDialog(message) {
    const dialogBox = document.getElementById('dialogBoxId');
    const messageElement = dialogBox.querySelector('.message');
    messageElement.textContent = message;
    dialogBox.classList.add('open');
  
    dialogBox.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeDialog(); 
      }
    });
  }
  
  function closeDialog() {
    dialogBox.classList.remove('open');
  }
  
  let isAuth = (auth) => auth ?? false; 
  
  let dialogBox = document.getElementById("dialogBox"); 
  
