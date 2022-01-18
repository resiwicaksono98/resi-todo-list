import React from 'react';

const Donebutton = ({...rest}) => {
    return (
           <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded' {...rest}>Tugas Selesai </button>
    );
}

export default Donebutton;
