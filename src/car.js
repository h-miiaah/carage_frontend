class Car {
  constructor(car, carAttributes) {
    this.id = car.id;
    this.name = carAttributes.name;
    this.year = carAttributes.year;
    this.color = carAttributes.color;
    this.mileage = carAttributes.mileage;
    this.image_url = carAttributes.image_url;
    Car.all.push(this);
  }

  renderCarCard() {
    return `
      <div data-id=${this.id}>
      <h2>${this.name}</h2>
      <ul>
          <li>Year: ${this.year}</li>
          <li>Color: ${this.color}</li>
          <li>Mileage: ${this.mileage} miles</li>
      </ul>
      <img src=${this.image_url} height="300" width="500">
      <br>
      <button data-id=${this.id}>Edit</button>
      </div>
      <br>
      <br>
    `;
  }
}

Car.all = [];
