//Manager Card
const generateManger = function (manager){
    return`
    <div class = "col-4 mt-4">
        <div class = " card h-100">
            <div class = "card-header">
                <h3>${manager.name}</h3>
                <h4> Manager </h4> <i class = "material-icons">content_paste</i>
            </div>

            <div class = "card-body">
                <p class = "id"> ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}

//Engineer Card
const generateEngineer = function (engineer){
    return`
    <div class = "col-4 mt-4">
        <div class = " card h-100">
            <div class = "card-header">
                <h3>${engineer.name}</h3>
                <h4> Engineer </h4> <i class = "material-icons">laptop_mac</i>
            </div>

            <div class = "card-body">
                <p class = "id"> ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">GitHub: <a hred= "https://github.com/${engineer.github}"${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `;
};

//Intern Card
const generateIntern = function (intern){
    return`
    <div class = "col-4 mt-4">
        <div class = " card h-100">
            <div class = "card-header">
                <h3>${intern.name}</h3>
                <h4> Engineer </h4> <i class = "material-icons">assignment_ind</i>
            </div>

            <div class = "card-body">
                <p class = "id"> ID: ${intern.id}</p>
                <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School:${intern.school}</p>
            </div>
        </div>
    </div>
    `;
};

//push array to page
generateHTML = (data) => {

    pageArray = [];

 
    for (let i = 0; i < data.lenght; i++) {
        const employee = data[i];
        const role = employee.getRole();

           //call manager function
        if (role === 'Manager') {
            const managerCard = generateManger(employee);

            pageArray.push(managerCard);
        }

        //call engineer function
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
        }

        //call intern functiom
        if (role === 'Intern') {
            const InternCard = generateIntern(employee);

            pageArray.push(InternCard);
        }
    }
    const employeeCards = pageArray.join('')
    const generateTeam = generateTeamPage(employeeCards);
    return generateTeam;
}

//generat HTML
const generateTeamPage = function (employeeCards) {
    retun`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <title>Team Profile</title>
</head>
<body>
<header>
    <nav class="navbar" id="navbar">
        <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
    </nav>
</header>
<main>
    <div class="container">
        <div class="row justify-content-center" id="team-cards">
            ${employeeCards}
        </div>
    </div>
</main>

</body>
</html>
    `;
}

module.exposrts = generateHTML;


