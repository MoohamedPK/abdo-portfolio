// "use client";

// import { RefObject } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// // ScrollTrigger.normalizeScroll(true); // keep this outside

// export function useClipPathAnimation(ref: RefObject<HTMLImageElement | null>) {
//   const mm = gsap.matchMedia();

//   useGSAP(() => {
//     if (!ref.current) return;

//     const img = ref.current;

//     // --- FIX STARTS HERE ---
//     const createTriggers = () => {
//       mm.add("(max-width: 768px)", () => {
//         const tl = gsap.timeline({
//           scrollTrigger: {
//             trigger: img,
//             start: "top bottom",
//             end: "top top",
//             scrub: 1.5,
//             markers:true,
//             invalidateOnRefresh: true,
//           },
//         });

//         tl.fromTo(
//           img,
//           { opacity: 0.3, scale: 0.8 },
//           { opacity: 1, scale: 1, duration: 1.5 }
//         );
//       });

//       mm.add("(min-width: 769px)", () => {
//         ScrollTrigger.create({
//           trigger: img,
//           start: "top bottom",
//           end: "top top",
//           scrub: 0.5,
//           invalidateOnRefresh: true,
//           animation: gsap.fromTo(
//             img,
//             { clipPath: "polygon(25% 25%, 75% 40%, 100% 100%, 0% 100%)" },
//             {
//               clipPath:
//                 "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
//               ease: "none",
//             }
//           ),
//         });

//         ScrollTrigger.create({
//           trigger: img,
//           start: "bottom bottom",
//           end: "bottom top",
//           scrub: 0.5,
//           invalidateOnRefresh: true,
//           animation: gsap.fromTo(
//             img,
//             {
//               clipPath:
//                 "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
//             },
//             {
//               clipPath:
//                 "polygon(0% 0%, 100% 0%, 75% 60%, 25% 75%)",
//               ease: "none",
//             }
//           ),
//         });
//       });
//     };
//     // --- FIX ENDS HERE ---

//     // Wait until the image is fully loaded BEFORE setting ScrollTriggers
//     if (!img.complete) {
//       img.onload = () => {
//         createTriggers();
//         ScrollTrigger.refresh();
//       };
//     } else {
//       createTriggers();
//       ScrollTrigger.refresh();
//     }

//     return () => {
//       mm.kill();
//       ScrollTrigger.getAll().forEach((st) => st.kill());
//     };
//   }, []);
// }
