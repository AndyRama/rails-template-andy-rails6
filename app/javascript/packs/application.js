// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")

var Turbolinks = require("turbolinks")
Turbolinks.start()

Rails.start()
Turbolinks.start()
ActiveStorage.start()

import "controllers"
import "bootstrap"

// Internal imports
import { initCookieBanner } from '../components/cookies'
document.addEventListener('turbolinks:load', () => {
  initCookieBanner();
  // Call your functions here, e.g:
  // initSelect2();
});
