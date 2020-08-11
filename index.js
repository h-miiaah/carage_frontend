const baseURL = "http://localhost:3000/api/v1/cars";

document.addEventListener("DOMContentLoaded", () => {
  getCars();

  const createCarForm = document.querySelector("#create-car-form");

  createCarForm.addEventListener("submit", (e) => createFormHandler(e));
});

function getCars() {
  fetch(baseURL)
    .then((response) => response.json())
    .then((cars) => {
      cars.data.forEach((car) => {
        const carMarkup = `
            <div data-id=${car.id}>
            <h2>${car.attributes.name}</h2>
            <ul>
                <li>Year: ${car.attributes.year}</li>
                <li>Color: ${car.attributes.color}</li>
                <li>Mileage: ${car.attributes.mileage} miles</li>
            </ul>
            <img src=${car.attributes.image_url} height="300" width="500">
            <br>
            <button data-id=${car.id}>Edit</button>
            </div>
            <br>
            <br>
          `;

        document.querySelector("#car-container").innerHTML += carMarkup;
      });
    });
}

function createFormHandler(e) {
  e.preventDefault();
  const nameInput = document.querySelector("#input-name").value;
  const yearInput = document.querySelector("#input-year").value;
  const colorInput = document.querySelector("#input-color").value;
  const mileageInput = document.querySelector("#input-mileage").value;
  const imageInput = document.querySelector("#input-url").value;
  const brandId = parseInt(document.querySelector("#brands").value);
  postFetch(
    nameInput,
    yearInput,
    colorInput,
    mileageInput,
    imageInput,
    brandId
  );
}

function postFetch(name, year, color, mileage, image_url, brand_id) {
  const bodyData = { name, year, color, mileage, image_url, brand_id };
  fetch(baseURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bodyData),
  })
    .then((response) => response.json())
    .then((car) => {
      const carData = car.data.attributes;
      const carMarkup = `
            <div data-id=${car.id}>
            <h2>${carData.name}</h2>
            <ul>
                <li>Year: ${carData.year}</li>
                <li>Color: ${carData.color}</li>
                <li>Mileage: ${carData.mileage} miles</li>
            </ul>
            <img src=${carData.image_url} height="300" width="500">
            <br>
            <button data-id=${carData.id}>Edit</button>
            </div>
            <br>
            <br>
          `;

      document.querySelector("#car-container").innerHTML += carMarkup;
    });
}
