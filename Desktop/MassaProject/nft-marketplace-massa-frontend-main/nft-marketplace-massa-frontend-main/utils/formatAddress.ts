
export default function formatAddress(address: string): string {
    // Check if the address length is more than 10 characters.
    if (address.length > 10) {
        // Return the first 4 characters, ellipsis, and the last 4 characters
        return `${address.slice(0, 4)}...${address.slice(-4)}`;
    }
    // If the address is shorter or just 10 characters, return it as is.
    return address;
}
