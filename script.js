
// Manufactures
const airbus = document.getElementById("airbus");
const boeing = document.getElementById("boeing");
const idk = document.getElementById("idk");
// Aircraft Type
const fourEngine = document.getElementById("four-engine");
const twoEngine = document.getElementById("two-engine");
const twoEngineNarrowBody = document.getElementById("two-engine-narrow-body");
// Tabs
const manufactureTab = document.getElementById("manufacture-tab")
const aircraftTypeTab = document.getElementById("aircraft-type-tab")
const manufactureTabPane = document.getElementById("manufacture-tab-pane")
const aircraftTypeTabPane = document.getElementById("aircraft-type-tab-pane")
const Modal = document.getElementById("exampleModal")

let selectedManufacture = "";
let selectedType = "";
const Manufacturer = Object.freeze({
    Boeing: {},
    Airbus: {},
    Idk: {}
});

const AircraftType = Object.freeze({
    fourEngine: {},
    twoEngine: {},
    twoEngineNarrowBody: {}
});

function toggle(from, to, fromPane, toPane){
    from.classList.toggle("active")
    to.classList.toggle("active")
    fromPane.classList.toggle("active")
    fromPane.classList.toggle("show")
    toPane.classList.toggle("active")
    toPane.classList.toggle("show")
}
airbus.addEventListener("click", () => {
    selectedManufacture = Manufacturer.Airbus
    toggle(manufactureTab, aircraftTypeTab, manufactureTabPane, aircraftTypeTabPane)
});

boeing.addEventListener("click", () => {
    selectedManufacture = Manufacturer.Boeing
    fourEngine.setAttribute("data-bs-toggle", "modal")
    fourEngine.setAttribute("data-bs-target", "#exampleModal")
    toggle(manufactureTab, aircraftTypeTab, manufactureTabPane, aircraftTypeTabPane)
});

idk.addEventListener("click", () => {
    selectedManufacture = Manufacturer.Idk
    toggle(manufactureTab, aircraftTypeTab, manufactureTabPane, aircraftTypeTabPane)
});

fourEngine.addEventListener("click", () =>{
    selectedType = AircraftType.fourEngine
})

twoEngine.addEventListener("click", () =>{
    selectedType = AircraftType.twoEngine
})

twoEngineNarrowBody.addEventListener("click", () =>{
    selectedType = AircraftType.twoEngineNarrowBody
})