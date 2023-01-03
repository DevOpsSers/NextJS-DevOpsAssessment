import {PlusCircleIcon} from "@heroicons/react/24/outline"
import {MinusCircleIcon} from "@heroicons/react/24/outline"
import { useState, useRef } from "react";
import {useEffect} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import { useMutation } from "react-query";
import axios from "axios"

export interface RecipeFormProps {
    onSubmit: SubmitHandler<RecipeValues>;
    isLoading?: boolean;
    triggerReset?: boolean;
    values?: DatabaseRecipeValues;
    label?: string;
}

export interface RecipeValues {
    name: string;
    dificulty: string;
    time_hours: number;
    time_minutes: number;
    number_people: number;
    categories: string[];
    ingredient_amounts: number[];
    ingredient_units: string[];
    ingredient_ingredients: string[];
}

export interface DatabaseRecipeValues extends RecipeValues {
    _id?: string;
}

export default function RecipeCreateForm(props: RecipeFormProps) {  

    const {onSubmit, isLoading, triggerReset, values, label} = props;
    const {
        register,
        unregister,
        handleSubmit,
        formState: {errors},
        reset,
      } = useForm<RecipeValues>({
        defaultValues: {...values},
      });
    
      useEffect(() => {
        triggerReset && reset();
      }, [triggerReset, reset]);




    //Category
    const category = {
        id: 0,
        category: '',
    };

    const [categories, setCategories] = useState([]);

    const addCategory = () => {
        setCategories([...categories, category]);
    };

    const removeCategory = () => {
        const newArray = categories.slice(0, -1);
        setCategories(newArray)
    };

    //Ingredients

    const ingredient = {
        id: 0,
        amount: '',
        unit: '',
        ingredient: '',
    };

    const [ingredients, setIngredients] = useState([]);

    const addIngredient = () => {
        setIngredients([...ingredients, ingredient]);
    };

    const removeIngredient = () => {
        const newArray = ingredients.slice(0, -1);
        setIngredients(newArray)
    };

    
    

    return(
        <div className='p-5 m-5 bg-white flex max-w-md rounded'>
                
                <form 
                    onSubmit={handleSubmit((data) => onSubmit({...data,}))}
                >
                    {errors && (
                            <span data-test="building-error"> {Object.keys(errors)}</span>
                        )}
                    <h1 className='m-3 font-extrabold text-2xl text-rose-500'>Share Your Recipe!</h1>
                    <div className='m-3'>
                        <label htmlFor='name'><b>Name:</b></label>
                        <input 
                            disabled={isLoading}
                            {...register("name", {required: true})}
                            type='text' 
                            className='rounded-lg ml-12' 
                            id='name' 
                            name='name' 
                        />
                    </div>
                    <h3 className="font-bold text-red-600">
                        {errors.name && (
                            <span data-test="building-error"> Name is required</span>
                        )}
                    </h3>
                    <div className='m-3'>
                        <label htmlFor='dificulty'><b>Dificulty:</b></label>
                        <select name='dificulty' className='rounded-lg ml-8' id='dificulty'
                            disabled={isLoading}
                            {...register("dificulty", {required: true})}
                        >
                            <option value='easy'>Easy</option>
                            <option value='medium'>Medium</option>
                            <option value='hard'>Hard</option>
                        </select>
                    </div>
                    <div className='m-3'>
                        <label htmlFor='time'><b>Time:</b></label>
                        <div className='flex m-3'>
                            <input 
                                type='number' 
                                className='rounded-lg w-24' 
                                id='time_hours' 
                                name='time_hours' 
                                disabled={isLoading}
                                {...register("time_hours", {required: true})} 
                            /><div className='m-2'>hours</div>
                            
                            <input 
                                type='number' 
                                className='rounded-lg w-24' 
                                id='time_mins' 
                                name='time_mins'
                                disabled={isLoading}
                                {...register("time_minutes", {required: true})} 
                            
                            /><div className='m-2'>minutes</div>
                        </div>
                        <div className="p-2">
                            <h3 className="font-bold text-red-600">
                                {errors.time_hours && (
                                    <span data-test="building-error"> Hours is required</span>
                                )}
                            </h3>
                            <h3 className="font-bold text-red-600">
                                {errors.time_minutes && (
                                    <span data-test="building-error"> Minutes is required</span>
                                )}
                            </h3>
                        </div>
                    </div>
                    <div className='m-3 flex my-8'>
                        <label htmlFor='people' className='mt-2'><b>People:</b></label>
                        <input 
                            type='number' 
                            className='rounded-lg ml-5' 
                            id='people' 
                            name='people'
                            disabled={isLoading}
                            {...register("number_people", {required: true})} 
                        />
                    </div>
                    <h3 className="font-bold text-red-600 p-2">
                        {errors.number_people && (
                            <span data-test="building-error"> Number of people is required</span>
                        )}
                    </h3>
                    <div>
                        <label htmlFor='category[]' className="m-4"><b>Category:</b></label>
                        <div className="mt-4">    
                            {categories.map((category, i) => (
                                <div key={category.id}   className="m-2">
                                    <div  className="flex">
                                        <input 
                                            type='text' 
                                            className='rounded-lg ' 
                                            name='category'
                                            {...register(`categories.${i}`, {required: true})}
                                        />
                                        {i == categories.length-1 &&
                                            <div onClick={(e) => {removeCategory(); unregister(`categories`)}}>
                                                <button><MinusCircleIcon className="w-8 m-2 text-rose-500" /></button>
                                            </div>
                                        }
                                    </div>
                                    <h3 className="font-bold text-red-600">
                                        {errors.categories?.[i] && (
                                            <span data-test="building-error"> Category is required</span>
                                        )}
                                    </h3>
                                </div>
                            ))}
                        </div>
                        <div onClick={addCategory} className="m-auto flex rounded-2xl bg-rose-400 w-3/5">
                            <div className="mt-2.5 m-auto text-white">Add Category </div>
                            <PlusCircleIcon className="w-8 m-2 text-white" />
                        </div>
                        <h3 className="font-bold text-red-600 p-2">
                            {errors.categories && (
                                <span data-test="building-error"> At least one category is required</span>
                            )}
                        </h3>
                    </div>           
                    <div className='m-3'>
                        <b>Ingredients:</b>
                        {ingredients.map((category, i) => (
                            <div  key={category.id}>
                                <div className='m-3 flex'>
                                    <input 
                                        type='number' 
                                        className='rounded-lg my-2 mr-1 w-24' 
                                        name='ingredient_amounts[]' 
                                        placeholder='Amount'
                                        {...register(`ingredient_amounts.${i}`, {required: true})}
                                        
                                    ></input>
                                    <select 
                                        name='ingredient_units[]' 
                                        className='rounded-lg  my-2 mr-1  w-24' 
                                        {...register(`ingredient_units.${i}`, {required: true})}                                
                                    >
                                        <option value={null}>Units</option>
                                        <option value={"gr"}>Gr</option>
                                        <option value={"ml"}>Ml</option>
                                        <option value={"units"}>Units</option>
                                        <option value={"cups"}>Cups</option>
                                        <option value={"tea_spoon"}>Tea Spoon</option>
                                        <option value={"any amount"}>Any Amount</option>
                                    </select>
                                    <input 
                                        type='text' 
                                        className='rounded-lg  my-2 mr-1  w-24' 
                                        name='ingredient_ingredients[]' 
                                        placeholder='Ingredient'
                                        {...register(`ingredient_ingredients.${i}`, {required: true})}
                                    ></input>
                                    {i == ingredients.length-1 &&
                                        <div onClick={(e) => {removeIngredient(); unregister([`ingredient_amounts`,`ingredient_units`,`ingredient_ingredients`])}}>
                                            <button><MinusCircleIcon className="w-8 m-2 text-rose-500" /></button>
                                        </div>
                                    }
                                </div>
                                
                            </div>
                        ))}
                        <div>
                            <h3 className="font-bold text-red-600 p-2">
                                {errors.ingredient_amounts && (
                                    <span data-test="building-error"> Ingredient amounts are required</span>
                                )}
                            </h3>
                            <h3 className="font-bold text-red-600 p-2">
                                {errors.ingredient_ingredients && (
                                    <span data-test="building-error"> Ingredients can´t be empty</span>
                                )}
                            </h3>
                            <h3 className="font-bold text-red-600 p-2">
                                {errors.ingredient_units && (
                                    <span data-test="building-error"> Ingredient units are required</span>
                                )}
                            </h3>
                        </div>
                        <div onClick={addIngredient} className="m-auto flex rounded-2xl bg-rose-400 w-3/5">
                            <div className="mt-2.5 m-auto text-white">Add Ingredient </div>
                            <PlusCircleIcon className="w-8 m-2 text-white" />
                        </div>
                    </div>
                    <div className='m-3'>
                        <b>Steps</b>
                        <div className='m-3'>
                            <div className='m-2'>
                                <label>Title:</label><input type='text' className='rounded-lg ml-6' name='category[]'
                                    
                                ></input>
                            </div>
                            <div className='m-2 mt-6 flex'>
                                <label>Content:</label><textarea className='rounded-lg ml-6'
                                   
                                ></textarea>
                            </div>
                            <div className='m-2 flex'>
                                <div className="flex justify-center items-center w-full">
                                    <label htmlFor="dropzone-file" className="flex flex-col justify-center items-center w-full h-64 bg-rose-100 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-rose-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 mt-5">
                                        <div className="flex flex-col justify-center items-center pt-5 pb-6">
                                            <svg aria-hidden="true" className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                        </div>
                                        <input id="dropzone-file" type="file" className="hidden" 
                                           
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div onClick={addCategory} className="m-auto flex rounded-2xl bg-rose-400 w-3/5">
                            <div className="mt-2.5 m-auto text-white">Add Step </div>
                            <PlusCircleIcon className="w-8 m-2 text-white" />
                        </div>
                    </div>
                    

                    <input type="checkbox" className="rounded text-pink-500 ml-11 m-2"  /> I accept Terms & Conditions

                    <input className="w-full h-12 px-6 text-indigo-100 transition-colors duration-150 bg-rose-700 rounded-lg focus:shadow-outline hover:bg-rose-800" type='submit' value='Share Recipe!'></input> 
                </form>
                

                
            </div>
    )
}