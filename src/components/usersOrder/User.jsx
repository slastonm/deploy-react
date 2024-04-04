import React,{useContext} from 'react';
import { UserContext} from './Main';
function User(props) {
    // const team = useContext(UserContext)
    const {team, orderCount, toggleOrder, users} = useContext(UserContext)

    return (
        <div className='col-4 border'>
            <h5>
                {team} all team {users.length} order team {orderCount}
            </h5>
            <h4>
                {props.user}
            </h4>
            <div className='py-1'>
                {
                    props.skills.map((item, index)=>{
                        return <span className="badge text-bg-primary d-inline-block me-1" key={index}>{item}</span>

                    })
                }
            </div>
            <div className='pb-1'>
                <span className={props.order?'badge text-bg-danger':'badge text-bg-success'}>
                    {props.order?'Ordered':'Not order'}
                </span>
            </div>
            <div className='text-center py-1'>
                <button className='btn btn-primary' onClick={()=>toggleOrder(props.index)}>Order</button>
            </div>
        </div>
    );
}

export default User;