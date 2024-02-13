

const parts = [
  {
    name: 'Fundamentals of React',
    exercises: 10,
    id: 1
  },
  {
    name: 'Using props to pass data',
    exercises: 7,
    id: 2
  },
  {
    name: 'State of a component',
    exercises: 14,
    id: 3
  },
  {
    name: 'Redux',
    exercises: 11,
    id: 4
  }
]



 const header = {
    name: 'Half Stack application development',
}

const Content = () => {
  return(
    <div>
  {parts.map(partData => 
    (
      <div key={partData.id}>
        <p>{partData.name} {partData.exercises}</p>
      </div>
    )
  )}
  </div>
  )
}


const Course = () => {
  return (
    <div>
      <h1>{header.name}</h1>
      <Content />
    </div>
  )
}

const Total = () => {

  let totalExercises = 0;

  for (var i = 0; i < parts.length; i++){
    
    totalExercises += parts[i].exercises;

  }
  
  return (
    <strong>
      total of {totalExercises} exercises
    </strong>
  )
}

const App = () => {
 
  return (
    <>
      <Course/>
      <Total/>
    </>
  )
}


    


export default App


