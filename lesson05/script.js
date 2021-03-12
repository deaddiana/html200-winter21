let balance = 6457;

const bankSelection = function(input = prompt('Type: W to withdraw, D to deposit, B to view balance, Q to quit')) {

  switch (input.toUpperCase()) {

    case 'Q':
      alert('Your banking session has ended');
      break;

    case 'B':0;
      alert('Your balance is: $' + balance);
      bankSelection();
      break;

      case 'W':
        withdrawlTotal = prompt("Enter withdrawal amount");
        withdrawl();
        break;

       case 'D':
        depositTotal = prompt("Enter deposit amount");
        deposit();
        break;

       function withdrawl() {
        (balance - Number(withdrawlTotal) >= 0)
        balance = balance - Number(withdrawlTotal);
        alert('Your balance is $' + balance);
      }
    }

 function deposit() {
     if (depositTotal >= 0);
          balance = balance + Number(depositTotal);
          alert('Your balance is $' + balance);
      }
};
