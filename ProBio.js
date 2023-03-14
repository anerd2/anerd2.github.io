function logSubmit(event) {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const date = document.getElementById("date").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;
  const news1 = document.getElementById("contactChoice1");
  const news2 = document.getElementById("contactChoice2");

  if (username == "") {
    console.error("Username needs to be included.");
  } else if (news1.checked == true && phone == "") {
    console.error(
      "You have to include a phone number if you want to be contacted by phone."
    );
  } else if (news2.checked == true && email == "") {
    console.error(
      "You have to include an email if you want to be contacted by email."
    );
  } else if (news1.checked == false && news2.checked == false) {
    console.error("A prefered contact method needs to be selected.");
  } else if (message == "") {
    console.error("There needs to be a message delivered.");
  } else if (date == "") {
    console.error("The date needs to be entered.");
  }
}

const form = document.getElementById("form");

form.addEventListener("submit", logSubmit);
