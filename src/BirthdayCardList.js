import React, {useState} from "react";
import BirthdayCard from "./BirthdayCard";
import {users} from "./data";

const BirthdayCardList = () => {
    const [birthdays, setBirthdays] = useState(users);

    const removeAll = () => {
        setBirthdays([])
    }
    const remove = (id) => {
        setBirthdays((oldBirthdays) => {
            let newBirthdays = birthdays.filter((birthday) => birthday.id !== id)
            return newBirthdays;
        })
        users.filter((user) => user.id !== id)
    }
    return <div className='list'>
        <h4>{birthdays.length} Birthdays today</h4>
        {birthdays.map((user) => {
            return <BirthdayCard {...user} key={user.id} remove={()=>remove(user.id)} />
        })}
        <button className="btn" onClick={removeAll}>Delete all</button>
    </div>
}

export default BirthdayCardList