import AlertMessage from '@/components/AlertMessage';
import Overlay from '@/components/Overlay';
import { AxiosError } from 'axios';
import { actions } from '@/modules';
import { useDispatch } from 'react-redux';
import React, { useCallback } from 'react';
import { getApiErrorMsg } from './service';
import './style.css';

interface I_PROPS {
    error: AxiosError;
}

const ApiErrorModal: React.FC<I_PROPS> = ({ error }) => {
    const dispatch = useDispatch();
    const { setErrorModal } = actions.ui.app;
    const errorMsg: { title: string; message: string } = getApiErrorMsg(error);

    const handleCloseAlert = useCallback(() => {
        dispatch(setErrorModal(null));
    }, []);

    return (
        <Overlay>
            <div className="v-api-error-msg__container">
                <AlertMessage
                    title={errorMsg.title}
                    content={errorMsg.message}
                    type="error"
                    onClose={handleCloseAlert}
                />
            </div>
        </Overlay>
    );
};

export default React.memo(ApiErrorModal);
