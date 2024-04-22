document.addEventListener("DOMContentLoaded", function () {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let currentDate = new Date();
  let currentMonth = currentDate.getMonth();
  let currentYear = currentDate.getFullYear();

  displayEventDetails(
    `${currentDate.getDate()} ${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`,
    events[currentMonth + 1][currentYear][currentDate.getDate()]
  );

  function updateMonthYear() {
    document.getElementById("month").textContent = monthNames[currentMonth];
    document.getElementById("year").textContent = currentYear;
  }

  //////////////////////Generate Calendar//////////////////////////////////

  function generateCalendar() {
    const calendarBody = document.getElementById("calendar");
    calendarBody.innerHTML = ""; // Clear the calendar
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const numDays = new Date(currentYear, currentMonth + 1, 0).getDate();

    let date = 1;
    let row = document.createElement("tr");
    for (let i = 0; i < firstDay; i++) {
      row.appendChild(document.createElement("td"));
    }

    for (date; date <= numDays; date++) {
      if (row.children.length === 7) {
        calendarBody.appendChild(row);
        row = document.createElement("tr");
      }

      let cell = createDayCell(date);
      row.appendChild(cell);
    }
    if (row.children.length > 0) {
      calendarBody.appendChild(row);
    }
  }

  function createDayCell(date) {
    let cell = document.createElement("td");
    let circle = document.createElement("div"); // Create a div for the circle

    circle.textContent = date;
    circle.style.width = "40px"; // Diameter of the circle
    circle.style.height = "40px"; // Diameter of the circle
    circle.style.borderRadius = "50%"; // Make it circular
    circle.style.backgroundColor = "transparent"; // Default background
    circle.style.display = "flex";
    circle.style.alignItems = "center";
    circle.style.justifyContent = "center";
    circle.style.margin = "auto"; // Center the circle within the cell

    // Check if there is an event for this date
    if (
      events[currentMonth + 1] &&
      events[currentMonth + 1][currentYear] &&
      events[currentMonth + 1][currentYear][date]
    ) {
      circle.classList.add("event-day");
      circle.classList.add("btn");
      circle.style.backgroundColor = "red"; // Highlight for event days
      cell.addEventListener("click", function () {
        displayEventDetails(
          `${date} ${monthNames[currentMonth]} ${currentYear}`,
          events[currentMonth + 1][currentYear][date],
          circle, 
        );
      });
    }

    cell.appendChild(circle); // Add the circle to the cell
    return cell;
  }

  function displayEventDetails(day, eventDetails, clickedCell) {
    generateCards(eventDetails);

    document.querySelectorAll(".event-day").forEach((cell) => {
      cell.style.backgroundColor = "red"; // Reset other days to default color
      cell.style.color = "black"; // Ensure text color is reset
    });
    
    document.querySelector('.event-date').innerHTML = day;
    console.log(clickedCell);
    if (clickedCell) {
      // Highlight the clicked cell
      clickedCell.style.backgroundColor = "white"; // Set background color to white for the selected cell
      clickedCell.style.color = "black"; // Set text color to black for readability
    }
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // Navigation buttons to change month
  document.getElementById("left").addEventListener("click", () => {
    if (currentMonth === 0) {
      currentMonth = 11; // December of the previous year
      currentYear -= 1;
    } else {
      currentMonth -= 1;
    }
    updateMonthYear();
    generateCalendar();
  });

  document.getElementById("right").addEventListener("click", () => {
    if (currentMonth === 11) {
      currentMonth = 0; // January of the next year
      currentYear += 1;
    } else {
      currentMonth += 1;
    }
    updateMonthYear();
    generateCalendar();
  });

  updateMonthYear();
  generateCalendar();
});

function generateEventCard(event) {
  return `
  <div
    class="responsive-card card bg-white text-dark mx-auto my-4 border-0 rounded-4"
  >
    <div class="card-body">
      <h5 class="event-name card-title fw-bold fs-3 mt-5 ms-5 mb-4">
        ${event.eventName}
      </h5>
      <div class="d-flex align-items-center mt-2 mb-5">
        <img
          alt="calendar"
          src="../assets/images/calendar-dark-icon.svg"
          class="px-2 bg-dark rounded-3 me-3"
          style="width: 35px; height: 35px"
        />
        <span class="eventdate-eventtime fw-semibold fs-5"
          >${event.eventDate}</span
        >
        <img
          alt="location"
          src="../assets/images/location-icon-black.svg"
          class="mx-2"
          style="width: 35px; height: 35px"
        />
        <span class="location fw-bold">${event.eventLocation}</span>
      </div>
      <p class="card-text fw-semibold fs-5 mt-2 px-2">
        ${event.eventContent}
      </p>
      <!-- Centering the button at the bottom of the card -->
      <div class="row">
        <div class="col text-center">
          <a href="${event.eventUrl}" class="btn btn-dark mt-3 rounded-4 px-5 py-2"
            >Learn more</a
          >
        </div>
      </div>
    </div>
  </div>
  `;
}

function generateNoEventsCard() {
  return '<p class="fw-bold fs-2 mt-2">No Events today</p>';
}

function generateCards(eventDetails) {
  let eventCardContainer = document.getElementById("eventCardContainer");
  if (eventDetails) {
    eventCardContainer.innerHTML = "";
    eventDetails.forEach((event) => {
      data = generateEventCard(event);
      eventCardContainer.innerHTML += data;
    });
  } else {
    eventCardContainer.innerHTML = generateNoEventsCard();
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
