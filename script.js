window.addEventListener("load", () => {

    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 1000);

});
window.addEventListener("scroll", () => {
    console.log("Scroll Position:", window.scrollY);
});
const hour = new Date().getHours();

if(hour < 12){
    console.log("Good Morning, Janealam!");
}
else if(hour < 18){
    console.log("Good Afternoon, Janealam!");
}
else{
    console.log("Good Evening, Janealam!");
}

let clicks = 0;

document.addEventListener("click", () => {
    clicks++;
    console.log("Total Clicks:", clicks);
});
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if(top < window.innerHeight){
            console.log(section.id + " is visible");
        }

    });

});
document.addEventListener("mousemove", (e) => {

    console.log(
        "X:", e.clientX,
        "Y:", e.clientY
    );

});
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    const target = Number(counter.dataset.target);

    let count = 0;

    const update = () => {

        count += Math.ceil(target / 50);

        if (count < target) {
            counter.innerText = count;
            setTimeout(update, 30);
        } else {
            counter.innerText = target + "+";
        }
    };

    update();
});
const text =
"SEO Specialist | Content Writer | Frontend Developer | Graphic Designer";

let index = 0;

function typeEffect() {

    if (index < text.length) {

        document.getElementById("typing-text").innerHTML += text.charAt(index);

        index++;

        setTimeout(typeEffect, 80);
    }
}

typeEffect();
const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.classList.add("top-button");

document.body.appendChild(topBtn);

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
const images = document.querySelectorAll("img");

images.forEach((img) => {

    img.addEventListener("click", () => {

        const popup = document.createElement("div");

        popup.classList.add("popup-container");

        popup.innerHTML = `
            <div class="popup">
                <img src="${img.src}">
            </div>
        `;

        document.body.appendChild(popup);

        popup.addEventListener("click", () => {
            popup.remove();
        });

    });

});
let count = localStorage.getItem("visits") || 0;

count++;

localStorage.setItem("visits", count);

document.getElementById("visitors").innerHTML =
"Visitors: " + count;
const whatsappBtn =
document.createElement("a");

whatsappBtn.href =
"https://wa.me/923144506820";

whatsappBtn.target =
"_blank";

whatsappBtn.innerHTML =
'<i class="fa-brands fa-whatsapp"></i>';

whatsappBtn.classList.add(
"whatsapp-btn"
);

document.body.appendChild(
whatsappBtn
);
emailjs.init("YOUR_PUBLIC_KEY");

document
.getElementById("contact-form")
.addEventListener(
    "submit",
    function(event){

        event.preventDefault();

        emailjs.sendForm(
            "YOUR_SERVICE_ID",
            "YOUR_TEMPLATE_ID",
            this
        )
        .then(() => {

            alert(
                "Message sent successfully!"
            );

            this.reset();

        })
        .catch(() => {

            alert(
                "Failed to send message."
            );

        });

    }
);
