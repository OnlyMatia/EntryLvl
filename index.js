function generateTable() {
    const numPeople = document.getElementById('peopleInput').value;

    if (numPeople < 1 || numPeople > 10) {
        alert("Please enter a number between 1 and 10.");
        return;
    }

    const apiUrl = `https://fakerapi.it/api/v1/persons?_quantity=${numPeople}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const table = document.getElementById('peopleTable');
            table.innerHTML = '<tr><th>Firstname</th><th>Lastname</th><th>Gender</th></tr>';

            data.data.forEach(person => {
                const row = table.insertRow(-1);
                const cell1 = row.insertCell(0);
                const cell2 = row.insertCell(1);
                const cell3 = row.insertCell(2);
                cell1.textContent = person.firstname;
                cell2.textContent = person.lastname;
                cell3.textContent = person.gender;

                if (person.gender.toLowerCase() === 'male') {
                    cell3.style.backgroundColor = '#6495ED'; // Blue
                } else if (person.gender.toLowerCase() === 'female') {
                    cell3.style.backgroundColor = '#FFC0CB'; // Pink
                }
            });
        })
        .catch(error => console.error('Error fetching data:', error));


    
}
