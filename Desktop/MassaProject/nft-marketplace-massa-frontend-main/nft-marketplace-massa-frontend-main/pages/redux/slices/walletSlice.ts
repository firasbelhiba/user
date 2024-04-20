import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface WalletState {
    isConnected: boolean;
    address?: string;

}

const initialState: WalletState = {
    isConnected: false,
};

export const walletSlice = createSlice({
    name: 'wallet',
    initialState,
    reducers: {
        connectWallet: (state, action : PayloadAction<string>) => {
            state.isConnected = true;
            state.address = action.payload; // Payload should carry the wallet address.

        },
        disconnectWallet: (state) => {
            state.isConnected = false;
            state.address = undefined;

        },
    },
});

export const { connectWallet, disconnectWallet } = walletSlice.actions;
export default walletSlice.reducer;
