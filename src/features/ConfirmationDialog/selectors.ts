import { RootState } from '@/store/store';

export const selectDialogState = (state: RootState) => state.confirmationDialog;
