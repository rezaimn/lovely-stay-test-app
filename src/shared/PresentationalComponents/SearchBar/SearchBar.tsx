import {ComponentPropsWithoutRef, FC} from "react";
import './SearchBar.scss';

type UpdateSearchKeyCallBack = (searchKey: string) => void;
type OnSearchCallBack = () => void;

type SearchBarParams = {
    updateSearchKey: UpdateSearchKeyCallBack;
    onSearchClick: OnSearchCallBack;
    searchKey: string;
};

export type SearchBarProps = Omit<ComponentPropsWithoutRef<'div'>,
    keyof SearchBarParams> &
    SearchBarParams;

const SearchBar: FC<SearchBarProps> = ({updateSearchKey, onSearchClick, searchKey, ...restProps}) => {
    return (
        <>
            <div className="search">
                <div className="search__box">
                    <input
                        value={searchKey}
                        onChange={(event) => updateSearchKey(event.target.value)}
                        type="text"
                        className="search__term"
                        placeholder="Please enter the GitHub username here ..."
                    />
                    <button onClick={() => onSearchClick()} type="submit" className="search__button">
                        Search
                    </button>
                </div>
            </div>
        </>
    )
}

export default SearchBar;