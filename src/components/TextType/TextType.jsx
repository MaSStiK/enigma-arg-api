"use client";
import { useState, useEffect, useContext } from "react";
import { DataContext } from "@/components/Context";

export default function TextType({ messages, onComplete, shouldRenderImmediately }) {
    const Context = useContext(DataContext);
    const [displayedText, setDisplayedText] = useState([]);

    useEffect(() => {
        let currentIndex = 0;
        let tempText = [];
        const DEFAULT_SPEED = 30;
        const DEFAULT_PAUSE = 500;

        function typeNextMessage() {
            if (currentIndex >= messages.length) {
                if (onComplete) onComplete(); // Вызываем onComplete, если он передан
                return;
            }

            const { text, speed, pause, newLine, isCode } = messages[currentIndex];
            const typingSpeed = speed === "instant" ? 0 : speed || DEFAULT_SPEED;
            const typingPause = pause === undefined ? DEFAULT_PAUSE : pause;

            console.log(Context.skipTyping);


            if (typingSpeed === 0 || isCode || text === "&nbsp;" || Context.skipTyping || shouldRenderImmediately) {
                if (newLine === false && tempText.length > 0) {
                    tempText[tempText.length - 1] += text;
                } else {
                    tempText.push(text);
                }
                setDisplayedText([...tempText]);
                currentIndex++;

                if (text !== "&nbsp;" && typingPause && !Context.skipTyping && !shouldRenderImmediately) {
                    setTimeout(typeNextMessage, typingPause);
                } else {
                    typeNextMessage();
                }
            } else {
                let charIndex = 0;
                function typeNextChar() {
                    if (charIndex < text.length) {
                        if (newLine === false && tempText.length > 0) {
                            tempText[tempText.length - 1] += text[charIndex];
                        } else {
                            if (!tempText[currentIndex]) tempText[currentIndex] = "";
                            tempText[currentIndex] += text[charIndex];
                        }
                        setDisplayedText([...tempText]);
                        charIndex++;
                        if (!Context.skipTyping) {
                            setTimeout(typeNextChar, typingSpeed);
                        } else {
                            typeNextChar();
                        }
                    } else {
                        currentIndex++;
                        if (typingPause && !Context.skipTyping) {
                            setTimeout(typeNextMessage, typingPause);
                        } else {
                            typeNextMessage();
                        }
                    }
                }
                typeNextChar();
            }
        }

        typeNextMessage();
    }, [messages, onComplete]); // Добавили зависимость onComplete

    return (
        <>
            {displayedText.map((text, index) => (
                <p key={index} dangerouslySetInnerHTML={{ __html: text }} />
            ))}
        </>
    );
}
