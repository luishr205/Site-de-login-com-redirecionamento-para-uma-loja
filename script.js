const botao = document.getElementById("botaoLogin");
const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("senha");
const mensagem = document.getElementById("mensagem");
const loginBox = document.getElementById("loginBox");
const storeSection = document.getElementById("storeSection");
const logoutButton = document.getElementById("logoutButton");

const showMessage = (texto, cor = "#ffdddd") => {
  mensagem.textContent = texto;
  mensagem.style.color = cor;
};

const usuarioValido = "admin10";
const senhaValida = "admin10";

botao.addEventListener("click", () => {
  const email = emailInput.value.trim();
  const senha = senhaInput.value.trim();

  if (!email || !senha) {
    return showMessage("Preencha todos os campos");
  }

  if (email !== usuarioValido && senha === senhaValida) {
    return showMessage("E-mail incorreto");
  }

  if (email === usuarioValido && senha !== senhaValida) {
    return showMessage("Senha incorreta");
  }

  if (email === usuarioValido && senha === senhaValida) {
    showMessage("Login feito com sucesso!", "#c8ffd6");
    setTimeout(() => {
      loginBox.classList.add("hidden");
      storeSection.classList.remove("hidden");
      mensagem.textContent = "";
    }, 600);
    return;
  }

  showMessage("E-mail e senha incorretos");
});

logoutButton.addEventListener("click", () => {
  loginBox.classList.remove("hidden");
  storeSection.classList.add("hidden");
  mensagem.textContent = "";
  emailInput.value = "";
  senhaInput.value = "";
});