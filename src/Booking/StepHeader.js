import React from 'react';

function StepHeader() {
  return <div className='container'>
    <div className='row'>
      <div className='col-md-2'>
        <img src="logos.png" width="277px" height="60px" className='mt-3'/>
      </div>
      <div className='col'></div>
      <div className='col-md-8 text-right'>
        <button className='btn btn-primary mr-3' type="button">Call to book 0800 030 5500</button>
        <img src="pro.png" width="84px" className=' p-3'/>
        <img src="Locks.png" width="46px" />
      </div>
    </div>
      
  </div>;
}

export default StepHeader;
