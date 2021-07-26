import {useState} from "react"

function MyWorkouts({workouts, deleteWorkout}) {
    const [tenReps, setTenReps] = useState(false)
    const [eightReps, setEightReps] = useState(false)
    const [twelveReps, setTwelveReps] = useState(false)
    const [isOn, setIsOn] = useState(false)


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

//style={{backgroundColor: eightReps ? "greenYellow" : "white"}}
//onClick={tenRepsOnClick} style={{backgroundColor: tenReps ? "greenYellow" : "white"}}

    const workoutDisplay = workouts.map((item, index) => 
        item.map((workout) =>
            <div id={index} key={index}><img src={workout.image} alt={workout.image} />
            <p>
            <button id={index} onClick={handleButtonClick} className={isOn ? "green" : "white"}>8 Reps</button>
            <button id={index} onClick={tenRepsOnClick} style={{backgroundColor: tenReps ? "greenYellow" : "white"}}>10 Reps</button>
            <button id={index} onClick={twelveRepsOnClick} style={{backgroundColor: twelveReps ? "lightBlue" : "white"}}>12 Reps</button>
            <button id={index} name={workout.name} onClick={(e) => onClickDelete(e)}>Delete</button>
            </p>
            </div>
        )
    )


    


    return(
        <div>
            <h1>Workouts To Do</h1>
            {workoutDisplay}
 
        </div>
    );

}

export default MyWorkouts;