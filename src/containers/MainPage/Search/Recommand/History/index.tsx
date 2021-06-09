import React, { useEffect, useState } from 'react';
import { actions, T_ROOT_REDUCER } from '@/modules';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTrashAlt,
    faStar as farStar,
} from '@fortawesome/free-regular-svg-icons';
import { I_HISTORY } from './types';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';

interface I_PROPS {
    onSelect: (id: string) => void;
}

const History: React.FC<I_PROPS> = ({ onSelect }) => {
    const { removeHistory, removeFavorite, addFavorite } = actions.search;
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

    const handleUpdateFavorite = ({ value, checked }) => {
        if (checked) {
            dispatch(removeFavorite(value));
        } else {
            dispatch(addFavorite(value));
        }
    };

    return (
        <ul>
            {list.map(({ value, checked }) => (
                <li key={value}>
                    <span
                        className="recommand__id"
                        onClick={() => {
                            onSelect(value);
                        }}
                    >
                        {value}
                    </span>
                    <span
                        className="recommand__btn"
                        onClick={() => {
                            handleDelete(value);
                        }}
                    >
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </span>
                    <span
                        className={`recommand__btn ${checked ? 'active' : ''}`}
                        onClick={() => {
                            handleUpdateFavorite({ value, checked });
                        }}
                    >
                        <FontAwesomeIcon icon={checked ? fasStar : farStar} />
                    </span>
                </li>
            ))}
        </ul>
    );
};

export default React.memo(History);
