"use client"
import Image from "next/image";
import { useContext } from "react";
import { DataContext } from "@/components/Context";

import "./ConsoleTop.css";

export default function ConsoleTop() {
    const Context = useContext(DataContext)
    function skipTyping() {
        Context.setSkipTyping(true)
        setTimeout(() => {
            Context.setSkipTyping(false)
        }, 500);
    }

    return (
        <div className="console-top">
            <Image
                src={"/Cmd-icon.svg"}
                alt="cmd-icon"
                width={16}
                height={16}
                draggable="false"
                priority
            />
            <p className="console-top__path-pc">C:\Windows\system32\cmd.exe</p>
            <p className="console-top__path-mobile">cmd.exe</p>
            <div className="console-top__controls">
            <button onClick={skipTyping}>
                <Image
                    src={"/Minimize.svg"}
                    alt="Minimize"
                    width={18}
                    height={18}
                    draggable="false"
                    priority
                />
            </button>
            <button onClick={skipTyping}>
                <Image
                    src={"/Maximize.svg"}
                    alt="Maximize"
                    width={18}
                    height={18}
                    draggable="false"
                    priority
                />
            </button>
            <button onClick={skipTyping}>
                <Image
                    src={"/Close.svg"}
                    alt="Close"
                    width={18}
                    height={18}
                    draggable="false"
                    priority
                />
            </button>
            </div>
        </div>
    )
}