import React from 'react';
import { T_ROOT_REDUCER } from '@/modules';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from '@/modules/search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

interface I_PROPS {}

const Favorite: React.FC<I_PROPS> = () => {
    const dispatch = useDispatch();
    const list = useSelector((state: T_ROOT_REDUCER) => state.search.favorites);

    const handleDelete = (value: string) => {
        dispatch(removeFavorite(value));
    };

    return (
        <div>
            <ul>
                {list.map((item) => (
                    <li>
                        {item}
                        <button
                            onClick={() => {
                                handleDelete(item);
                            }}
                        >
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default React.memo(Favorite);
