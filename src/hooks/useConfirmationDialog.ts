import {
  closeDialog,
  openDialog,
  setDialogPending,
  selectDialogState,
} from "@/features/ConfirmationDialog";
import { useAppDispatch, useAppSelector } from "@/store/store";

type DialogStateOption = {
  title: string;
  message: string;
  onConfirm: () => void;
};

const confirmCallbackRef = { current: null as null | (() => void) };

export const useConfirmationDialog = () => {
  const dispatch = useAppDispatch();
  const dialogState = useAppSelector(selectDialogState);

  const showConfirmationDialog = ({
    title,
    message,
    onConfirm,
  }: DialogStateOption) => {
    confirmCallbackRef.current = onConfirm;
    dispatch(
      openDialog({
        title,
        message,
      })
    );
  };

  const hideConfirmationDialog = () => {
    dispatch(closeDialog());
  };

  const setPending = (pending: boolean) => {
    dispatch(setDialogPending(pending));
  };

  const handleConfirm = () => {
    if (confirmCallbackRef.current) {
      confirmCallbackRef.current(); 
    }
    confirmCallbackRef.current = null;
    dispatch(closeDialog());
  };

  const handleCancel = () => {
    confirmCallbackRef.current = null;
    dispatch(closeDialog());
  };

  return {
    ...dialogState,
    showConfirmationDialog,
    hideConfirmationDialog,
    setPending,
    handleConfirm,
    handleCancel,
  };
};
