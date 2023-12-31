import './App.css';
import { Link, useLocation } from 'react-router-dom';

function ResultScreen({ darkmodeToggle, shareToKakao }) {
  const location = useLocation();
  const score = location.state.score;

  if (score === 10) {
    return (
      <div>
        <h2>모두 정답이네요! 당신의 상식수준은 최고입니다.</h2>
        <p className='resultScore scorePerfect'>{score}점</p>
        <Link to={'/quiz'}><button className={darkmodeToggle ? 'Btn darkBtn viewBtn resultBtns' : 'Btn viewBtn resultBtns'}>다시 풀기</button></Link>
        <Link to={'/'}><button className={darkmodeToggle ? 'Btn darkBtn viewBtn resultBtns' : 'Btn viewBtn resultBtns'}>처음으로</button></Link>
        <div />
        <div onClick={shareToKakao} className={darkmodeToggle ? 'shareKakao darkShareKakao' : 'shareKakao'}>
        <i className='xi-kakaotalk xi-4x'/>
      </div>
      </div>
    )
  } else if (score >= 7) {
    return (
      <div>
        <h2>대단해요! 당신의 지식은 수준급입니다.</h2>
        <p className='resultScore scoreHigh'>{score}점</p>
        <Link to={'/quiz'}><button className={darkmodeToggle ? 'Btn darkBtn viewBtn resultBtns' : 'Btn viewBtn resultBtns resultBtns'}>다시 풀기</button></Link>
        <Link to={'/'}><button className={darkmodeToggle ? 'Btn darkBtn viewBtn resultBtns' : 'Btn viewBtn resultBtns'}>처음으로</button></Link>
        <div />
        <div onClick={shareToKakao} className={darkmodeToggle ? 'shareKakao darkShareKakao' : 'shareKakao'}>
        <i className='xi-kakaotalk xi-4x'/>
      </div>
      </div>
    )
  } else if (score >= 5) {
    return (
      <div>
        <h2>아쉬워요..문제를 풀어 지식을 늘려보아요!</h2>
        <p className='resultScore scoreMiddle'>{score}점</p>
        <Link to={'/quiz'}><button className={darkmodeToggle ? 'Btn darkBtn viewBtn resultBtns' : 'Btn viewBtn resultBtns'}>다시 풀기</button></Link>
        <Link to={'/'}><button className={darkmodeToggle ? 'Btn darkBtn viewBtn resultBtns' : 'Btn viewBtn resultBtns'}>처음으로</button></Link>
        <div />
        <div onClick={shareToKakao} className={darkmodeToggle ? 'shareKakao darkShareKakao' : 'shareKakao'}>
        <i className='xi-kakaotalk xi-4x'/>
      </div>
      </div>
    )
  } else {
    return (
      <div>
        <h2>이런! 심각한 수준의 지식 수준이네요...</h2>
        <p className='resultScore scoreLow'>{score}점</p>
        <Link to={'/quiz'}><button className={darkmodeToggle ? 'Btn darkBtn viewBtn resultBtns' : 'Btn viewBtn resultBtns'}>다시 풀기</button></Link>
        <Link to={'/'}><button className={darkmodeToggle ? 'Btn darkBtn viewBtn resultBtns' : 'Btn viewBtn resultBtns'}>처음으로</button></Link>
        <div />
        <div onClick={shareToKakao} className={darkmodeToggle ? 'shareKakao darkShareKakao' : 'shareKakao'}>
        <i className='xi-kakaotalk xi-4x'/>
      </div>
      </div>
    )
  }
}

export default ResultScreen