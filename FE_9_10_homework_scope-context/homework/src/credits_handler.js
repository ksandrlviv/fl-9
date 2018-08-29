const numbers = {
	half: 0.5,
	numThree: 3,
	hundred: 100
};
//Task 1
function userCard(number) {
    const cardInfo = {
        balance: 100,
        transactionLimit: 100,
        historyLogs: [],
        key: number
    };

    function getCardOptions() {
        return cardInfo;
    }

    function putCredits(amount) {
        cardInfo.balance = cardInfo.balance + amount;
        createLogs('Received credits', amount);
    }

    function takeCredits(amount) {
        if (cardInfo.transactionLimit > amount && cardInfo.balance > amount) {
            cardInfo.balance = cardInfo.balance - amount;
        } else if (cardInfo.transactionLimit < amount) {
            console.log('Overused transaction limit');
        } else {
            console.log('Out of balance');
        }
        createLogs('Withdrawal of credits', amount)
    }

    function setTransactionLimit(amount) {
        cardInfo.transactionLimit = amount;
        createLogs('Transaction limit change', amount)
    }

    function transferCredits(amount, card) {
        let withTaxes = amount * numbers.half / numbers.hundred;
        if (cardInfo.transactionLimit > amount && cardInfo.balance > amount) {
            cardInfo.balance = cardInfo.balance - amount;
            card.putCredits(amount - withTaxes);
        }
    }

    function createLogs(operationType, credits) {
        const log = {
            operationType,
            credits,
            operationTime: new Date().toLocaleString('en-GB')
        };
        cardInfo.historyLogs.push(log);
    }
    return {getCardOptions, putCredits, takeCredits, setTransactionLimit, transferCredits };
}
//Task 2
class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
    }
    addCard() {

        if (this.cards.length >= numbers.three) {
            return;
        } else {
            this.cards.push(userCard(this.cards.length + 1));
        }
    }
    getCardByKey(number) {
        return this.cards[number - 1];
    }
}

