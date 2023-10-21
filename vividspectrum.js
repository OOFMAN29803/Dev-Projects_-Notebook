var vividout = "#3190FA"
var vivids = "#3279EE"
var optin = "true"
function vividspectrum() {
var body = document.body 
var divtop = document.getElementById("divtop")
var sidemenu = document.getElementById("menuside")
var optinbutton = document.getElementById("optin")
if (optin === "false") {
sidemenu.style.backgroundColor = "#FFB1A8"
divtop.style.backgroundImage = "linear-gradient(to bottom right, #FF96A8, #FFAD85)"
optin = "true"
optin.textContent = "Opt-In to Vivid Spectrum Design Beta 0.1"
body.style.backgroundImage = "linear-gradient(to bottom right, pink, #FFDCC0)"
divtop.style.border = "1px solid #FFAD85"
} else if (optin === "true") {
sidemenu.style.backgroundColor = "#49A3FF"
divtop.style.backgroundColor = "#49A3FF"
optin.textContent = "Opt-Out of Vivid Spectrum Design Beta 0.1"
optin = "false"
body.style.backgroundImage = "linear-gradient(to bottom right, #0090FF, #00eeff)"
divtop.style.border = "1px solid #49A3FF"
divtop.style.backgroundImage = "none"
}
}