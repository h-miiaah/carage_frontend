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

  static findById(id) {
    return this.all.find((car) => car.id === id);
  }

  renderUpdateForm() {
    return `
      <form data-id=${this.id} >
        <h3>Edit Car<h3/>
        Name
        <input
          id="input-name"
          type="text"
          name="name"
          value="${this.name}"
        />
        <br />

        Year
        <input
          id="input-year"
          type="text"
          name="year"
          value="${this.year}"
        />
        <br />

        Color
        <input
          id="input-color"
          type="text"
          name="color"
          value="${this.color}"
        />
        <br />

        Mileage
        <input
          id="input-mileage"
          type="text"
          name="mileage"
          value="${this.mileage}"
        />
        <br />

        Image URL
        <input
          id="input-url"
          type="text"
          name="imgae"
          value="${this.image_url}"
        />
        <br />
        <br />
        Brand
        <select id="brands" name="brands" value="${this.brand.name}">
          <option value="1">Alfa Romeo</option>
          <option value="2">Aston Martin</option>
          <option value="3">Audi</option>
          <option value="4">Bentley</option>
          <option value="5">BMW</option>
          <option value="6">Bugatti</option>
          <option value="7">Cadillac</option>
          <option value="8">Chevrolet</option>
          <option value="9">Chrysler</option>
          <option value="10">Dodge</option>
          <option value="11">Ferrari</option>
          <option value="12">Fiat</option>
          <option value="13">Ford</option>
          <option value="14">GMC</option>
          <option value="15">Honda</option>
          <option value="16">Hyundai</option>
          <option value="17">Infiniti</option>
          <option value="18">Jaguar</option>
          <option value="19">Jeep</option>
          <option value="20">Kia</option>
          <option value="21">Koenigsegg</option>
          <option value="22">Lamborghini</option>
          <option value="23">Land Rover</option>
          <option value="24">Lexus</option>
          <option value="25">Maserati</option>
          <option value="26">Mazda</option>
          <option value="27">McLaren</option>
          <option value="28">Mercedes Benz</option>
          <option value="29">Mini</option>
          <option value="30">Mitsubishi</option>
          <option value="31">Nissan</option>
          <option value="32">Pagani</option>
          <option value="33">Porsche</option>
          <option value="34">Range Rover</option>
          <option value="35">Rolls Royce</option>
          <option value="36">Subaru</option>
          <option value="37">Suzuki</option>
          <option value="38">Tesla</option>
          <option value="39">Toyota</option>
          <option value="40">Volkswagen</option>
          <option value="41">Volvo</option>
        </select>
        <br />
        <br />

        <input
          id="edit-button"
          type="submit"
          name="submit"
          value="Edit Car"
        />
      </form>
      `;
  }
}

Car.all = [];
