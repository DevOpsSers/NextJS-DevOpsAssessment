import { storiesOf } from "@storybook/react";
import RecipeShow from '../components/RecipeShow';
import React from 'react';


storiesOf('RecipeShow', module)
  .add('default', () => {
    const recipe = {
        name: 'Cake', 
        author: {
            name: 'David'
        },
        time_hours: 1,
        time_minutes: 29,
        dificulty: 'Easy',
        photo: 'recipify/5hayww75@solent.ac.uk/cake_f2jkii'
    }
    const categories = [
        { name: 'Baking' },
        { name: 'Easy' }
    ]
    const ingredients = [
        { amount: 500, unit: 'gr', ingredient: 'Flour' },
        { amount: 2, unit: 'units', ingredient: 'eggs' },
        { amount: 50, unit: 'gr', ingredient: 'Butter' }
    ]
    const steps = [
        { title: 'Step 1', content: 'Brown the ground beef in a pan' },
        { title: 'Step 2', content: 'Add the onion and cook until softened' },
        { title: 'Step 3', content: 'Add the crushed tomatoes and simmer for 30 minutes' }
    ]
    return <RecipeShow recipe={recipe} categories={categories} ingredients={ingredients} steps={steps}/>;
  });
