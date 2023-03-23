import Modal from './Modal';

const Overlay = ({ isOpen, onClose }) => (
  <>
    {isOpen && (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 9998,
      }}
      onClick={onClose}
    >
      <Modal />
    </div>
    )}
  </>
);

export default Overlay;
