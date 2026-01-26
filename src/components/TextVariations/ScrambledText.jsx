import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';

gsap.registerPlugin(SplitText, ScrambleTextPlugin);

const ScrambledText = ({ children, className = '' }) => {
  const rootRef = useRef(null);

  useEffect(() => {
    const pEl = rootRef.current?.querySelector('p');
    if (!pEl) return;

    // Split text into words instead of chars
    const split = new SplitText(pEl, { type: 'words' });

    // Store original content for each word
    split.words.forEach(word => gsap.set(word, { attr: { 'data-content': word.innerHTML } }));

    // Animate words with ScrambleTextPlugin
    gsap.to(split.words, {
      duration: 2,
      scrambleText: {
        text: (i, target) => target.dataset.content,
        chars: '.:', // scrambling characters within each word
        speed: 6
      },
      stagger: 0.2
    });

    return () => split.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      className={`text-text-primary h-[30vh] flex items-center w-[30vw] text-[14px] sm:text-xl md:text-2xl font-mono ${className}`}
    >
      <p>{children}</p>
    </div>
  );
};

export default ScrambledText;
