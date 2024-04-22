document.addEventListener('DOMContentLoaded', function() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth(); // Months are 0-indexed (0=January, 11=December)
    let currentYear = currentDate.getFullYear();

    // Static event data structured by month (1-indexed for simplicity here) and year
    /*const events = {
        '10': { // October
            '2024': {
                '1': { name: 'Event Try Out One', eventGroup: 1 },
                '2': { name: 'Event Try Out One', eventGroup: 1 },
                '8': { name: 'Event Try Out Two', eventGroup: 2 },
                '9': { name: 'Event Try Out Two', eventGroup: 2 },
                '10': { name: 'Event Try Out Two', eventGroup: 2 }
            }
        }
    };*/

    function updateMonthYear() {
        document.getElementById('month').textContent = monthNames[currentMonth];
        document.getElementById('year').textContent = currentYear;
    }

   //////////////////////Generate Calendar//////////////////////////////////
  
    function generateCalendar() {
        const calendarBody = document.getElementById('calendar');
        calendarBody.innerHTML = ''; // Clear the calendar
        const firstDay = new Date(currentYear, currentMonth, 1).getDay();
        const numDays = new Date(currentYear, currentMonth + 1, 0).getDate();

        let date = 1;
        let row = document.createElement('tr');
        for (let i = 0; i < firstDay; i++) {
            row.appendChild(document.createElement('td'));
        }

        for (date; date <= numDays; date++) {
            if (row.children.length === 7) {
                calendarBody.appendChild(row);
                row = document.createElement('tr');
            }

            let cell = createDayCell(date);
            row.appendChild(cell);
        }
        if (row.children.length > 0) {
            calendarBody.appendChild(row);
        }
    }

    function createDayCell(date) {
        let cell = document.createElement('td');
        let circle = document.createElement('div'); // Create a div for the circle
    
        circle.textContent = date;
        circle.style.width = '40px'; // Diameter of the circle
        circle.style.height = '40px'; // Diameter of the circle
        circle.style.borderRadius = '50%'; // Make it circular
        circle.style.backgroundColor = 'transparent'; // Default background
        circle.style.display = 'flex';
        circle.style.alignItems = 'center';
        circle.style.justifyContent = 'center';
        circle.style.margin = 'auto'; // Center the circle within the cell
    
    
        // Check if there is an event for this date
        if (events[currentMonth + 1] && events[currentMonth + 1][currentYear] && events[currentMonth + 1][currentYear][date]) {
            circle.classList.add('event-day');
            circle.style.backgroundColor = 'red'; // Highlight for event days
            cell.addEventListener('click', function() {
                displayEventDetails(date, events[currentMonth + 1][currentYear][date], circle);
            });
        }
    
        cell.appendChild(circle); // Add the circle to the cell
        return cell;
    }
    

    function displayEventDetails(day, eventDetails, clickedCell) {
        document.querySelectorAll('.event-day').forEach(cell => {
            cell.style.backgroundColor = 'red'; // Reset other days to default color
            cell.style.color = 'black'; // Ensure text color is reset
        });

        // Highlight the clicked cell
        clickedCell.style.backgroundColor = 'white'; // Set background color to white for the selected cell
        clickedCell.style.color = 'black'; // Set text color to black for readability

        // Update the event date to show the selected date
        const eventDateElement = document.querySelector('.event-date');
        eventDateElement.textContent = `${monthNames[currentMonth]} ${day}, ${currentYear}`;

         // Update the event name 
         const eventNameElements = document.querySelectorAll('.event-name');
         eventNameElements.forEach(element => {
            if (eventDetails) {
                element.textContent = eventDetails.name; // Display the event name
            }
        });
    }

   /////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Navigation buttons to change month
    document.getElementById('left').addEventListener('click', () => {
        if (currentMonth === 0) {
            currentMonth = 11; // December of the previous year
            currentYear -= 1;
        } else {
            currentMonth -= 1;
        }
        updateMonthYear();
        generateCalendar();
    });

    document.getElementById('right').addEventListener('click', () => {
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  

   
