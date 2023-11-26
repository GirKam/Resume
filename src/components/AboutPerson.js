
import React from 'react';
import { useState } from 'react';
import ShowInformation from './ShowInformation';
import ShowEducation from './ShowEducation';
import ShowExperience from './ShowExperience';

function AboutPerson(){
    const [person, setPerson] = useState(
        {
          firstName: '',
          lastName: ' ',
          email: ' ',
          age: '',
          phone: ' '
        });
    
      const handleFirstName = (e)=>{
        setPerson({...person, firstName: e.target.value})
      };      
      const handleLastName = (e) =>{
        setPerson({...person,lastName: e.target.value})
      };
      const handleEmail = (e) =>{
        setPerson({...person,email: e.target.value})
      };
      const handleAge = (e) =>{
        setPerson({...person,age: e.target.value})
      };
      const handlePhone = (e) =>{
        setPerson({...person,phone: e.target.value})
      };


      const [educationInfo, setEducationInfo] = useState(
        {
          school: '',
          universati: ' ',
          achievements: ' '        
        });
        const handleEducation = (e)=>{
            setEducationInfo({...educationInfo, school: e.target.value})
        }
        const handleEducationUniver = (e)=>{
          setEducationInfo({...educationInfo, universati: e.target.value})
        }
        const handleAchievements = (e)=>{
          setEducationInfo({...educationInfo, achievements: e.target.value})
        }
        const [experience, setExperience] = useState(
        {
          compani: '',
          work_experience: '',
          position: ' ',
          job_description: ' '
        });

        const handleCompani = (e)=>{
          setExperience({...experience, compani: e.target.value})
        }
      
        const handleWorkExperiense = (e)=>{
          setExperience({...experience, work_experience: e.target.value})
        }
        const handlePosition = (e)=>{
          setExperience({...experience, position: e.target.value})
        }
        const handleJobDesc = (e)=>{
          setExperience({...experience, job_description: e.target.value})
        }
          

      return (
      <div className='boxApp'>        
        <div className='input'>
          <div className='inputInfoPerson about_person' >
          <h3>About Person</h3>
            <div>
              <p className='paragraph'> Имя
                <input className='ww'
                  type="text"
                  placeholder='Firstname'
                  onChange={handleFirstName} />
              </p>

              <p className='paragraph'> Фамилия
                <input className='ww'
                  type="text"
                  placeholder='Lastname'
                  onChange={handleLastName} />
              </p>

              <p className='paragraph'> Возраст
                <input className='ww'
                  type="number"
                  placeholder='Age'
                  onChange={handleAge} />
              </p>

              <p className='paragraph'> Email
                <input className='ww'
                  type="email"
                  placeholder='Email'
                  onChange={handleEmail} />
              </p>
              <p className='paragraph'> Телефон
                <input className='ww'
                  type="number"
                  placeholder='phone'
                  onChange={handlePhone} />
              </p>
            </div>
          </div>      
        
          <div className="inputInfoPerson about_education">
                <h3>About education</h3>
                <div>
                    <label className='paragraph'>Info School
                        <input className='ww'
                        type="text"
                        placeholder="School"
                        onChange={handleEducation}
                        />
                    </label>
                </div>

                <div>
                    <label className='paragraph'>Info Univer
                        <input className='ww'
                        type="text"
                        placeholder="University"
                        onChange={handleEducationUniver}
                        />
                    </label>
                </div>

                <div>
                    <label className='paragraph'>Achievements
                        <textarea className='ww'
                        type="text"
                        rows={5}
                        cols={25}
                        placeholder="achievements"
                        onChange={handleAchievements}
                        >
                        </textarea>
                    </label>
                </div>
            </div>

          <div className="inputInfoPerson">
          <h3>About experience</h3>
                <div>
                    <label className='paragraph'>Имя компании
                        <input className='ww'
                        type="text"
                        placeholder="Name company"
                        onChange={handleCompani}
                        />
                    </label>
                </div>
                <div>
                    <label className='paragraph'>Опыт работы
                        <input className='ww'
                        type="text"
                        placeholder="work experience"
                        onChange={handleWorkExperiense}
                        />
                    </label>
                </div>
                <div>
                    <label className='paragraph'>Позиция
                        <input className='ww'
                        type="text"
                        placeholder="position"
                        onChange={handlePosition}
                        />
                    </label>
                </div>
                <div>
                    <label className='paragraph'>Описание работы
                        <textarea className='ww'
                        type="text"
                        rows={4}
                        cols={25}
                        placeholder="job description"
                        onChange={handleJobDesc}
                        >
                        </textarea>
                    </label>
                </div>

            </div>  
        </div>

         <div className="showInformation">
          <div className="finalShow">
            <ShowInformation 
              firstName = {person.firstName}
              lastName = {person.lastName}
              email = {person.email}
              age = {person.age}
              phone = {person.phone}
            />
          </div>
          <div className="finalShow">
            <ShowEducation
                school={educationInfo.school}
                univer = {educationInfo.universati}
                achievements = {educationInfo.achievements}
                job = {educationInfo.job_description}
                />             
          </div>

          <div className="finalShow">
            <ShowExperience
              compani = {experience.compani}
              work = {experience.work_experience}
              position ={experience.position}
              job = {experience.job_description}
            />
          </div>
          
         </div>
      </div>
      );
}
export default AboutPerson;