let employees = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" }
];

function PrintDeveloperbyMap() {
    employees.map(employee => {
        if (employee.profession === "developer") {
            console.log(employee);
        }
    });
}

function PrintDeveloperbyForEach() {
    employees.forEach(employee => {
        if (employee.profession === "developer") {
            console.log(employee);
        }
    });
}

function addData() {
    employees.push({ id: 4, name: "susan", age: "20", profession: "intern" });
    console.log(employees);
}

function removeAdmin() {
    employees = employees.filter(employee => employee.profession !== "admin");
    console.log(employees);
}

function ConcatenateArray() {
    let newEmployees = [
        { id: 5, name: "mike", age: "25", profession: "automation" },
        { id: 6, name: "sarah", age: "22", profession: "infrastructure" },
        { id: 7, name: "david", age: "28", profession: "sales manager" }
    ];

    let concatenatedArray = employees.concat(newEmployees);
    console.log(concatenatedArray);
}

PrintDeveloperbyMap();
PrintDeveloperbyForEach();
addData();
removeAdmin();
ConcatenateArray();
PrintDeveloperbyForEach();