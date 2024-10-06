import restImage from "./street-6099209_640.jpg";

function showMenu() {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  const name = document.createElement("h1");
  name.textContent = "MENU";
  content.appendChild(name);

  const menuSections = ["Appetizers", "Mains", "Desserts"];
  const appOptions = ["Salad", "Nachos", "Shrimp Coctail"];
  const mainOptions = ["Steak", "Chicken", "Salmon"];
  const dessertOptions = ["Chocolate Cake", "Ice Cream", "Cheesecake"];

  menuSections.forEach((element) => {
    const section = document.createElement("h2");
    section.textContent = element;
    content.appendChild(section);

    const list = document.createElement("ul");
    content.appendChild(list);

    let options = [];

    if (element === "Appetizers") {
      options = appOptions;
    } else if (element === "Mains") {
      options = mainOptions;
    } else {
      options = dessertOptions;
    }

    options.forEach((option) => {
      const opt = document.createElement("li");
      opt.textContent = option;
      list.appendChild(opt);
    });
  });
}
export { showMenu };
