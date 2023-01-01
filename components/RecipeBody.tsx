import { useState } from "react";


export default function RecipeBody() {

    const [step, setStep] = useState(1);

    const [title, setTitle] = useState("");
    const [image, setImage] = useState('Image' + step + ' here');
    const [content, setContent] = useState("");

    function changeContent(){
        setImage('Image' + step + ' here')
    }

    function nextStep(){
        alert(step)
        setStep(step+1)
        changeContent()
    }
    function stepBack(){
        alert(step)
        setStep(step-1)
        changeContent()
    }

    return(
        <div className='p-5 m-5 bg-white max-w-md'>
            <div className="m-5">
                {image}
            </div>

            <div className="m-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nulla explicabo temporibus, aliquid nesciunt illum saepe quibusdam quidem eos reiciendis, sit expedita corrupti maiores. Neque obcaecati quas expedita qui quis.
            </div>

            <div className="flex">
                <button onClick={stepBack} className="m-auto flex rounded-2xl bg-rose-400 w-2/5">
                    <div className="mb-1 mt-1 m-auto text-white font-bold">Back </div>
                </button>
                <button onClick={nextStep}  className="m-auto flex rounded-2xl bg-rose-400 w-2/5">
                    <div className="mb-1 mt-1 m-auto text-white font-bold">Next </div>
                </button>
            </div>
        </div>
    )
}