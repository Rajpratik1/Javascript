let user = prompt("Enter S, W, or G");
let cpu1 = Math.floor(Math.random() * 3);
let cpu = ['S', 'W', 'G'][cpu1];

const match = (cpu, user) => {
    if (cpu === user) {
        return "Nobody wins, the match is a tie";
    } else if (cpu === 'S' && user === 'W') {
        return "CPU";
    } else if (cpu === 'S' && user === 'G') {
        return "User";
    } else if (cpu === 'G' && user === 'W') {
        return "User";
    } else if (cpu === 'G' && user === 'S') {
        return "CPU";
    } else if (cpu === 'W' && user === 'S') {
        return "User";
    } else if (cpu === 'W' && user === 'G') {
        return "User";
    }
};

let winner = match(cpu, user);
document.write(`CPU: ${cpu} <br>User: ${user} <br>The winner is: ${winner}`);

