let btn = document.querySelectorAll('.btn');
let items = document.querySelector('#item');
let remove = document.querySelectorAll('.btns');

let count = 0;

btn.forEach(button => {
    button.addEventListener('click', () => {
        count++;
        updateCart();
    });
})

remove.forEach(del => {
    del.addEventListener('click', () => {
        if(count > 0) {
            count--;
            updateCart();
        }
    })
})

function updateCart() {
    items.innerHTML = count;
}