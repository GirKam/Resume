import React from "react";

function ShowInformation  ({firstName,lastName,age,email,phone}){

    return(
        <>
        <h2 style={{background: 'bisque'}}>Резюме</h2>
        <div className="showInfoPerson">
             
            <div className="FIO">
                <p>Ваше имя: {firstName}</p>
                <p>Фамилия: {lastName}</p>
                <p>E-mail: {email}</p>
            </div>
            <div className="BasicInfo">
                <p>Возраст: {age}</p>                
                <p>Телефон: {phone}</p>
            </div>      
        </div>
        </>
    );
}

export default ShowInformation;