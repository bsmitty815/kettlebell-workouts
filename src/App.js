import {useState} from "react"
import './App.css';
import kettlebellWorkouts from './Data/kettlebellWorkouts';
import MyWorkouts from "./Components/MyWorkouts"
import Header from "./Components/Header";

function App() {
  const [kettlebellWorkoutsData] = useState(kettlebellWorkouts.workout)
  const [myWorkoutToDisplay, setMyWorkoutToDisplay] = useState([])

  function workoutClicked(event) {
    const newWorkToAdd = kettlebellWorkoutsData.filter((workout) => {
      return workout.name === event.target.id
    })

    const workouts = [...myWorkoutToDisplay, newWorkToAdd]

    setMyWorkoutToDisplay(workouts)
  }

  const kettlebellWorkoutsDisplay = kettlebellWorkoutsData.map((workout) => {
    return <div id={workout.id} key={workout.name} ><p>{workout.name}</p><img src={workout.image} alt={workout.image} /><p><button onClick={workoutClicked} id={workout.name}>Add To Workout</button></p></div>
  })

  function deleteWorkout(workoutIndex) {
    const id = parseInt(workoutIndex)
    const workoutsBefore = [...myWorkoutToDisplay.slice(0,id)]
    const workoutsAfter = [...myWorkoutToDisplay.slice(id+1)]
    setMyWorkoutToDisplay([...workoutsBefore, ...workoutsAfter])
  }


  return (
    <div >
      <div className="App">
        <Header />
      </div>
      <div className="App">
        <div className="column">
          {kettlebellWorkoutsDisplay}
        </div>
        <div className="column">
          <MyWorkouts workouts={myWorkoutToDisplay} deleteWorkout={deleteWorkout} />
        </div>  
      </div>
   
    </div>
  );
}

export default App;
