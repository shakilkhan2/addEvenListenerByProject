// document.getElementById('add').addEventListener('click', function () {
//     const newText = document.getElementById('inputText');
//     console.log(newText);
//     document.getElementById('addText').innerText = newText.value;
//     newText.value = '';
// })

// 
/* document.getElementById('add').addEventListener('click', function () {
    const inputText = document.getElementById('inputText');
    if(inputText.value.toLowerCase() === 'pink'.toLocaleLowerCase()){
        document.getElementById('addText').innerText = inputText.value.toUpperCase();
        document.body.style.backgroundColor = 'pink';
    }else if(inputText.value.toLowerCase() === 'black'.toLocaleLowerCase()){
        document.getElementById('addText').innerText = inputText.value.toUpperCase();
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white'
    }else if(inputText.value.toLowerCase() === 'Aquamarine'.toLocaleLowerCase()){
        document.getElementById('addText').innerText = inputText.value.toUpperCase();
        document.body.style.backgroundColor = 'Aquamarine';
        // document.body.style.color = 'white'
    }
}) */

document.getElementById('add').addEventListener('click', function () {
    const inputText = document.getElementById('inputText');
    const color = inputText.value.trim().toLowerCase();
    const addText = document.getElementById('addText');

    // Create a temporary element to check if the color is valid
    const tempElement = document.createElement('div');
    tempElement.style.color = color;
    if (tempElement.style.color) {
        addText.innerText = color.toLowerCase();
        document.body.style.backgroundColor = color;

        // Adjust text color for better readability if background is dark
        if (isDarkColor(color)) {
            document.body.style.color = 'white';
        } else {
            document.body.style.color = 'black';
        }
    } else {
        alert('Invalid color name!');
    }
});

// Function to determine if a color is dark
function isDarkColor(color) {
    const rgb = window.getComputedStyle(document.body).backgroundColor.match(/\d+/g);
    const brightness = Math.round(((parseInt(rgb[0]) * 299) +
                                  (parseInt(rgb[1]) * 587) +
                                  (parseInt(rgb[2]) * 114)) / 1000);
    return brightness < 128;
}