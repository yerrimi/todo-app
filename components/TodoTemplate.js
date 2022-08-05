import React from 'react';
import './TodoTemplate.css';
import mImg from '../images/note.png';
import { AiOutlineInstagram, AiOutlineHeart ,AiFillSmile} from "react-icons/ai";

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">SCHEDULE LIST
      <img className='imwidth' src={mImg} alt='note'/>
      </div>
      <div className="content">{children}</div>
      <div className='appfooter'>SCHEDULE LIST v1.0 - yerimkim
      <span>
      <AiOutlineInstagram/><AiOutlineHeart/><AiFillSmile/>
      </span>
      </div>
      
    </div>
  );
};

export default TodoTemplate;
