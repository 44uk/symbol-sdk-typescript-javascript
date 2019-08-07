// tslint:disable: jsdoc-format
/**
*** Copyright (c) 2016-present,
*** Jaguar0625, gimre, BloodyRookie, Tech Bureau, Corp. All rights reserved.
***
*** This file is part of Catapult.
***
*** Catapult is free software: you can redistribute it and/or modify
*** it under the terms of the GNU Lesser General Public License as published by
*** the Free Software Foundation, either version 3 of the License, or
*** (at your option) any later version.
***
*** Catapult is distributed in the hope that it will be useful,
*** but WITHOUT ANY WARRANTY; without even the implied warranty of
*** MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
*** GNU Lesser General Public License for more details.
***
*** You should have received a copy of the GNU Lesser General Public License
*** along with Catapult. If not, see <http://www.gnu.org/licenses/>.
**/

import { GeneratorUtils } from './GeneratorUtils';

/** Address. */
export class AddressDto {
    /** Address. */
    address: Uint8Array;

    /**
     * Constructor.
     *
     * @param address Address.
     */
     constructor(address: Uint8Array) {
        this.address = address;
    }

    /**
     * Creates an instance of AddressDto from binary payload.
     *
     * @param payload Byte payload to use to serialize the object.
     * @return Instance of AddressDto.
     */
    public static loadFromBinary(payload: Uint8Array): AddressDto {
        const byteArray = Array.from(payload);
        const address = GeneratorUtils.getBytes(Uint8Array.from(byteArray), 25);
        byteArray.splice(0, 25);
        return new AddressDto(address);
    }

    /**
     * Gets Address.
     *
     * @return Address.
     */
    public getAddress(): Uint8Array {
        return this.address;
    }

    /**
     * Gets the size of the object.
     *
     * @return Size in bytes.
     */
    public getSize(): number {
        return 25;
    }

    /**
     * Serializes an object to bytes.
     *
     * @return Serialized bytes.
     */
    public serialize(): Uint8Array {
        let newArray = Uint8Array.from([]);
        newArray = GeneratorUtils.concatTypedArrays(newArray, this.address);
        return newArray;
    }
}
