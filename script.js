const pages = {
    home: `
        <div class="page">
            <h1>Welcome to Spook</h1>
            <p>Log In</p>
        </div>
    `,
    challenge: `
        <div class="page">
            <h2>Daily Challenge</h2>
            <p>Solve the code challenge:</p>
            <pre>
let x = 5;
let y = "5";
console.log(x == y);
console.log(x === y);
            </pre>
            <button onclick="checkAnswer('C')">Submit Answer</button>
        </div>
    `,
    result: `
        <div class="page">
            <h2>Well Done!</h2>
            <p>The correct answer is C: true, false</p>
            <p>You win 10 points! 🎉</p>
        </div>
    `,
};

function navigateTo(page) {
    document.getElementById("content").innerHTML = pages[page] || "<h2>Page not found</h2>";
}

function checkAnswer(choice) {
    if (choice === "C") {
        navigateTo('result');
    } else {
        alert("Try again!");
    }
}

// Load the home page on start
navigateTo('home');
