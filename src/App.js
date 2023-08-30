import { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import QuizScreen from './QuizScreen';

function App() {
  let [darkmodeToggle, setDarkmodeToggle] = useState(false); 

  useEffect(() => {
    if (darkmodeToggle) {
      document.body.style.backgroundColor = 'black';
    } else {
      document.body.style.backgroundColor = 'white';
    }
  }, [darkmodeToggle])

  return (
    <div className='App'>
      <div className={darkmodeToggle === true ? 'bg darkmodeBg' : 'bg'}>
        <div className={darkmodeToggle === true ? 'container darkmode' : 'container'}>
          <Routes>
            <Route path='/' element={<HomeScreen darkmodeToggle={darkmodeToggle}/>}/>
            <Route path='/quiz' element={<QuizScreen/>}/>
            <Route path='/result' element={<ResultScreen />}/>
          </Routes>
          <button onClick={()=>{setDarkmodeToggle(!darkmodeToggle)}}className={darkmodeToggle === true ? 'Btn darkBtn fixedDarkBtn' : 'Btn fixedDarkBtn'}>darkmode</button>
        </div>
      </div>
    </div>
  );
}

function HomeScreen({darkmodeToggle}) {
  return (
    <>
      <h1>상식 퀴즈</h1>
      <p>상식 퀴즈에 오신 것을 환영합니다! 퀴즈는 총 10문제로 구성되어 있습니다.</p>
      <Link to={'/quiz'}><button className={darkmodeToggle === true ? 'Btn darkBtn' : 'Btn'}>시작하기</button></Link>
    </>
  )
}

function ResultScreen() {
  const location = useLocation();
  const score = location.state.score;

  if(score === 10) {
    return (
      <div>
        <h2>모두 정답이네요! 당신은 상식의 상식수준은 최고입니다.</h2>
        <p className='resultScore scorePerfect'>{score}점</p>
        <Link to={'/'}><button>다시 풀기</button></Link>
      </div>
      )
  } else if(score >= 7) {
    return (
      <div>
        <h2>대단해요! 당신의 지식은 수준급입니다.</h2>
        <p className='resultScore scoreHigh'>{score}점</p>
        <Link to={'/'}><button>다시 풀기</button></Link>
      </div>
      )
  } else if(score >= 5) {
    return (
      <div>
        <h2>아쉬워요..문제를 풀어 지식을 늘려보아요!</h2>
        <p className='resultScore scoreMiddle'>{score}점</p>
        <Link to={'/'}><button>다시 풀기</button></Link>
      </div>
      )
  } else {
    return (
      <div>
        <h2>이런! 심각한 수준의 지식 수준이네요...</h2>
        <p className='resultScore scoreLow'>{score}점</p>
        <Link to={'/'}><button>다시 풀기</button></Link>
      </div>
      )
  }
}


export default App;
