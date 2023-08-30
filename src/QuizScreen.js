import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import data from './quiz-data.json';

function QuizScreen({ darkmodeToggle }) {
  const [pickData, setPickData] = useState();
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showaddEx, setShowaddEx] = useState(false);
  const [answerOX, setAnswerOX] = useState();
  const resultView = '결과보기';
  const nextView = '다음문제'
  const navigate = useNavigate();

  useEffect(() => {
    let randomIndexArray = new Set();
    while (randomIndexArray.size < 10) {
      let randomNum = Math.floor(Math.random() * 100);
      randomIndexArray.add(randomNum);
    }
    let pickedData = Array.from(randomIndexArray).map(randomIndex => data[randomIndex]);
    setPickData(pickedData);
  }, [])

  const currentQ = pickData ? pickData[currentQIndex] : 'roading...';
  const num = currentQIndex + 1;

  function checkAnwser(selectedAnswer) {
    if (selectedAnswer === currentQ.answer) {
      setScore(score + 1);
      setShowaddEx(true);
      setAnswerOX('정답!')
    } else {
      setShowaddEx(true);
      setAnswerOX('오답')
    }
  }

  function nextQ() {
    if (num === 10) {
      setAnswerOX();
      setShowaddEx(false)
      setPickData();
      setCurrentQIndex(0)
      navigate('/result', { state: { score } });
    } else {
      setShowaddEx(false);
      setAnswerOX();
      setCurrentQIndex(currentQIndex + 1)
    }
  }

  return (
    <>
      <h4>{num}/10</h4>
      <h3>{currentQ.question}</h3>
      {!showaddEx ? (
        <div className="answers">
          <button className="O answer" onClick={() => checkAnwser('O')}>O</button>
          <button className="X answer" onClick={() => checkAnwser('X')}>X</button>
        </div>
      ) : <>
        <p className={answerOX === '정답!' ? 'answerO' : 'answerX'}>{answerOX}</p>
        <p>{currentQ.addEx}</p>
        {showaddEx ? <button className={darkmodeToggle ? 'Btn darkBtn' : 'Btn'} onClick={nextQ}>{num === 10 ? resultView : nextView}</button> : null}
      </>}
    </>
  )
}

export default QuizScreen;