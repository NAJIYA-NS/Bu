function register() {
    uname = reguname.value
    email = regemail.value
    pswd = regpswd.value

    console.log(uname, email, pswd);

    userDetails = {
        uname,
        email,
        pswd
    }

    if (uname in localStorage) {
        alert("Existing User")
    }
    else {
        localStorage.setItem(uname, JSON.stringify(userDetails))
        alert("User Registered Successfully")
        window.location = './index.html'
    }

}

function login() {
    uname = loginuname.value
    pswd = loginpswd.value

    console.log(uname, pswd);

    if (uname in localStorage) {
        userDetails = JSON.parse(localStorage.getItem(uname))
        if (pswd == userDetails.pswd) {
            // localStorage.setItem('currentUser',uname);
            alert('Login Successful')
            window.location = './home.html'
            
        }
        else {
            alert('Incorrect Password')
        }
    }
    else {
        alert("User Does Not Exist")
        alert("Register Your Account")
        window.location = './register.html'
    }
}


// AddIncome

let totalbalance = 0
function addIncome() {

    type = incometype.value
    amnt = incomeamnt.value
    amnt = Math.floor(amnt)

    income = {
        type,
        amnt,
        // balance:0
    }

    // const uname=loginuname.value
    // userDetails=JSON.parse(localStorage.getItem(uname));

    if (type == '' || amnt <= 0 || amnt == '') {
        alert('Field cannot be empty')
    }
    else {

        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleString();

        totalbalance += amnt;

        alert("Amount added successfully")
        resultbalance.innerHTML = `<h3 style="color: #F5F5DC; margin-top: 45px;">Rs ${totalbalance}/-</h3>`
        incometableresult.innerHTML += `<tbody>
        <td style="background-color:#9bacbf; border-bottom:5px #556B2F solid; height:45px;">${income.type}</td>
        <td style="background-color:#9bacbf; border-bottom:5px #556B2F solid; height:45px;">+${income.amnt}</td>
        <td style="background-color:#9bacbf; border-bottom:5px #556B2F solid; height:45px;">${totalbalance}</td>
        <td style="background-color:#9bacbf; border-bottom:5px #556B2F solid; height:45px;">${formattedDate}</td>
        </tbody>`

        // income.balance+=totalbalance
        // uname=localStorage.getItem(uname in localStorage)
        // localStorage.setItem(uname, JSON.stringify(income))

        // localStorage.setItem(uname, totalbalance)
    }
}

function addExpense() {

    type = expensetype.value
    amnt = expenseamnt.value
    amnt = Math.floor(amnt)

    if (type == '' || amnt == '' || amnt <= 0) {
        alert('Field cannot be empty')
    }
    else {
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleString();

        totalbalance -= amnt;

        alert('Expense added successfully')
        resultbalance.innerHTML = `<h3 style="color: #F5F5DC; margin-top: 45px;">Rs ${totalbalance}/-</h3>`
        resultexpense.innerHTML = `<h3 style="color: #F5F5DC; margin-top: 45px;">Rs ${amnt}/-</h3>`

        expensetableresult.innerHTML += `<tbody>
        <td style="background-color:#9bacbf; border-bottom:5px #556B2F solid; height:45px;">${type}</td>
        <td style="background-color:#9bacbf; border-bottom:5px #556B2F solid; height:45px;">-${amnt}</td>
        <td style="background-color:#9bacbf; border-bottom:5px #556B2F solid; height:45px;">${totalbalance}</td>
        <td style="background-color:#9bacbf; border-bottom:5px #556B2F solid; height:45px;">${formattedDate}</td>
        </tbody>`
    }

}


function clearall() {
    // Clear input fields for Add Income
    incometype.value = '';
    incomeamnt.value = '';

    // Clear input fields for Add Expense
    expensetype.value = '';
    expenseamnt.value = '';

    // Additional fields to clear if needed
    // ...

    // Optionally, you can clear other result elements
    resultbalance.innerHTML = 'Rs 0/-';
    resultexpense.innerHTML = 'Rs 0/-';
    incometableresult.innerHTML = '';
    expensetableresult.innerHTML = '';
}

// function showPie() {
//     console.log('showPie function called');

//     const expenseLabels = [];
//     const expenseAmounts = [];
//     const expenseColors = [];



//     // Assuming your expenses are stored in expensetableresult
//     const expenseRows = document.getElementById('expensetableresult').getElementsByTagName('tr');


//     for (let i = 0; i < expenseRows.length; i++) {
//         const cells = expenseRows[i].getElementsByTagName('td');
//         if (cells.length >= 2) {
//             expenseLabels.push(cells[0].innerText.trim());
//             expenseAmounts.push(parseFloat(cells[1].innerText.replace('+', '').trim()));
//             // You can set colors dynamically or use a predefined set of colors
//             expenseColors.push(getRandomColor());
//         }
//     }

//     const pieData = {
//         labels: expenseLabels,
//         datasets: [{
//             data: expenseAmounts,
//             backgroundColor: expenseColors,
//         }],
//     };

//     const pieOptions = {
//         responsive: true,
//         maintainAspectRatio: false,
//     };

//     const pieCanvas = document.getElementById('pie');
//     new Chart(pieCanvas, {
//         type: 'pie',
//         data: pieData,
//         options: pieOptions,
//     });
// }

// // Helper function to get a random color
// function getRandomColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }




function logout() {
    localStorage.clear();
    window.location = './index.html'
}
