import { Controller } from "@hotwired/stimulus"

let elements = []
let new_elements = []
let result = 0

// Connects to data-controller="calculation"
export default class extends Controller {
  static targets = ["result"]
  connect() {
  }

  on() {
    this.resultTarget.innerText = "The calculator is ONNN"
    // ajouter un CSS de chargement + un temps avant que ça s'efface
  }

  ac() {
    if (this.resultTarget.innerText =! "") {
      this.resultTarget.innerText = ""
      elements = []
      new_elements = []
    }
  }

  c() {
    if (this.resultTarget.innerText =! "") {
      this.resultTarget.innerText = ""
      elements = []
      new_elements = []
    }
  }

  item(event) {
    elements.push(event.currentTarget.innerText)
    let display = elements.join("")
    this.resultTarget.innerText = display
  }

  calcul(event) {
    elements.forEach ((element) => {
      let a = +element
      if (isNaN(a)) {
        element = element
      }
      else {
        element = a
      }
      new_elements.push(element)
    })
    result = eval(new_elements.join(""))
    this.resultTarget.innerText = result
    elements = []
    new_elements = []
  }
}
