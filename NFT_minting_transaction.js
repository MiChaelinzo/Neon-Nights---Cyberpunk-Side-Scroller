// Import the Euclid SDK 
import { Euclid } from '@constellation-network/euclid-sdk';

// Initialize Euclid instance (replace with your node URL, API Key, and Constellation address)
const euclid = new Euclid({
  nodeUrl: "YOUR_NODE_URL",
  apiKey: "YOUR_API_KEY",
  address: "YOUR_CONSTELLATION_ADDRESS",
});

async function mintNFT(itemName, itemDescription, imageUrl) {
  try {
    // Define the NFT metadata 
    const metadata = {
      name: itemName,
      description: itemDescription,
      image: imageUrl, 
      // Add other relevant metadata (properties, attributes, etc.)
    };

    // Mint the NFT
    const response = await euclid.nft.mint({ 
      metadata: metadata,
    }); 

    console.log("NFT minted successfully! Transaction Hash:", response.transactionHash);
  } catch (error) {
    console.error("Error minting NFT:", error);
  }
}

// Example: Mint an NFT for a weapon 
mintNFT("Cyberpunk Katana", "A sleek and deadly blade from the future.", "https://your-image-url.com/katana.png");

// --- Example: Transfer an NFT to another player --- 
async function transferNFT(nftId, recipientAddress) {
  try {
    const response = await euclid.nft.transfer({
      id: nftId,
      recipient: recipientAddress
    });
    console.log("NFT transfer successful!", response);
  } catch (error) {
    console.error("Error transferring NFT:", error);
  }
} 
