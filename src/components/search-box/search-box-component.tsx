import "./search-box-style.css";
import { ChangeEventHandler } from "react";
type SearchBoxProps = {
  className: string,
  placeHolder: string,
  onChangeHandler: ChangeEventHandler<HTMLInputElement>
}
const SearchBox = ({ className, placeHolder, onChangeHandler }: SearchBoxProps) => (
  <input
    className={` search-box ${className}`}
    type='search'
    placeholder={placeHolder}
    onChange={onChangeHandler}
  />
)

export default SearchBox;
