import React from 'react';

export default class Profile extends React.Component {
    render() {
        return (
            <div>
                <h1>Страница профиля</h1>
                <p>На эту страницу возможно попасть только после авторизации. Если вы оказались на этой странице,</p>
                <p>значит вы прошли очень простую авторизацию...</p>
            </div>
        );
    }
}