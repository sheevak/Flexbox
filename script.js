function property(elementId, select, property) {
    document.getElementById(elementId).style.setProperty(property, select.value);
};

function dimentions(width, height) {
    document.getElementById("cont").style.setProperty("width", width+"px");
    document.getElementById("cont").style.setProperty("height", height+"px");
};

function itemSelect(select) {
    selectedItem = select.value;
};

let selectedItem = 1;