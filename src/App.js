import React, { useRef } from "react"

export default function App() {
    const nameRef = useRef();
    const emailRef = useRef()
    const passwordRef = useRef()

    function handleSubmit(e) {
        e.preventDefault()

    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="input_group">
                    <label>Name</label>
                    <input type="text" ref={nameRef}/>
                </div>
                <div className="input_group">
                    <label>Email</label>
                    <input type="text" ref={emailRef}/>
                </div>
                <div className="input_group">
                    <label>Password</label>
                    <input type="password" ref={passwordRef}/>
                </div>
                <input type="submit"/>
            </form>
        </div>
    )
}