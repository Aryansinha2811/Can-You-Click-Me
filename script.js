document.addEventListener("DOMContentLoaded", function() {
    const wrapper = document.querySelector('.wrapper');
    const question = document.querySelector('.question');
    const yes = document.querySelector('.yes');
    const no = document.querySelector('.no');

    const wrapperRect = wrapper.getBoundingClientRect();
    const noRect = no.getBoundingClientRect();

    function addImage() {
        const existingImage = document.querySelector('.image');
        console.log(existingImage); // Check if the existing image is correctly selected

        const img = document.createElement('img');
        img.src = '/Image/Gay meme.jpg';
        img.alt = 'New Image'; // Set alt attribute for accessibility
        img.style.width = '260px';
        img.style.height = '205px';
        img.style.display = 'block'; // Display as a block element

        // Replace the src attribute of the existing image with the new image
        existingImage.src = img.src;
        existingImage.alt = img.alt;
        existingImage.style.width = img.style.width;
        existingImage.style.height = img.style.height;
        existingImage.style.display = img.style.display;
    }

    yes.addEventListener('click', () => {
        question.innerHTML = 'What 	&#128560;';
        addImage(); // Call the addImage function to replace the image
    });

    no.addEventListener('mouseover', () => {
        const i = Math.floor(Math.random() * (wrapperRect.width - noRect.width)) + 1;
        const j = Math.floor(Math.random() * (wrapperRect.height - noRect.height)) + 1;

        no.style.left = i + 'px';
        no.style.top = j + 'px';
    });
});
