/// <reference types="Cypress" />

describe("Testuje strone glowna", () => {
  context("uruchomienie strony", () => {
    it("visit webpage", () => {
      cy.visit("/")
    })
  })
})
beforeEach(() => {
  cy.viewport(1920, 1080)
})

context("testy", () => {
  describe("Czy strona redesign poprawnie sie laduja w ogole", () => {
    it("should open page", () => {
      cy.visit("/")
    })
  })

  describe("Czy nawigacja i menu poprawnie działa", () => {
    it("should check nav and every li", () => {
      cy.get(".navbar-module--nav-links--1uFjW > :nth-child(2) > a").should(
        "contain",
        "tours"
      )
      cy.get(".navbar-module--nav-links--1uFjW > :nth-child(3) > a").should(
        "contain",
        "blog"
      )
      cy.get(".navbar-module--nav-links--1uFjW > :nth-child(4) > a").should(
        "contain",
        "contact"
      )
    })
  })
})
