import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
HeaderNav.propTypes = {
    isLogin:PropTypes.bool,
    navValue:PropTypes.arrayOf(
        PropTypes.shape({
            value:PropTypes.string,
            link:PropTypes.string
        })
    )
};
HeaderNav.defaultProps ={
    isLogin:false,
    navValue:[]
}
function HeaderNav(props) {
    // let links = ['Features', 'Enterprise', 'Support','Pricing'];
    // 
    // let links = [
    //     {
    //         value:'Features',
    //         link:'test-link'
    //     },
    //     {
    //         value:'Enterprise',
    //         link:'test-link2'
    //     },
    //     {
    //         value:'Support',
    //         link:'test-link3'
    //     },
    //     {
    //         value:'Pricing',
    //         link:'test-link4'
    //     }
    // ];

    let linksEl = props.navValue.map((item, index)=>{
        return <a key={index} className="me-3 py-2 text-dark text-decoration-none" href={item.link}>{item.value}</a>
    });
    if(props.isLogin){
        return(
            <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                <Link className="me-3 py-2 text-dark text-decoration-none" to='/'>Home</Link>
                <Link className="me-3 py-2 text-dark text-decoration-none" to='/about'>About</Link>
                <Link className="me-3 py-2 text-dark text-decoration-none"  to='/country'>Country</Link>

                {/* {linksEl} */}
                {/* <a className="me-3 py-2 text-dark text-decoration-none" href="#">Features</a>
                <a className="me-3 py-2 text-dark text-decoration-none" href="#">Enterprise</a>
                <a className="me-3 py-2 text-dark text-decoration-none" href="#">Support</a>
                <a className="py-2 text-dark text-decoration-none" href="#">Pricing</a> */}
            </nav>            
        )
    }
    else{
        return(
            <button className='btn btn-primary'>
                Login
            </button>            
        )
    }
    // let nav =  <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
    //     <a className="me-3 py-2 text-dark text-decoration-none" href="#">Features</a>
    //     <a className="me-3 py-2 text-dark text-decoration-none" href="#">Enterprise</a>
    //     <a className="me-3 py-2 text-dark text-decoration-none" href="#">Support</a>
    //     <a className="py-2 text-dark text-decoration-none" href="#">Pricing</a>
    // </nav>

    // let loginBtn = <button className='btn btn-primary'>
    //     Login
    // </button>  
    // return (
    //     props.isLogin ? nav:loginBtn
    // );
}

export default HeaderNav;