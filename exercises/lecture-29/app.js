class AuthException extends Error {
  constructor(code, message) {
    super(message ? `${code}: ${message}` : code);
    this.code = code;
  }

  toString() {
    return this.message;
  }
}

let isAuth = (auth) => auth ?? false;
let dialogBoxId = document.getElementById("dialogBox");
let dialogBox = dialogBoxId.querySelector(".message");
let checkAuth = document.querySelector(".check-auth");

checkAuth.addEventListener('click',() => {
  try {
    if (!isAuth()) {
      throw new AuthException('FORBIDDEN', 'You do not have access to this page');
    } else {
      window.open('success.html', '_blank');
    }
  } catch (e) {
    dialogBox.textContent = e;
    showDialog();
  }
});

function showDialog() {
  dialogBoxId.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
    }
  });
  
  dialogBoxId.showModal(); 
}

function closeDialog() {
  
  dialogBoxId.close(); 
}



  
