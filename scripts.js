const form = document.querySelector("form");
const p = document.querySelector("p");
const students = [];

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const newStudent = Object.fromEntries(new FormData(event.target));

  students.push(newStudent);
});

document.querySelector("button").addEventListener("click", () => {
  const randomName = students[getRandomIntInclusive(0, students.length - 1)];

  p.innerText = `${randomName.fname} ${randomName.lname}`;
});
