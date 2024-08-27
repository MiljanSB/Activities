import { makeAutoObservable } from "mobx";

export default class ModalStore{
    modal = {
        open: false,
        body: null as JSX.Element | null
    }

    constructor(){
        makeAutoObservable(this);
    }

    openModal = (content: JSX.Element) => {
        this.modal.open = true;
        this.modal.body = content;
    }

    closeModal = () => {
        this.modal.open = false;
        this.modal.body = null;
    }
}