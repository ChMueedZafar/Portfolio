import { useEffect, useState } from 'react';

function ScrollProgress() {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPosition = window.scrollY;
      const progress = (scrollPosition / totalHeight) * 100;
      setScrollTop(progress);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent">
      <div
        className="h-full bg-blue-600 dark:bg-purple-500 transition-all duration-200 ease-out"
        style={{ width: `${scrollTop}%` }}
      ></div>
    </div>
  );
}

export default ScrollProgress;
