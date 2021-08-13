import {useState} from "react"

function MyWorkouts({image, name, index, deleteWorkout}) {
    const [tenReps, setTenReps] = useState(false)
    const [eightReps, setEightReps] = useState(false)
    const [twelveReps, setTwelveReps] = useState(false)
    const [isOn, setIsOn] = useState(false)
    console.log(image)


    function handleButtonClick() {
        setIsOn((isOn) => !isOn);
    }


    function onClickDelete(event){
        deleteWorkout(event.target.id)
    }

    function tenRepsOnClick() {
        setTenReps((tenReps) => !tenReps)
    }
    function eightRepsOnClick() {
        setEightReps((eightReps) => !eightReps)
    }
    function twelveRepsOnClick() {
        setTwelveReps((twelveReps) => !twelveReps)
    }




    


    return(
        <div>
            <h1>Workouts To Do</h1>
            <div id={index} key={index}><img src={image} alt={image} />
            <p>
            <button id={index} onClick={handleButtonClick} className={isOn ? "green" : "white"}>8 Reps</button>
            <button id={index} onClick={tenRepsOnClick} style={{backgroundColor: tenReps ? "greenYellow" : "white"}}>10 Reps</button>
            <button id={index} onClick={twelveRepsOnClick} style={{backgroundColor: twelveReps ? "lightBlue" : "white"}}>12 Reps</button>
            <button id={index} name={name} onClick={(e) => onClickDelete(e)}>Delete</button>
            </p>
            </div>
 
        </div>
    );

}

export default MyWorkouts;