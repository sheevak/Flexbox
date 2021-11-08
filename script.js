function property(elementId, value, property) {
    document.getElementById(elementId).style.setProperty(property, value);
};

function Dimentions(width, height) {
    document.getElementById("cont").style.setProperty("width", width+"px");
    document.getElementById("cont").style.setProperty("height", height+"px");
};