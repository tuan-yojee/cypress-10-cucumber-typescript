import { Given, DataTable } from "@badeball/cypress-cucumber-preprocessor";

Given(/^a table step$/, (table: DataTable) => {
  const expected = [
    ["Column 1", "Column 2"],
    ["Burr Gherkin", "Cucumis anguria"]
  ];
  assert.deepEqual(table.raw(), expected);
  table.raw().forEach((row, index, rows) => {
    cy.wrap(row)
  })
});
