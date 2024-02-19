function calculateTotalPrice() {
    const totalPriceElement = document.getElementById("total-price");

    const totalSeatsConfirmed = document.querySelectorAll("#seat-confirm p").length;
    const totalPrice = 550 * totalSeatsConfirmed;
    totalPriceElement.innerText =totalPrice;
    totalPriceElement.innerText=totalPrice;


}

function checkAndDisableSeats() {
    if (titleCount >= 5) {
        seats.forEach(seat => {
            seat.disabled = true;
        });
    }
}

let titleCount = 1;
const seats = document.querySelectorAll(".seat");
for (let index = 0; index < seats.length; index++) {
    const seat = seats[index];
    seat.addEventListener("click", function () {
        const title = seat.innerText;

        const seatConfirm = document.getElementById("seat-confirm");

        const p = document.createElement("p");
        p.innerText = titleCount + ". " + title;
        seatConfirm.appendChild(p);
        titleCount++;

        checkAndDisableSeats();
        calculateTotalPrice();


        const classic=document.getElementById("classic")

                 const h2=document.createElement("h2");
                h2.innerText=`Economy`;
                classic.appendChild(h2);

                 const price=document.getElementById("price");
                 const h3=document.createElement("h3");
                h3.innerText=550;
               price.appendChild(h3)
    });
}




// let isButtonClicked = false;

// function disableButton() {
//     const button = document.getElementsByClassName("seat");
//     button.disabled = true;
// }

// const button = document.getElementById("seat");
// button.addEventListener("click", function () {
//     if (!isButtonClicked) {


//         isButtonClicked = true;
//         disableButton();
//     }
// });



const btn = document.getElementById("apply-btn");
btn.addEventListener("click", function () {
    console.log(`clicked`);
    // ইনপুট ফিল্ড থেকে মান পাওয়া
    const cuponElement = document.getElementById("input-field");
    const cupons = cuponElement.value;
    // স্পেস সরানো
    const code = cupons.split(" ").join("");

    // যদি কোড "NEW15" হয়
    if (code === "NEW15" || code === "Couple20") {
        const price = parseFloat(document.getElementById("total-price").innerText);
        let discount;
        if (code === "NEW15") {
            discount = price * 0.15;
        } else if (code === "Couple20") {
            discount = price * 0.20;
        }
        const discounted = price - discount;

        const grand = document.getElementById("grand-total");
        grand.innerText = discounted.toFixed(2); // মোট দাম আপডেট করুন

        // নতুন ডিসকাউন্ট এলিমেন্ট তৈরি করুন এবং যোগ করুন
        const h5 = document.createElement("h5");
        h5.innerText = `Discounted Price: ${discounted.toFixed(2)}`;
        grand.appendChild(h5);

        // ইনপুট ফিল্ড রিসেট করুন
        cuponElement.value = "";
    }
});
// document.getElementById("scroll-button").addEventListener("click", function() {
//     // Scroll to the new section
//     document.getElementById("ticket-counter").scrollIntoView({ behavior: "smooth" });
// });
const btnscroll=document.getElementById("scroll-button").addEventListener("click", function() {
    // Scroll to the new section
`clicked`
});

var buttons = document.getElementsByClassName('seat');

// Loop through each button and add event listener
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        // Inside this function, 'this' refers to the clicked button
        // Change background color to red when button is clicked
        this.style.backgroundColor = `#1DD100`;
    });
}


