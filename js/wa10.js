const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['/img/Muncy_Ellie_2022 Portfolio v3-4.jpg','/img/Muncy_Ellie_2022 Portfolio v3-5.jpg', '/img/Muncy_Ellie_2022 Portfolio v3-6.jpg', '/img/Muncy_Ellie_2022 Portfolio v3-7.jpg', '/img/Muncy_Ellie_2022 Portfolio v3-8.jpg']

/* Declaring the alternative text for each image file */
const alts = ['The Willow project portfolio page', 'East Bookend portfolio page', 'Celestial Park portfolio page', 'The Atheneum portfolio page', 'Longmont Station portfolio page']
/* Looping through images */

let i = 0;
while (i < images.length) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', images[i]);
    newImage.setAttribute('alt', alts[i]);
    thumbBar.appendChild(newImage);
    console.log(newImage);

    (function(index) {
        newImage.addEventListener('click', function() {
            displayedImage.setAttribute('src', images[index]);
            displayedImage.setAttribute('alt', alts[index]);
        });
    })(i);
    // newImage.addEventListener('click', function() {
    //     displayedImage.setAttribute('src', images[i]);
    //     displayedImage.setAttribute('alt', alts[i]);
    // });

    i++;
}

/* Wiring up the Darken/Lighten button */

function change () {
    const clas = btn.getAttribute('class');
    console.log(clas);
    if (clas === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }
    else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
}

btn.addEventListener('click', change);

