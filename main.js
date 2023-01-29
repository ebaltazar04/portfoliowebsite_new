
function changeImage() {
    let displayImage = document.getElementById('image1')
    if(displayImage.src.match('images/desktop.jpg')){
        displayImage.src = 'images/Petunia.jpg'
    } else {
        displayImage.src = 'images/desktop.jpg'
    }
}

