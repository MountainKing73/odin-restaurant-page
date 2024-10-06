import restImage from "./street-6099209_640.jpg";

function showAbout() {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  const name = document.createElement("h1");
  name.textContent = "About";
  content.appendChild(name);

  const hours = document.createElement("h2");
  hours.textContent = "Hours";
  content.appendChild(hours);

  const list = document.createElement("ul");
  content.appendChild(list);

  const hourList = [
    "Sunday:        7am - 10pm",
    "Monday:        7am - 10pm",
    "Tuesday:       7am - 10pm",
    "Wednesday:     7am - 10pm",
    "Thursday:      7am - 10pm",
    "Friday:        7am - 10pm",
    "Saturday:      7am - 10pm",
  ];

  hourList.forEach((element) => {
    const day = document.createElement("li");
    day.textContent = element;
    list.appendChild(day);
  });
}

export { showAbout };
