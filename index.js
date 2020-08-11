const baseURL = "http://localhost:3000/api/v1/cars";

document.addEventListener("DOMContentLoaded", () => {
  getCars();
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
            <button data-id=${car.id}>Edit</button>
            </div>
            <br>
            <br>
          `;

        document.querySelector("#car-container").innerHTML += carMarkup;
      });
    });
}
