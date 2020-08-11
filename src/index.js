const baseURL = "http://localhost:3000/api/v1/cars";

document.addEventListener("DOMContentLoaded", () => {
  getCars();

  const createCarForm = document.querySelector("#create-car-form");

  createCarForm.addEventListener("submit", (e) => createFormHandler(e));

  const carContainer = document.querySelector("#car-container");
  carContainer.addEventListener("click", (e) => {
    const id = parseInt(e.target.dataset.id);
    const car = Car.findById(id);
    document.querySelector("#update-car").innerHTML = car.renderUpdateForm();
  });
  document
    .querySelector("#update-car")
    .addEventListener("submit", (e) => updateFormHandler(e));
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

function updateFormHandler(e) {
  e.preventDefault();
  const id = parseInt(e.target.dataset.id);
  const car = Car.findById(id);
  const name = e.target.querySelector("#input-name").value;
  const year = e.target.querySelector("#input-year").value;
  const color = e.target.querySelector("#input-color").value;
  const mileage = e.target.querySelector("#input-mileage").value;
  const image_url = e.target.querySelector("#input-url").value;
  const brand_id = parseInt(e.target.querySelector("#brands").value);
  patchSyllabus(car, name, year, color, mileage, image_url, brand_id);
}

function patchSyllabus(car, name, year, color, mileage, image_url, brand_id) {
  const bodyJSON = { car, name, year, color, mileage, image_url, brand_id };
  fetch(`http://localhost:3000/api/v1/cars/${car.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(bodyJSON),
  })
    .then((res) => res.json())
    // our backend responds with the updated syllabus instance represented as JSON
    .then((updatedCar) => console.log(updatedCar));
}
