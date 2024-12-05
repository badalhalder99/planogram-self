// import style from './style.module.css';

// const Content = () => {
//   return (
//     <div className={`${style.contentWrap} ml-[250px] flex justify-center items-center h-screen`}>
//       <div className="w-[700px] h-[380px] rounded-lg py-4 px-5 bg-[#ddd] grid grid-cols-1 gap-2">
//         <div className='h-[50px] bg-[#fff] grid grid-cols-5 gap-3'>
//           <div className="1 bg-red-200"></div>
//           <div className="1 bg-red-200"></div>
//           <div className="1 bg-red-200"></div>
//           <div className="1 bg-red-200"></div>
//           <div className="1 bg-red-200"></div>
//         </div>
//         <div className='h-[50px] bg-[#fff] grid grid-cols-5 gap-3'>
//           <div className="1 bg-red-200"></div>
//           <div className="1 bg-red-200"></div>
//           <div className="1 bg-red-200"></div>
//           <div className="1 bg-red-200"></div>
//           <div className="1 bg-red-200"></div>
//         </div>
//         <div className='h-[50px] bg-[#fff] grid grid-cols-5 gap-3'>
//           <div className="1 bg-red-200"></div>
//           <div className="1 bg-red-200"></div>
//           <div className="1 bg-red-200"></div>
//           <div className="1 bg-red-200"></div>
//           <div className="1 bg-red-200"></div>
//         </div>
//         <div className='h-[50px] bg-[#fff] grid grid-cols-5 gap-3'>
//           <div className="1 bg-red-200"></div>
//           <div className="1 bg-red-200"></div>
//           <div className="1 bg-red-200"></div>
//           <div className="1 bg-red-200"></div>
//           <div className="1 bg-red-200"></div>
//         </div>
//         <div className='h-[50px] bg-[#fff] grid grid-cols-5 gap-3'>
//           <div className="1 bg-red-200"></div>
//           <div className="1 bg-red-200"></div>
//           <div className="1 bg-red-200"></div>
//           <div className="1 bg-red-200"></div>
//           <div className="1 bg-red-200"></div>
//         </div>
//         <div className='h-[50px] bg-[#fff] grid grid-cols-5 gap-3'>
//           <div className="1 bg-red-200"></div>
//           <div className="1 bg-red-200"></div>
//           <div className="1 bg-red-200"></div>
//           <div className="1 bg-red-200"></div>
//           <div className="1 bg-red-200"></div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Content;

// "use client"
// import { useState } from 'react';
// import style from './style.module.css';
// import DroppableCell from './DroppableCell';

// const Content = () => {
//   const [cells, setCells] = useState<(string | null)[]>(Array(96).fill(null));

//   const handleDrop = (index: number, imageSrc: string) => {
//     setCells(prev => {
//       const newCells = [...prev];
//       newCells[index] = imageSrc;
//       return newCells;
//     });
//   };

//   return (
//     <div className={`${style.contentWrap} ml-[250px] flex justify-center items-center h-screen bg-gray-50`}>
//       <div className="w-[700px] h-[380px] rounded-lg py-4 px-5 bg-gray-200 shadow-lg">
//         <div className={`${style.eachRowWrap} h-full`}>
//           {cells.map((cell, index) => (
//             <DroppableCell
//               key={index}
//               onDrop={(imageSrc) => handleDrop(index, imageSrc)}
//               image={cell}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Content;


"use client"
import { useState } from 'react';
import style from './style.module.css';
import DroppableCell from './DroppableCell';

const Content = () => {
  // Create an array of 6 rows, each row can hold multiple products
  const [rows, setRows] = useState<Array<Array<string>>>([[], [], [], [], [], []]);

  const handleDrop = (rowIndex: number, imageSrc: string) => {
    setRows(prevRows => {
      const newRows = [...prevRows];
      newRows[rowIndex] = [...newRows[rowIndex], imageSrc];
      return newRows;
    });
  };

  return (
    <div className="ml-[200px] flex justify-center items-center h-screen bg-[#fff]">
      <div className="w-[700px] h-[420px] rounded-lg py-4 px-5 bg-gray-200 shadow-lg overflow-hidden">
        <div className="flex flex-col gap-y-[11px]">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="h-[55px] bg-white rounded flex items-end"
            >
              {row.map((image, imageIndex) => (
                <img
                  key={imageIndex}
                  src={image}
                  alt={`Product ${imageIndex + 1}`}
                  className={`${style.draggedImage} object-contain`}
                />
              ))}
              <DroppableCell
                onDrop={(imageSrc) => handleDrop(rowIndex, imageSrc)}
                image={null}
                isEmpty={row.length === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;


