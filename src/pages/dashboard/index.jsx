
import React from 'react'
import GridSystem from '../../components/GridSystem.js';

const Dashboard = () => {
    const tquiz = [
        {
          id:0,
          quiz:'90',
          title:'Total Quiz'
        }
       
      ]
      const tcourse = [
        {
          id:0,
          course:'112',
          title1:'Total Course'
        }
      ]
      const expertise = [
        {
          id:0,
          subject:'physics',
          score:'90'
        }
      ]
      const Item = props => {
        const {title,quiz} = props
    
        return (
          <div className='atquiz'>
            <h3>{quiz}</h3>
            <p>Attended</p>
            <p>{title}</p>
          </div>
        )
      }
      const Item1 = props => {
        const {title1,course} = props
    
        return (
          <div className='atcourse'>
            <h3>{course}</h3>
            <p>Attended</p>
            <p>{title1}</p>
          </div>
        )
      }
      const Item2 = props => {
        const {subject,score} = props
    
        return (
          <div className='comment'>
            <p>you are doing great in</p>
            <h4>{subject}</h4>
            <p>Scored {score}% in quiz</p>
          </div>
        )
      }
    return(
        
   <div>
   <div className="App">
     <GridSystem colCount={3} md={6}>

       {
         tquiz.length >0 ? tquiz.map(item => <Item key={item.id} title={item.title} quiz={item.quiz} />) : [<p>No Data Found</p>]
       }
       {
         tcourse.length >0 ? tcourse.map(item => <Item1 key={item.id} title1={item.title1} course={item.course} />) : [<p>No Data Found</p>]
       }
       {
         expertise.length >0 ? expertise.map(item => <Item2 key={item.id} subject={item.subject} score={item.score} />) : [<p>No Data Found</p>]
       }
       </GridSystem>
   </div>
   </div>
    )
}

export default Dashboard