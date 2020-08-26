import React from 'react';
import { BesteFilmer } from './BesteFilmer';

export const FilmList = () => {
    return <div>
        <h1>Film List</h1>
        <div>
            <ol>
                <BesteFilmer name='Shawshank Redemption' year={1994} director='Frank Darabont'/>
                <img src='https://images-na.ssl-images-amazon.com/images/I/51zUbui%2BgbL._SY445_.jpg' height="200px" width="150px"></img>
                <BesteFilmer name='The Dark Knight' year={2008} director='Christopher Nolan'/>                
                <img src='https://lh3.googleusercontent.com/auIs5tjWlLYaFPGClZOJ7m5YVbnX6uBvz0X02r8TkwFKdzE53ww2MqWSS9gU0YNqoYwvpg' height="200px" width="150px"></img>
    
            </ol>
        </div>
    </div>
}
