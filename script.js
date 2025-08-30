document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // impede envio imediato

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    // Regex de email simples
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Regex de senha: 8+ caracteres, 1 maiúscula, 1 minúscula, 1 especial
    const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;

    if (!emailRegex.test(email)) {
      alert("❌ Email inválido. Use o formato exemplo@dominio.com");
      return;
    }

    if (!senhaRegex.test(senha)) {
      alert("❌ A senha deve ter no mínimo 8 caracteres, incluindo 1 maiúscula, 1 minúscula e 1 especial.");
      return;
    }

    alert("✅ Login realizado com sucesso!");
    // form.submit();  // se quiser enviar o formulário de verdade
  });
});