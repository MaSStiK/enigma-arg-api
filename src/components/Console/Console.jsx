"use client"
import { useState, useEffect, useContext, useRef, useCallback } from "react";
import { DataContext } from "@/components/Context";
import ConsoleTop from "@/components/ConsoleTop/ConsoleTop";
import TextType from "@/components/TextType/TextType";
import messages from "@/components/messages";
import ConsoleInput from "@/components/ConsoleInput/ConsoleInput";

import "./Console.css";

export default function Console() {
    const commandInputRef = useRef(null);

    const [consoleBlocks, setConsoleBlocks] = useState([
        { id: 0, messages: messages, shouldRenderImmediately: false }
    ]);

    const completeTyping = useCallback(() => {
        console.log("completeTyping()");
        if (commandInputRef.current) {
            commandInputRef.current.setDisplay('block');
            commandInputRef.current.focus();
        }
    }, []);

    const submitCommand = useCallback(() => {
        console.log("submitCommand");
        if (commandInputRef.current) {
            console.log(commandInputRef.current.value);
            commandInputRef.current.setDisplay('none');

            setConsoleBlocks(prevBlocks => {
                const copiedConsoleBlocks = prevBlocks.map(block => ({...block, shouldRenderImmediately: true}));
                return [
                    ...copiedConsoleBlocks,
                    { id: prevBlocks.length, messages: [{text: commandInputRef.current.value}], shouldRenderImmediately: false }
                ];
            });
        }
    }, []);

    const handleKeyDown = useCallback((e) => {
        if (e.key === "Enter") {
            submitCommand();
        }
    }, [submitCommand]);

    return (
        <div className="console">
            <ConsoleTop />

            <div className="console-inner">
                <div className="console-text">
                    <p>Microsoft Windows [Version 10.0.22631.4890]</p>
                    <p>(с) Корпорация Майкрософт (Microsoft Corporation), 2025. Все права защищены.</p>
                    <p>&nbsp;</p>
                </div>  

                <div className="console-text" id="console-content">
                    {consoleBlocks.map(block => (
                        <TextType
                            key={block.id}
                            messages={block.messages}
                            onComplete={completeTyping}
                            shouldRenderImmediately={block.shouldRenderImmediately}
                        />
                    ))}

                    <ConsoleInput
                        ref={commandInputRef}
                        submitCommand={submitCommand}
                        handleKeyDown={handleKeyDown}
                    />
                </div>
            </div>
        </div>
    )
}

