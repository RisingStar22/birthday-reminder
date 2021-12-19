import {users} from "./data";

const BirthdayCard = (props) => {
    const {id, name, profilePic, age,remove} = props;


    return <div className='card'>
        <img src={profilePic} alt=""/>
        <div>
            <h3>{name}</h3>
            <p>{age} years</p>
        </div>
        <button className="btn outline" onClick={()=>remove(id)}>remove</button>
    </div>
}

export default BirthdayCard