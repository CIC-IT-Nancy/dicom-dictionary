// Part 3
import CTImageIODModules from './part3/CTImageIODModules';
import MRImageIODModules from './part3/MRImageIODModules';
// Part 5
import CharacterSetVRs from './part5/CharacterSetVRs';
import VRs from './part5/VRs';
import VRs32BitVL from './part5/VRs32BitVL';
// Part 6
import DICOMTags from './part6/DICOMTags';
import SOPClassAndInstanceUIDs from './part6/SOPClassAndInstanceUIDs';
import TransferSyntaxUIDs from './part6/TransferSyntaxUIDs';
// Part 7
import DICOMTagsGroup0000 from './part7/DICOMTagsGroup0000';

import { Dictionary } from '../Dictionary';

const Dictionary2025a: Dictionary = {
    // Part 3
    CTImageIODModules,
    MRImageIODModules,
    // Part 5
    CharacterSetVRs,
    VRs,
    VRs32BitVL,
    // Part 6
    DICOMTags,
    SOPClassAndInstanceUIDs,
    TransferSyntaxUIDs,
    // Part 7
    DICOMTagsGroup0000,
} as const;

export default Dictionary2025a;
