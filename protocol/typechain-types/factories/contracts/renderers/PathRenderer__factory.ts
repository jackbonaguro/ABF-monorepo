/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import { Contract, ContractFactory, Overrides, Signer, utils } from 'ethers';
import type { PromiseOrValue } from '../../../common';
import type {
  PathRenderer,
  PathRendererInterface,
} from '../../../contracts/renderers/PathRenderer';

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    inputs: [],
    name: 'additionalMetadataURI',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'props',
        type: 'bytes',
      },
    ],
    name: 'attributes',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'propsSize',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'props',
        type: 'bytes',
      },
    ],
    name: 'render',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renderAttributeKey',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'props',
        type: 'bytes',
      },
    ],
    name: 'renderRaw',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b5061002d61002261003260201b60201c565b61003a60201b60201c565b6100fe565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b61174b8061010d6000396000f3fe608060405234801561001057600080fd5b506004361061009d5760003560e01c80638da5cb5b116100665780638da5cb5b1461015a57806392348b2214610178578063b0a2f64014610196578063effde6db146101c6578063f2fde38b146101e45761009d565b8062a85d69146100a257806301ffc9a7146100c0578063316df61e146100f057806343c5820c14610120578063715018a614610150575b600080fd5b6100aa610200565b6040516100b79190611138565b60405180910390f35b6100da60048036038101906100d59190610d98565b610228565b6040516100e791906110bb565b60405180910390f35b61010a60048036038101906101059190610dc1565b6102a2565b60405161011791906110d6565b60405180910390f35b61013a60048036038101906101359190610dc1565b6102dd565b60405161014791906110d6565b60405180910390f35b6101586106ab565b005b6101626106bf565b60405161016f91906110a0565b60405180910390f35b6101806106ce565b60405161018d91906110d6565b60405180910390f35b6101b060048036038101906101ab9190610dc1565b6106e5565b6040516101bd91906110d6565b60405180910390f35b6101ce610726565b6040516101db91906110d6565b60405180910390f35b6101fe60048036038101906101f99190610d6f565b610763565b005b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff905090565b60007f32ce7999000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061029b575061029a826107e7565b5b9050919050565b60606102b66102b184846102dd565b610851565b6040516020016102c6919061107e565b604051602081830303815290604052905092915050565b6060600060405180602001604052806000815250905060005b8484905060026003836103099190611201565b610313919061117a565b101561068157604c60f81b858560038461032d9190611201565b818110610363577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061040e5750604d60f81b85856003846103aa9190611201565b8181106103e0577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061048c5750606c60f81b85856003846104289190611201565b81811061045e577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061050a5750606d60f81b85856003846104a69190611201565b8181106104dc577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b1561066e5781858560038461051f9190611201565b818110610555577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b6105d46010888860016003886105759190611201565b61057f919061117a565b8181106105b5577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b60f81c60ff166105cf919061117a565b6109db565b6106496010898960026003896105ea9190611201565b6105f4919061117a565b81811061062a577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b60f81c60ff16610644919061117a565b6109db565b60405160200161065c9493929190610fcc565b60405160208183030381529060405291505b808061067990611362565b9150506102f6565b816040516020016106929190611024565b6040516020818303038152906040529250505092915050565b6106b3610b88565b6106bd6000610c06565b565b60006106c9610cca565b905090565b606060405180602001604052806000815250905090565b60606106ff6003848490506106fa91906111d0565b6109db565b60405160200161070f9190611051565b604051602081830303815290604052905092915050565b60606040518060400160405280600581526020017f696d616765000000000000000000000000000000000000000000000000000000815250905090565b61076b610b88565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156107db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107d2906110f8565b60405180910390fd5b6107e481610c06565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6060600082511415610874576040518060200160405280600081525090506109d6565b60006040518060600160405280604081526020016116d660409139905060006003600285516108a3919061117a565b6108ad91906111d0565b60046108b99190611201565b67ffffffffffffffff8111156108f8577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561092a5781602001600182028036833780820191505090505b509050600182016020820185865187015b80821015610996576003820191508151603f8160121c168501518453600184019350603f81600c1c168501518453600184019350603f8160061c168501518453600184019350603f811685015184536001840193505061093b565b50506003865106600181146109b257600281146109c5576109cd565b603d6001830353603d60028303536109cd565b603d60018303535b50505080925050505b919050565b60606000821415610a23576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050610b83565b600082905060005b60008214610a55578080610a3e90611362565b915050600a82610a4e91906111d0565b9150610a2b565b60008167ffffffffffffffff811115610a97577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610ac95781602001600182028036833780820191505090505b5090505b60008514610b7c57600182610ae2919061125b565b9150600a85610af191906113b5565b6030610afd919061117a565b60f81b818381518110610b39577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a85610b7591906111d0565b9450610acd565b8093505050505b919050565b610b90610cf3565b73ffffffffffffffffffffffffffffffffffffffff16610bae6106bf565b73ffffffffffffffffffffffffffffffffffffffff1614610c04576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bfb90611118565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600033905090565b600081359050610d0a816116a7565b92915050565b600081359050610d1f816116be565b92915050565b60008083601f840112610d3757600080fd5b8235905067ffffffffffffffff811115610d5057600080fd5b602083019150836001820283011115610d6857600080fd5b9250929050565b600060208284031215610d8157600080fd5b6000610d8f84828501610cfb565b91505092915050565b600060208284031215610daa57600080fd5b6000610db884828501610d10565b91505092915050565b60008060208385031215610dd457600080fd5b600083013567ffffffffffffffff811115610dee57600080fd5b610dfa85828601610d25565b92509250509250929050565b610e0f8161128f565b82525050565b610e1e816112a1565b82525050565b610e35610e30826112ad565b6113ab565b82525050565b6000610e4682611153565b610e50818561115e565b9350610e6081856020860161132f565b610e6981611444565b840191505092915050565b6000610e7f82611153565b610e89818561116f565b9350610e9981856020860161132f565b80840191505092915050565b6000610eb260028361116f565b9150610ebd82611455565b600282019050919050565b6000610ed560268361115e565b9150610ee08261147e565b604082019050919050565b6000610ef860c08361116f565b9150610f03826114cd565b60c082019050919050565b6000610f1b60018361116f565b9150610f26826115b4565b600182019050919050565b6000610f3e60208361115e565b9150610f49826115dd565b602082019050919050565b6000610f61600b8361116f565b9150610f6c82611606565b600b82019050919050565b6000610f8460268361116f565b9150610f8f8261162f565b602682019050919050565b6000610fa7601a8361116f565b9150610fb28261167e565b601a82019050919050565b610fc681611325565b82525050565b6000610fd88287610e74565b9150610fe382610f0e565b9150610fef8286610e24565b600182019150610fff8285610e74565b915061100a82610f0e565b91506110168284610e74565b915081905095945050505050565b600061102f82610eeb565b915061103b8284610e74565b915061104682610f54565b915081905092915050565b600061105c82610f77565b91506110688284610e74565b915061107382610ea5565b915081905092915050565b600061108982610f9a565b91506110958284610e74565b915081905092915050565b60006020820190506110b56000830184610e06565b92915050565b60006020820190506110d06000830184610e15565b92915050565b600060208201905081810360008301526110f08184610e3b565b905092915050565b6000602082019050818103600083015261111181610ec8565b9050919050565b6000602082019050818103600083015261113181610f31565b9050919050565b600060208201905061114d6000830184610fbd565b92915050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b600061118582611325565b915061119083611325565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156111c5576111c46113e6565b5b828201905092915050565b60006111db82611325565b91506111e683611325565b9250826111f6576111f5611415565b5b828204905092915050565b600061120c82611325565b915061121783611325565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156112505761124f6113e6565b5b828202905092915050565b600061126682611325565b915061127183611325565b925082821015611284576112836113e6565b5b828203905092915050565b600061129a82611305565b9050919050565b60008115159050919050565b60007fff0000000000000000000000000000000000000000000000000000000000000082169050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b8381101561134d578082015181840152602081019050611332565b8381111561135c576000848401525b50505050565b600061136d82611325565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156113a05761139f6113e6565b5b600182019050919050565b6000819050919050565b60006113c082611325565b91506113cb83611325565b9250826113db576113da611415565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000601f19601f8301169050919050565b7f7d2c000000000000000000000000000000000000000000000000000000000000600082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f3c73766720786d6c6e733d22687474703a2f2f7777772e77332e6f72672f323060008201527f30302f737667222077696474683d2232383822206865696768743d223238382260208201527f207374796c653d226261636b67726f756e643a23463146314631223e3c70617460408201527f682066696c6c3d226e6f6e6522207374726f6b653d22626c61636b222073747260608201527f6f6b652d77696474683d223222207374726f6b652d6c696e656361703d22726f60808201527f756e6422207374726f6b652d6c696e656a6f696e3d22726f756e642220643d2260a082015250565b7f2000000000000000000000000000000000000000000000000000000000000000600082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f22202f3e203c2f7376673e000000000000000000000000000000000000000000600082015250565b7f7b2274726169745f74797065223a202244617461204c656e677468222c20227660008201527f616c7565223a0000000000000000000000000000000000000000000000000000602082015250565b7f646174613a696d6167652f7376672b786d6c3b6261736536342c000000000000600082015250565b6116b08161128f565b81146116bb57600080fd5b50565b6116c7816112d9565b81146116d257600080fd5b5056fe4142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2fa26469706673582212209e8280f2ba351b402b98424c997a8f5fc270d357647d4d99bd43d53e13fc8ccc64736f6c63430008040033';

type PathRendererConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PathRendererConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PathRenderer__factory extends ContractFactory {
  constructor(...args: PathRendererConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<PathRenderer> {
    return super.deploy(overrides || {}) as Promise<PathRenderer>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): PathRenderer {
    return super.attach(address) as PathRenderer;
  }
  override connect(signer: Signer): PathRenderer__factory {
    return super.connect(signer) as PathRenderer__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PathRendererInterface {
    return new utils.Interface(_abi) as PathRendererInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): PathRenderer {
    return new Contract(address, _abi, signerOrProvider) as PathRenderer;
  }
}
