import { observer } from "mobx-react-lite";
import { useStore } from "../../stores/store";
import { Header, Modal } from "semantic-ui-react";

export default observer (function ModalContainer() {
    const {modalStore} = useStore();
    return (
        <Modal open={modalStore.modal.open} onClose={modalStore.closeModal} size='mini' dimmer='blurring'>
            <Modal.Content>
                <Modal.Description>
                    <Header>{modalStore.modal.body}</Header>
                </Modal.Description>
            </Modal.Content>
        </Modal>
    )
})