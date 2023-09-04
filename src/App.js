import { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import QuizScreen from './QuizScreen';
import ResultScreen from './ResultScreen';

function App() {
  let [darkmodeToggle, setDarkmodeToggle] = useState(false);

  useEffect(()=>{
    const script = document.createElement('script');
    script.src='https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    document.body.appendChild(script);
    return()=>document.body.removeChild(script);
  }, []);

  const shareToKakao = () =>{
    if(window.Kakao) {
      const kakao = window.Kakao;

      if(!kakao.isInitialized()) {
        kakao.init('0e26f7aed78c9a788365b46cda3f1de0');
      }

      kakao.Link.sendDefault({
        objectType:'feed',
        content: {
          title:'상식 퀴즈',
          description:'',
          imageUrl:'https://cdn-icons-png.flaticon.com/512/5705/5705144.png',
          link: {
            mobileWebUrl:'https://devhyungjun.github.io',
            webUrl:'https://devhyungjun.github.io',
          },
        },
      });
    }
  };

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
            <Route path='/' element={<HomeScreen darkmodeToggle={darkmodeToggle} shareToKakao={shareToKakao}/>} />
            <Route path='/quiz' element={<QuizScreen darkmodeToggle={darkmodeToggle} />} />
            <Route path='/result' element={<ResultScreen darkmodeToggle={darkmodeToggle} shareToKakao={shareToKakao} />} />
          </Routes>
          <button onClick={() => { setDarkmodeToggle(!darkmodeToggle) }} className={darkmodeToggle === true ? 'Btn darkBtn fixedDarkBtn' : 'Btn fixedDarkBtn'}>darkmode</button>
        </div>
      </div>
    </div>
  );
}

function HomeScreen({ darkmodeToggle, shareToKakao }) {
  return (
    <>
      <h1>상식 퀴즈</h1>
      <p className='fs-l'>상식 퀴즈에 오신 것을 환영합니다! 퀴즈는 총 10문제로 구성되어 있습니다.</p>
      <div className='homeImage'/>
      <Link to={'/quiz'}><button className={darkmodeToggle ? 'Btn darkBtn viewBtn startBtnFix' : 'Btn viewBtn startBtnFix'}>시작하기</button></Link>
      <div/>
      <div onClick={shareToKakao} className={darkmodeToggle ? 'shareKakao darkShareKakao' : 'shareKakao'}>
        <i className='xi-kakaotalk xi-4x'/>
      </div>
    </>
  )
};

export default App;
