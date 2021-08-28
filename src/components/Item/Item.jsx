import React from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { Button } from "../../App.style";
import {
  ContentWrapper,
  ImageWrapper,
  ItemBottomContent,
  ItemContainer,
  ItemDesc,
  ItemFavorite,
  ItemImg,
  ItemPrice,
  ItemStock,
  ItemTitle,
  ItemTopContent,
} from "./Item.style";

function Item(props) {
  const { item = {} } = props;

  const {
    id,
    image_url,
    stock,
    productName,
    price,
    productDescription,
    favorite,
  } = item;

  return (
    <ItemContainer>
      <ImageWrapper>
        <ItemImg src={image_url} alt={""} />
        <ItemFavorite>
          {favorite ? <MdFavorite size={25} /> : <MdFavoriteBorder size={25} />}
        </ItemFavorite>
      </ImageWrapper>
      <ContentWrapper>
        <ItemTopContent>
          <ItemTitle title={productName}>{productName}</ItemTitle>
          <ItemPrice>{`${price}€`}</ItemPrice>
        </ItemTopContent>
        {productDescription && (
          <ItemDesc title={productDescription}>{productDescription}</ItemDesc>
        )}
      </ContentWrapper>
      <ItemBottomContent>
        {stock && <ItemStock>{`${stock} left`}</ItemStock>}
        <Button>add</Button>
      </ItemBottomContent>
    </ItemContainer>
  );
}

export default Item;
