"use client";

export default function ProductCard() {
    <div
                className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[6.07692289352417px]"
              >
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle cx="8.88464" cy="8" r="8" fill="#23A6F0"></circle></svg>
                  <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle cx="8.96155" cy="8" r="8" fill="#23856D"></circle></svg>
                  <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle cx="8.03851" cy="8" r="8" fill="#E77C40"></circle></svg>
                  <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle cx="8.11542" cy="8" r="8" fill="#23856D"></circle>
                </svg>
              </div>
//   const [selectedColor, setSelectedColor] = useState<string | null>(null);

//   // Define color options
//   const colorOptions = [
//     { color: "Black", label: "Blue" },
//     { color: "Green", label: "Green" },
//     { color: "Orange", label: "Orange" },
//     { color: "Purple", label: "Dark Green" },
//   ];

//   // Handle color selection
//   const handleColorSelect = (color: string) => {
//     setSelectedColor(color);
//     console.log(`Selected color: ${color}`); // Replace with actual functionality
//   };

//   return (
//     <div>
//       {/* Color Selector */}
//       <div className="flex justify-center items-center gap-3 mt-4">
//         {colorOptions.map((option, index) => (
//           <button
//             key={index}
//             onClick={() => handleColorSelect(option.color)}
//             className={`gap-5 w-6 h-6 rounded-full border-2 ${
//               selectedColor === option.color ? "border-black" : "border-transparent"
//             }`}
//             style={{ backgroundColor: option.color }}
//             title={`Select ${option.label}`}
//           ></button>
//         ))}
//       </div>

//       {/* Selected Color Display */}
//       {selectedColor && (
//         <p className="text-center text-sm text-gray-700 mt-2">
//           Selected color: <span style={{ color: selectedColor }}>{selectedColor}</span>
//         </p>
//       )}
//     </div>
//   );
}
