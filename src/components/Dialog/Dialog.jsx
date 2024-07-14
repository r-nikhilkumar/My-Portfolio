import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Dialog.css';
import { themeContext } from '../../Context';

const Dialog = ({ show, onClose, children }) => {
  const darkMode = useContext(themeContext).state.darkMode;
  useEffect(() => {
    if (show) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [show]);

  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content" style={{backgroundColor:darkMode ? 'var(--black)' :  'white'}}>

        <button className="close-button" onClick={onClose}>x</button>
        {children}
      </div>
    </div>
  );
};

Dialog.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node
};

export default Dialog;
