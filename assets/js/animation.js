var map = document.getElementById('map-container');
var planets = document.getElementsByClassName('planet')

for (planet of planets) {
    planet.addEventListener('mouseover', zoomIn);
    planet.addEventListener('mouseout', resetZoom);
}

function zoomIn() {
    var planetPosition = this.getBoundingClientRect();

    map.style.transformOrigin = planetPosition.left + 'px ' + planetPosition.top + 'px'
    map.style.transform = 'scale(1.4)';
}

function resetZoom() {
    map.style.transform = 'scale(1)';
}
