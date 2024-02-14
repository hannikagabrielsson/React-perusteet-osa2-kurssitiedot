

// const parts = [
//   {
//     name: 'Fundamentals of React',
//     exercises: 10,
//     id: 1
//   },
//   {
//     name: 'Using props to pass data',
//     exercises: 7,
//     id: 2
//   },
//   {
//     name: 'State of a component',
//     exercises: 14,
//     id: 3
//   },
//   {
//     name: 'Redux',
//     exercises: 11,
//     id: 4
//   }
// ]


const courses = [
  {
    name: 'Half Stack application development',
    id: 1,
    parts: [
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
  }, 
  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }
]

const Content = () =>{

  return(
    <>
    {
      courses.map(course =>
        (
          <div key={course.id}>
            <h1>{course.name}</h1>
            {
              course.parts.map(part =>
                (
                <div key={part.id}>
                  <p>{part.name} {part.exercises}</p>                               
                </div>
              ))
              }
              <p><strong>Total of {course.parts.reduce((total, part) => total + part.exercises, 0)} exercises</strong></p>
          </div>

        ))
    }
    </>
  )
}

// const Total = () => {

//   const totalExercisesPerPart = [];



//   for (let i = 0; i < courses.length; i++) {
//     let totalExercises = 0; 

//     console.log("Tämä on " + courses[i].parts.length)

//     for (let j = 0; j < courses[i].parts.length; j++) {

//       console.log("Tämä taas on " + courses[i].parts[j].exercises)
//       const part = courses[i].parts[j].exercises;
     
//       console.log("Tämä on part " + part)

//       totalExercises += part; 

//       console.log("Tämä on totalExercises " + totalExercises);
      
//     }
//     totalExercisesPerPart.push(totalExercises);

//     console.log("Tämä on totalExercisesPerPart " + totalExercisesPerPart);
//   }

//   return (
//     <div>
//       {totalExercisesPerPart.map((total, index) => (
//         <div key={index}>
//           <strong>Total of {total} exercises</strong>
//         </div>
//       ))}
//     </div>
//   );



// }

const Course = () => {
  return (
    <div>
      {/* <Header/> */}
      <Content />
    </div>
  )
}


// const Content = () => {
//   return(
//     <div>
//   {courses.map(partData => 
//     (
//       <div key={partData.parts.id}>
//         <p>{partData.name} {partData.exercises}</p>
//       </div>
//     )
//   )}
//   </div>
//   )
// }

// const Total = () => {

//   let totalExercises = 0;

//   for (var i = 0; i < courses.length; i++){

//     totalExercises += courses[i].parts[i].exercises;
//     console.log("Tämä on total" + totalExercises);
//   }
//   return (
//     <strong>
//       total of {totalExercises} exercises
//     </strong>
//   )
// }


// const Total = () => {
//   const totalParts = courses.reduce(function(sum, part) {
//     return sum + part.exercises
//   }, 0)

//   return (
//         <strong>
//           total of {totalParts} exercises
//         </strong>
//       )
// }






const App = () => {
 
  return (
    <>
      <Course/>
      {/* <Total/> */}
    </>
  )
}


    


export default App


 