const ItemsCards = ({ data }) => {
  return (
    <div className="hover:border-2  border-sky-300  w-[250px] p-2  h-[400px] rounded-lg bg-slate-100 hover:bg-stone-100 hover:scale-105">
      <img
        src={data.thumbnail}
        className="w-full h-[200px] hover:scale-105 rounded-md"
      />
      <h1 className="text-xl font-semibold py-1">{data.title}</h1>
      <h2 className="text-lg ">{data.brand}</h2>
      <h2>Rating : {data.rating}</h2>
      <h2>Price : {data.price}</h2>
    </div>
  );
};
export default ItemsCards;
