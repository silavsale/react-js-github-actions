/// <reference types="cypress" />

describe("App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/")
  })

  it("should contain button", () => {
    // UI should reflect this user being logged in
    cy.get("button").should("contain", "count")
  })

  it("renders the App component", () => {
    cy.get("button").should("contain", "count is 0")
    cy.get("button").click()
    cy.get("button").should("contain", "count is 1")
    cy.get("button").click()
    cy.get("button").should("contain", "count is 2")
  })
})

describe("My First Test", () => {
  it("Does not do much!", () => {
    expect(true).to.equal(true)
  })
})
