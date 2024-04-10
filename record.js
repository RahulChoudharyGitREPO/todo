// record.js

// Function to calculate the role based on experience
function getRole(experience) {
  if (experience > 5) {
    return 'Senior';
  } else if (experience >= 2) {
    return 'Junior';
  } else {
    return 'Fresher';
  }
}

// Function to add a new record to the table
function addRecord() {
  const name = document.getElementById('name').value;
  const employeeID = document.getElementById('employeeID').value;
  const department = document.getElementById('department').value;
  const experience = document.getElementById('exp').value;
  const email = document.getElementById('email').value;
  const mobile = document.getElementById('mbl').value;

  // Calculate the role based on experience
  const role = getRole(experience);

  // Create a new row for the table
  const table = document.querySelector('table tbody');
  const newRow = table.insertRow(table.rows.length);

  // Populate the new row with data
  newRow.innerHTML = `
    <td>${name}</td>
    <td>${employeeID}</td>
    <td>${department}</td>
    <td>${experience}</td>
    <td>${email}</td>
    <td>${mobile}</td>
    <td>${role}</td>
    <td><button onclick="deleteRecord(this)">Delete</button></td>
  `;

  // Clear the form fields after adding the record
  document.querySelector('form').reset();
}

// Function to delete a record from the table
function deleteRecord(button) {
  const row = button.parentNode.parentNode;
  row.remove();
}

// Function to filter the table based on department
function filterTable() {
  const selectedDepartment = document.getElementById('filterDepartment').value;
  const rows = document.querySelectorAll('table tbody tr');

  rows.forEach(row => {
    const departmentCell = row.cells[2].textContent;
    row.style.display = selectedDepartment === '' || departmentCell === selectedDepartment ? '' : 'none';
  });
}

// Attach an event listener to the form for adding records
document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();
  addRecord();
});

// Attach an event listener to the department filter dropdown
document.getElementById('filterDepartment').addEventListener('change', filterTable);

// Initial table filtering
filterTable();
