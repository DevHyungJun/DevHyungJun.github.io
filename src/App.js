import { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import QuizScreen from './QuizScreen';
import ResultScreen from './ResultScreen';

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
      <div className={darkmodeToggle ? 'bg darkmodeBg' : 'bg'}>
        <div className={darkmodeToggle ? 'container darkmode' : 'container'}>
          <Routes>
            <Route path='/' element={<HomeScreen darkmodeToggle={darkmodeToggle} />} />
            <Route path='/quiz' element={<QuizScreen darkmodeToggle={darkmodeToggle} />} />
            <Route path='/result' element={<ResultScreen darkmodeToggle={darkmodeToggle} />} />
          </Routes>
          <button onClick={() => { setDarkmodeToggle(!darkmodeToggle) }} className={darkmodeToggle === true ? 'Btn darkBtn fixedDarkBtn' : 'Btn fixedDarkBtn'}>darkmode</button>
        </div>
      </div>
    </div>
  );
}

function HomeScreen({ darkmodeToggle }) {
  return (
    <>
      <h1>상식 퀴즈</h1>
      <p className='fs-l'>상식 퀴즈에 오신 것을 환영합니다! 퀴즈는 총 10문제로 구성되어 있습니다.</p>
      <Link to={'/quiz'}><button className={darkmodeToggle === true ? 'Btn darkBtn' : 'Btn'}>시작하기</button></Link>
    </>
  )
}

export default App;
