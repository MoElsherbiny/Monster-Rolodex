import Card from "../card/card-component";
import "./card-list-style.css";
const CardList = ({ monster }) => (
  <div className='card-list'>
    {monster.map((monsters, id) => {
      return <Card monster={monsters} key={id} />;
    })}
  </div>
);

export default CardList;
