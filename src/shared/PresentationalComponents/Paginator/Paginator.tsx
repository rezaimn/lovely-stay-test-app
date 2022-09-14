import {ComponentPropsWithoutRef, FC} from "react";
import './Paginator.scss';
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducers";

type OnNextClickCallBack = () => void;
type OnPreviousClickCallBack = () => void;
type PaginatorParams = {
    onNextClick: OnNextClickCallBack;
    onPreviousClick: OnPreviousClickCallBack;
    currentPage: number;
    totalPages: number;
};

export type PaginatorProps = Omit<ComponentPropsWithoutRef<'div'>,
    keyof PaginatorParams> &
    PaginatorParams;

const Paginator: FC<PaginatorProps> = ({onNextClick, onPreviousClick, currentPage, totalPages, ...restProps}) => {
    return (
        <>
            {
                totalPages > 0 &&
                <div className="paginator">
                    <button data-cy="prev-btn" disabled={currentPage === 1} className={`paginator__button ${currentPage === 1?'paginator__button--disabled':''}`}
                            onClick={() => onPreviousClick()}>Previous
                    </button>
                    <h4 data-cy="current-page">( {currentPage} )</h4>
                    <button data-cy="next-btn" disabled={currentPage === totalPages} className={`paginator__button ${currentPage === totalPages?'paginator__button--disabled':''}`}
                            onClick={() => onNextClick()}>Next
                    </button>
                </div>
            }

        </>
    )
}

export default Paginator;