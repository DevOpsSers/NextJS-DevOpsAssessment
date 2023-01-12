describe("Create Recipe Test", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/recipes/create");
    });
  
    it("prevents a in-valid from from being submitted", () => {
    
        cy.getByData("name-error").should("not.exist");
        cy.getByData("hours-error").should("not.exist");
        cy.getByData("minute-error").should("not.exist");
        cy.getByData("NoP-error").should("not.exist");

    
        cy.getByData("submit-button").click();
        cy.getByData("name-error").should("exist");
        cy.getByData("hours-error").should("exist");
        cy.getByData("minute-error").should("exist");
        cy.getByData("NoP-error").should("exist");

      });

      it("removes errors when correct values are entered and creates new recipe", () => {
        cy.getByData("submit-button").click();
        cy.getByData("name-input").type("TestName");
        cy.getByData("name-error").should("not.exist");

        cy.getByData("difficulty-input").select("medium");

        cy.getByData("hours-input").type("2");
        cy.getByData("hours-error").should("not.exist");

        cy.getByData("minute-input").type("4");
        cy.getByData("minute-error").should("not.exist");

        cy.getByData("NoP-input").type("6");
        cy.getByData("NoP-error").should("not.exist");

        cy.getByData("category-button").click();
        cy.getByData("category-input").type("Baking");
        cy.getByData("category-error").should("not.exist");

        cy.getByData("ingredients-button").click();
        cy.getByData("ingredients-amount-input").type("5");
        cy.getByData("ingredients-units-input").select("gr");
        cy.getByData("ingredient-input").type("Salt");
        cy.getByData("ingredient-error").should("not.exist");

        cy.getByData("steps-button").click();
        cy.getByData("steps-title-input").type("Add Test Ingredient");
        cy.getByData("steps-content-input").type("Test Input");

        cy.getByData("ToS-input").click();

        cy.getByData("submit-button").click();

      });
    
      

});
  
  export {}; // this is to fix typescript complaint