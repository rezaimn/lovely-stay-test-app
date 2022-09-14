
import {ComponentPropsWithoutRef, FC} from "react";
import {IUserRepository} from "../../models/User";
import './RepositoryCard.scss';

type RepositoryCardParams = {
    repo: IUserRepository,
};

export type UserRepositoryCardProps = Omit<ComponentPropsWithoutRef<'div'>,
    keyof RepositoryCardParams> &
    RepositoryCardParams;

const RepositoryCard: FC<UserRepositoryCardProps> = ({repo,  ...restProps}) => {
    return (
        <>
            <div className="repo-card">
                <div className="repo-card__details">
                    <h4  className="repo-card__details__title">{repo.name}</h4>
                    <p  className="repo-card__details__desc">{repo.description}</p>
                </div>
            </div>
        </>
    )
}

export default RepositoryCard;