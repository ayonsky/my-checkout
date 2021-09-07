import React from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

function Favorite(props) {
  const { favorite = false, onClick, ...rest } = props;

  return (
    <div onClick={onClick} {...rest}>
      {favorite ? <MdFavorite size={25} /> : <MdFavoriteBorder size={25} />}
    </div>
  );
}

export default Favorite;
