import React, { useState } from 'react';
import Modal from '../layout/Modal';
import PropTypes from 'prop-types';
import useStyles from './SimpleModalStyles';

const SimpleModal = ({ buttonLabel, children }) => {
    const classes = useStyles();
    const [showModal, setShowModal] = useState(false);

    return (
        <div className={classes.wrapper}>
            <button
                type='button'
                className='white-fill-bg btn-outline btn-medium'
                onClick={() => setShowModal(true)}
            >
                {buttonLabel}
            </button>

            {showModal && (
                <Modal onCloseRequest={() => setShowModal(false)}>
                    {children}
                </Modal>
            )}
        </div>
    );
};

SimpleModal.propTypes = {
    buttonLabel: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};

export default SimpleModal;
