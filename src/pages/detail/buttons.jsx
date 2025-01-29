import { Link } from "react-router-dom";
import { TbArrowBackUp } from "react-icons/tb";
import Button from "../../components/button";
const Buttons = ({ movie }) => {
  return (
    <div className="flex mb-5 justify-between ">
      <Link
        to={".."}
        className="bg-gray-700 hero-btn hover:bg-gray-800 min-w-0 px-5"
      >
        <TbArrowBackUp className="text-xl" />
        Geri
      </Link>

      <Button movie={movie} />
    </div>
  );
};

export default Buttons;
