// rooms.js

const RoomsData = {
  "First Floor": [
    { number: 101, type: "STD", status: "booked", pax: 2, guest: "TESTING", tariff: 1062 },
    { number: 102, type: "S", status: "booked", pax: 2, guest: "TESTING", tariff: 1062 },
    { number: 103, type: "SD", status: "available" },
    { number: 106, type: "DLX", status: "available" },
  ],
  "Second Floor": [
    { number: 201, type: "STD", status: "occupied" },
    { number: 202, type: "SD", status: "occupied" },
    { number: 205, type: "SD", status: "occupied" },
    { number: 210, type: "SD", status: "available" },
  ],
  "Third Floor": [
    { number: 301, type: "STD", status: "available" },
    { number: 302, type: "STD", status: "available" },
    { number: 303, type: "STD", status: "available" },
    { number: 304, type: "SD", status: "booked", pax: 4, guest: "Mukesh Kumar", tariff: 961.99 },
    { number: 305, type: "STD", status: "available" },
    { number: 306, type: "DLX", status: "booked", pax: 1, guest: "Ankit Yadav", tariff: 3768 },
    { number: 307, type: "DLX", status: "booked", pax: 1, guest: "Ankit Yadav", tariff: 3768 },
    { number: 308, type: "STD", status: "available" },
    { number: 309, type: "STD", status: "available" },
    { number: 310, type: "STD", status: "available" },
    { number: 311, type: "STD", status: "available" },
    { number: 312, type: "STD", status: "available" },
    { number: 313, type: "STD", status: "available" },
    { number: 314, type: "STD", status: "available" },
    { number: 315, type: "STD", status: "available" },
  ],
};

export default RoomsData;
