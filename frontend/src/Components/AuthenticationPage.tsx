import React from "react"
import "./Login.css"

export const AuthenticationPage: React.ReactNode = () => {
    return (
        <div className="Panel">
            <div className="Login">
                <form method="post">
                    <div>
                        <label htmlFor="password">Username:</label>
                        <input type="text" name="username"/>
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password"/>
                    </div>
                    <div>
                        <button type="submit">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}