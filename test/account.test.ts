import { Account } from "../src/account";

test("Print Account Statement prints headers for new Account", () => {
  const account = new Account();
  expect(account.printStatement()).toBe("Date || Amount || Balance");
});

test("deposit 1000 and first line of print statement should show header", () => {
  const account = new Account();
  account.deposit("24.12.2015", 1000);

  const statement = account.printStatement();

  expect(statement.split("\n")[0]).toBe("Date || Amount || Balance");
});

test("depost 1000 and print statement", () => {
  const account = new Account();
  account.deposit("24.12.2015", 1000);

  const statement = account.printStatement();

  expect(statement.split("\n")[1]).toBe("24.12.2015 || +1000 || 1000");
});

test("deposit 1000 and 2000 and print statement", () => {
  const account = new Account();
  account.deposit("24.12.2015", 1000);
  account.deposit("25.12.2015", 2000);

  const statement = account.printStatement();

  expect(statement.split("\n")[1]).toBe("25.12.2015 || +2000 || 3000");
  expect(statement.split("\n")[2]).toBe("24.12.2015 || +1000 || 1000");
});

test("deposit 1000 and 2000 and 500 and print statement", () => {
  const account = new Account();
  account.deposit("24.12.2015", 1000);
  account.deposit("25.12.2015", 2000);
  account.deposit("26.12.2015", -500);

  const statement = account.printStatement();

  expect(statement.split("\n")[1]).toBe("26.12.2015 || -500 || 2500");
  expect(statement.split("\n")[2]).toBe("25.12.2015 || +2000 || 3000");
  expect(statement.split("\n")[3]).toBe("24.12.2015 || +1000 || 1000");
});

test("deposit 5000 and withdraw 1000 and print statement", () => {
  const account = new Account();
  account.deposit("10.01.2012", 5000);
  account.withdraw("13.01.2012", 1000);

  const statement = account.printStatement();

  expect(statement.split("\n")[1]).toBe("13.01.2012 || -1000 || 4000");
  expect(statement.split("\n")[2]).toBe("10.01.2012 || +5000 || 5000");
});

test("deposit 500 and withdraw 2000 and print statement", () => {
  const account = new Account();
  account.deposit("10.01.2012", 500);
  account.withdraw("14.01.2012", 2000);

  const statement = account.printStatement();

  expect(statement.split("\n")[1]).toBe("14.01.2012 || -2000 || -1500");
  expect(statement.split("\n")[2]).toBe("10.01.2012 || +500 || 500");
});
