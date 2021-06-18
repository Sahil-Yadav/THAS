const bookedSeats = document.querySelector(".bookedSeats");
const remainingSeats = document.querySelector(".remainingSeats");

const seats = document.querySelectorAll(".seats");

let booked = 0;
let remaining = seats.length;

bookedSeats.innerText = booked;
remainingSeats.innerText = remaining;

seats.forEach((seat) => {
  seat.addEventListener(`click`, () => {
    seat.classList.toggle("seatBooked");
    if (seat.classList.contains("seatBooked")) {
      bookesSeat(1);
    } else {
      bookesSeat(-1);
    }
  });
});

function bookesSeat(s) {
  booked += 1 * s;
  remaining -= 1 * s;

  bookedSeats.innerText = booked;
  remainingSeats.innerText = remaining;
}
