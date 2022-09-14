import {ComponentPropsWithoutRef, FC, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {userDetailsGet, userRepositoriesGet} from "../../shared/store/actions";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../shared/store/reducers";
import './UserDetails.scss';
import RepositoryCard from "../../shared/PresentationalComponents/RepositoryCard/RepositoryCard";
import UserDetailsCard from "../../shared/PresentationalComponents/UserDetailsCard/UserDetailsCard";

const firstPage = 1;
const perPage = 1000;
const UserDetails: FC = () => {
    const username = useParams()?.username || '';
    const dispatch = useDispatch();
    const userDetails = useSelector((state: RootState) => state.user.userDetails);
    const userRepositories = useSelector((state: RootState) => state.user.userRepositories);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(userDetailsGet(username));
        dispatch(userRepositoriesGet(username, firstPage, perPage));
    }, [username])

    const onBackClick = () => {
        navigate('/');
    }
    return (
        <>
            <div className="user-details">
                <button className="user-details__back-btn" onClick={() => onBackClick()}>Back</button>

                <UserDetailsCard userDetails={userDetails}/>

                <h2 className="user-details__repos-title">Repositories</h2>
                <div className="user-details__repositories">
                    {
                        userRepositories && userRepositories.map((repo, index) => {
                            return (
                                <RepositoryCard key={index} repo={repo}/>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default UserDetails;