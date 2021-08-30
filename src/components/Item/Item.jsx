import React from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { Button } from "../../App.style";
import useProducts from "../../hooks/useProducts";
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
  const { addProduct, updateProduct } = useProducts();
  const { item = {} } = props;
  const { image_url, stock, productName, price, productDescription, favorite } =
    item;

  const handleToggleFavorite = (product) => {
    const updatedProduct = {
      ...product,
      favorite: product.favorite === 0 ? 1 : 0,
    };
    updateProduct(updatedProduct);
  };

  const handleAddToCart = (product) => {
    if (product.stock === 0) return;
    const updateProductStock = {
      ...product,
      stock: product.stock > 0 ? product.stock - 1 : 0,
    };
    addProduct(updateProductStock);
  };

  return (
    <ItemContainer>
      <ImageWrapper>
        <ItemImg src={image_url} alt={""} />
        <ItemFavorite
          onClick={(e) => {
            e.stopPropagation();
            handleToggleFavorite(item);
          }}
        >
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
        <ItemStock>{`${stock} left`}</ItemStock>
        <Button
          stock={stock}
          onClick={(e) => {
            e.stopPropagation();
            handleAddToCart(item);
          }}
        >
          add
        </Button>
      </ItemBottomContent>
    </ItemContainer>
  );
}

export default Item;
