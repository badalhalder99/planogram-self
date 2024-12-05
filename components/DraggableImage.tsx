"use client"
import { useDrag } from 'react-dnd';

interface DraggableImageProps {
  src: string;
  alt: string;
}

const DraggableImage = ({ src, alt }: DraggableImageProps) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'IMAGE',
    item: { src },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={(node) => { if (node) drag(node); }}  // Callback ref for drag
      className={` ${isDragging ? 'opacity-50' : 'opacity-100'}`}
    >
      <img
        src={src}
        alt={alt}
        className='w-auto h-auto'
      />
    </div>
  );
};

export default DraggableImage;

