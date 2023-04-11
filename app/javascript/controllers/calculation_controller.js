import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="calculation"
export default class extends Controller {
  static targets = ["result"]
  connect() {

  }

  on() {
    this.resultTarget.innerText = "The calculator is ONNN"
  }
}
