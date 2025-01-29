import { BiBookmarkAltPlus } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { BiBookmarkAltMinus } from "react-icons/bi";
import { toggleMovieList } from "../../redux/actions/listActions";
const Button = ({ movie }) => {
  const dispatch = useDispatch();
  const { list } = useSelector((store) => store);

  const isAdded = list.find((item) => item.id == movie.id);

  const handleClick = () => {
    dispatch(toggleMovieList(movie, !isAdded));
  };
  return (
    <button
      onClick={handleClick}
      className=" hero-btn bg-blue-600 hover:bg-blue-800 "
    >
      {isAdded ? (
        <>
          {" "}
          <BiBookmarkAltMinus />
          Listeden Kaldır
        </>
      ) : (
        <>
          {" "}
          <BiBookmarkAltPlus />
          Listeye Ekle
        </>
      )}
    </button>
  );
};

export default Button;
