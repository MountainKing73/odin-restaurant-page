import restImage from "./street-6099209_640.jpg";

function showHome() {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  const name = document.createElement("h1");
  name.textContent = "The Restaurant";
  content.appendChild(name);

  const restImg = document.createElement("img");
  restImg.src = restImage;
  content.appendChild(restImg);

  const testimonial = document.createElement("p");
  testimonial.textContent = "The best restaurant ever - Everyone";
  content.appendChild(testimonial);
}

export { showHome };
