// import Image from 'next/image';
// import style from './style.module.css';

// const Sidebar = () => {
//   return (
//     <div className={`${style.sidebarWrap} fixed top-0 left-0 h-screen overflow-y-auto w-[250px]`}>
//       <Image
//         src="/product1.png"
//         alt="product Image"
//         width={250}
//         height={50}
//       />
//       <Image
//         src="/product2.png"
//         alt="product Image"
//         width={250}
//         height={50}
//       />
//       <Image
//         src="/product3.png"
//         alt="product Image"
//         width={250}
//         height={50}
//       />
//       <Image
//         src="/product4.png"
//         alt="product Image"
//         width={250}
//         height={50}
//       />
//       <Image
//         src="/product5.png"
//         alt="product Image"
//         width={250}
//         height={50}
//       />
//       <Image
//         src="/product6.png"
//         alt="product Image"
//         width={250}
//         height={50}
//       />
//       <Image
//         src="/product7.png"
//         alt="product Image"
//         width={250}
//         height={50}
//       />
//     </div>
//   );
// }

// export default Sidebar;

"use client"
import style from './style.module.css';
import DraggableImage from './DraggableImage';

const Sidebar = () => {
  const products = [
    '/product11.png',
    '/product22.png',
    '/product33.png',
    '/product44.png',
    '/product55.png',
    '/product66.png',
    '/product77.png',
  ];

  return (
    <div className={`${style.sidebarWrap} fixed top-0 left-0 h-screen overflow-y-auto overflow-x-hidden w-[200px] flex justify-center items-center flex-col gap-4`}>
      {products.map((product, index) => (
        <DraggableImage
          key={index}
          src={product}
          alt={`Product ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default Sidebar;
