describe("Basic tests", () => {
    it("should load page", () => {
        cy.visit("/");
    });

    it("should multiply two numbers", () => {
        cy.visit("/");
        cy.get("button").contains("5").click();
        cy.get("button").contains("x").click();
        cy.get("button").contains("2").click();
        cy.get("button").contains("=").click();
        cy.get(".component-display").should("have.text", "10");
    });
});