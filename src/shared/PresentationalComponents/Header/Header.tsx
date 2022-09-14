import {ComponentPropsWithoutRef, FC} from "react";
import SearchBar from "../SearchBar/SearchBar";
import './Header.scss';

type UpdateSearchKeyCallBack = (searchKey: string) => void;
type OnSearchCallBack = () => void;

type HeaderParams = {
    updateSearchKey: UpdateSearchKeyCallBack;
    onSearchClick: OnSearchCallBack;
    searchKey: string;
};
export type HeaderProps = Omit<ComponentPropsWithoutRef<'div'>,
    keyof HeaderParams> &
    HeaderParams;

const Header: FC<HeaderProps> = ({updateSearchKey, onSearchClick, searchKey, ...restProps}) => {
    return (
        <>
            <div className="header">
                <div className="header__site-info">
                    <img src={'../../../github.svg'} alt='gitHub logo' className="header__site-info__logo"/>
                    <span className="header__site-info__details">
                        <h3 className="header__site-info__details__title">
                            GitHub User Search
                        </h3>
                        <p className="header__site-info__details__sub-title">
                            Browse users and their profiles
                        </p>
                    </span>

                </div>
                <div className="header__search-bar">
                    <SearchBar searchKey={searchKey} onSearchClick={onSearchClick} updateSearchKey={updateSearchKey}/>
                </div>
            </div>
        </>
    )
}

export default Header;