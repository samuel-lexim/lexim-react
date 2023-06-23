import React, {useState, useEffect} from 'react';
// import styles from '@/styles/typingEffect.module.scss';

const TypingEffect = (
  {
    classText, text,
    after = 0,
    speed = 40,
    start = false
  }
) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    let runAfter;

    const startTyping = () => {
      let typingInterval = setInterval(() => {
        if (currentIndex >= text.length) {
          clearInterval(typingInterval);
        }
        if (currentIndex === 0) {
          setDisplayText(text[currentIndex]);
        }
        currentIndex++;
        if (currentIndex > 0 && text[currentIndex] !== undefined) {
          setDisplayText((prevText) => prevText + text[currentIndex]);
        }
      }, speed);
    }

    if (start) {
      runAfter = setTimeout(startTyping, after);
    }

    return () => {
      clearTimeout(runAfter);
    };
  }, [text, start]);

  return <span className={`${classText}`}>{displayText}</span>;
};

export default TypingEffect;