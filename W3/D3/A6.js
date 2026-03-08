//wallet
const wallet=new Object();
wallet.owner="varini";
wallet.balance="10000";
wallet.lastTransaction="null";
console.log(wallet);
function deposite(amount){
    this.balance = amount;
    console.log("amount");
    console.log("this.balance");
}
function withdraw(amount){
    if (amount<=balance){
        this.balance=amount;
    console.log("amount");
    console.log("this.balance");
    }else {
        console.log("insufficient balance");
    }
}