let start = confirm('Do you want to play a game?');
const startSum = 10;
const startPrize = 0;
const startRange = 5;
let totalWin = 0;
let range = 5;
let maxWin = 10;
let randNumber;
let userNumber;
do {
    let random = Math.random() * range;
    if (start) {
        randNumber = Math.round(random);
        userNumber = prompt(
            `Enter a number from 0 to ${range}
Attempts left: 3
Total prize: ${totalWin}$
Possible prize on current attempt: ${maxWin}$`);
        if (parseInt(userNumber) === randNumber) {
            totalWin = totalWin + maxWin;
            start = confirm(`Do you want to  play again?`);
            maxWin = maxWin * 3;
            range = range * 2;
            if (start) {
                continue;
            } else {
                alert(`Thank you for a game. Your prize is: ${totalWin}$`)
            }
        } else if (userNumber === null) {
            alert(`Thank you for a game. Your prize is: ${totalWin}$`);
            start = false;
        } else {
            userNumber = prompt(
                `Enter a number from 0 to ${range}
Attempts left: 2
Total prize: ${totalWin}$
Possible prize on current attempt: ${Math.floor(maxWin/2)}$`);
            if (parseInt(userNumber) === randNumber) {
                totalWin = totalWin + Math.floor(maxWin / 2);
                start = confirm(`Do you want to  play again?`);
                maxWin = maxWin * 3;
                range = range * 2;
                if (start) {
                    continue;
                } else {
                    alert(`Thank you for a game. Your prize is: ${totalWin}$`)
                }
            } else if (userNumber === null) {
                alert(`Thank you for a game. Your prize is: ${totalWin}$`)
                start = false;
            } else {
                userNumber = prompt(
                    `Enter a number from 0 to ${range}
Attempts left: 1
Total prize: ${totalWin}$
Possible prize on current attempt: ${Math.floor(maxWin/4)}$`);
                if (parseInt(userNumber) === randNumber) {
                    totalWin = totalWin + Math.floor(maxWin / 4);
                    start = confirm(`Do you want to  play again?`);
                    maxWin = maxWin * 3;
                    range = range * 2;
                    if (start) {
                        continue;
                    } else {
                        alert(`Thank you for a game. Your prize is: ${totalWin}$`)
                    }
                } else {
                    alert(`Thank you for a game. Your prize is: ${totalWin}$`)
                    start = confirm(`Do you want to  play again?`);
                    range = startRange;
                    totalWin = startPrize;
                    maxWin = startSum;
                }
            }
        }
    } else {
        alert('You did not become a millionaire, but can.');
    }
} while (start);