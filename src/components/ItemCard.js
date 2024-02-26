import { useParams } from "react-router";
import useItemCard from "../hooks/useItemCard";
import ImageSlider from "./ImageSlider";

import Loading from "./Loading";
const ItemCard = () => {
  const { id } = useParams();
  const card = useItemCard(id);

  if (card === null) {
    return <Loading />;
  }
  const image = card.images.map((images) => {
    return [images];
  });

  return (
    <div className="bg-white flex m-5">
      

      <div className="flex flex-wrap">
        <ImageSlider images={image} />
      </div>
      <div>
        <h1>{card?.brand}</h1>
        <h1>{card?.rating}</h1>
        <h1>{card?.title}</h1>
        <h1>{card?.description}</h1>
        <h1>{card?.stock}</h1>
      </div>
    </div>
  );
};
export default ItemCard;
