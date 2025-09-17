let isOn = true;

function colorHandler(color) {
    const bulb = document.getElementById("bulb");
    
    if (isOn) {
        bulb.style.backgroundColor = color;
    }
}

function toggleBulb() {
    const bulb = document.getElementById("bulb");
    const toggleButton = document.getElementById("toggleButton");

    if (isOn) {
        bulb.style.backgroundColor = 'rgb(86, 84, 84)';  
        toggleButton.value = "Turn ON";
        isOn = false;
    } else {
        toggleButton.value = "Turn OFF";
        isOn = true;
    }
}
