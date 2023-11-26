import React from "react";

function ShowEducation({school,univer,achievements}){

    return(
        <div className="showInfo">
            <h3>Образование</h3>
            <p>Школа:{school}</p>
            <p>Университет: {univer}</p>
            <p>Достижения в учебе:</p>
            <p className="achievements">{achievements}</p>
                             
        </div>
    );
}

export default ShowEducation;