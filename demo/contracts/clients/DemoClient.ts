/* eslint-disable */
/**
 * This file was automatically generated by @algorandfoundation/algokit-client-generator.
 * DO NOT MODIFY IT BY HAND.
 * requires: @algorandfoundation/algokit-utils: ^2
 */
import * as algokit from '@algorandfoundation/algokit-utils'
import {
  AppCallTransactionResult,
  AppCallTransactionResultOfType,
  CoreAppCallArgs,
  RawAppCallArgs,
  AppState,
  TealTemplateParams,
  ABIAppCallArg,
} from '@algorandfoundation/algokit-utils/types/app'
import {
  AppClientCallCoreParams,
  AppClientCompilationParams,
  AppClientDeployCoreParams,
  AppDetails,
  ApplicationClient,
} from '@algorandfoundation/algokit-utils/types/app-client'
import { AppSpec } from '@algorandfoundation/algokit-utils/types/app-spec'
import { SendTransactionResult, TransactionToSign, SendTransactionFrom } from '@algorandfoundation/algokit-utils/types/transaction'
import { Algodv2, OnApplicationComplete, Transaction, TransactionWithSigner, AtomicTransactionComposer } from 'algosdk'
export const APP_SPEC: AppSpec = {
  "hints": {
    "getSum(uint64,uint64)uint64": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "makeDiff(uint64,uint64)uint64": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "getDiff()uint64": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "createAsa(string)uint64": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "createApplication()void": {
      "call_config": {
        "no_op": "CREATE"
      }
    }
  },
  "bare_call_config": {
    "no_op": "NEVER",
    "opt_in": "NEVER",
    "close_out": "NEVER",
    "update_application": "NEVER",
    "delete_application": "NEVER"
  },
  "schema": {
    "local": {
      "declared": {},
      "reserved": {}
    },
    "global": {
      "declared": {
        "diff": {
          "type": "uint64",
          "key": "diff"
        }
      },
      "reserved": {}
    }
  },
  "state": {
    "global": {
      "num_byte_slices": 0,
      "num_uints": 1
    },
    "local": {
      "num_byte_slices": 0,
      "num_uints": 0
    }
  },
  "source": {
    "approval": "I3ByYWdtYSB2ZXJzaW9uIDkKCi8vIFRoaXMgVEVBTCB3YXMgZ2VuZXJhdGVkIGJ5IFRFQUxTY3JpcHQgdjAuNTkuMAovLyBodHRwczovL2dpdGh1Yi5jb20vYWxnb3JhbmRmb3VuZGF0aW9uL1RFQUxTY3JpcHQKCi8vIFRoaXMgY29udHJhY3QgaXMgY29tcGxpYW50IHdpdGggYW5kL29yIGltcGxlbWVudHMgdGhlIGZvbGxvd2luZyBBUkNzOiBbIEFSQzQgXQoKLy8gVGhlIGZvbGxvd2luZyB0ZW4gbGluZXMgb2YgVEVBTCBoYW5kbGUgaW5pdGlhbCBwcm9ncmFtIGZsb3cKLy8gVGhpcyBwYXR0ZXJuIGlzIHVzZWQgdG8gbWFrZSBpdCBlYXN5IGZvciBhbnlvbmUgdG8gcGFyc2UgdGhlIHN0YXJ0IG9mIHRoZSBwcm9ncmFtIGFuZCBkZXRlcm1pbmUgaWYgYSBzcGVjaWZpYyBhY3Rpb24gaXMgYWxsb3dlZAovLyBIZXJlLCBhY3Rpb24gcmVmZXJzIHRvIHRoZSBPbkNvbXBsZXRlIGluIGNvbWJpbmF0aW9uIHdpdGggd2hldGhlciB0aGUgYXBwIGlzIGJlaW5nIGNyZWF0ZWQgb3IgY2FsbGVkCi8vIEV2ZXJ5IHBvc3NpYmxlIGFjdGlvbiBmb3IgdGhpcyBjb250cmFjdCBpcyByZXByZXNlbnRlZCBpbiB0aGUgc3dpdGNoIHN0YXRlbWVudAovLyBJZiB0aGUgYWN0aW9uIGlzIG5vdCBpbXBsbWVudGVkIGluIHRoZSBjb250cmFjdCwgaXRzIHJlcHNlY3RpdmUgYnJhbmNoIHdpbGwgYmUgIk5PVF9JTVBMTUVOVEVEIiB3aGljaCBqdXN0IGNvbnRhaW5zICJlcnIiCnR4biBBcHBsaWNhdGlvbklECmludCAwCj4KaW50IDYKKgp0eG4gT25Db21wbGV0aW9uCisKc3dpdGNoIGNyZWF0ZV9Ob09wIE5PVF9JTVBMRU1FTlRFRCBOT1RfSU1QTEVNRU5URUQgTk9UX0lNUExFTUVOVEVEIE5PVF9JTVBMRU1FTlRFRCBOT1RfSU1QTEVNRU5URUQgY2FsbF9Ob09wCgpOT1RfSU1QTEVNRU5URUQ6CgllcnIKCi8vIGdldFN1bSh1aW50NjQsdWludDY0KXVpbnQ2NAphYmlfcm91dGVfZ2V0U3VtOgoJLy8gYjogdWludDY0Cgl0eG5hIEFwcGxpY2F0aW9uQXJncyAyCglidG9pCgoJLy8gYTogdWludDY0Cgl0eG5hIEFwcGxpY2F0aW9uQXJncyAxCglidG9pCgoJLy8gZXhlY3V0ZSBnZXRTdW0odWludDY0LHVpbnQ2NCl1aW50NjQKCWNhbGxzdWIgZ2V0U3VtCglpbnQgMQoJcmV0dXJuCgpnZXRTdW06Cglwcm90byAyIDAKCgkvLyBjb250cmFjdHMvZGVtby5hbGdvLnRzOjgKCS8vIHJldHVybiBhICsgYjsKCWZyYW1lX2RpZyAtMSAvLyBhOiB1aW50NjQKCWZyYW1lX2RpZyAtMiAvLyBiOiB1aW50NjQKCSsKCWl0b2IKCWJ5dGUgMHgxNTFmN2M3NQoJc3dhcAoJY29uY2F0Cglsb2cKCXJldHN1YgoKLy8gbWFrZURpZmYodWludDY0LHVpbnQ2NCl1aW50NjQKYWJpX3JvdXRlX21ha2VEaWZmOgoJYnl0ZSAweCAvLyBwdXNoIGVtcHR5IGJ5dGVzIHRvIGZpbGwgdGhlIHN0YWNrIGZyYW1lIGZvciB0aGlzIHN1YnJvdXRpbmUncyBsb2NhbCB2YXJpYWJsZXMKCgkvLyBiOiB1aW50NjQKCXR4bmEgQXBwbGljYXRpb25BcmdzIDIKCWJ0b2kKCgkvLyBhOiB1aW50NjQKCXR4bmEgQXBwbGljYXRpb25BcmdzIDEKCWJ0b2kKCgkvLyBleGVjdXRlIG1ha2VEaWZmKHVpbnQ2NCx1aW50NjQpdWludDY0CgljYWxsc3ViIG1ha2VEaWZmCglpbnQgMQoJcmV0dXJuCgptYWtlRGlmZjoKCXByb3RvIDMgMAoKCS8vIGNvbnRyYWN0cy9kZW1vLmFsZ28udHM6MTIKCS8vIHJlc3VsdDogbnVtYmVyID0gYSA+IGIgPyBhIC0gYiA6IGIgLSBhCglmcmFtZV9kaWcgLTEgLy8gYTogdWludDY0CglmcmFtZV9kaWcgLTIgLy8gYjogdWludDY0Cgk+CglieiB0ZXJuYXJ5MV9mYWxzZQoJZnJhbWVfZGlnIC0xIC8vIGE6IHVpbnQ2NAoJZnJhbWVfZGlnIC0yIC8vIGI6IHVpbnQ2NAoJLQoJYiB0ZXJuYXJ5MV9lbmQKCnRlcm5hcnkxX2ZhbHNlOgoJZnJhbWVfZGlnIC0yIC8vIGI6IHVpbnQ2NAoJZnJhbWVfZGlnIC0xIC8vIGE6IHVpbnQ2NAoJLQoKdGVybmFyeTFfZW5kOgoJZnJhbWVfYnVyeSAtMyAvLyByZXN1bHQ6IHVpbnQ2NAoKCS8vIGNvbnRyYWN0cy9kZW1vLmFsZ28udHM6MTMKCS8vIHRoaXMuZGlmZi52YWx1ZSA9IHJlc3VsdAoJYnl0ZSAweDY0Njk2NjY2IC8vICJkaWZmIgoJZnJhbWVfZGlnIC0zIC8vIHJlc3VsdDogdWludDY0CglhcHBfZ2xvYmFsX3B1dAoKCS8vIGNvbnRyYWN0cy9kZW1vLmFsZ28udHM6MTQKCS8vIHJldHVybiByZXN1bHQ7CglmcmFtZV9kaWcgLTMgLy8gcmVzdWx0OiB1aW50NjQKCWl0b2IKCWJ5dGUgMHgxNTFmN2M3NQoJc3dhcAoJY29uY2F0Cglsb2cKCXJldHN1YgoKLy8gZ2V0RGlmZigpdWludDY0CmFiaV9yb3V0ZV9nZXREaWZmOgoJLy8gZXhlY3V0ZSBnZXREaWZmKCl1aW50NjQKCWNhbGxzdWIgZ2V0RGlmZgoJaW50IDEKCXJldHVybgoKZ2V0RGlmZjoKCXByb3RvIDAgMAoKCS8vIGNvbnRyYWN0cy9kZW1vLmFsZ28udHM6MTgKCS8vIHJldHVybiB0aGlzLmRpZmYudmFsdWU7CglieXRlIDB4NjQ2OTY2NjYgLy8gImRpZmYiCglhcHBfZ2xvYmFsX2dldAoJaXRvYgoJYnl0ZSAweDE1MWY3Yzc1Cglzd2FwCgljb25jYXQKCWxvZwoJcmV0c3ViCgovLyBjcmVhdGVBc2Eoc3RyaW5nKXVpbnQ2NAphYmlfcm91dGVfY3JlYXRlQXNhOgoJYnl0ZSAweCAvLyBwdXNoIGVtcHR5IGJ5dGVzIHRvIGZpbGwgdGhlIHN0YWNrIGZyYW1lIGZvciB0aGlzIHN1YnJvdXRpbmUncyBsb2NhbCB2YXJpYWJsZXMKCgkvLyBuYW1lOiBzdHJpbmcKCXR4bmEgQXBwbGljYXRpb25BcmdzIDEKCWV4dHJhY3QgMiAwCgoJLy8gZXhlY3V0ZSBjcmVhdGVBc2Eoc3RyaW5nKXVpbnQ2NAoJY2FsbHN1YiBjcmVhdGVBc2EKCWludCAxCglyZXR1cm4KCmNyZWF0ZUFzYToKCXByb3RvIDIgMAoKCS8vIGNvbnRyYWN0cy9kZW1vLmFsZ28udHM6MjIKCS8vIGFzYSA9IHNlbmRBc3NldENyZWF0aW9uKHsKCS8vICAgICAgIGNvbmZpZ0Fzc2V0VG90YWw6IDFfMDAwLAoJLy8gICAgICAgY29uZmlnQXNzZXROYW1lOiBuYW1lLAoJLy8gICAgIH0pCglpdHhuX2JlZ2luCglpbnQgYWNmZwoJaXR4bl9maWVsZCBUeXBlRW51bQoKCS8vIGNvbnRyYWN0cy9kZW1vLmFsZ28udHM6MjMKCS8vIGNvbmZpZ0Fzc2V0VG90YWw6IDFfMDAwCglpbnQgMV8wMDAKCWl0eG5fZmllbGQgQ29uZmlnQXNzZXRUb3RhbAoKCS8vIGNvbnRyYWN0cy9kZW1vLmFsZ28udHM6MjQKCS8vIGNvbmZpZ0Fzc2V0TmFtZTogbmFtZQoJZnJhbWVfZGlnIC0xIC8vIG5hbWU6IGJ5dGVzCglpdHhuX2ZpZWxkIENvbmZpZ0Fzc2V0TmFtZQoKCS8vIEZlZSBmaWVsZCBub3Qgc2V0LCBkZWZhdWx0aW5nIHRvIDAKCWludCAwCglpdHhuX2ZpZWxkIEZlZQoKCS8vIFN1Ym1pdCBpbm5lciB0cmFuc2FjdGlvbgoJaXR4bl9zdWJtaXQKCWl0eG4gQ3JlYXRlZEFzc2V0SUQKCWZyYW1lX2J1cnkgLTIgLy8gYXNhOiBhc3NldAoKCS8vIGNvbnRyYWN0cy9kZW1vLmFsZ28udHM6MjYKCS8vIHJldHVybiBhc2E7CglmcmFtZV9kaWcgLTIgLy8gYXNhOiBhc3NldAoJaXRvYgoJYnl0ZSAweDE1MWY3Yzc1Cglzd2FwCgljb25jYXQKCWxvZwoJcmV0c3ViCgphYmlfcm91dGVfY3JlYXRlQXBwbGljYXRpb246CglpbnQgMQoJcmV0dXJuCgpjcmVhdGVfTm9PcDoKCW1ldGhvZCAiY3JlYXRlQXBwbGljYXRpb24oKXZvaWQiCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAwCgltYXRjaCBhYmlfcm91dGVfY3JlYXRlQXBwbGljYXRpb24KCWVycgoKY2FsbF9Ob09wOgoJbWV0aG9kICJnZXRTdW0odWludDY0LHVpbnQ2NCl1aW50NjQiCgltZXRob2QgIm1ha2VEaWZmKHVpbnQ2NCx1aW50NjQpdWludDY0IgoJbWV0aG9kICJnZXREaWZmKCl1aW50NjQiCgltZXRob2QgImNyZWF0ZUFzYShzdHJpbmcpdWludDY0IgoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMAoJbWF0Y2ggYWJpX3JvdXRlX2dldFN1bSBhYmlfcm91dGVfbWFrZURpZmYgYWJpX3JvdXRlX2dldERpZmYgYWJpX3JvdXRlX2NyZWF0ZUFzYQoJZXJy",
    "clear": "I3ByYWdtYSB2ZXJzaW9uIDk="
  },
  "contract": {
    "name": "Demo",
    "desc": "",
    "methods": [
      {
        "name": "getSum",
        "args": [
          {
            "name": "a",
            "type": "uint64",
            "desc": ""
          },
          {
            "name": "b",
            "type": "uint64",
            "desc": ""
          }
        ],
        "desc": "",
        "returns": {
          "type": "uint64",
          "desc": ""
        }
      },
      {
        "name": "makeDiff",
        "args": [
          {
            "name": "a",
            "type": "uint64",
            "desc": ""
          },
          {
            "name": "b",
            "type": "uint64",
            "desc": ""
          }
        ],
        "desc": "",
        "returns": {
          "type": "uint64",
          "desc": ""
        }
      },
      {
        "name": "getDiff",
        "args": [],
        "desc": "",
        "returns": {
          "type": "uint64",
          "desc": ""
        }
      },
      {
        "name": "createAsa",
        "args": [
          {
            "name": "name",
            "type": "string",
            "desc": ""
          }
        ],
        "desc": "",
        "returns": {
          "type": "uint64",
          "desc": ""
        }
      },
      {
        "name": "createApplication",
        "desc": "",
        "returns": {
          "type": "void",
          "desc": ""
        },
        "args": []
      }
    ]
  }
}

/**
 * Defines an onCompletionAction of 'no_op'
 */
export type OnCompleteNoOp =  { onCompleteAction?: 'no_op' | OnApplicationComplete.NoOpOC }
/**
 * Defines an onCompletionAction of 'opt_in'
 */
export type OnCompleteOptIn =  { onCompleteAction: 'opt_in' | OnApplicationComplete.OptInOC }
/**
 * Defines an onCompletionAction of 'close_out'
 */
export type OnCompleteCloseOut =  { onCompleteAction: 'close_out' | OnApplicationComplete.CloseOutOC }
/**
 * Defines an onCompletionAction of 'delete_application'
 */
export type OnCompleteDelApp =  { onCompleteAction: 'delete_application' | OnApplicationComplete.DeleteApplicationOC }
/**
 * Defines an onCompletionAction of 'update_application'
 */
export type OnCompleteUpdApp =  { onCompleteAction: 'update_application' | OnApplicationComplete.UpdateApplicationOC }
/**
 * A state record containing a single unsigned integer
 */
export type IntegerState = {
  /**
   * Gets the state value as a BigInt 
   */
  asBigInt(): bigint
  /**
   * Gets the state value as a number.
   */
  asNumber(): number
}
/**
 * A state record containing binary data
 */
export type BinaryState = {
  /**
   * Gets the state value as a Uint8Array
   */
  asByteArray(): Uint8Array
  /**
   * Gets the state value as a string
   */
  asString(): string
}

/**
 * Defines the types of available calls and state of the Demo smart contract.
 */
export type Demo = {
  /**
   * Maps method signatures / names to their argument and return types.
   */
  methods:
    & Record<'getSum(uint64,uint64)uint64' | 'getSum', {
      argsObj: {
        a: bigint | number
        b: bigint | number
      }
      argsTuple: [a: bigint | number, b: bigint | number]
      returns: bigint
    }>
    & Record<'makeDiff(uint64,uint64)uint64' | 'makeDiff', {
      argsObj: {
        a: bigint | number
        b: bigint | number
      }
      argsTuple: [a: bigint | number, b: bigint | number]
      returns: bigint
    }>
    & Record<'getDiff()uint64' | 'getDiff', {
      argsObj: {
      }
      argsTuple: []
      returns: bigint
    }>
    & Record<'createAsa(string)uint64' | 'createAsa', {
      argsObj: {
        name: string
      }
      argsTuple: [name: string]
      returns: bigint
    }>
    & Record<'createApplication()void' | 'createApplication', {
      argsObj: {
      }
      argsTuple: []
      returns: void
    }>
  /**
   * Defines the shape of the global and local state of the application.
   */
  state: {
    global: {
      'diff'?: IntegerState
    }
  }
}
/**
 * Defines the possible abi call signatures
 */
export type DemoSig = keyof Demo['methods']
/**
 * Defines an object containing all relevant parameters for a single call to the contract. Where TSignature is undefined, a bare call is made
 */
export type TypedCallParams<TSignature extends DemoSig | undefined> = {
  method: TSignature
  methodArgs: TSignature extends undefined ? undefined : Array<ABIAppCallArg | undefined>
} & AppClientCallCoreParams & CoreAppCallArgs
/**
 * Defines the arguments required for a bare call
 */
export type BareCallArgs = Omit<RawAppCallArgs, keyof CoreAppCallArgs>
/**
 * Maps a method signature from the Demo smart contract to the method's arguments in either tuple of struct form
 */
export type MethodArgs<TSignature extends DemoSig> = Demo['methods'][TSignature]['argsObj' | 'argsTuple']
/**
 * Maps a method signature from the Demo smart contract to the method's return type
 */
export type MethodReturn<TSignature extends DemoSig> = Demo['methods'][TSignature]['returns']

/**
 * A factory for available 'create' calls
 */
export type DemoCreateCalls = (typeof DemoCallFactory)['create']
/**
 * Defines supported create methods for this smart contract
 */
export type DemoCreateCallParams =
  | (TypedCallParams<'createApplication()void'> & (OnCompleteNoOp))
/**
 * Defines arguments required for the deploy method.
 */
export type DemoDeployArgs = {
  deployTimeParams?: TealTemplateParams
  /**
   * A delegate which takes a create call factory and returns the create call params for this smart contract
   */
  createCall?: (callFactory: DemoCreateCalls) => DemoCreateCallParams
}


/**
 * Exposes methods for constructing all available smart contract calls
 */
export abstract class DemoCallFactory {
  /**
   * Gets available create call factories
   */
  static get create() {
    return {
      /**
       * Constructs a create call for the Demo smart contract using the createApplication()void ABI method
       *
       * @param args Any args for the contract call
       * @param params Any additional parameters for the call
       * @returns A TypedCallParams object for the call
       */
      createApplication(args: MethodArgs<'createApplication()void'>, params: AppClientCallCoreParams & CoreAppCallArgs & AppClientCompilationParams & (OnCompleteNoOp) = {}) {
        return {
          method: 'createApplication()void' as const,
          methodArgs: Array.isArray(args) ? args : [],
          ...params,
        }
      },
    }
  }

  /**
   * Constructs a no op call for the getSum(uint64,uint64)uint64 ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static getSum(args: MethodArgs<'getSum(uint64,uint64)uint64'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'getSum(uint64,uint64)uint64' as const,
      methodArgs: Array.isArray(args) ? args : [args.a, args.b],
      ...params,
    }
  }
  /**
   * Constructs a no op call for the makeDiff(uint64,uint64)uint64 ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static makeDiff(args: MethodArgs<'makeDiff(uint64,uint64)uint64'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'makeDiff(uint64,uint64)uint64' as const,
      methodArgs: Array.isArray(args) ? args : [args.a, args.b],
      ...params,
    }
  }
  /**
   * Constructs a no op call for the getDiff()uint64 ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static getDiff(args: MethodArgs<'getDiff()uint64'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'getDiff()uint64' as const,
      methodArgs: Array.isArray(args) ? args : [],
      ...params,
    }
  }
  /**
   * Constructs a no op call for the createAsa(string)uint64 ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static createAsa(args: MethodArgs<'createAsa(string)uint64'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'createAsa(string)uint64' as const,
      methodArgs: Array.isArray(args) ? args : [args.name],
      ...params,
    }
  }
}

/**
 * A client to make calls to the Demo smart contract
 */
export class DemoClient {
  /**
   * The underlying `ApplicationClient` for when you want to have more flexibility
   */
  public readonly appClient: ApplicationClient

  private readonly sender: SendTransactionFrom | undefined

  /**
   * Creates a new instance of `DemoClient`
   *
   * @param appDetails appDetails The details to identify the app to deploy
   * @param algod An algod client instance
   */
  constructor(appDetails: AppDetails, private algod: Algodv2) {
    this.sender = appDetails.sender
    this.appClient = algokit.getAppClient({
      ...appDetails,
      app: APP_SPEC
    }, algod)
  }

  /**
   * Checks for decode errors on the AppCallTransactionResult and maps the return value to the specified generic type
   *
   * @param result The AppCallTransactionResult to be mapped
   * @param returnValueFormatter An optional delegate to format the return value if required
   * @returns The smart contract response with an updated return value
   */
  protected mapReturnValue<TReturn>(result: AppCallTransactionResult, returnValueFormatter?: (value: any) => TReturn): AppCallTransactionResultOfType<TReturn> {
    if(result.return?.decodeError) {
      throw result.return.decodeError
    }
    const returnValue = result.return?.returnValue !== undefined && returnValueFormatter !== undefined
      ? returnValueFormatter(result.return.returnValue)
      : result.return?.returnValue as TReturn | undefined
      return { ...result, return: returnValue }
  }

  /**
   * Calls the ABI method with the matching signature using an onCompletion code of NO_OP
   *
   * @param typedCallParams An object containing the method signature, args, and any other relevant parameters
   * @param returnValueFormatter An optional delegate which when provided will be used to map non-undefined return values to the target type
   * @returns The result of the smart contract call
   */
  public async call<TSignature extends keyof Demo['methods']>(typedCallParams: TypedCallParams<TSignature>, returnValueFormatter?: (value: any) => MethodReturn<TSignature>) {
    return this.mapReturnValue<MethodReturn<TSignature>>(await this.appClient.call(typedCallParams), returnValueFormatter)
  }

  /**
   * Idempotently deploys the Demo smart contract.
   *
   * @param params The arguments for the contract calls and any additional parameters for the call
   * @returns The deployment result
   */
  public deploy(params: DemoDeployArgs & AppClientDeployCoreParams = {}): ReturnType<ApplicationClient['deploy']> {
    const createArgs = params.createCall?.(DemoCallFactory.create)
    return this.appClient.deploy({
      ...params,
      createArgs,
      createOnCompleteAction: createArgs?.onCompleteAction,
    })
  }

  /**
   * Gets available create methods
   */
  public get create() {
    const $this = this
    return {
      /**
       * Creates a new instance of the Demo smart contract using the createApplication()void ABI method.
       *
       * @param args The arguments for the smart contract call
       * @param params Any additional parameters for the call
       * @returns The create result
       */
      async createApplication(args: MethodArgs<'createApplication()void'>, params: AppClientCallCoreParams & AppClientCompilationParams & (OnCompleteNoOp) = {}): Promise<AppCallTransactionResultOfType<MethodReturn<'createApplication()void'>>> {
        return $this.mapReturnValue(await $this.appClient.create(DemoCallFactory.create.createApplication(args, params)))
      },
    }
  }

  /**
   * Makes a clear_state call to an existing instance of the Demo smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The clear_state result
   */
  public clearState(args: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.appClient.clearState(args)
  }

  /**
   * Calls the getSum(uint64,uint64)uint64 ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public getSum(args: MethodArgs<'getSum(uint64,uint64)uint64'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(DemoCallFactory.getSum(args, params))
  }

  /**
   * Calls the makeDiff(uint64,uint64)uint64 ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public makeDiff(args: MethodArgs<'makeDiff(uint64,uint64)uint64'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(DemoCallFactory.makeDiff(args, params))
  }

  /**
   * Calls the getDiff()uint64 ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public getDiff(args: MethodArgs<'getDiff()uint64'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(DemoCallFactory.getDiff(args, params))
  }

  /**
   * Calls the createAsa(string)uint64 ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public createAsa(args: MethodArgs<'createAsa(string)uint64'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(DemoCallFactory.createAsa(args, params))
  }

  /**
   * Extracts a binary state value out of an AppState dictionary
   *
   * @param state The state dictionary containing the state value
   * @param key The key of the state value
   * @returns A BinaryState instance containing the state value, or undefined if the key was not found
   */
  private static getBinaryState(state: AppState, key: string): BinaryState | undefined {
    const value = state[key]
    if (!value) return undefined
    if (!('valueRaw' in value))
      throw new Error(`Failed to parse state value for ${key}; received an int when expected a byte array`)
    return {
      asString(): string {
        return value.value
      },
      asByteArray(): Uint8Array {
        return value.valueRaw
      }
    }
  }

  /**
   * Extracts a integer state value out of an AppState dictionary
   *
   * @param state The state dictionary containing the state value
   * @param key The key of the state value
   * @returns An IntegerState instance containing the state value, or undefined if the key was not found
   */
  private static getIntegerState(state: AppState, key: string): IntegerState | undefined {
    const value = state[key]
    if (!value) return undefined
    if ('valueRaw' in value)
      throw new Error(`Failed to parse state value for ${key}; received a byte array when expected a number`)
    return {
      asBigInt() {
        return typeof value.value === 'bigint' ? value.value : BigInt(value.value)
      },
      asNumber(): number {
        return typeof value.value === 'bigint' ? Number(value.value) : value.value
      },
    }
  }

  /**
   * Returns the smart contract's global state wrapped in a strongly typed accessor with options to format the stored value
   */
  public async getGlobalState(): Promise<Demo['state']['global']> {
    const state = await this.appClient.getGlobalState()
    return {
      get diff() {
        return DemoClient.getIntegerState(state, 'diff')
      },
    }
  }

  public compose(): DemoComposer {
    const client = this
    const atc = new AtomicTransactionComposer()
    let promiseChain:Promise<unknown> = Promise.resolve()
    const resultMappers: Array<undefined | ((x: any) => any)> = []
    return {
      getSum(args: MethodArgs<'getSum(uint64,uint64)uint64'>, params?: AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.getSum(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      makeDiff(args: MethodArgs<'makeDiff(uint64,uint64)uint64'>, params?: AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.makeDiff(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      getDiff(args: MethodArgs<'getDiff()uint64'>, params?: AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.getDiff(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      createAsa(args: MethodArgs<'createAsa(string)uint64'>, params?: AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.createAsa(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      clearState(args?: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.clearState({...args, sendParams: {...args?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      addTransaction(txn: TransactionWithSigner | TransactionToSign | Transaction | Promise<SendTransactionResult>, defaultSender?: SendTransactionFrom) {
        promiseChain = promiseChain.then(async () => atc.addTransaction(await algokit.getTransactionWithSigner(txn, defaultSender ?? client.sender)))
        return this
      },
      async atc() {
        await promiseChain
        return atc
      },
      async execute() {
        await promiseChain
        const result = await algokit.sendAtomicTransactionComposer({ atc, sendParams: {} }, client.algod)
        return {
          ...result,
          returns: result.returns?.map((val, i) => resultMappers[i] !== undefined ? resultMappers[i]!(val.returnValue) : val.returnValue)
        }
      }
    } as unknown as DemoComposer
  }
}
export type DemoComposer<TReturns extends [...any[]] = []> = {
  /**
   * Calls the getSum(uint64,uint64)uint64 ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  getSum(args: MethodArgs<'getSum(uint64,uint64)uint64'>, params?: AppClientCallCoreParams & CoreAppCallArgs): DemoComposer<[...TReturns, MethodReturn<'getSum(uint64,uint64)uint64'>]>

  /**
   * Calls the makeDiff(uint64,uint64)uint64 ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  makeDiff(args: MethodArgs<'makeDiff(uint64,uint64)uint64'>, params?: AppClientCallCoreParams & CoreAppCallArgs): DemoComposer<[...TReturns, MethodReturn<'makeDiff(uint64,uint64)uint64'>]>

  /**
   * Calls the getDiff()uint64 ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  getDiff(args: MethodArgs<'getDiff()uint64'>, params?: AppClientCallCoreParams & CoreAppCallArgs): DemoComposer<[...TReturns, MethodReturn<'getDiff()uint64'>]>

  /**
   * Calls the createAsa(string)uint64 ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  createAsa(args: MethodArgs<'createAsa(string)uint64'>, params?: AppClientCallCoreParams & CoreAppCallArgs): DemoComposer<[...TReturns, MethodReturn<'createAsa(string)uint64'>]>

  /**
   * Makes a clear_state call to an existing instance of the Demo smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  clearState(args?: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs): DemoComposer<[...TReturns, undefined]>

  /**
   * Adds a transaction to the composer
   *
   * @param txn One of: A TransactionWithSigner object (returned as is), a TransactionToSign object (signer is obtained from the signer property), a Transaction object (signer is extracted from the defaultSender parameter), an async SendTransactionResult returned by one of algokit utils helpers (signer is obtained from the defaultSender parameter)
   * @param defaultSender The default sender to be used to obtain a signer where the object provided to the transaction parameter does not include a signer.
   */
  addTransaction(txn: TransactionWithSigner | TransactionToSign | Transaction | Promise<SendTransactionResult>, defaultSender?: SendTransactionFrom): DemoComposer<TReturns>
  /**
   * Returns the underlying AtomicTransactionComposer instance
   */
  atc(): Promise<AtomicTransactionComposer>
  /**
   * Executes the transaction group and returns an array of results
   */
  execute(): Promise<DemoComposerResults<TReturns>>
}
export type DemoComposerResults<TReturns extends [...any[]]> = {
  returns: TReturns
  groupId: string
  txIds: string[]
  transactions: Transaction[]
}
