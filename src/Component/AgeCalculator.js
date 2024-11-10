import { useState } from 'react';
import './AgeCalculator.css'

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    if (!birthDate) return;
    const birthDateArray = birthDate.split('-');
    const birthYear = parseInt(birthDateArray[0]);
    const birthMonth = parseInt(birthDateArray[1]);
    const birthDay = parseInt(birthDateArray[2]);
    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth() + 1;
    const todayDay = today.getDate();

    let ageYear = todayYear - birthYear;
    let ageMonth = todayMonth - birthMonth;
    let ageDay = todayDay - birthDay;

    if (ageMonth < 0) {
      ageYear--;
      ageMonth += 12;
    }

    if (ageDay < 0) {
      ageMonth--;
      if (ageMonth < 0) {
        ageYear--;
        ageMonth += 12;
      }
      const daysInMonth = new Date(todayYear, todayMonth - 1, 0).getDate();
      ageDay += daysInMonth;
    }

    setAge(`${ageYear} years, ${ageMonth} months, ${ageDay} days`);
  };



  const resetCalculator = () => {
    setBirthDate (' ')
    setAge(0);
}

  return (
    <div className="container">
      <h2 className=" ">Age Calculator</h2>
      <div className=" ">
        <input className="date"
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          
        />
      </div>
      <button onClick={calculateAge} className=" btn"> Calculate Age </button>
      <button className="btn" onClick={resetCalculator}> Reset </button>
      
      {age && (
        <p className="">
          Your age is: <span className="">{age}</span>
          <h1 className='age_heading'>{age > 0 ? ` ${age}` : ''}</h1>
        </p>
      )}
    </div>
  );
};

export default AgeCalculator;