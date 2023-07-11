import React, {useState, useEffect} from 'react';

const TypingEffect = (
  {
    classText,
    text,
    after = 0,
    speed = 50,
    start = false
  }
) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    let runAfter;
    let typingInterval;

    const startTyping = () => {
      typingInterval = setInterval(() => {
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
      clearInterval(typingInterval);
    };
  }, [text, start, after, speed]);

  return <span className={`${classText}`}>{displayText}</span>;
};

export default TypingEffect;