import Carousel from "../common/carousel/Carousel";
import Button from "@mui/material/Button";

// const Home = () => {
//   return (
//     <div className="grid grid-cols-2 bg-slate-100	 mt-16">
//       <div className="flex flex-col items-center justify-start m-8">
//         <h2 className="text-6xl	mt-5 mb-5">Señoras del cancer</h2>
//         <p className="mb-10">
//           El cáncer de próstata es una enfermedad en la que se desarrollan
//           células malignas en la próstata. La próstata produce el líquido
//           seminal, que nutre y transporta los espermatozoides. El cáncer de
//           próstata es común en hombres mayores y suele crecer lentamente. En sus
//           etapas iniciales, puede no presentar síntomas, pero en etapas
//           avanzadas puede causar problemas urinarios, dolor en la pelvis y
//           disfunción eréctil.
//         </p>
//         <a href="/docs/prostata.pdf" download>
//           <Button
//             variant="contained"
//             sx={{
//               backgroundColor: "#15598f",
//               "&:hover": {
//                 backgroundColor: "#0E4570",
//               },
//               color: "white",
//             }}
//             size="small"
//           >
//             Más info
//           </Button>
//         </a>
//       </div>
//       <div className="flex justify-end">
//         <Carousel />
//       </div>
//     </div>
//   );
// };

const Home = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-slate-100 mt-16 pb-10 lg:pb-0">
      <div className="flex flex-col items-center justify-start m-8">
        <h2 className="text-6xl mt-5 mb-5">Señoras del cáncer</h2>
        <p className="mb-10">
          El cáncer de próstata es una enfermedad en la que se desarrollan
          células malignas en la próstata. La próstata produce el líquido
          seminal, que nutre y transporta los espermatozoides. El cáncer de
          próstata es común en hombres mayores y suele crecer lentamente. En sus
          etapas iniciales, puede no presentar síntomas, pero en etapas
          avanzadas puede causar problemas urinarios, dolor en la pelvis y
          disfunción eréctil.
        </p>
        <a href="/docs/prostata.pdf" download>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#15598f",
              "&:hover": {
                backgroundColor: "#0E4570",
              },
              color: "white",
            }}
            size="small"
          >
            Más info
          </Button>
        </a>
      </div>
      <div className="flex justify-center lg:justify-end ">
        <Carousel />
      </div>
    </div>
  );
};

export default Home;
