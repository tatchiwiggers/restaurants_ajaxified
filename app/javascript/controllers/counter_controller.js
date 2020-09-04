import { Controller } from "stimulus";

export default class extends Controller {
  static targets = [ 'count' ];
  connect() {
    console.log('Hello!');
    console.log(this.countTarget);
    setInterval(this.refresh, 5000);
  }
  refresh = () => {
    // get the number or restaurants from the DB with an HTTP request
    // replace the count with an new count
    fetch('/restaurants', { headers: { accept: "application/json" } })
      .then(response => response.json())
      .then((data) => {
        this.countTarget.innerText = data.restaurants.length;
      });
  }
}
