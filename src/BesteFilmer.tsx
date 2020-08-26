import React from 'react';

type FilmProps= {
    name: string,
    year: number,
    director: string
}

export const BesteFilmer = ({name, year, director} :FilmProps) => {
    return <li>
        Name: <span>
            {name}
        </span><br /> 

        Year: <span>
            {year}
        </span><br />

        Director: <span>
            {director}
        </span><br />
    </li>
}

