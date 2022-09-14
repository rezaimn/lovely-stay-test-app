import {ComponentPropsWithoutRef, FC} from "react";
import {IUserDetails} from "../../models/User";
import './UserDetailsCard.scss';

type UserDetailsCardParams = {
    userDetails: IUserDetails,
};

export type UserDetailsCardProps = Omit<ComponentPropsWithoutRef<'div'>,
    keyof UserDetailsCardParams> &
    UserDetailsCardParams;

const UserDetailsCard: FC<UserDetailsCardProps> = ({userDetails, ...restProps}) => {
    return (
        <>
            <div className="user-details-card">
                <div className="user-details-card__avatar">
                    <img src={userDetails.avatar_url} alt="user avatar"/>
                </div>
                <div className="user-details-card__info">
                    <h2>{userDetails.name}</h2>
                    <p>Bio: {userDetails.bio}</p>
                    <p>Email: {userDetails.email}</p>
                    <p>Company: {userDetails.company}</p>
                    <p className="user-details-card__info__location">Location: {userDetails.location}</p>
                    <div className="user-details-card__info__statistics">
                        <h4>Followings: {userDetails.following || 0}</h4>
                        <h4>Followers: {userDetails.followers || 0}</h4>
                        <h4>Repositories: {userDetails.public_repos || 0}</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserDetailsCard;