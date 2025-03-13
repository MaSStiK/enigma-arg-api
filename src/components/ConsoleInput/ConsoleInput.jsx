"use client"
import { forwardRef, useImperativeHandle, useRef } from 'react';

const ConsoleInput = forwardRef(function ConsoleInput({ submitCommand, handleKeyDown }, ref) {
    const inputRef = useRef(null);

    useImperativeHandle(ref, () => ({
        value: inputRef.current ? inputRef.current.value : '',
        setDisplay: (display) => {
            if (inputRef.current) {
                inputRef.current.style.display = display;
            }
        },
        focus: () => {
            if (inputRef.current) {
                inputRef.current.focus();
            }
        }
    }));
    return (
        <p>
            {"C:\\Users\\Enigma\\arg>"}
            <span className="blink">|</span>
            <input
                type="text"
                className="command-input"
                ref={inputRef}
                onBlur={submitCommand}
                onKeyDown={handleKeyDown}
            />
        </p>
    );
});

export default ConsoleInput;

