import React from "react";

function ShowExperience({compani,work,position,job}){

    return(
        <>
        <div className="showInfo">
            <h3>Опыт работы</h3>
            <p>Компания:{compani}</p>
            <p> Опыт работы: {work}</p>
            <p>Позиция:{position}</p>
            <p>Описание работы:</p>
            <p className="achievements">{job}</p>
                             
        </div>
        </>
    );

}

export default ShowExperience;
