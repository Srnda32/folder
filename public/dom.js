input = document.querySelector(".problem input");
input.value = ("Kako si");
element = document.createElement("p");
element.textContent = "Text";
heading = document.getElementById("h1");
body = heading.parentNode;
heading.appendChild(element);
body.insertBefore(element, heading);
element.classList.add("elementi")



fetch('/heroji')
    .then(function (res) {
        const herojiKaoPromise = res.json();
        return herojiKaoPromise;
    })
    .then(function (heroji) {
        console.log(heroji);
    });

// TODO: ispiši heroje na stranici