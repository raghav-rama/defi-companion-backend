import { ethers } from "hardhat";
async function main() {
  const tokenEthContractFactory = await ethers.getContractFactory("TokenEth");
  const tokenEthContract = await tokenEthContractFactory.deploy();
  await tokenEthContract.waitForDeployment();
  const tokenEthContactAddress = await tokenEthContract.getAddress();
  console.log("TokenEth contract deployed to:", tokenEthContactAddress);

  const bridgeEthContractFactory = await ethers.getContractFactory("BridgeEth");
  const bridgeEthContract = await bridgeEthContractFactory.deploy(
    tokenEthContactAddress
  );
  await bridgeEthContract.waitForDeployment();
  const bridgeEthContactAddress = await bridgeEthContract.getAddress();
  console.log("bridgeEth contract deployed to:", bridgeEthContactAddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
