console.log('This is drag and drop utility');

const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');
const button=document.getElementById('btn');

// Event listeners for draggable element imgBox
imgBox.addEventListener('dragstart', (e) => {
    console.log('DragStart has been triggered');
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0);

});

imgBox.addEventListener('dragend', (e) => {
    console.log('DragEnd has been triggered');
    e.target.className = 'imgBox';
});

for (whiteBo of whiteBoxes) {
    whiteBo.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log('DragOver has been triggered');
    });

    whiteBo.addEventListener('dragenter', (e) => {
        console.log('DragEnter has been triggered');
        e.target.className += ' dashed'; 
    })

    whiteBo.addEventListener('dragleave', (e) => {
        console.log('DragLeave has been triggered');
        e.target.className = 'whiteBox'
    })

    whiteBo.addEventListener('drop', (e) => {
        console.log('Drop has been triggered');
        e.target.append(imgBox);
        alert("Sucessfully drop")
    })
}

button.addEventListener('click',()=>{
    if(confirm('Are you sure you want to reset the page'))
    {
        location.reload();
    }
})
