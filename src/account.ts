type Amount = number;
type Balance = number;
type Date = string;
type Transaction = [Date, Amount, Balance];
type Statement = string;

const HEADER = "Date || Amount || Balance";
const COLUMN_SEPARATOR = " || ";

export class Account {
  private transactions: Array<Transaction> = [];
  private balance: number = 0;

  public deposit(date: Date, amount: Amount): void {
    this.balance += amount;
    this.transactions.push([date, amount, this.balance]);
  }

  public printStatement(): Statement {
    let statement = HEADER;
    this.transactions.reverse().forEach((transaction) => {
      statement += `\n`;
      statement += `${transaction[0]}`;
      statement += COLUMN_SEPARATOR;
      statement += `${this.formatAmount(transaction[1])}`;
      statement += COLUMN_SEPARATOR;
      statement += `${transaction[2]}`;
    });
    return statement;
  }

  private formatAmount(amount: number): string {
    return (amount > 0 ? "+" : "") + amount;
  }

  public withdraw(date: Date, amount: Amount) {
    this.balance -= amount;
    this.transactions.push([date, -amount, this.balance]);
  }
}
