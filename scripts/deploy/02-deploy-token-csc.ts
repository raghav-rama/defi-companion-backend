import { ethers } from "hardhat";
async function main() {
  const tokenCscContractFactory = await ethers.getContractFactory("TokenCsc");
  const tokenCscContract = await tokenCscContractFactory.deploy();
  await tokenCscContract.waitForDeployment();
  const tokenCscContactAddress = await tokenCscContract.getAddress();
  console.log("TokenCsc contract deployed to:", tokenCscContactAddress);

  const bridgeCscContractFactory = await ethers.getContractFactory("BridgeCsc");
  const bridgeCscContract = await bridgeCscContractFactory.deploy(
    tokenCscContactAddress
  );
  await bridgeCscContract.waitForDeployment();
  const bridgeCscContactAddress = await bridgeCscContract.getAddress();
  console.log("bridgeCsc contract deployed to:", bridgeCscContactAddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
