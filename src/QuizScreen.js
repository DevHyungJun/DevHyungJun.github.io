import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import data from './quiz-data.json';

function QuizScreen() {
  const [pickData, setPickData] = useState();
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [score, setScore] = useState(0); 
  const [showaddEx, setShowaddEx] = useState(false);
  const [answerOX, setAnswerOX] = useState();
  const [end, setEnd] = useState(false);
  const navigate = useNavigate();
  
  useEffect(()=>{
    let randomIndexArray = new Set();
    while(randomIndexArray.size < 10) {
      let randomNum = Math.floor(Math.random() * 100);
      randomIndexArray.add(randomNum); 
    }
    let pickedData = Array.from(randomIndexArray).map(randomIndex => data[randomIndex]);
    setPickData(pickedData);
  },[])

  const currentQ = pickData ? pickData[currentQIndex] : 'roading...';
  const num = currentQIndex + 1;

  function checkAnser(selectedAnswer) {
    if(selectedAnswer === currentQ.answer) {
      setScore(score+1);
      setShowaddEx(true);
      setAnswerOX('정답!')
    } else {
      setShowaddEx(true);
      setAnswerOX('오답ㅠㅠ')
    }
  }
  
  function nextQ () {
    if(num === 10) {
      setEnd(true)
      setAnswerOX();
      setShowaddEx(false)
      setPickData();
      setCurrentQIndex(0)
      navigate('/result', {state:{score}});
    } else {
      setShowaddEx(false);
      setAnswerOX();
      setCurrentQIndex(currentQIndex+1)
    }
  }
  console.log(`점수:${score}`, num)

  return (
    <>
      <h4>{num}/10</h4>
      <h3>{currentQ.question}</h3>
      { !showaddEx ? (
        <>
        <button className="O answer" onClick={()=>checkAnser('O')}>O</button>
        <button className="X answer" onClick={()=>checkAnser('X')}>X</button>
      </>
      ): <>
      <p className={answerOX==='정답!' ? 'answerO' : 'answerX'}>{answerOX}</p>
      <p>{currentQ.addEx}</p>
      {showaddEx?<button className="Btn" onClick={nextQ}>다음문제</button>: null}
      </> }
    </>
  )
}

export default QuizScreen;