const button_A = document.querySelector("#button_A");
const heading_A = document.querySelector("#heading_A");

let count = 1;

#button_A.onclick = () => {
  button_A.textContent = "Try again!";
  heading_A.textContent = `${count} clicks so far`;
  count += 1;
};