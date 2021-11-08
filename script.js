function ContainerProperty(i, j) {
    document.getElementById("cont").style.setProperty(j, i);
};

function ItemProperty(i, j) {
    document.getElementById("item").style.setProperty(j, i);
};

function Dimentions(width, height) {
    document.getElementById("cont").style.setProperty("width", width+"px");
    document.getElementById("cont").style.setProperty("height", height+"px");
};