// "use client";

// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { SplitText } from "gsap/SplitText";

// gsap.registerPlugin(ScrollTrigger, SplitText);

// export function useWorkShowcaseAnimation({
//   textRef,
//   containerRef,
//   imageRefs,
// }: {
//   textRef: React.RefObject<HTMLDivElement | null>;
//   containerRef: React.RefObject<HTMLElement | null>;
//   imageRefs: React.MutableRefObject<HTMLImageElement[]>;
// }) {
//   useGSAP(() => {
//     // Wait for all images to fully load BEFORE creating triggers
//     const allImagesLoaded = () =>
//       Promise.all(
//         imageRefs.current.map(
//           (img) =>
//             new Promise((res) => {
//               if (!img) return res(null);
//               if (img.complete) return res(null);
//               img.onload = () => res(null);
//             })
//         )
//       );

//     const createAnimations = () => {
//       //
//       // TEXT ANIMATION
//       //
//       if (textRef.current) {
//         const split = new SplitText(textRef.current, {
//           type: "words",
//           mask: "words",
//         });

//         gsap.from(split.words, {
//           scrollTrigger: {
//             trigger: containerRef.current,
//             start: "top bottom",
//             end: "top 80%",
//             scrub: false,
//           },
//           yPercent: 100,
//           rotateX: 40,
//           opacity: 0,
//           duration: 1,
//           stagger: 0.05,
//           ease: "power3.out",
//         });
//       }

//       //
//       // IMAGE ANIMATIONS
//       //
//       imageRefs.current.forEach((img) => {
//         if (!img) return;

//         gsap.fromTo(
//           img,
//           { opacity: 0.3, scale: 0.9 },
//           {
//             opacity: 1,
//             scale: 1,
//             scrollTrigger: {
//               trigger: img,
//               start: "top bottom",
//               end: "top center",
//               scrub: 1,
//               invalidateOnRefresh: true,
//             },
//             duration: 1.2,
//             ease: "power2.out",
//           }
//         );

//         gsap.fromTo(
//           img,
//           {
//             clipPath:
//               "polygon(25% 25%, 75% 40%, 100% 100%, 0% 100%)",
//           },
//           {
//             clipPath:
//               "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
//             ease: "none",
//             scrollTrigger: {
//               trigger: img,
//               start: "top bottom",
//               end: "top top",
//               scrub: 1,
//               invalidateOnRefresh: true,
//             },
//           }
//         );
//       });
//     };

//     allImagesLoaded().then(() => {
//       createAnimations();
//       ScrollTrigger.refresh();
//     });
//   }, []);
// }
