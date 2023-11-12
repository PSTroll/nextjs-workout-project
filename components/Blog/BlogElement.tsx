// import React from "react";
// import { BlogElementProps } from "@/types";
// import Image from "next/image";
// import Link from "next/link";

// const BlogElement = ({
//   id,
//   title,
//   content,
//   imagesrc,
//   snippet,
//   date,
//   slug,
// }: BlogElementProps) => {
//   return (
//     <Link href={`/blog/${id}`}>
//       <div className="rounded-xl shadow-md max-w-[350px] mx-5 bg-white cursor-pointer hover:scale-105 transition-all duration-300">
//         <Image
//           src={imagesrc}
//           alt={title}
//           width={350}
//           height={300}
//           className="rounded-t-xl"
//         />
//         <div className="p-3">
//           <h3 className=" font-bold text-lg">{title}</h3>
//           <p>{snippet}</p>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default BlogElement;
