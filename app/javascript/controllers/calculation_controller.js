import { Controller } from "@hotwired/stimulus"

let elements = []
// Connects to data-controller="calculation"
export default class extends Controller {
  static targets = ["result", "button1", "button2", "button3", "button4", "button5", "button6", "button7", "button8", "button9", "button0"]
  connect() {

  }

  on() {
    this.resultTarget.innerText = "The calculator is ONNN"
    // ajouter un CSS de chargement + un temps avant que ça s'efface
  }

  ac() {
    if (this.resultTarget.innerText =! "") {
      this.resultTarget.innerText = ""
      // il faudra effacer tout le dernier calcul
    }
  }

  c() {
    if (this.resultTarget.innerText =! "") {
      this.resultTarget.innerText = ""
      // il faudra effacer le dernier chiffre entré
    }
  }

  item(event) {
    elements.push(event.currentTarget.innerText)
    let display = elements.join(" ")
    this.resultTarget.innerText = display
  }

  calcul(event) {
    elements.forEach ((element) => {
      let a = +element
      if (isNaN(a)) {
        element = element
      }
      else {
        element = +element
      }
    })
  }
}
