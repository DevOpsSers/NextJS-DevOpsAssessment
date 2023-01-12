import React from "react";
import { render, fireEvent } from "@testing-library/react";
import RecipeList from "../components/RecipesList";

import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();

describe("RecipeList", () => {
    test("should render the correct recipe name and author", () => {
        // Create a sample recipe object
        const recipe = {
            name: "Spaghetti Bolognese",
            author: { name: "John Doe" }
        };

        // Create a sample list of recipes
        const recipes = [recipe];

        // Render the component and wrap it in the QueryClientProvider
        const { getByText } = render(
            <QueryClientProvider client={client}>
                <RecipeList recipes={recipes} />
            </QueryClientProvider>
        );

        // Assert that the recipe name and author are correctly rendered
        expect(getByText("Spaghetti Bolognese")).toBeInTheDocument();
        expect(getByText("By: John Doe")).toBeInTheDocument();
    });
});