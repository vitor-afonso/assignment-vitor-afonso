//jshint esversion:9
import { useEffect, useState } from 'react';

export default function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false);
  let options = {
    rootMargin: '400px',
    threshold: 1.0,
  };
  const observer = new IntersectionObserver(([entry]) => setIntersecting(!isIntersecting ? entry.isIntersecting : isIntersecting), options);

  useEffect(() => {
    observer.observe(ref.current);
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return isIntersecting;
}
