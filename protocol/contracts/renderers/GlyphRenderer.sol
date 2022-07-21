// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

contract GlyphRenderer {
  function draw() public pure returns (bytes memory) {
    bytes memory output = new bytes(64 * 64);
    uint c;
    for (uint i = 0; i < 64; i++) {
      for (uint j = 0; j < 64; j++) {
        output[c] = bytes1(0x23);
        c++;
      }
    }
    return output;
  }
}
