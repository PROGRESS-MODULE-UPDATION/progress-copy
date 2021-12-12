
import React from 'react'
import GridSystem from '../../components/GridSystem.js';
import {
  Row,
  Col
} from 'react-bootstrap';
import ApexChart from '../../components/PieChart/index.jsx';
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
      const subj = [
        {
          id:0,
          sub:'Phy',
          subject:'physics',
          score:'90',
          videos:'10',
          nquiz:'10',
          quizt:'10'
        },
      
        {
          id:1,
          sub:'Eng',
          subject:'English',
          score:'90',
          videos:'10',
          nquiz:'10',
          quizt:'10'
        },
        {
          id:2,
          sub:'Tam',
          subject:'Tamil',
          score:'90',
          videos:'10',
          nquiz:'10',
          quizt:'10'
        }

      ]
      const Item = props => {
        const {title,quiz} = props
    
        return (
          <div className='atquiz'>
            <h3>{quiz}</h3>
            <div className='styling'>
            <p>Attended</p>
            </div>
            <p>{title}</p>
          </div>
        )
      }
      const Item1 = props => {
        const {title1,course} = props
    
        return (
          <div className='atcourse'>
            <h3>{course}</h3>
            <div className='styling'>
            <p>Attended</p>
            </div>
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
      const Item3 = props => {
        const {sub,subject,score,videos,nquiz,quizt} = props
    
        return (
          <div className='sub'>
            <h3>{sub}</h3>
            <p>{subject}</p>
            <h3>{score}%</h3>
            <h6>Average Score</h6>
            <br></br>
            <p>No.of.video: {videos}</p>
            <p>Total No.Quiz: {nquiz}</p>
            <p>Quiz Taken: {quizt}</p>
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
       <br></br>
       <GridSystem colCount={3} md={6}>
       {
         subj.length >0 ? subj.map(item => <Item3 key={item.id} sub={item.sub} subject={item.subject} score={item.score} videos={item.videos} nquiz={item.nquiz} quizt={item.quizt} />) : [<p>No Data Found</p>]
       }  
       </GridSystem>
       <Row>
         <Col>
         <ApexChart />
         </Col>
       </Row>
   </div>
   </div>
    )
}

export default Dashboard