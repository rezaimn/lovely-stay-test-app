import {ComponentPropsWithoutRef, FC} from "react";
import {IUser} from "../../models/User";
import './UserSearchResultCard.scss';

type OnUserClickedCallBack = (userId: string) => void;
type UserSearchResultCardParams = {
    user: IUser,
    onUserClicked: OnUserClickedCallBack
};

export type UserSearchResultCardProps = Omit<ComponentPropsWithoutRef<'div'>,
    keyof UserSearchResultCardParams> &
    UserSearchResultCardParams;

const UserSearchResultCard: FC<UserSearchResultCardProps> = ({user, onUserClicked, ...restProps}) => {
    return (
        <>
            <div className="user-card" onClick={() => onUserClicked(user.login)}>
                <div className="user-card__avatar">
                    <img src={user.avatar_url} alt="user avatar"/>
                </div>
                <div className="user-card__details">
                    <h4 className="user-card__details__title">{user.login}</h4>
                    <p className="user-card__details__url">{user.url}</p>
                </div>
            </div>
        </>
    )
}

export default UserSearchResultCard;