import React, {useState} from 'react'


export const DashNavbar = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  return (
    <div className= "items-center pr-5 border-b-[0.5px] border-b-stone-400 border-solid">
      <div className='flex w-[323px] max-w-full items-start justify-between gap-5 mt-2.5 max-md:justify-center' >
     
      <div 
      className={` text-base self-stretch ${selectedItem === 'Classes' ? 'text-black border-b-2 border-green-500' : 'text-gray-400'} 
                ${selectedItem !== 'Classes'? 'hover:text-slate-500 hover:text-lg': ''}`}
      onClick= {() => handleItemClick('Classes')}
      > Classes</div>
      <div
      className={` text-base self-stretch ${selectedItem === 'Students' ? 'text-black border-b-2 border-green-500' : 'text-gray-400'}
                ${selectedItem !== 'Students'? 'hover:text-slate-500 hover:text-lg': ''}`}
      onClick= {() => handleItemClick('Students')}
      > Students</div>
      <div className={` text-base self-stretch ${selectedItem === 'Attendance' ? 'text-black border-b-2 border-green-500' : 'text-gray-400'}
                 ${selectedItem !== 'Attendance'? 'hover:text-slate-500 hover:text-lg': ''}`}
      onClick= {() => handleItemClick('Attendance')}
      > Attendance</div>
      </div>
      </div>
    );
}
