
// Problem 1
const employees = [
        {
        "name": "Sam",
        "department": "Tech",
        "designation": "Manager",
        "salary": 40000,
        "raise_elegible": true
        },
        {
        "name": "Mary",
        "department": "Finance",
        "designation": "Trainee",
        "salary": 18500,
        "raise_elegible": true
        },
        {
        "name": "Bill",
        "department": "HR",
        "designation": "Executive",
        "salary": 21200,
        "raise_elegible": false
        }
    ];

    console.log(employees);

// Problem 2
    const company = {
            "companyName": "Tech Stars",
            "website": "www.techstars.site",
            "employees": employees
    };

    console.log(company);

// Problem 3
    const newEmployee = {
        "name": "Anna",
        "department": "Tech",
        "designation": "Executive",
        "salary": 25600,
        "raise_elegible": false
    };

    employees.push(newEmployee);

    console.log(employees);
    console.log(company);

// Problem 4
    let total=0;

    function salary() {
        for (let i = 0; i<employees.length; i++) {
            total+=employees[i].salary;
        }
    }

    salary();
    console.log(total);

// Problem 5
    function raise() {
        for (let n = 0; n<employees.length; n++) {
            if (employees[n].raise_elegible === true) {
                employees[n].salary += (employees[n].salary*0.1);
                employees[n].raise_elegible = false;
            }
        }
    }

    raise();
    console.log(employees);

//Problem 6
    function work() {
        for (let j = 0; j<employees.length; j++) {
            if (employees[j].name === "Sam") {
                employees[j].wfh = true
            }
            else if (employees[j].name === "Anna") {
                employees[j].wfh = true
            }
            else {
                employees[j].wfh = false
            }
        }
    }

    work();
    company.employees = employees;
    console.log(company);