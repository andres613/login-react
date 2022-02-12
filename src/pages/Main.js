import { useEffect } from 'react';
import Cookies from 'universal-cookie';

import "./Main.css"

const cookies = new Cookies();

export const Main = () => {
    const closeSession = () => {
        cookies.remove('id', { path: "/", sameSite: "lax" });
        cookies.remove('name', { path: "/", sameSite: "lax" });
        cookies.remove('username', { path: "/", sameSite: "lax" });
        cookies.remove('email', { path: "/", sameSite: "lax" });
        window.location.href="./";
    }

    useEffect(() => {
        if(!cookies.get('username')) {
            window.location.href='./';
        }
    })

    return (
        <div className="home">
            <div className="page-title">Main Page</div>
            <div className="element-container">
                <div className="image-wrap">
                    <img
                        className="main-image"
                        src="http://placehold.it/800x450"
                        alt=""
                    />
                </div>
                <div className="rigth">
                    <h1>Home</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of
                        type and scrambled it to make a type specimen book.
                    </p>
                    <br />
                    <div className="btn-close-session">
                        <button onClick={closeSession}>Cerrar Sesion</button>
                    </div>
                </div>
            </div>
        </div>
);
}
