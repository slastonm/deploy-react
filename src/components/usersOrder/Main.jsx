import React, {createContext, useState} from 'react';
import List from './List';
export const UserContext = createContext();
function Main(props) {
    const [users, setUsers] = useState(
        [
            {
              user: 'Tom',
              skills: ['html', 'css'],
              order: false
            },
            {
              user: 'Bob',
              skills: ['html', 'css', 'js'],
              order: false
            },
            {
              user: 'Diana',
              skills: ['Figma', 'UI/UX'],
              order: false
            }
          ]
    );
    const [orderCount, setOrderCount] = useState(0);
    const toggleOrder = (index)=>{
        const newUsers = users.map((user, idx)=>{
            if(idx === index){
                user.order ? setOrderCount(orderCount -1):setOrderCount(orderCount+1);
                return {...user, order:!user.order};
            }   
            return user;
        });
        setUsers(newUsers);
    }
    const [team, setTeam] = useState('Comand A');
    return (
        <div>
            <h1 className='text-center'>
                Manin component {team}
            </h1>
            {/* <UserContext.Provider value={team}>
                <List users={users}></List>
            </UserContext.Provider> */}
            <UserContext.Provider value={{team, orderCount, toggleOrder, users}}>
                <List users={users}></List>
            </UserContext.Provider>
        </div>
    );
}

export default Main;