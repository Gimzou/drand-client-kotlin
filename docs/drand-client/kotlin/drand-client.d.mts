type Nullable<T> = T | null | undefined
declare function KtSingleton<T>(): T & (abstract new() => any);
/** @deprecated  */
export declare const initHook: { get(): any; };
export declare class Beacon {
    constructor(round: number, randomness: string, signature: string, previousSignature: Nullable<string>);
    get round(): number;
    get randomness(): string;
    get signature(): string;
    get previousSignature(): Nullable<string>;
    copy(round?: number, randomness?: string, signature?: string, previousSignature?: Nullable<string>): Beacon;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace Beacon.$metadata$ {
    const constructor: abstract new () => Beacon;
}
export declare class ChainInfo {
    constructor(publicKey: string, period: number, genesisTime: number, genesisSeed: string, chainHash: string, scheme: string, beaconId: string);
    get publicKey(): string;
    get period(): number;
    get genesisTime(): number;
    get genesisSeed(): string;
    get chainHash(): string;
    get scheme(): string;
    get beaconId(): string;
    copy(publicKey?: string, period?: number, genesisTime?: number, genesisSeed?: string, chainHash?: string, scheme?: string, beaconId?: string): ChainInfo;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace ChainInfo.$metadata$ {
    const constructor: abstract new () => ChainInfo;
}
export declare class Client {
    constructor(baseUrl?: string);
    getVerifiedLatestBeacon(beaconId: string): Promise<Beacon>;
    getVerifiedBeacon(beaconId: string, round: number): Promise<Beacon>;
    getChainInfo(beaconId: string): Promise<ChainInfo>;
    close(): void;
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace Client.$metadata$ {
    const constructor: abstract new () => Client;
}