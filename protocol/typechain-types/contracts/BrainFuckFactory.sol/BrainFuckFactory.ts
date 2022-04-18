/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from '../../common';

export declare namespace BrainFuckFactory {
  export type CreateBrainFuckNFTConfigStruct = {
    name: string;
    symbol: string;
    additionalMetadataURI: string;
    seed: BytesLike;
    code: BytesLike;
    renderer: string;
    mintingSupply: BigNumberish;
    price: BigNumberish;
  };

  export type CreateBrainFuckNFTConfigStructOutput = [
    string,
    string,
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
  ] & {
    name: string;
    symbol: string;
    additionalMetadataURI: string;
    seed: string;
    code: string;
    renderer: string;
    mintingSupply: BigNumber;
    price: BigNumber;
  };
}

export interface BrainFuckFactoryInterface extends utils.Interface {
  functions: {
    'createNFT((string,string,string,bytes,bytes,address,uint256,uint256))': FunctionFragment;
    'projectIdIndex()': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: 'createNFT' | 'projectIdIndex',
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'createNFT',
    values: [BrainFuckFactory.CreateBrainFuckNFTConfigStruct],
  ): string;
  encodeFunctionData(
    functionFragment: 'projectIdIndex',
    values?: undefined,
  ): string;

  decodeFunctionResult(functionFragment: 'createNFT', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'projectIdIndex',
    data: BytesLike,
  ): Result;

  events: {
    'CreatedBrainFuckNFT(address,address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'CreatedBrainFuckNFT'): EventFragment;
}

export interface CreatedBrainFuckNFTEventObject {
  nft: string;
  creator: string;
}
export type CreatedBrainFuckNFTEvent = TypedEvent<
  [string, string],
  CreatedBrainFuckNFTEventObject
>;

export type CreatedBrainFuckNFTEventFilter =
  TypedEventFilter<CreatedBrainFuckNFTEvent>;

export interface BrainFuckFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BrainFuckFactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>,
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>,
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    createNFT(
      config: BrainFuckFactory.CreateBrainFuckNFTConfigStruct,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    projectIdIndex(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  createNFT(
    config: BrainFuckFactory.CreateBrainFuckNFTConfigStruct,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  projectIdIndex(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    createNFT(
      config: BrainFuckFactory.CreateBrainFuckNFTConfigStruct,
      overrides?: CallOverrides,
    ): Promise<void>;

    projectIdIndex(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    'CreatedBrainFuckNFT(address,address)'(
      nft?: null,
      creator?: null,
    ): CreatedBrainFuckNFTEventFilter;
    CreatedBrainFuckNFT(
      nft?: null,
      creator?: null,
    ): CreatedBrainFuckNFTEventFilter;
  };

  estimateGas: {
    createNFT(
      config: BrainFuckFactory.CreateBrainFuckNFTConfigStruct,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    projectIdIndex(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    createNFT(
      config: BrainFuckFactory.CreateBrainFuckNFTConfigStruct,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    projectIdIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
