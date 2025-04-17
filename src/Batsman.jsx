import { useState } from "react"

export default function Batsman (){
    const   [run, setRun]= useState(0);
    const [six, setSix] = useState(0);

    const handleSingles =  () =>{
        const updatedRuns = run +1;
        setRun(updatedRuns) ;
    }
    const handleSix =  () =>{
        const updatedRuns = run +6;
        const updatedSix = six +1;
        setSix(updatedSix);
        setRun(updatedRuns) ;
    }
    const handleFour =  () =>{
        const updatedRuns = run +4;
        setRun(updatedRuns) ;
    }
    return (
        <div>
            <h3>Player : Bangu </h3>
            <p>sixs : {six}</p>
            {run >50 && <p>your score : half century</p>}
            <h1>Score : {run} </h1>
            <button onClick={handleSingles}>singles</button>
            <button onClick={handleFour}>four</button>
            <button onClick={handleSix}>six</button>
        </div>
    )
}