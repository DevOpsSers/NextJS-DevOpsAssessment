import RecipeBody from "./RecipeBody"

export default function RecipeShow({recipe,categories,ingredients}) {

    return(
        <div className='p-5 m-5 bg-white max-w-md'>
                <div id='header' className='bg-white m-10'>
                    <h1 className='uppercase font-bold	'>RECIPE:  {recipe.name}</h1>
                    <h1>By:  {recipe.author.name}</h1>
                    {categories.map((category, i) => {           
                    return (
                        <div key={i}>
                           <div className="rounded-2xl bg-stone-200 p-1 m-2">{category.name}</div>
                        </div>
                    ) 
                    })}
                </div>
                <hr/>
                <div id='title' className=' m-10'>
                    <h1 className='uppercase'>Time: {recipe.time_hours}h {recipe.time_minutes}min</h1>
                    <h1 className='uppercase'>Dificulty: {recipe.dificulty} </h1>
                    <h1 className='uppercase'>You will need: </h1>
                    {ingredients.map((ingredient, i) => {           
                        return (
                            <div key={i}>
                                <li  className="rounded-2xl bg-sky-200 p-1 m-2">{ingredient.amount} {ingredient.unit} {ingredient.ingredient}</li>
                            </div>
                        ) 
                    })}
                </div>
                <hr/>
                <div id='body' className=' m-10'>
                    <RecipeBody/>
                </div>
            </div>
    )
}
