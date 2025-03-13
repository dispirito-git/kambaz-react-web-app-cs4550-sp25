import Modal from 'react-bootstrap/Modal';
export default function ModuleEditor({ dialogTitle, showModal, handleClose, moduleName, setModuleName, addModule }:
    { showModal: boolean; handleClose: () => void; dialogTitle: string; moduleName: string; setModuleName: (name: string) => void; addModule: () => void; }) {
    return (
        <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
        >
        <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>{dialogTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input className="form-control" defaultValue={moduleName} placeholder="Module Name"
            onChange={(e) => setModuleName(e.target.value)}/>
        </Modal.Body>
        <Modal.Footer>
            <button onClick = {handleClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">
            Cancel </button>
            <button onClick={() => {addModule(); handleClose();} } type="button" data-bs-dismiss="modal" className="btn btn-danger">
            Add Module </button>
        </Modal.Footer>
        </Modal>
        </div>
    );
}