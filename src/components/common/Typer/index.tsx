import React, { useCallback, useEffect, useRef, useState } from 'react';
import './style.css';

interface I_PROPS {
    contents: string[];
    style?: { [styleKey: string]: string };
}

const Typer: React.FC<I_PROPS> = ({ contents, style = {} }) => {
    const cursorRef = useRef(null);

    const blink = useCallback(() => {
        cursorRef.current.classList.toggle('active');
    }, [cursorRef]);

    const getContent = useCallback(() => {
        const idx = Math.floor(Math.random() * contents.length);
        return contents[idx];
    }, [contents]);

    useEffect(() => {
        if (contents.length > 0) {
            type(getContent());
        }
    }, []);

    const type = useCallback(
        (content: string) => {
            const charArr = content.split('');
            const char = charArr.shift();

            if (char) {
                cursorRef.current.innerHTML += char;
                setTimeout(() => type(charArr.join('')), 120);
            } else {
                setTimeout(() => erase(), 500);
            }
        },
        [contents]
    );

    const erase = useCallback(() => {
        const text = cursorRef.current.innerHTML;
        const charArr = text.split('');

        if (charArr.length > 0) {
            charArr.pop();
            cursorRef.current.innerHTML = charArr.join('');
            setTimeout(() => erase(), 150);
        } else {
            setTimeout(() => type(getContent()), 300);
        }
    }, []);

    useEffect(() => {
        const blinkInterval = setInterval(blink, 400);
        return function () {
            clearInterval(blinkInterval);
        };
    }, []);

    return <span className="typer" style={style} ref={cursorRef}></span>;
};

export default React.memo(Typer);
