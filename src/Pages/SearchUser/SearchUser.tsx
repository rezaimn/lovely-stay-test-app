import {ComponentPropsWithoutRef, FC, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setPageNumber, setSearchKey, userSearchGet, userSearchSuccess} from "../../shared/store/actions";
import {RootState} from "../../shared/store/reducers";
import UserSearchResultCard from "../../shared/PresentationalComponents/UserSearchResultCard/UserSearchResultCard";
import './SearchUser.scss';
import Paginator from "../../shared/PresentationalComponents/Paginator/Paginator";
import Header from "../../shared/PresentationalComponents/Header/Header";
import {useNavigate} from "react-router-dom";
import {userListInitialize} from "../../shared/models/User";

const pageSize = 16;
const firstPage = 1;

const SearchUser: FC = () => {
    const dispatch = useDispatch();
    const userList = useSelector((state: RootState) => state.user.userList);
    const searchKey = useSelector((state: RootState) => state.user.searchKey) || '';
    const pageNumber = useSelector((state: RootState) => state.user.page);

    const navigate = useNavigate();

    useEffect(() => {
        searchUsersList();
    }, [pageNumber])

    useEffect(() => {
        if (pageNumber === firstPage) {
            searchUsersList();
        } else {
            dispatch(setPageNumber(firstPage));
        }
    }, [searchKey])

    const searchUsersList = () => {
        dispatch(userSearchGet(searchKey, pageNumber, pageSize))
    }

    const onPageNumberChange = (page: number) => {
        if (page >= firstPage) {
            dispatch(setPageNumber(page));
        }
    }
    const onSearchKeyChange = (searchKey: string) => {
        dispatch(setSearchKey(searchKey));
    }

    const onUserClicked = (userId: string) => {
        navigate(`/users/${userId}`);
    }

    return (
        <>
            <div className='search-user'>
                <div className="search-user__search-bar">
                    <Header searchKey={searchKey} onSearchClick={searchUsersList} updateSearchKey={onSearchKeyChange}/>
                </div>
                <div className="search-user__search-results">
                    {
                        userList && userList.items.map(user => {
                            return (
                                <UserSearchResultCard key={user.id} user={user} onUserClicked={onUserClicked}/>
                            )
                        })
                    }
                    {
                        userList && userList.items.length === 0 &&
                        <div className="search-user__search-results__no-data">
                            <h1>No Data To Show</h1>
                        </div>
                    }
                </div>
                <div className="search-user__paginator">
                    <Paginator
                        totalPages={Math.ceil(userList.total_count / pageSize)}
                        currentPage={pageNumber}
                        onNextClick={() => {
                            onPageNumberChange(pageNumber + 1)
                        }}
                        onPreviousClick={() => {
                            onPageNumberChange(pageNumber - 1)
                        }}/>
                </div>
            </div>
        </>
    )
}

export default SearchUser;