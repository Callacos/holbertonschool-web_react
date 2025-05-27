interface Student {

    firstName: string
    lastName: string
    age: number
    location: string
};
const student1: Student = {
	firstName: "John",
	lastName: "Doe",
	age: 20,
	location: "New York"
};
const student2: Student = {
	firstName: "Jane",
	lastName: "Smith",
	age: 22,
	location: "Los Angeles"
};
const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");


const header = document.createElement("tr");
["First Name", "Location"].forEach((text) => {
    const th = document.createElement("th");
    th.textContent = text;
    header.appendChild(th);
});
table.appendChild(header);

studentsList.forEach((student) => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = student.firstName;

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;

    row.appendChild(nameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
});

document.body.appendChild(table);
