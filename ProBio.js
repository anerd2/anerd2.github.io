function logSubmit(event) {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const date = document.getElementById("date").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;
  const news1 = document.getElementById("contactChoice1");
  const news2 = document.getElementById("contactChoice2");

  if (username == "") {
  }
}

const form = document.getElementById("form");

form.addEventListener("submit", logSubmit);
