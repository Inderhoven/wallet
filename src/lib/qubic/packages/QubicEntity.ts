import { IQubicBuildPackage } from "./IQubicPackage";
import { Long } from "./Long";
import { PackageBuilder } from "./PackageBuilder";
import { PublicKey } from "./PublicKey";
import { QubicDefinitions } from "./QubicDefinitions";


/**
 * typedef struct
 * {
 *     unsigned char publicKey[32];
 *     long long incomingAmount, outgoingAmount;
 *     unsigned int numberOfIncomingTransfers, numberOfOutgoingTransfers;
 *     unsigned int latestIncomingTransferTick, latestOutgoingTransferTick;
 * } Entity;
 */
export class QubicEntity implements IQubicBuildPackage {

    private _internalPackageSize = 64;

    private publicKey: PublicKey = new PublicKey();
    private incomingAcmount: Long = new Long();
    private outgoingAmount: Long = new Long();
    private numberOfIncomingTransfers: number = 0;
    private numberOfOutgoingTransfers: number = 0;
    private latestIncomingTransferTick: number = 0;
    private latestOutgoingTransferTick: number = 0;

    public getPublicKey(): PublicKey {
        return this.publicKey;
    }

    public setPublicKey(publicKey: PublicKey): void {
        this.publicKey = publicKey;
    }

    public getIncomingAcmount(): Long {
        return this.incomingAcmount;
    }

    public setIncomingAcmount(incomingAcmount: Long): void {
        this.incomingAcmount = incomingAcmount;
    }

    public getOutgoingAmount(): Long {
        return this.outgoingAmount;
    }

    public setOutgoingAmount(outgoingAmount: Long): void {
        this.outgoingAmount = outgoingAmount;
    }

    public getNumberOfIncomingTransfers(): number {
        return this.numberOfIncomingTransfers;
    }

    public setNumberOfIncomingTransfers(numberOfIncomingTransfers: number): void {
        this.numberOfIncomingTransfers = numberOfIncomingTransfers;
    }

    public getNumberOfOutgoingTransfers(): number {
        return this.numberOfOutgoingTransfers;
    }

    public setNumberOfOutgoingTransfers(numberOfOutgoingTransfers: number): void {
        this.numberOfOutgoingTransfers = numberOfOutgoingTransfers;
    }

    public getLatestIncomingTransferTick(): number {
        return this.latestIncomingTransferTick;
    }

    public setLatestIncomingTransferTick(latestIncomingTransferTick: number): void {
        this.latestIncomingTransferTick = latestIncomingTransferTick;
    }

    public getLatestOutgoingTransferTick(): number {
        return this.latestOutgoingTransferTick;
    }

    public setLatestOutgoingTransferTick(latestOutgoingTransferTick: number): void {
        this.latestOutgoingTransferTick = latestOutgoingTransferTick;
    }


    constructor(){
    }

    public getBalance(): number {
        return Number(this.getIncomingAcmount().getNumber() - this.getOutgoingAmount().getNumber());
    }

    getPackageSize(): number {
        return this.getPackageData().length;
    }

    parse(data: Uint8Array): QubicEntity | undefined {
        if(data.length !== this._internalPackageSize)
        {
            console.error("INVALID PACKAGE SIZE")
            return undefined;
        }
        const dataView = new DataView(data.buffer);
        let offset = 0;
        this.setPublicKey(new PublicKey(data.slice(0, QubicDefinitions.PUBLIC_KEY_SIZE)));
        offset += QubicDefinitions.PUBLIC_KEY_SIZE;
        this.setIncomingAcmount(new Long(dataView.getBigInt64(offset, true)));
        offset += 8;
        this.setOutgoingAmount(new Long(dataView.getBigInt64(offset, true)));
        offset += 8;
        this.setNumberOfIncomingTransfers(dataView.getInt32(offset, true));
        offset += 4;
        this.setNumberOfOutgoingTransfers(dataView.getInt32(offset, true));
        offset += 4;
        this.setLatestIncomingTransferTick(dataView.getInt32(offset, true));
        offset += 4;
        this.setLatestOutgoingTransferTick(dataView.getInt32(offset, true));
        offset += 4;
        return this;
    }

    getPackageData(): Uint8Array {
        const builder = new PackageBuilder(this._internalPackageSize);
        builder.add(this.publicKey);
        builder.add(this.incomingAcmount);
        builder.add(this.outgoingAmount);
        builder.addInt(this.numberOfIncomingTransfers);
        builder.addInt(this.numberOfOutgoingTransfers);
        builder.addInt(this.latestIncomingTransferTick);
        builder.addInt(this.latestOutgoingTransferTick);
        
        return builder.getData();
    }
}