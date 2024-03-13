let add = document.querySelector(".btn-1");
let save = document.querySelector(".btn-2");
let value = document.querySelector(".store-1")
let num_value = [];
let i = 0;


add.addEventListener("click", () => {
    let num = document.querySelector(".no");
    num.innerHTML = ++i;
});

save.addEventListener("click", () => {
    if (i > 0) {
        let num = document.querySelector(".no");
        num_value.push(i);

        if (num_value.length > 3) {
            value.innerHTML = num_value.slice(-3).join(', ');
        } else {
            value.innerHTML = num_value.join(", ");
        }
        i = 0;
        num.innerHTML = "0";
    }
});
