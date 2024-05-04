// Function to handle search functionality
function handleSearch() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const tableRows = document.querySelectorAll('#student-table tbody tr');

    tableRows.forEach(row => {
        const fullName = row.cells[0].textContent.toLowerCase();
        const email = row.cells[1].textContent.toLowerCase();
        if (fullName.includes(searchInput) || email.includes(searchInput)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// Function to handle sorting functionality
function handleSort(option) {
    const tableBody = document.querySelector('#student-table tbody');
    const rows = Array.from(tableBody.querySelectorAll('tr'));

    switch (option) {
        case 'AZ':
            rows.sort((a, b) => a.cells[0].textContent.localeCompare(b.cells[0].textContent));
            break;
        case 'ZA':
            rows.sort((a, b) => b.cells[0].textContent.localeCompare(a.cells[0].textContent));
            break;
        case 'marks':
            rows.sort((a, b) => parseFloat(a.cells[4].textContent) - parseFloat(b.cells[4].textContent));
            break;
        case 'passing':
            rows.forEach(row => {
                if (row.cells[5].textContent.trim() !== 'Passing') {
                    row.style.display = 'none';
                }
            });
            return;
        case 'class':
            rows.sort((a, b) => parseInt(a.cells[3].textContent) - parseInt(b.cells[3].textContent));
            break;
        case 'gender':
            rows.sort((a, b) => a.cells[2].textContent.localeCompare(b.cells[2].textContent));
            break;
        default:
            return;
    }

    rows.forEach(row => tableBody.appendChild(row));
}

// Event listeners
document.getElementById('search-button').addEventListener('click', handleSearch);
document.getElementById('sort-buttons').addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        handleSort(event.target.dataset.option);
    }
});
