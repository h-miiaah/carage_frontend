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
        let newCar = new Car(car, car.attributes);

        document.querySelector(
          "#car-container"
        ).innerHTML += newCar.renderCarCard();
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
      const carData = car.data;
      let newCar = new Car(carData, carData.attributes);

      document.querySelector(
        "#car-container"
      ).innerHTML += newCar.renderCarCard();
      document.querySelector("#create-car-form").reset();
    });
}
