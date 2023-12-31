import React from 'react';

const SectionTitle = ({heading,subTitle}) => {
  return (
    <div className='text-center md:w-4/12  mx-auto my-12 '>
      <p className='text-yellow-500 mb-2'>--- {subTitle} ---</p>
      <h3 className='md:text-4xl text-2xl uppercase border-y-4 py-4'>{heading}</h3>
    </div>
  );
};

export default SectionTitle;