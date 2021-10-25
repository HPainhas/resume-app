import React, { useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import useStyles from './ModalStyles';

const Modal = ({ onCloseRequest, children }) => {
    const classes = useStyles();
    const modal = useRef(null);

    const handleKeyUp = useCallback(
        e => {
            const keys = {
                27: () => {
                    e.preventDefault();
                    onCloseRequest();
                    window.removeEventListener('keyup', handleKeyUp, false);
                },
            };

            if (keys[e.keyCode]) {
                keys[e.keyCode]();
            }
        },
        [onCloseRequest]
    );

    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp, false);

        return () => {
            window.removeEventListener('keyup', handleKeyUp, false);
        };
    }, [handleKeyUp]);

    return (
        <div className={classes.modalOverlay}>
            <div className={classes.modal} ref={modal}>
                <button
                    type='button'
                    className={classes.closeButton}
                    onClick={onCloseRequest}
                />
                {children}
            </div>
        </div>
    );
};

Modal.propTypes = {
    onCloseRequest: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};

export default Modal;
