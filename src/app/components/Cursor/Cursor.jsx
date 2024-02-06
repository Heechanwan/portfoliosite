import { Cursor } from 'react-creative-cursor';
import 'react-creative-cursor/dist/styles.css';
import MiniCursor from './MiniCursor';
import { useEffect } from 'react';

const CustomCursor = () => {

  useEffect(() => {
    const cursor = document.querySelector('.cursor');

    const mouseoverFunc = () => {
        if (cursor) {
            cursor.classList.add('hovered');
        }
    };

    const mouseoutFunc = () => {
        if (cursor) {
            cursor.classList.remove('hovered');
        }
    };

    const links = document.querySelectorAll('a, [data-cursor-text], button');
    links.forEach(link => {
        link.addEventListener('mouseover', mouseoverFunc);
        link.addEventListener('mouseout', mouseoutFunc);
    });

    return () => {
        links.forEach(link => {
            link.removeEventListener('mouseover', mouseoverFunc);
            link.removeEventListener('mouseout', mouseoutFunc);
        });
    };
}, []);

    return (
      <>
        <Cursor isGelly={true} />
        <MiniCursor/>
      </>
    );
  };

export default CustomCursor
