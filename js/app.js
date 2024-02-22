
function calculateTotalPrice() {
    const totalPriceElement = document.getElementById("total-price");

    const totalSeatsConfirmed = document.querySelectorAll("#seat-confirm p").length;
    const totalPrice = 550 * totalSeatsConfirmed;

    // Clear the totalPriceElement before adding new content
    totalPriceElement.innerHTML = '';

    // Display the total price

    const newPrice=document.getElementById("total-price")
    // console.log(newPrice)
    // newPrice.innerText=`${totalPrice.toFixed(2)}`
    const h5 = document.createElement("h5");
    h5.innerText = totalPrice;
    totalPriceElement.appendChild(h5);

    // return totalPrice;
    document.getElementById("grand-total").innerText = `Grand Total: ${totalPrice.toFixed(2)}`;
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
        console.log(seatConfirm)
        const p = document.createElement("p");
        p.innerText = titleCount + ". " + title;
        seatConfirm.appendChild(p);
        titleCount++;

        checkAndDisableSeats();
        calculateTotalPrice();


        const classic = document.getElementById("classic")

        const h2 = document.createElement("h2");
        h2.innerText = `Economy`;
        classic.appendChild(h2);

        const price = document.getElementById("price");
        const h3 = document.createElement("h3");
        h3.innerText = 550;
        price.appendChild(h3);
        const seatleft = document.getElementById("seat-left").innerText;

        const totals = parseFloat(seatleft);
        //    console.log(typeof totals)
        const totalSeatsConfirmed = document.querySelectorAll("#seat-confirm p").length;


        const totalseat = 8 - totalSeatsConfirmed;

        // console.log(totalseat)

        const hull = document.getElementById("hun");

        // Find existing h6 element within hull
        let h6 = hull.querySelector("h6");

        // If h6 already exists, update its text content

        if (h6) {
            h6.innerText = `Seat Left: ${totalseat}`;
        } else {
            // Otherwise, create a new h6 element and append it to hull
            h6 = document.createElement("h6");
            h6.innerText = `Seat Left: ${totalseat}`;
            hull.appendChild(h6);

            // console.log(removeElement.innerText);
            // if (removeElement{
            //     removeElement.innerText
            // })
}

const removeElement = document.getElementById("seat-left");
removeElement.innerText=""

        // Remove any other h6 elements within hull
        // const otherH6Elements = hull.querySelectorAll("seat-left");
        // otherH6Elements.forEach(element => {
        //     if (element !== h6) {
        //         hull.removeChild(span);
        //     }
        // });


        // const seatleft = manage.innerText; // Access the seat-left directly from manage

        // const totals = parseFloat(seatleft);
        // const totalSeatsConfirmed = document.querySelectorAll("#seat-confirm p").length;

        // const totalseat = totals - totalSeatsConfirmed;

        // Update the existing h6 element text
        // const h6 = manage.querySelector("h6");
        // h6.innerText = totalseat;
    });
}





const btn = document.getElementById("apply-btn");
btn.addEventListener("click", function () {
    console.log(`clicked`);

    const cuponElement = document.getElementById("input-field");
    const cupons = cuponElement.value;

    const code = cupons.split(" ").join("");

    const price = parseFloat(document.getElementById("total-price").innerText);

    if (code === "NEW15" || code === "Couple20") {

        let discount;
        if (code === "NEW15") {
            discount = price * 0.15;
        } else if (code === "Couple20") {
            discount = price * 0.20;
        }
        const discounted = price - discount;

        const grand = document.getElementById("grand-total");
        grand.innerText =`Grand Total: ${discounted.toFixed(2)}`;


        const h5 = document.createElement("h5");
        // h5.innerText = `Discounted Price: ${discounted.toFixed(2)}`;
        grand.appendChild(h5);


        cuponElement.value = "";
    }
});









const btnscroll = document.getElementById("scroll-button").addEventListener("click", function () {

    `clicked`
});



var buttons = document.getElementsByClassName('seat');


for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (event) {

        this.style.backgroundColor = `#1DD100`;


        this.disabled = true;

    });
}
