

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

const App = () => {
 
  return (
    <>
      <Course/>
    </>
  )
}


    


export default App


