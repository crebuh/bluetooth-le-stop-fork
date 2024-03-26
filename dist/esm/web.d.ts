import { WebPlugin } from '@capacitor/core';
import type { TimeoutOptions, BleDevice, BleServices, BluetoothLePlugin, BooleanResult, DeviceIdOptions, GetConnectedDevicesOptions, GetDevicesOptions, GetDevicesResult, ReadDescriptorOptions, ReadOptions, ReadResult, ReadRssiResult, RequestBleDeviceOptions, WriteOptions, WriteDescriptorOptions, GetMtuResult, RequestConnectionPriorityOptions, SetCustomConfigOptions } from './definitions';
export declare class BluetoothLeWeb extends WebPlugin implements BluetoothLePlugin {
    private deviceMap;
    private discoveredDevices;
    private scan;
    private requestBleDeviceOptions;
    private DEFAULT_CONNECTION_TIMEOUT;
    initialize(): Promise<void>;
    isEnabled(): Promise<BooleanResult>;
    requestEnable(): Promise<void>;
    enable(): Promise<void>;
    disable(): Promise<void>;
    startEnabledNotifications(): Promise<void>;
    stopEnabledNotifications(): Promise<void>;
    isLocationEnabled(): Promise<BooleanResult>;
    openLocationSettings(): Promise<void>;
    openBluetoothSettings(): Promise<void>;
    openAppSettings(): Promise<void>;
    setDisplayStrings(): Promise<void>;
    requestDevice(options?: RequestBleDeviceOptions): Promise<BleDevice>;
    requestLEScan(options?: RequestBleDeviceOptions): Promise<void>;
    private onAdvertisementReceivedCallback;
    private onAdvertisementReceived;
    stopLEScan(): Promise<void>;
    getDevices(options: GetDevicesOptions): Promise<GetDevicesResult>;
    getConnectedDevices(_options: GetConnectedDevicesOptions): Promise<GetDevicesResult>;
    connect(options: DeviceIdOptions & TimeoutOptions): Promise<void>;
    private onDisconnectedCallback;
    private onDisconnected;
    createBond(_options: DeviceIdOptions): Promise<void>;
    isBonded(_options: DeviceIdOptions): Promise<BooleanResult>;
    disconnect(options: DeviceIdOptions): Promise<void>;
    getServices(options: DeviceIdOptions): Promise<BleServices>;
    private getDescriptors;
    private getProperties;
    private getCharacteristic;
    private getDescriptor;
    discoverServices(_options: DeviceIdOptions): Promise<void>;
    getMtu(_options: DeviceIdOptions): Promise<GetMtuResult>;
    requestConnectionPriority(_options: RequestConnectionPriorityOptions): Promise<void>;
    readRssi(_options: DeviceIdOptions): Promise<ReadRssiResult>;
    read(options: ReadOptions): Promise<ReadResult>;
    write(options: WriteOptions): Promise<void>;
    writeWithoutResponse(options: WriteOptions): Promise<void>;
    readDescriptor(options: ReadDescriptorOptions): Promise<ReadResult>;
    writeDescriptor(options: WriteDescriptorOptions): Promise<void>;
    startNotifications(options: ReadOptions): Promise<void>;
    private onCharacteristicValueChangedCallback;
    private onCharacteristicValueChanged;
    stopNotifications(options: ReadOptions): Promise<void>;
    setCustomConfig(_options: SetCustomConfigOptions): Promise<void>;
    private getFilters;
    private getDeviceFromMap;
    private getBleDevice;
}
