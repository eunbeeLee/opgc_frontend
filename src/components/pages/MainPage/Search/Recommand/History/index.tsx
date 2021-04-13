import React, { useEffect, useState } from 'react';
import { T_ROOT_REDUCER } from '@/modules';
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, removeHistory } from '@/modules/search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTrashAlt,
    faStar as farStar,
} from '@fortawesome/free-regular-svg-icons';
import { I_HISTORY } from './types';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';

interface I_PROPS {}

const History: React.FC<I_PROPS> = () => {
    const dispatch = useDispatch();
    const { histories, favorites } = useSelector(
        (state: T_ROOT_REDUCER) => state.search
    );

    const [list, setList] = useState<I_HISTORY[]>(
        histories.map((item) => ({ value: item, checked: false }))
    );

    useEffect(() => {
        const list = histories.map((item) => ({
            value: item,
            checked: favorites.includes(item),
        }));

        setList(list);
    }, [histories, favorites]);

    const handleDelete = (value: string) => {
        dispatch(removeHistory(value));
    };

    const handleAddFavorite = (value: string) => {
        dispatch(addFavorite(value));
    };

    return (
        <div>
            <ul>
                {list.map(({ value, checked }) => (
                    <li>
                        {value}
                        <button
                            onClick={() => {
                                handleAddFavorite(value);
                            }}
                        >
                            <FontAwesomeIcon
                                icon={checked ? fasStar : farStar}
                            />
                        </button>
                        <button
                            onClick={() => {
                                handleDelete(value);
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

export default React.memo(History);
