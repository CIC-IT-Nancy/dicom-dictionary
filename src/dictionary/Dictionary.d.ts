export interface ImageIODModulesValue {
    name: string;
    tag: string;
    type: string;
    enum?: string[];
    condition?: string | string[];
    desc: string;
    items?: ImageIODModulesValue[];
}

export interface ImageIODModules {
    [module: string]: ImageIODModulesValue[];
}

export type CharacterSetVRs = string[];

export interface VRs {
    [vr: string]:
        | null
        | 'string'
        | 'Uint8'
        | 'Uint16'
        | 'Uint32'
        | 'Uint64'
        | 'Int16'
        | 'Int32'
        | 'Int64';
}

export type VRs32BitVL = string[];

export interface DICOMTagsElements {
    [element: string]: [string, string, string];
}

export interface DICOMTags {
    [group: string]: DICOMTagsElements;
}

export interface UIDs {
    [uid: string]: string;
}

export interface DICOMTagsGroup0000 {
    '0x0000': DICOMTagsElements;
}

export interface Dictionary {
    CTImageIODModules: ImageIODModules;
    MRImageIODModules: ImageIODModules;
    CharacterSetVRs: CharacterSetVRs;
    VRs: VRs;
    VRs32BitVL: VRs32BitVL;
    DICOMTags: DICOMTags;
    SOPClassAndInstanceUIDs: UIDs;
    TransferSyntaxUIDs: UIDs;
    DICOMTagsGroup0000: DICOMTagsGroup0000;
}
