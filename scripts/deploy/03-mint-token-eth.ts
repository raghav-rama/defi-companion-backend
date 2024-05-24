import { ethers } from "hardhat";

async function main() {
  const [signer, second] = await ethers.getSigners();

  const tokenEthContract = await ethers.getContractAt(
    "TokenEth",
    "0x5FbDB2315678afecb367f032d93F642f64180aa3"
  );
  let tx = await tokenEthContract.mint(signer.address, 100);
  await tx.wait(1);
  const balance = await tokenEthContract.balanceOf(signer.address);
  console.log("Signer address balance:", balance.toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
