import { useState, useEffect } from 'react';

const useScrollHeight = () => {
  const [_scrollHeight, _setScrollHeight] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', (e) => _setScrollHeight(window.scrollY));
    return () => window.removeEventListener('scroll', () => {});
  }, []);

  return _scrollHeight;
};

export default useScrollHeight;