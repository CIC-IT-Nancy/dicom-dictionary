import { DictionaryType } from './dictionary';
import { DICOMTagsElements } from './dictionary/Dictionary';

interface Tag {
    vr: string;
    vm: string;
    keyword: string;
}

interface UnknownTag {
    vr: 'UN';
}

class Tags {
    private readonly dictionary: DictionaryType;

    constructor(dictionary: DictionaryType) {
        this.dictionary = dictionary;
    }

    public getTagInformation(groupElement: string): Tag | UnknownTag;
    public getTagInformation(group: string, element: string): Tag | UnknownTag;
    public getTagInformation(
        groupOrGroupElement: string,
        element?: string,
    ): Tag | UnknownTag {
        if (element !== undefined) {
            return this.tag(groupOrGroupElement, element);
        }

        return this.tag(
            groupOrGroupElement.substring(0, 4),
            groupOrGroupElement.substring(4, 8),
        );
    }

    public getVR(groupAndElement: string): string;
    public getVR(group: string, element: string): string;
    public getVR(groupOrGroupElement: string, element?: string): string {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const tag = this.getTagInformation(groupOrGroupElement, element);
        return tag.vr;
    }

    public getVRDataType(
        vr: string,
    ):
        | null
        | 'string'
        | 'Uint8'
        | 'Uint16'
        | 'Uint32'
        | 'Uint64'
        | 'Int16'
        | 'Int32'
        | 'Int64'
        | undefined {
        return this.dictionary.VRs[vr];
    }

    public is32BitVL(vr: string) {
        return this.dictionary.VRs32BitVL.includes(vr);
    }

    public isWithVR(groupAndElement: string): boolean;
    public isWithVR(group: string, element: string): boolean;
    public isWithVR(groupOrGroupElement: string, element?: string): boolean {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const tag = this.getTagInformation(groupOrGroupElement, element);
        return tag.vr !== 'NONE';
    }

    public isSequenceDelimitationItem(groupAndElement: string): boolean;
    public isSequenceDelimitationItem(group: string, element: string): boolean;
    public isSequenceDelimitationItem(
        groupOrGroupElement: string,
        element?: string,
    ): boolean {
        if (element !== undefined) {
            return groupOrGroupElement === 'FFFE' && element === 'E0DD';
        }

        return (
            groupOrGroupElement.substring(0, 4) === 'FFFE' ||
            groupOrGroupElement.substring(4, 8) === 'E0DD'
        );
    }

    public isValidVR(vr: string) {
        return Object.keys(this.dictionary.VRs).includes(vr);
    }

    private tag(group: string, element: string): Tag | UnknownTag {
        const elements = this.elements(group);

        if (!elements) {
            return {
                vr: 'UN',
            };
        }

        const tag: [string, string, string] | undefined =
            elements[`0x${element}`];

        if (!tag) {
            return {
                vr: 'UN',
            };
        }

        return {
            vr: tag[0],
            vm: tag[1],
            keyword: tag[2],
        };
    }

    private elements(group: string): DICOMTagsElements | undefined {
        if (group === '0000') {
            return this.dictionary.DICOMTagsGroup0000['0x0000'];
        }
        return this.dictionary.DICOMTags[`0x${group}`];
    }
}

export default Tags;
