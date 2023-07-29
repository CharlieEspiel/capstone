import React from "react";
import "./ErrPage.css";
const ErrorPage = () => {
    return (
        <div id="error-page">
            <div className="content">
                <h2 className="header" data-text="404">
                    404
                </h2>
                <h4 data-text="Opps! Page not found">Opps! Page not found</h4>
                <p>
                    Sorry, the page you're looking for doesn't exist. If you
                    think something is broken, report a problem.
                </p>
                <div className="btns">
                    <a href="https://www.codingnepalweb.com/">return home</a>
                    <a href="https://www.codingnepalweb.com/">report problem</a>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
