const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SimpleToken", function () {
  it("Should deploy and assign initial supply to owner", async function () {
    const [owner] = await ethers.getSigners();
    const SimpleToken = await ethers.getContractFactory("SimpleToken");
    const token = await SimpleToken.deploy(ethers.utils.parseEther("1000000"));

    await token.deployed();

    const balance = await token.balanceOf(owner.address);
    expect(balance).to.equal(ethers.utils.parseEther("1000000"));
  });
});
