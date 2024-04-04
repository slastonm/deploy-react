import React from 'react';
import PropTypes from 'prop-types';

TexComponent.propTypes ={
    title:PropTypes.string,
    text:PropTypes.string
}
TexComponent.defaultProps ={
    title:'No info about product',
    text:'Any description'
}
function TexComponent(props) {
    return (
        <>
          <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
            <h1 className="display-4 fw-normal">{props.title}</h1>
            <p className="fs-5 text-muted">{props.text}</p>
            </div>            
        </>


    );
}

export default TexComponent;