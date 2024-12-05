// "use client"
// import { useDrop } from 'react-dnd';
// import Image from 'next/image';

// interface DroppableCellProps {
//   onDrop: (imageSrc: string) => void;
//   image: string | null;
// }

// const DroppableCell = ({ onDrop, image }: DroppableCellProps) => {
//   const [{ isOver }, drop] = useDrop(() => ({
//     accept: 'IMAGE',
//     drop: (item: { src: string }) => {
//       onDrop(item.src);
//     },
//     collect: (monitor) => ({
//       isOver: !!monitor.isOver(),
//     }),
//   }));

//   return (
//     <div
//       ref={(node) => { if (node) drop(node); }}
//       className={`w-full h-[50px] transition-colors duration-200 flex items-end justify-start ${
//         isOver ? 'bg-blue-100' : image ? 'bg-white' : 'bg-[#fff]'
//       }`}
//     >
//       {image && (
//         <Image
//           src={image}
//           alt="Dropped image"
//           width={250}
//           height={250}
//           className="w-auto h-auto"
//         />
//       )}
//     </div>
//   );
// };

// export default DroppableCell;


"use client"
import { useDrop } from 'react-dnd';

interface DroppableCellProps {
  onDrop: (imageSrc: string) => void;
  image: string | null;
  isEmpty: boolean;
}

const DroppableCell = ({ onDrop, isEmpty }: DroppableCellProps) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'IMAGE',
    drop: (item: { src: string }) => {
      onDrop(item.src);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={(node) => { if (node) drop(node); }}
      className={`h-full w-full transition-colors duration-200 flex items-end justify-start ${
        isOver ? 'bg-blue-100' : isEmpty ? 'bg-[#fff]' : 'bg-white'
      }`}
    />
  );
};

export default DroppableCell;




