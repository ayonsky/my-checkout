import React from "react";
import { Button } from "../../../components/Button/Button.style";
import Favorite from "../../../components/Favorite/Favorite";
import useCart from "../../../hooks/useCart";
import useProduct from "../../../hooks/useProduct";
import {
  ContentWrapper,
  FavoriteIconWrapper,
  ImageWrapper,
  ProductBottomContent,
  ProductContainer,
  ProductDesc,
  ProductImg,
  ProductPrice,
  ProductStock,
  ProductTitle,
  ProductTopContent,
} from "./Product.style";

function Product(props) {
  const { addProduct } = useCart();
  const { updateProduct } = useProduct();
  const { product = {} } = props;
  const { image_url, stock, productName, price, productDescription, favorite } =
    product;

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
    <ProductContainer>
      <ImageWrapper>
        <ProductImg src={image_url} alt={""} />
        <FavoriteIconWrapper>
          <Favorite
            favorite={favorite}
            onClick={(e) => {
              e.stopPropagation();
              handleToggleFavorite(product);
            }}
          />
        </FavoriteIconWrapper>
      </ImageWrapper>
      <ContentWrapper>
        <ProductTopContent>
          <ProductTitle title={productName}>{productName}</ProductTitle>
          <ProductPrice>{`${price}€`}</ProductPrice>
        </ProductTopContent>
        {productDescription && (
          <ProductDesc title={productDescription}>
            {productDescription}
          </ProductDesc>
        )}
      </ContentWrapper>
      <ProductBottomContent>
        <ProductStock>{`${stock} left`}</ProductStock>
        <Button
          disabled={stock === 0}
          onClick={(e) => {
            e.stopPropagation();
            handleAddToCart(product);
          }}
        >
          add
        </Button>
      </ProductBottomContent>
    </ProductContainer>
  );
}

export default Product;
