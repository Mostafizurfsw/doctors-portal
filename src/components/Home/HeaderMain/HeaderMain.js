import React from 'react';
import chair from '../../../images/chair.png';

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#3A4256'}}>Your New Smile <br/> Starts Here.</h1>
                <p className="text-secondary">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis quos adipisci eaque, rerum fugit assumenda.
                </p>
                <button className="btn btn-success">GET APPOINMENT</button>
            </div>
            <div className="col-md-6">
                <img className="img-fluid" src={chair} alt=""/>
            </div>
        </main>
    );
};

export default HeaderMain;