import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RecipeShow from '../components/RecipeShow';

const recipe = {
    name: "Chocolate Chip Cookies",
    author: {
        name: "Jane Doe"
    },
    time_hours: 0,
    time_minutes: 30,
    dificulty: "Easy",
    photo: "chocolate_chip_cookies.jpg"
}

const categories = [
    {name: "Desserts"},
    {name: "Snacks"}
]

const ingredients = [
    {amount: 2, unit: "cups", ingredient: "all-purpose flour"},
    {amount: 1, unit: "tsp", ingredient: "baking soda"},
    {amount: 1, unit: "tsp", ingredient: "salt"},
    {amount: 1, unit: "cup", ingredient: "unsalted butter, room temperature"},
    {amount: 1, unit: "cup", ingredient: "granulated sugar"},
    {amount: 1, unit: "cup", ingredient: "brown sugar"},
    {amount: 2, unit: "", ingredient: "large eggs"},
    {amount: 2, unit: "tsp", ingredient: "vanilla extract"},
    {amount: 2, unit: "cups", ingredient: "semisweet chocolate chips"}
]

const steps = [
    {title: "Step 1", content: "Preheat oven to 375°F (190°C). Line a baking sheet with parchment paper."},
    {title: "Step 2", content: "Whisk together flour, baking soda, and salt. Set aside."},
    {title: "Step 3", content: "Using an electric mixer, cream butter, granulated sugar, and brown sugar until light and fluffy. Beat in eggs and vanilla."},
    {title: "Step 4", content: "Add flour mixture, and mix until just combined. Stir in chocolate chips."},
    {title: "Step 5", content: "Scoop dough onto prepared baking sheet, spacing them about 2 inches apart. Bake for 12-15 minutes, or until golden brown."},
    {title: "Step 6", content: "Remove from oven and let cool on baking sheet for 5 minutes. Transfer cookies to a wire rack to cool completely."}
]
describe('RecipeShow', () => {
    test('should render the correct step title and content', () => {
    const { getByText } = render(<RecipeShow recipe={recipe} categories={categories} ingredients={ingredients} steps={steps} />);
    expect(getByText('Step 1')).toBeInTheDocument();
    expect(getByText('Preheat oven to 375°F (190°C). Line a baking sheet with parchment paper.')).toBeInTheDocument();

    fireEvent.click(getByText('Next'));

    expect(getByText('Step 2')).toBeInTheDocument();
    expect(getByText('Whisk together flour, baking soda, and salt. Set aside.')).toBeInTheDocument();

    fireEvent.click(getByText('Back'));

    expect(getByText('Step 1')).toBeInTheDocument();
    expect(getByText('Preheat oven to 375°F (190°C). Line a baking sheet with parchment paper.')).toBeInTheDocument();
});
});