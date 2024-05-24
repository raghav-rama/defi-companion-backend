// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;
import "./TokenBase.sol";

contract TokenCsc is TokenBase {
    constructor() TokenBase("CSC Token", "CTK") {}
}
