import React from 'react';
import {Carousel} from 'react-bootstrap';

import image1 from '../../assets/images/1.jpg';


export const stuscore = {
  "Marks" : [
    {
      "Subject" : "Maths",
      "Quiz_Score" : " 88",
      "Overallscore" : " 78",
      "tot_quiz" :" 10",
      "quiztaken" :" 9",
      "videoswatched" : " 20"
    },
    {
      "Subject" : "physics",
      "Quiz_Score" : " 90",
      "Overallscore" : " 89",
      "tot_quiz" :" 19",
      "quiztaken" :" 15",
      "videoswatched" : " 21"
    },
    {
      "Subject" : "English",
      "Quiz_Score" : " 91",
      "Overallscore" : " 88",
      "tot_quiz" :" 10",
      "quiztaken" :" 10",
      "videoswatched" : " 30"
    },
    {
      "Subject" : "chemistry",
      "Quiz_Score" : " 89",
      "Overallscore" : " 78",
      "tot_quiz" :" 11",
      "quiztaken" :" 10",
      "videoswatched" : " 21"
    },
    {
      "Subject" : "biology",
      "Quiz_Score" : " 89",
      "Overallscore" : " 81",
      "tot_quiz" :" 20",
      "quiztaken" :" 11",
      "videoswatched" : " 22"
    },
    {
      "Subject" : "history",
      "Quiz_Score" : " 90",
      "Overallscore" : " 90",
      "tot_quiz" :" 11",
      "quiztaken" :" 10",
      "videoswatched" : " 26"
    },
    {
      "Subject" : "geography",
      "Quiz_Score" : " 80",
      "Overallscore" : " 79",
      "tot_quiz" :" 10",
      "quiztaken" :" 10",
      "videoswatched" : " 25"
    },
  ]
}


const CarouselContainer = () => {
    return(
      <Carousel>
          {
            stuscore.Marks.map((subject,SubjectId) => {
              return(
                <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src={image1}
                  alt="First slide"
                />
                <Carousel.Caption>
                <h3>{subject.Subject}</h3>
                <p>Quiz Score:{subject.Quiz_Score}</p> 
                <p>Overall score:{subject.Overallscore}</p>
                <p>Total no.of Quiz:{subject.tot_quiz}</p>
                <p>No.of Quiz taken:{subject.quiztaken}</p>
                <p>Videos watched:{subject.videoswatched}</p>
                <p>You are Doing Great </p>
                </Carousel.Caption>
                </Carousel.Item>
              );
            })
          }
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={image1}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Physics</h3>
          <p>Quiz Score:{stuscore.Quiz_Score}</p> 
          <p>Overall score:{stuscore.Overallscore}</p>
          <p>Total no.of Quiz:{stuscore.tot_quiz}</p>
          <p>No.of Quiz taken:{stuscore.quiztaken}</p>
          <p>Videos watched:{stuscore.videoswatched}</p>
          <p>Keep it up and continue to do the same </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="English"
        />
        <Carousel.Caption>
          <h3>English</h3>
          <p>Quiz Score:</p> 
          <p>Overall score:</p>
          <p>Total no.of Quiz:</p>
          <p>No.of Quiz taken:</p>
          <p>Videos watched:</p>
          <p>Your skills seems to be great</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={image1}
          alt="3rd slide"
        />
        <Carousel.Caption>
          <h3>Chemistry</h3>
          <p>Quiz Score:</p> 
          <p>Overall score:</p>
          <p>Total no.of Quiz:</p>
          <p>No.of Quiz taken:</p>
          <p>Videos watched:</p>
          <p>Your bonding with chemistry is superb</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={image1}
          alt="4th slide"
        />
        <Carousel.Caption>
          <h3>Biology</h3>
          <p>Quiz Score:</p> 
          <p>Overall score:</p>
          <p>Total no.of Quiz:</p>
          <p>No.of Quiz taken:</p>
          <p>Videos watched:</p>
          <p>You are Doing Great </p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="5th slide"
        />
        <Carousel.Caption>
          <h3>Histrory</h3>
          <p>Quiz Score:</p> 
          <p>Overall score:</p>
          <p>Total no.of Quiz:</p>
          <p>No.of Quiz taken:</p>
          <p>Videos watched:</p>
          <p>Looks like trying to learn more in history </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="6th slide"
        />
        <Carousel.Caption>
          <h3>Geography</h3>
          <p>Quiz Score:</p> 
          <p>Overall score:</p>
          <p>Total no.of Quiz:</p>
          <p>No.of Quiz taken:</p>
          <p>Videos watched:</p>
          <p>You are great in learing about our land</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    )
}

export default CarouselContainer;