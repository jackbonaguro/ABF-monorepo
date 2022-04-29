/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from '../../common';

export interface IRendererInterface extends utils.Interface {
  functions: {
    'additionalMetadataURI()': FunctionFragment;
    'attributes(bytes)': FunctionFragment;
    'outSize()': FunctionFragment;
    'render(bytes)': FunctionFragment;
    'renderRaw(bytes)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'additionalMetadataURI'
      | 'attributes'
      | 'outSize'
      | 'render'
      | 'renderRaw',
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'additionalMetadataURI',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'attributes',
    values: [BytesLike],
  ): string;
  encodeFunctionData(functionFragment: 'outSize', values?: undefined): string;
  encodeFunctionData(functionFragment: 'render', values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: 'renderRaw',
    values: [BytesLike],
  ): string;

  decodeFunctionResult(
    functionFragment: 'additionalMetadataURI',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'attributes', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'outSize', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'render', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renderRaw', data: BytesLike): Result;

  events: {};
}

export interface IRenderer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IRendererInterface;

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
    additionalMetadataURI(overrides?: CallOverrides): Promise<[string]>;

    attributes(out: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    outSize(overrides?: CallOverrides): Promise<[BigNumber]>;

    render(out: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    renderRaw(out: BytesLike, overrides?: CallOverrides): Promise<[string]>;
  };

  additionalMetadataURI(overrides?: CallOverrides): Promise<string>;

  attributes(out: BytesLike, overrides?: CallOverrides): Promise<string>;

  outSize(overrides?: CallOverrides): Promise<BigNumber>;

  render(out: BytesLike, overrides?: CallOverrides): Promise<string>;

  renderRaw(out: BytesLike, overrides?: CallOverrides): Promise<string>;

  callStatic: {
    additionalMetadataURI(overrides?: CallOverrides): Promise<string>;

    attributes(out: BytesLike, overrides?: CallOverrides): Promise<string>;

    outSize(overrides?: CallOverrides): Promise<BigNumber>;

    render(out: BytesLike, overrides?: CallOverrides): Promise<string>;

    renderRaw(out: BytesLike, overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    additionalMetadataURI(overrides?: CallOverrides): Promise<BigNumber>;

    attributes(out: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    outSize(overrides?: CallOverrides): Promise<BigNumber>;

    render(out: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    renderRaw(out: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    additionalMetadataURI(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    attributes(
      out: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    outSize(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    render(
      out: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    renderRaw(
      out: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
  };
}
