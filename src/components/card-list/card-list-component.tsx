import Card from "../card/card-component";
import "./card-list-style.css";
import { Monster } from "../../App";

type CardListProps = {
  monster: Monster[]
}
const CardList = ({ monster }: CardListProps) => (
  <div className='card-list'>
    {monster.map((monsters) => {
      return <Card monster={monsters} key={monsters.id} />;
    })}
  </div>
);

export default CardList;
