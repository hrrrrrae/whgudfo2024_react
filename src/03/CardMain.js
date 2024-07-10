import Card from "./Card";
import CardData from "./CardData.json";

export default function CardMain() {
  console.log(CardData);
  const tags = CardData.map(item =>
    <Card imgSrc={item.imgUrl}
          title={item.title}
          content={item.content} />);

  return (
    <div className="w-5/6 grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* <Card imgSrc={imgSrc} 
            title={title} 
            content={content}/> */}
      {tags}
    </div>
  )
}
