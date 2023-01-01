import Recipe from "../components/Recipe"

export default function RecipeList({recipes}) {

    return(
        <div  className="w-6/12 m-5 p-5">
            {recipes.map((recipe, i) => {           
                return (
                    <Recipe key={i} recipe={recipe}/>
                ) 
            })}
            
        </div>
    )
}