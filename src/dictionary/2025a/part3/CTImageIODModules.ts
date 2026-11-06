import { ImageIODModules } from '../../Dictionary';

const CTImageIODModules: ImageIODModules = {
    Patient: [
        {
            name: "Patient's Alternative Calendar",
            tag: '(0010,0035)',
            type: '1C',
            enum: [
                'PROLEPTIC GREGN',
                'JULIAN',
                'PROLEPTIC JULIAN',
                'EGYPTIAN REGNAL',
                'HEBREW',
                'HIJRI',
            ],
            condition:
                "Required if either Patient's Birth Date in Alternative Calendar (0010,0033) or Patient's Alternative Death Date in Calendar (0010,0034) is present.",
            desc: "The Alternative Calendar used for Patient's Birth Date in Alternative Calendar (0010,0033) and Patient's Death Date in Alternative Calendar (0010,0034).",
        },
        {
            name: 'Patient Species Description',
            tag: '(0010,2201)',
            type: '1C',
            condition:
                'Required if the Patient is a non-human organism and if Patient Species Code Sequence (0010,2202) is not present. May be present otherwise.',
            desc: 'The taxonomic rank value (e.g., genus, subgenus, species or subspecies) of the Patient. See linkend="sect_C.7.1.1.1.3".',
        },
        {
            name: 'Patient Species Code Sequence',
            tag: '(0010,2202)',
            type: '1C',
            condition:
                'Required if the Patient is a non-human organism and if Patient Species Description (0010,2201) is not present. May be present otherwise.',
            desc: 'The taxonomic rank value (e.g., genus, subgenus, species or subspecies) of the Patient. See linkend="sect_C.7.1.1.1.3". Only a single Item shall be included in this Sequence.',
            items: [
                {
                    name: 'Code Value',
                    tag: '(0008,0100)',
                    type: '1C',
                    desc: 'The identifier of the Coded Entry. See linkend="sect_8.1". Shall be present if the code value length is 16 characters or less, and the code value is not a URN or URL.',
                },
                {
                    name: 'Coding Scheme Designator',
                    tag: '(0008,0102)',
                    type: '1C',
                    desc: 'The identifier of the coding scheme in which the Coded Entry is defined. See linkend="sect_8.2". Shall be present if Code Value (0008,0100) or Long Code Value (0008,0119) is present. May be present otherwise.',
                },
                {
                    name: 'Coding Scheme Version',
                    tag: '(0008,0103)',
                    type: '1C',
                    condition:
                        'Required if the value of Coding Scheme Designator (0008,0102) is present and is not sufficient to identify the Code Value (0008,0100) or Long Code Value (0008,0119) unambiguously. Shall not be present if Coding Scheme Designator (0008,0102) is absent. May be present otherwise.',
                    desc: 'An identifier of the version of the coding scheme if necessary to resolve ambiguity. See linkend="sect_8.2". ',
                },
                {
                    name: 'Code Meaning',
                    tag: '(0008,0104)',
                    type: '1',
                    desc: 'Text that conveys the meaning of the Coded Entry. See linkend="sect_8.3".',
                },
                {
                    name: 'Long Code Value',
                    tag: '(0008,0119)',
                    type: '1C',
                    desc: 'The identifier of the Coded Entry. See linkend="sect_8.1". Shall be present if Code Value (0008,0100) is not present and the Code Value is not a URN or URL.',
                },
                {
                    name: 'URN Code Value',
                    tag: '(0008,0120)',
                    type: '1C',
                    desc: 'The identifier of the Coded Entry. See linkend="sect_8.1". Shall be present if Code Value (0008,0100) is not present and the Code Value is a URN or URL.',
                },
                {
                    name: 'Mapping Resource',
                    tag: '(0008,0105)',
                    type: '1C',
                    condition: [
                        'Context Identifier',
                        '(0008,010F)',
                        'is present',
                    ],
                    desc: 'The identifier of the Mapping Resource that defines the Context Group from which Coded Entry was selected. See linkend="sect_8.4". ',
                },
                {
                    name: 'Context Group Version',
                    tag: '(0008,0106)',
                    type: '1C',
                    condition: [
                        'Context Identifier',
                        '(0008,010F)',
                        'is present',
                    ],
                    desc: 'The identifier of the version of the Context Group from which the Coded Entry was selected. See linkend="sect_8.5".',
                },
                {
                    name: 'Context Group Local Version',
                    tag: '(0008,0107)',
                    type: '1C',
                    condition:
                        'Required if the value of Context Group Extension Flag (0008,010B) is "Y".',
                    desc: 'An implementation-specific version of a Context Group that contains private extensions. See linkend="sect_8.7". ',
                },
                {
                    name: 'Context Group Extension Creator UID',
                    tag: '(0008,010D)',
                    type: '1C',
                    condition:
                        'Required if the value of Context Group Extension Flag (0008,010B) is "Y".',
                    desc: 'Identifies the person or organization who created an extension to the Context Group. See linkend="sect_8.7".',
                },
            ],
        },
        {
            name: 'Responsible Person Role',
            tag: '(0010,2298)',
            type: '1C',
            enum: [
                'OWNER',
                'PARENT',
                'CHILD',
                'SPOUSE',
                'SIBLING',
                'RELATIVE',
                'GUARDIAN',
                'CUSTODIAN',
                'AGENT',
                'INVESTIGATOR',
                'VETERINARIAN',
            ],
            condition:
                'Required if Responsible Person is present and has a value.',
            desc: 'Relationship of Responsible Person to the Patient.',
        },
        {
            name: 'De-identification Method',
            tag: '(0012,0063)',
            type: '1C',
            condition:
                'Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method Code Sequence (0012,0064) is not present. May be present otherwise.',
            desc: 'A description or label of the mechanism or method use to remove the Patient\'s identity. May be multi-valued if successive de-identification steps have been performed. This may be used to describe the extent or thoroughness of the de-identification, for example whether or not the de-identification is for a "Limited Data Set" (as per HIPAA Privacy Rule).                                            The characteristics of the de-identifying equipment and/or the responsible operator of that equipment may be recorded as an additional Item of the Contributing Equipment Sequence (0018,A001) in the linkend="sect_C.12.1". De-identifying equipment may use a Purpose of Reference of (109104, DCM, "De-identifying Equipment").',
        },
        {
            name: 'De-identification Method Code Sequence',
            tag: '(0012,0064)',
            type: '1C',
            condition:
                'Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method (0012,0063) is not present. May be present otherwise.',
            desc: "A code describing the mechanism or method use to remove the Patient's identity. One or more Items shall be included in this Sequence. Multiple Items are used if successive de-identification steps have been performed or to describe options of a defined profile.",
            items: [
                {
                    name: 'Code Value',
                    tag: '(0008,0100)',
                    type: '1C',
                    desc: 'The identifier of the Coded Entry. See linkend="sect_8.1". Shall be present if the code value length is 16 characters or less, and the code value is not a URN or URL.',
                },
                {
                    name: 'Coding Scheme Designator',
                    tag: '(0008,0102)',
                    type: '1C',
                    desc: 'The identifier of the coding scheme in which the Coded Entry is defined. See linkend="sect_8.2". Shall be present if Code Value (0008,0100) or Long Code Value (0008,0119) is present. May be present otherwise.',
                },
                {
                    name: 'Coding Scheme Version',
                    tag: '(0008,0103)',
                    type: '1C',
                    condition:
                        'Required if the value of Coding Scheme Designator (0008,0102) is present and is not sufficient to identify the Code Value (0008,0100) or Long Code Value (0008,0119) unambiguously. Shall not be present if Coding Scheme Designator (0008,0102) is absent. May be present otherwise.',
                    desc: 'An identifier of the version of the coding scheme if necessary to resolve ambiguity. See linkend="sect_8.2". ',
                },
                {
                    name: 'Code Meaning',
                    tag: '(0008,0104)',
                    type: '1',
                    desc: 'Text that conveys the meaning of the Coded Entry. See linkend="sect_8.3".',
                },
                {
                    name: 'Long Code Value',
                    tag: '(0008,0119)',
                    type: '1C',
                    desc: 'The identifier of the Coded Entry. See linkend="sect_8.1". Shall be present if Code Value (0008,0100) is not present and the Code Value is not a URN or URL.',
                },
                {
                    name: 'URN Code Value',
                    tag: '(0008,0120)',
                    type: '1C',
                    desc: 'The identifier of the Coded Entry. See linkend="sect_8.1". Shall be present if Code Value (0008,0100) is not present and the Code Value is a URN or URL.',
                },
                {
                    name: 'Mapping Resource',
                    tag: '(0008,0105)',
                    type: '1C',
                    condition: [
                        'Context Identifier',
                        '(0008,010F)',
                        'is present',
                    ],
                    desc: 'The identifier of the Mapping Resource that defines the Context Group from which Coded Entry was selected. See linkend="sect_8.4". ',
                },
                {
                    name: 'Context Group Version',
                    tag: '(0008,0106)',
                    type: '1C',
                    condition: [
                        'Context Identifier',
                        '(0008,010F)',
                        'is present',
                    ],
                    desc: 'The identifier of the version of the Context Group from which the Coded Entry was selected. See linkend="sect_8.5".',
                },
                {
                    name: 'Context Group Local Version',
                    tag: '(0008,0107)',
                    type: '1C',
                    condition:
                        'Required if the value of Context Group Extension Flag (0008,010B) is "Y".',
                    desc: 'An implementation-specific version of a Context Group that contains private extensions. See linkend="sect_8.7". ',
                },
                {
                    name: 'Context Group Extension Creator UID',
                    tag: '(0008,010D)',
                    type: '1C',
                    condition:
                        'Required if the value of Context Group Extension Flag (0008,010B) is "Y".',
                    desc: 'Identifies the person or organization who created an extension to the Context Group. See linkend="sect_8.7".',
                },
            ],
        },
    ],
    'General Study': [
        {
            name: 'Study Instance UID',
            tag: '(0020,000D)',
            type: '1',
            desc: 'Unique identifier for the Study.',
        },
    ],
    'General Series': [
        {
            name: 'Modality',
            tag: '(0008,0060)',
            type: '1',
            enum: [
                'ANN',
                'AR',
                'ASMT',
                'AU',
                'BDUS',
                'BI',
                'BMD',
                'CFM',
                'CR',
                'CT',
                'CTPROTOCOL',
                'DMS',
                'DG',
                'DOC',
                'DX',
                'ECG',
                'EEG',
                'EMG',
                'EOG',
                'EPS',
                'ES',
                'FID',
                'GM',
                'HC',
                'HD',
                'IO',
                'IOL',
                'IVOCT',
                'IVUS',
                'KER',
                'KO',
                'LEN',
                'LS',
                'MG',
                'MR',
                'M3D',
                'NM',
                'OAM',
                'OCT',
                'OP',
                'OPM',
                'OPT',
                'OPTBSV',
                'OPTENF',
                'OPV',
                'OSS',
                'OT',
                'PA',
                'PLAN',
                'POS',
                'PR',
                'PT',
                'PX',
                'REG',
                'RESP',
                'RF',
                'RG',
                'RTDOSE',
                'RTIMAGE',
                'RTINTENT',
                'RTPLAN',
                'RTRAD',
                'RTRECORD',
                'RTSEGANN',
                'RTSTRUCT',
                'RWV',
                'SEG',
                'SM',
                'SMR',
                'SR',
                'SRF',
                'STAIN',
                'TEXTUREMAP',
                'TG',
                'US',
                'VA',
                'XA',
                'XAPROTOCOL',
                'XC',
            ],
            desc: 'Type of device, process or method that originally acquired or produced the data used to create the Instances in this Series.',
        },
        {
            name: 'Series Instance UID',
            tag: '(0020,000E)',
            type: '1',
            desc: 'Unique identifier of the Series.',
        },
        {
            name: 'Anatomical Orientation Type',
            tag: '(0010,2210)',
            type: '1C',
            enum: ['BIPED', 'QUADRUPED'],
            condition:
                'Required if the Patient is a non-human organism and the anatomical Frame of Reference is not bipedal. May be present otherwise. See linkend="sect_C.7.6.1.1.1" and linkend="sect_C.7.6.2.1.1".',
            desc: 'The anatomical orientation type used in Instances generated by this equipment. If this Attribute is not present, the default human standard anatomical position is used to define the patient orientation of projection images and the Patient-Based Coordinate System of cross-sectional images.',
        },
    ],
    'Frame of Reference': [
        {
            name: 'Frame of Reference UID',
            tag: '(0020,0052)',
            type: '1',
            desc: 'Uniquely identifies the Frame of Reference for a Series. See linkend="sect_C.7.4.1.1.1" for further explanation.',
        },
    ],
    Synchronization: [
        {
            name: 'Synchronization Frame of Reference UID',
            tag: '(0020,0200)',
            type: '1',
            desc: 'UID of common synchronization environment. See linkend="sect_C.7.4.2.1.1".',
        },
        {
            name: 'Synchronization Trigger',
            tag: '(0018,106A)',
            type: '1',
            enum: ['SOURCE', 'EXTERNAL', 'PASSTHRU', 'NO TRIGGER'],
            desc: 'Data acquisition synchronization with external equipment',
        },
        {
            name: 'Synchronization Channel',
            tag: '(0018,106C)',
            type: '1C',
            condition:
                'Required if synchronization channel or trigger is encoded in a waveform in this SOP Instance.',
            desc: 'Identifier of waveform channel that records the synchronization channel or trigger, see linkend="sect_C.7.4.2.1.3".',
        },
        {
            name: 'Acquisition Time Synchronized',
            tag: '(0018,1800)',
            type: '1',
            enum: ['Y', 'N'],
            desc: 'Acquisition DateTime (0008,002A) synchronized with external time reference. See linkend="sect_C.7.4.2.1.4"',
        },
    ],
    'General Equipment': [
        {
            name: 'Pixel Padding Value',
            tag: '(0028,0120)',
            type: '1C',
            condition:
                'Required if Pixel Padding Range Limit (0028,0121) is present and either Pixel Data (7FE0,0010) or Pixel Data Provider URL (0028,7FE0) is present. May be present otherwise only if Pixel Data (7FE0,0010) or Pixel Data Provider URL (0028,7FE0) is present.',
            desc: 'Single pixel value or one limit (inclusive) of a range of pixel values used in an image to pad to rectangular format or to signal background that may be suppressed or that may be rendered "transparently" when superimposing images. See linkend="sect_C.7.5.1.1.2" for further explanation. The Value Representation of this Attribute is determined by the value of Pixel Representation (0028,0103).                                            This Attribute is not used in Presentation State Instances; there is no means in a Presentation State to "override" any Pixel Padding Value (0028,0120) specified in the referenced images.                                            This Attribute does apply to RT Dose and Segmentation Instances, since they include Pixel Data.                                            This Attribute does not apply when Float Pixel Data (7FE0,0008) or Double Float Pixel Data (7FE0,0009) are used instead of Pixel Data (7FE0,0010); Float Pixel Padding Value (0028,0122) or Double Float Pixel Padding Value (0028,0123), respectively, are used instead, and defined at the Image, not the Equipment, level.                                            Only a single Value is allowed for this Attribute, so it only applies to images with Samples per Pixel (0028,0002) of 1, i.e., images with a Photometric Interpretation (0028,0004) of MONOCHROME1, MONOCHROME2 or PALETTE COLOR. See linkend="sect_C.7.5.1.1.2" for details.',
        },
    ],
    'Image Plane': [
        {
            name: 'Pixel Spacing',
            tag: '(0028,0030)',
            type: '1',
            desc: 'Physical distance in the patient between the center of each pixel, specified by a numeric pair - adjacent row spacing (delimiter) adjacent column spacing in mm. See linkend="sect_10.7.1.3" for further explanation.',
        },
        {
            name: 'Image Orientation (Patient)',
            tag: '(0020,0037)',
            type: '1',
            desc: 'The direction cosines of the first row and the first column with respect to the patient. See linkend="sect_C.7.6.2.1.1" for further explanation.',
        },
        {
            name: 'Image Position (Patient)',
            tag: '(0020,0032)',
            type: '1',
            desc: 'The x, y, and z coordinates of the upper left hand corner (center of the first voxel transmitted) of the image, in mm. See linkend="sect_C.7.6.2.1.1" for further explanation.',
        },
    ],
    'Image Pixel': [
        {
            name: 'Samples per Pixel',
            tag: '(0028,0002)',
            type: '1',
            desc: 'Number of samples (planes) in this image. See linkend="sect_C.7.6.3.1.1" for further explanation.',
        },
        {
            name: 'Photometric Interpretation',
            tag: '(0028,0004)',
            type: '1',
            desc: 'Specifies the intended interpretation of the pixel data. See linkend="sect_C.7.6.3.1.2" for further explanation.',
        },
        {
            name: 'Rows',
            tag: '(0028,0010)',
            type: '1',
            desc: 'Number of rows in the image. Shall be an exact multiple of the vertical downsampling factor if any of the samples (planes) are encoded downsampled in the vertical direction for pixel data encoded in a Native (uncompressed) format. E.g., required to be an even value for a Photometric Interpretation (0028,0004) of YBR_FULL_422.',
        },
        {
            name: 'Columns',
            tag: '(0028,0011)',
            type: '1',
            desc: 'Number of columns in the image. Shall be an exact multiple of the horizontal downsampling factor if any of the samples (planes) are encoded downsampled in the horizontal direction for pixel data encoded in a Native (uncompressed) format. E.g., required to be an even value for a Photometric Interpretation (0028,0004) of YBR_FULL_422.',
        },
        {
            name: 'Bits Allocated',
            tag: '(0028,0100)',
            type: '1',
            desc: 'Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated. Bits Allocated (0028,0100) shall be either 1, or a multiple of 8. See  for further explanation.',
        },
        {
            name: 'Bits Stored',
            tag: '(0028,0101)',
            type: '1',
            desc: 'Number of bits stored for each pixel sample. Each sample shall have the same number of bits stored. See  for further explanation.',
        },
        {
            name: 'High Bit',
            tag: '(0028,0102)',
            type: '1',
            desc: 'Most significant bit for pixel sample data. Each sample shall have the same high bit. High Bit (0028,0102) shall be one less than Bits Stored (0028,0101). See  for further explanation.',
        },
        {
            name: 'Pixel Representation',
            tag: '(0028,0103)',
            type: '1',
            enum: ['0000H', '0001H'],
            desc: 'Data representation of the pixel samples. Each sample shall have the same pixel representation.',
        },
        {
            name: 'Planar Configuration',
            tag: '(0028,0006)',
            type: '1C',
            condition: [
                'Samples per Pixel',
                '(0028,0002)',
                'has a value greater than 1',
            ],
            desc: 'Indicates whether the pixel data are encoded color-by-plane or color-by-pixel.  See linkend="sect_C.7.6.3.1.3" for further explanation.',
        },
        {
            name: 'Pixel Aspect Ratio',
            tag: '(0028,0034)',
            type: '1C',
            condition:
                'Required if the aspect ratio values do not have a ratio of 1:1 and the physical pixel spacing is not specified by Pixel Spacing (0028,0030), or Imager Pixel Spacing (0018,1164) or Nominal Scanned Pixel Spacing (0018,2010), either for the entire Image or per-frame in a Functional Group Macro. See linkend="sect_C.7.6.3.1.7".',
            desc: 'Ratio of the vertical size and horizontal size of the pixels in the image specified by a pair of integer values where the first value is the vertical pixel size, and the second value is the horizontal pixel size. ',
        },
        {
            name: 'Red Palette Color Lookup Table Descriptor',
            tag: '(0028,1101)',
            type: '1C',
            condition:
                'Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See linkend="sect_C.7.6.3.1.5" for further explanation.',
            desc: 'Specifies the format of the Red Palette Color Lookup Table Data (0028,1201). ',
        },
        {
            name: 'Green Palette Color Lookup Table Descriptor',
            tag: '(0028,1102)',
            type: '1C',
            condition:
                'Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See linkend="sect_C.7.6.3.1.5" for further explanation.',
            desc: 'Specifies the format of the Green Palette Color Lookup Table Data (0028,1202). ',
        },
        {
            name: 'Blue Palette Color Lookup Table Descriptor',
            tag: '(0028,1103)',
            type: '1C',
            condition:
                'Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See linkend="sect_C.7.6.3.1.5" for further explanation.',
            desc: 'Specifies the format of the Blue Palette Color Lookup Table Data (0028,1203). ',
        },
        {
            name: 'Red Palette Color Lookup Table Data',
            tag: '(0028,1201)',
            type: '1C',
            condition:
                'Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See linkend="sect_C.7.6.3.1.6" for further explanation.',
            desc: 'Red Palette Color Lookup Table Data. ',
        },
        {
            name: 'Green Palette Color Lookup Table Data',
            tag: '(0028,1202)',
            type: '1C',
            condition:
                'Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See linkend="sect_C.7.6.3.1.6" for further explanation.',
            desc: 'Green Palette Color Lookup Table Data. ',
        },
        {
            name: 'Blue Palette Color Lookup Table Data',
            tag: '(0028,1203)',
            type: '1C',
            condition:
                'Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See linkend="sect_C.7.6.3.1.6" for further explanation.',
            desc: 'Blue Palette Color Lookup Table Data. ',
        },
        {
            name: 'Pixel Data',
            tag: '(7FE0,0010)',
            type: '1C',
            condition: [
                'Pixel Data Provider URL',
                '(0028,7FE0)',
                'is not present',
            ],
            desc: 'A data stream of the pixel samples that comprise the Image. See linkend="sect_C.7.6.3.1.4" for further explanation.',
        },
        {
            name: 'Pixel Data Provider URL',
            tag: '(0028,7FE0)',
            type: '1C',
            condition:
                'Required if the image is to be transferred in one of the following presentation contexts identified by Transfer Syntax UID:',
            desc: 'A URL of a provider service that supplies the pixel data of the Image. 1.2.840.10008.1.2.4.94 (DICOM JPIP Referenced Transfer Syntax)                                        1.2.840.10008.1.2.4.95 (DICOM JPIP Referenced Deflate Transfer Syntax) The VR of this Data Element has changed from UT to UR.',
        },
        {
            name: 'Pixel Padding Range Limit',
            tag: '(0028,0121)',
            type: '1C',
            condition:
                'Required if pixel padding is to be defined as a range rather than a single value.',
            desc: 'Pixel value that represents one limit (inclusive) of a range of padding values used together with Pixel Padding Value (0028,0120) as defined in the linkend="sect_C.7.5.1". See linkend="sect_C.7.5.1.1.2" for further explanation. The Value Representation of this Attribute is determined by the value of Pixel Representation (0028,0103).                                            Pixel Padding Value (0028,0120) is also required when this Attribute is present.',
        },
        {
            name: 'Extended Offset Table Lengths',
            tag: '(7FE0,0002)',
            type: '1C',
            condition: ['Extended Offset Table', '(7FE0,0001)', 'is present'],
            desc: 'Byte lengths of the Frames in the Sequence of Items in Encapsulated Pixel Data encoded in Pixel Data (7FE0,0010). See linkend="sect_C.7.6.3.1.8". This Attribute is only sent when each Frame is entirely contained within one Fragment as a single contiguous span of bytes so that it is not necessary to assemble the Frame from Fragments with delimiters.                                            The length encoded in this Attribute may be an odd number if the compressed bitstream for the Frame is an odd length; i.e., it does not include any trailing padding required to make the Item an even length.',
        },
    ],
    'CT Image': [
        {
            name: 'Image Type',
            tag: '(0008,0008)',
            type: '1',
            desc: 'Image identification characteristics. See linkend="sect_C.8.2.1.1.1" for specialization.',
        },
        {
            name: 'Samples per Pixel',
            tag: '(0028,0002)',
            type: '1',
            desc: 'Number of samples (planes) in this image. See linkend="sect_C.8.2.1.1.2" for specialization.',
        },
        {
            name: 'Photometric Interpretation',
            tag: '(0028,0004)',
            type: '1',
            desc: 'Specifies the intended interpretation of the pixel data. See linkend="sect_C.8.2.1.1.3" for specialization.',
        },
        {
            name: 'Bits Allocated',
            tag: '(0028,0100)',
            type: '1',
            desc: 'Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated. See linkend="sect_C.8.2.1.1.4" for specialization.',
        },
        {
            name: 'Bits Stored',
            tag: '(0028,0101)',
            type: '1',
            desc: 'Number of bits stored for each pixel sample. Each sample shall have the same number of bits stored. See linkend="sect_C.8.2.1.1.5" for specialization.',
        },
        {
            name: 'High Bit',
            tag: '(0028,0102)',
            type: '1',
            desc: 'Most significant bit for pixel sample data. Each sample shall have the same high bit. See linkend="sect_C.8.2.1.1.6" for specialization.',
        },
        {
            name: 'Rescale Intercept',
            tag: '(0028,1052)',
            type: '1',
            desc: 'The value b in relationship between stored values (SV) and the output units. Output units = m*SV+b If Image Type (0008,0008) Value 1 is ORIGINAL and Value 3 is not LOCALIZER, and Multi-energy CT Acquisition (0018,9361) is either absent or NO, output units shall be Hounsfield Units (HU).',
        },
        {
            name: 'Rescale Slope',
            tag: '(0028,1053)',
            type: '1',
            desc: 'm in the equation specified in Rescale Intercept (0028,1052).',
        },
        {
            name: 'Rescale Type',
            tag: '(0028,1054)',
            type: '1C',
            condition:
                'Required if the Rescale Type is not HU (Hounsfield Units), or Multi-energy CT Acquisition (0018,9361) is YES. May be present otherwise.',
            desc: 'Specifies the output units of Rescale Slope (0028,1053) and Rescale Intercept (0028,1052). See linkend="sect_C.11.1.1.2" for Defined Terms and further explanation.',
        },
        {
            name: 'Water Equivalent Diameter Calculation Method Code Sequence',
            tag: '(0018,1272)',
            type: '1C',
            condition: [
                'Water Equivalent Diameter',
                '(0018,1271)',
                'is present',
            ],
            desc: 'The method of calculation of Water Equivalent Diameter (0018,1271). Only a single Item is permitted in this Sequence.',
            items: [
                {
                    name: 'Code Value',
                    tag: '(0008,0100)',
                    type: '1C',
                    desc: 'The identifier of the Coded Entry. See linkend="sect_8.1". Shall be present if the code value length is 16 characters or less, and the code value is not a URN or URL.',
                },
                {
                    name: 'Coding Scheme Designator',
                    tag: '(0008,0102)',
                    type: '1C',
                    desc: 'The identifier of the coding scheme in which the Coded Entry is defined. See linkend="sect_8.2". Shall be present if Code Value (0008,0100) or Long Code Value (0008,0119) is present. May be present otherwise.',
                },
                {
                    name: 'Coding Scheme Version',
                    tag: '(0008,0103)',
                    type: '1C',
                    condition:
                        'Required if the value of Coding Scheme Designator (0008,0102) is present and is not sufficient to identify the Code Value (0008,0100) or Long Code Value (0008,0119) unambiguously. Shall not be present if Coding Scheme Designator (0008,0102) is absent. May be present otherwise.',
                    desc: 'An identifier of the version of the coding scheme if necessary to resolve ambiguity. See linkend="sect_8.2". ',
                },
                {
                    name: 'Code Meaning',
                    tag: '(0008,0104)',
                    type: '1',
                    desc: 'Text that conveys the meaning of the Coded Entry. See linkend="sect_8.3".',
                },
                {
                    name: 'Long Code Value',
                    tag: '(0008,0119)',
                    type: '1C',
                    desc: 'The identifier of the Coded Entry. See linkend="sect_8.1". Shall be present if Code Value (0008,0100) is not present and the Code Value is not a URN or URL.',
                },
                {
                    name: 'URN Code Value',
                    tag: '(0008,0120)',
                    type: '1C',
                    desc: 'The identifier of the Coded Entry. See linkend="sect_8.1". Shall be present if Code Value (0008,0100) is not present and the Code Value is a URN or URL.',
                },
                {
                    name: 'Mapping Resource',
                    tag: '(0008,0105)',
                    type: '1C',
                    condition: [
                        'Context Identifier',
                        '(0008,010F)',
                        'is present',
                    ],
                    desc: 'The identifier of the Mapping Resource that defines the Context Group from which Coded Entry was selected. See linkend="sect_8.4". ',
                },
                {
                    name: 'Context Group Version',
                    tag: '(0008,0106)',
                    type: '1C',
                    condition: [
                        'Context Identifier',
                        '(0008,010F)',
                        'is present',
                    ],
                    desc: 'The identifier of the version of the Context Group from which the Coded Entry was selected. See linkend="sect_8.5".',
                },
                {
                    name: 'Context Group Local Version',
                    tag: '(0008,0107)',
                    type: '1C',
                    condition:
                        'Required if the value of Context Group Extension Flag (0008,010B) is "Y".',
                    desc: 'An implementation-specific version of a Context Group that contains private extensions. See linkend="sect_8.7". ',
                },
                {
                    name: 'Context Group Extension Creator UID',
                    tag: '(0008,010D)',
                    type: '1C',
                    condition:
                        'Required if the value of Context Group Extension Flag (0008,010B) is "Y".',
                    desc: 'Identifies the person or organization who created an extension to the Context Group. See linkend="sect_8.7".',
                },
            ],
        },
        {
            name: 'Energy Weighting Factor',
            tag: '(0018,9353)',
            type: '1C',
            condition:
                'Required if one Derivation Code Sequence (0008,9215) Item value is (113097, DCM, "Multi-energy proportional weighting"). May be present otherwise.',
            desc: 'The weighting factor of the data from the primary source in a multiple energy composition image. This factor incorporates the effects of the specific X-Ray source and kV value                                        examination specific characteristics.',
        },
        {
            name: 'Equipment Frame of Reference UID',
            tag: '(300A,0675)',
            type: '1C',
            condition:
                'Required if either Imaging Equipment to Treatment Delivery Device Relationship Sequence (300A,07A1) or Patient to Equipment Relationship Sequence (300A,07A0) is present.',
            desc: 'Frame of Reference identifier for the Treatment Delivery Device. See linkend="sect_C.36.12.1" and linkend="sect_C.36.2.4.12.1.1".',
        },
        {
            name: 'Scan Stop Position Sequence',
            tag: '(3002,012C)',
            type: '1',
            desc: 'Stop Position of the 3D RT Cone Beam Radiation Imaging Acquisition. The angle is a Continuous Rotation Angle; see linkend="sect_C.36.1.1.5". Only a single Item is permitted in this Sequence.',
            items: [
                {
                    name: 'Imaging Source Position Sequence',
                    tag: '(3002,010D)',
                    type: '1',
                    desc: 'The position of the imaging source. Only a single Item shall be included in this Sequence.',
                    items: [
                        {
                            name: 'Referenced Defined Device Index',
                            tag: '(300A,0602)',
                            type: '1C',
                            condition:
                                'Required if Acquisition Device Sequence (3002,0117) is present and Value 1 of Image Type (0008,0008) has the value ORIGINAL or the current Instance was derived from an Instance where Referenced Defined Device Index (300A,0602) was present in the Imaging Source Position Sequence (3002,010D). May be present otherwise.',
                            desc: 'The value of Device Index (3010,0039) from the Acquisition Device Sequence (3002,0117) corresponding to the Acquisition Device used in this Item.',
                        },
                        {
                            name: 'Device Position Parameter Sequence',
                            tag: '(3002,0110)',
                            type: '1',
                            desc: 'Parameters describing the position of the imaging source. One or more Items shall be included in this sequence.',
                            items: [
                                {
                                    name: 'Value Type',
                                    tag: '(0040,A040)',
                                    type: '1',
                                    enum: [
                                        'DATE',
                                        'TIME',
                                        'DATETIME',
                                        'PNAME',
                                        'UIDREF',
                                        'TEXT',
                                        'CODE',
                                        'NUMERIC',
                                        'COMPOSITE',
                                        'IMAGE',
                                        'WAVEFORM',
                                    ],
                                    desc: 'The type of the value encoded in this name-value Item.',
                                },
                                {
                                    name: 'Concept Name Code Sequence',
                                    tag: '(0040,A043)',
                                    type: '1',
                                    desc: 'Coded concept name of this name-value Item. Only a single Item shall be included in this Sequence.',
                                    items: [
                                        {
                                            name: 'Code Value',
                                            tag: '(0008,0100)',
                                            type: '1C',
                                            desc: 'The identifier of the Coded Entry. See linkend="sect_8.1". Shall be present if the code value length is 16 characters or less, and the code value is not a URN or URL.',
                                        },
                                        {
                                            name: 'Coding Scheme Designator',
                                            tag: '(0008,0102)',
                                            type: '1C',
                                            desc: 'The identifier of the coding scheme in which the Coded Entry is defined. See linkend="sect_8.2". Shall be present if Code Value (0008,0100) or Long Code Value (0008,0119) is present. May be present otherwise.',
                                        },
                                        {
                                            name: 'Coding Scheme Version',
                                            tag: '(0008,0103)',
                                            type: '1C',
                                            condition:
                                                'Required if the value of Coding Scheme Designator (0008,0102) is present and is not sufficient to identify the Code Value (0008,0100) or Long Code Value (0008,0119) unambiguously. Shall not be present if Coding Scheme Designator (0008,0102) is absent. May be present otherwise.',
                                            desc: 'An identifier of the version of the coding scheme if necessary to resolve ambiguity. See linkend="sect_8.2". ',
                                        },
                                        {
                                            name: 'Code Meaning',
                                            tag: '(0008,0104)',
                                            type: '1',
                                            desc: 'Text that conveys the meaning of the Coded Entry. See linkend="sect_8.3".',
                                        },
                                        {
                                            name: 'Long Code Value',
                                            tag: '(0008,0119)',
                                            type: '1C',
                                            desc: 'The identifier of the Coded Entry. See linkend="sect_8.1". Shall be present if Code Value (0008,0100) is not present and the Code Value is not a URN or URL.',
                                        },
                                        {
                                            name: 'URN Code Value',
                                            tag: '(0008,0120)',
                                            type: '1C',
                                            desc: 'The identifier of the Coded Entry. See linkend="sect_8.1". Shall be present if Code Value (0008,0100) is not present and the Code Value is a URN or URL.',
                                        },
                                        {
                                            name: 'Mapping Resource',
                                            tag: '(0008,0105)',
                                            type: '1C',
                                            condition: [
                                                'Context Identifier',
                                                '(0008,010F)',
                                                'is present',
                                            ],
                                            desc: 'The identifier of the Mapping Resource that defines the Context Group from which Coded Entry was selected. See linkend="sect_8.4". ',
                                        },
                                        {
                                            name: 'Context Group Version',
                                            tag: '(0008,0106)',
                                            type: '1C',
                                            condition: [
                                                'Context Identifier',
                                                '(0008,010F)',
                                                'is present',
                                            ],
                                            desc: 'The identifier of the version of the Context Group from which the Coded Entry was selected. See linkend="sect_8.5".',
                                        },
                                        {
                                            name: 'Context Group Local Version',
                                            tag: '(0008,0107)',
                                            type: '1C',
                                            condition:
                                                'Required if the value of Context Group Extension Flag (0008,010B) is "Y".',
                                            desc: 'An implementation-specific version of a Context Group that contains private extensions. See linkend="sect_8.7". ',
                                        },
                                        {
                                            name: 'Context Group Extension Creator UID',
                                            tag: '(0008,010D)',
                                            type: '1C',
                                            condition:
                                                'Required if the value of Context Group Extension Flag (0008,010B) is "Y".',
                                            desc: 'Identifies the person or organization who created an extension to the Context Group. See linkend="sect_8.7".',
                                        },
                                    ],
                                },
                                {
                                    name: 'DateTime',
                                    tag: '(0040,A120)',
                                    type: '1C',
                                    condition: [
                                        'Value Type',
                                        '(0040,A040)',
                                        'is DATETIME',
                                    ],
                                    desc: 'DateTime value for this name-value Item.',
                                },
                                {
                                    name: 'Date',
                                    tag: '(0040,A121)',
                                    type: '1C',
                                    condition: [
                                        'Value Type',
                                        '(0040,A040)',
                                        'is DATE',
                                    ],
                                    desc: 'Date value for this name-value Item.',
                                },
                                {
                                    name: 'Time',
                                    tag: '(0040,A122)',
                                    type: '1C',
                                    condition: [
                                        'Value Type',
                                        '(0040,A040)',
                                        'is TIME',
                                    ],
                                    desc: 'Time value for this name-value Item.',
                                },
                                {
                                    name: 'Person Name',
                                    tag: '(0040,A123)',
                                    type: '1C',
                                    condition: [
                                        'Value Type',
                                        '(0040,A040)',
                                        'is PNAME',
                                    ],
                                    desc: 'Person name value for this name-value Item.',
                                },
                                {
                                    name: 'UID',
                                    tag: '(0040,A124)',
                                    type: '1C',
                                    condition: [
                                        'Value Type',
                                        '(0040,A040)',
                                        'is UIDREF',
                                    ],
                                    desc: 'UID value for this name-value Item.',
                                },
                                {
                                    name: 'Text Value',
                                    tag: '(0040,A160)',
                                    type: '1C',
                                    condition: [
                                        'Value Type',
                                        '(0040,A040)',
                                        'is TEXT',
                                    ],
                                    desc: 'Text value for this name-value Item.',
                                },
                                {
                                    name: 'Concept Code Sequence',
                                    tag: '(0040,A168)',
                                    type: '1C',
                                    condition: [
                                        'Value Type',
                                        '(0040,A040)',
                                        'is CODE',
                                    ],
                                    desc: 'Coded concept value of this name-value Item. Only a single Item shall be included in this Sequence.',
                                    items: [
                                        {
                                            name: 'Code Value',
                                            tag: '(0008,0100)',
                                            type: '1C',
                                            desc: 'The identifier of the Coded Entry. See linkend="sect_8.1". Shall be present if the code value length is 16 characters or less, and the code value is not a URN or URL.',
                                        },
                                        {
                                            name: 'Coding Scheme Designator',
                                            tag: '(0008,0102)',
                                            type: '1C',
                                            desc: 'The identifier of the coding scheme in which the Coded Entry is defined. See linkend="sect_8.2". Shall be present if Code Value (0008,0100) or Long Code Value (0008,0119) is present. May be present otherwise.',
                                        },
                                        {
                                            name: 'Coding Scheme Version',
                                            tag: '(0008,0103)',
                                            type: '1C',
                                            condition:
                                                'Required if the value of Coding Scheme Designator (0008,0102) is present and is not sufficient to identify the Code Value (0008,0100) or Long Code Value (0008,0119) unambiguously. Shall not be present if Coding Scheme Designator (0008,0102) is absent. May be present otherwise.',
                                            desc: 'An identifier of the version of the coding scheme if necessary to resolve ambiguity. See linkend="sect_8.2". ',
                                        },
                                        {
                                            name: 'Code Meaning',
                                            tag: '(0008,0104)',
                                            type: '1',
                                            desc: 'Text that conveys the meaning of the Coded Entry. See linkend="sect_8.3".',
                                        },
                                        {
                                            name: 'Long Code Value',
                                            tag: '(0008,0119)',
                                            type: '1C',
                                            desc: 'The identifier of the Coded Entry. See linkend="sect_8.1". Shall be present if Code Value (0008,0100) is not present and the Code Value is not a URN or URL.',
                                        },
                                        {
                                            name: 'URN Code Value',
                                            tag: '(0008,0120)',
                                            type: '1C',
                                            desc: 'The identifier of the Coded Entry. See linkend="sect_8.1". Shall be present if Code Value (0008,0100) is not present and the Code Value is a URN or URL.',
                                        },
                                        {
                                            name: 'Mapping Resource',
                                            tag: '(0008,0105)',
                                            type: '1C',
                                            condition: [
                                                'Context Identifier',
                                                '(0008,010F)',
                                                'is present',
                                            ],
                                            desc: 'The identifier of the Mapping Resource that defines the Context Group from which Coded Entry was selected. See linkend="sect_8.4". ',
                                        },
                                        {
                                            name: 'Context Group Version',
                                            tag: '(0008,0106)',
                                            type: '1C',
                                            condition: [
                                                'Context Identifier',
                                                '(0008,010F)',
                                                'is present',
                                            ],
                                            desc: 'The identifier of the version of the Context Group from which the Coded Entry was selected. See linkend="sect_8.5".',
                                        },
                                        {
                                            name: 'Context Group Local Version',
                                            tag: '(0008,0107)',
                                            type: '1C',
                                            condition:
                                                'Required if the value of Context Group Extension Flag (0008,010B) is "Y".',
                                            desc: 'An implementation-specific version of a Context Group that contains private extensions. See linkend="sect_8.7". ',
                                        },
                                        {
                                            name: 'Context Group Extension Creator UID',
                                            tag: '(0008,010D)',
                                            type: '1C',
                                            condition:
                                                'Required if the value of Context Group Extension Flag (0008,010B) is "Y".',
                                            desc: 'Identifies the person or organization who created an extension to the Context Group. See linkend="sect_8.7".',
                                        },
                                    ],
                                },
                                {
                                    name: 'Numeric Value',
                                    tag: '(0040,A30A)',
                                    type: '1C',
                                    condition: [
                                        'Value Type',
                                        '(0040,A040)',
                                        'is NUMERIC',
                                    ],
                                    desc: 'Numeric value for this name-value Item. Only a single value shall be present.',
                                },
                                {
                                    name: 'Floating Point Value',
                                    tag: '(0040,A161)',
                                    type: '1C',
                                    condition:
                                        'Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise.',
                                    desc: 'The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.',
                                },
                                {
                                    name: 'Rational Numerator Value',
                                    tag: '(0040,A162)',
                                    type: '1C',
                                    condition:
                                        'Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise.',
                                    desc: 'The integer numerator of a rational representation of Numeric Value (0040,A30A), encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.',
                                },
                                {
                                    name: 'Rational Denominator Value',
                                    tag: '(0040,A163)',
                                    type: '1C',
                                    condition: [
                                        'Rational Numerator Value',
                                        '(0040,A162)',
                                        'is present',
                                    ],
                                    desc: 'The integer denominator of a rational representation of Numeric Value (0040,A30A), encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.',
                                },
                                {
                                    name: 'Measurement Units Code Sequence',
                                    tag: '(0040,08EA)',
                                    type: '1C',
                                    condition: [
                                        'Value Type',
                                        '(0040,A040)',
                                        'is NUMERIC',
                                    ],
                                    desc: 'Units of measurement for a numeric value in this name-value Item. Only a single Item shall be included in this Sequence.',
                                    items: [
                                        {
                                            name: 'Code Value',
                                            tag: '(0008,0100)',
                                            type: '1C',
                                            desc: 'The identifier of the Coded Entry. See linkend="sect_8.1". Shall be present if the code value length is 16 characters or less, and the code value is not a URN or URL.',
                                        },
                                        {
                                            name: 'Coding Scheme Designator',
                                            tag: '(0008,0102)',
                                            type: '1C',
                                            desc: 'The identifier of the coding scheme in which the Coded Entry is defined. See linkend="sect_8.2". Shall be present if Code Value (0008,0100) or Long Code Value (0008,0119) is present. May be present otherwise.',
                                        },
                                        {
                                            name: 'Coding Scheme Version',
                                            tag: '(0008,0103)',
                                            type: '1C',
                                            condition:
                                                'Required if the value of Coding Scheme Designator (0008,0102) is present and is not sufficient to identify the Code Value (0008,0100) or Long Code Value (0008,0119) unambiguously. Shall not be present if Coding Scheme Designator (0008,0102) is absent. May be present otherwise.',
                                            desc: 'An identifier of the version of the coding scheme if necessary to resolve ambiguity. See linkend="sect_8.2". ',
                                        },
                                        {
                                            name: 'Code Meaning',
                                            tag: '(0008,0104)',
                                            type: '1',
                                            desc: 'Text that conveys the meaning of the Coded Entry. See linkend="sect_8.3".',
                                        },
                                        {
                                            name: 'Long Code Value',
                                            tag: '(0008,0119)',
                                            type: '1C',
                                            desc: 'The identifier of the Coded Entry. See linkend="sect_8.1". Shall be present if Code Value (0008,0100) is not present and the Code Value is not a URN or URL.',
                                        },
                                        {
                                            name: 'URN Code Value',
                                            tag: '(0008,0120)',
                                            type: '1C',
                                            desc: 'The identifier of the Coded Entry. See linkend="sect_8.1". Shall be present if Code Value (0008,0100) is not present and the Code Value is a URN or URL.',
                                        },
                                        {
                                            name: 'Mapping Resource',
                                            tag: '(0008,0105)',
                                            type: '1C',
                                            condition: [
                                                'Context Identifier',
                                                '(0008,010F)',
                                                'is present',
                                            ],
                                            desc: 'The identifier of the Mapping Resource that defines the Context Group from which Coded Entry was selected. See linkend="sect_8.4". ',
                                        },
                                        {
                                            name: 'Context Group Version',
                                            tag: '(0008,0106)',
                                            type: '1C',
                                            condition: [
                                                'Context Identifier',
                                                '(0008,010F)',
                                                'is present',
                                            ],
                                            desc: 'The identifier of the version of the Context Group from which the Coded Entry was selected. See linkend="sect_8.5".',
                                        },
                                        {
                                            name: 'Context Group Local Version',
                                            tag: '(0008,0107)',
                                            type: '1C',
                                            condition:
                                                'Required if the value of Context Group Extension Flag (0008,010B) is "Y".',
                                            desc: 'An implementation-specific version of a Context Group that contains private extensions. See linkend="sect_8.7". ',
                                        },
                                        {
                                            name: 'Context Group Extension Creator UID',
                                            tag: '(0008,010D)',
                                            type: '1C',
                                            condition:
                                                'Required if the value of Context Group Extension Flag (0008,010B) is "Y".',
                                            desc: 'Identifies the person or organization who created an extension to the Context Group. See linkend="sect_8.7".',
                                        },
                                    ],
                                },
                                {
                                    name: 'Referenced SOP Sequence',
                                    tag: '(0008,1199)',
                                    type: '1C',
                                    condition: [
                                        'Value Type',
                                        '(0040,A040)',
                                        'is COMPOSITE or IMAGE or WAVEFORM',
                                    ],
                                    desc: 'Composite SOP Instance Reference value for this name-value Item. Only a single Item shall be included in this Sequence.',
                                    items: [
                                        {
                                            name: 'Referenced SOP Class UID',
                                            tag: '(0008,1150)',
                                            type: '1',
                                            desc: 'Uniquely identifies the referenced SOP Class.',
                                        },
                                        {
                                            name: 'Referenced SOP Instance UID',
                                            tag: '(0008,1155)',
                                            type: '1',
                                            desc: 'Uniquely identifies the referenced SOP Instance.',
                                        },
                                        {
                                            name: 'Referenced Frame Number',
                                            tag: '(0008,1160)',
                                            type: '1C',
                                            condition:
                                                'Required if the Referenced SOP Instance is a Multi-frame Image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present.',
                                            desc: 'Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1. This Attribute may be multi-valued.',
                                        },
                                        {
                                            name: 'Referenced Segment Number',
                                            tag: '(0062,000B)',
                                            type: '1C',
                                            condition: [
                                                'the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number',
                                                '(0008,1160)',
                                                'is not present',
                                            ],
                                            desc: 'Identifies the segments to which the reference applies identified by Segment Number (0062,0004).',
                                        },
                                        {
                                            name: 'Referenced Waveform Channels',
                                            tag: '(0040,A0B0)',
                                            type: '1C',
                                            condition:
                                                'Required if the Referenced SOP Instance is a Waveform that contains multiple Channels and the reference does not apply to all Channels of all Multiplex Groups.',
                                            desc: 'List of channels in Waveform to which the reference applies. See linkend="sect_C.18.5.1.1".',
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'Image Receptor Position Sequence',
                    tag: '(3002,010E)',
                    type: '1',
                    desc: 'The position of the image receptor. Only a single Item shall be included in this Sequence.',
                    items: [
                        {
                            name: 'Referenced Defined Device Index',
                            tag: '(300A,0602)',
                            type: '1C',
                            condition:
                                'Required if Acquisition Device Sequence (3002,0117) is present and Value 1 of Image Type (0008,0008) has the value ORIGINAL or the current Instance was derived from an Instance where Referenced Defined Device Index (300A,0602) was present in the Image Receptor Position Sequence (3002,010E). May be present otherwise.',
                            desc: 'The value of Device Index (3010,0039) from the Acquisition Device Sequence (3002,0117) corresponding to the Acquisition Device used in this Item.',
                        },
                        {
                            name: 'Device Position Parameter Sequence',
                            tag: '(3002,0110)',
                            type: '1',
                            desc: 'Parameters describing the position of the image receptor. One or more Items shall be included in this sequence.',
                            items: [
                                {
                                    name: 'Value Type',
                                    tag: '(0040,A040)',
                                    type: '1',
                                    enum: [
                                        'DATE',
                                        'TIME',
                                        'DATETIME',
                                        'PNAME',
                                        'UIDREF',
                                        'TEXT',
                                        'CODE',
                                        'NUMERIC',
                                        'COMPOSITE',
                                        'IMAGE',
                                        'WAVEFORM',
                                    ],
                                    desc: 'The type of the value encoded in this name-value Item.',
                                },
                                {
                                    name: 'Concept Name Code Sequence',
                                    tag: '(0040,A043)',
                                    type: '1',
                                    desc: 'Coded concept name of this name-value Item. Only a single Item shall be included in this Sequence.',
                                    items: [
                                        {
                                            name: 'Code Value',
                                            tag: '(0008,0100)',
                                            type: '1C',
                                            desc: 'The identifier of the Coded Entry. See linkend="sect_8.1". Shall be present if the code value length is 16 characters or less, and the code value is not a URN or URL.',
                                        },
                                        {
                                            name: 'Coding Scheme Designator',
                                            tag: '(0008,0102)',
                                            type: '1C',
                                            desc: 'The identifier of the coding scheme in which the Coded Entry is defined. See linkend="sect_8.2". Shall be present if Code Value (0008,0100) or Long Code Value (0008,0119) is present. May be present otherwise.',
                                        },
                                        {
                                            name: 'Coding Scheme Version',
                                            tag: '(0008,0103)',
                                            type: '1C',
                                            condition:
                                                'Required if the value of Coding Scheme Designator (0008,0102) is present and is not sufficient to identify the Code Value (0008,0100) or Long Code Value (0008,0119) unambiguously. Shall not be present if Coding Scheme Designator (0008,0102) is absent. May be present otherwise.',
                                            desc: 'An identifier of the version of the coding scheme if necessary to resolve ambiguity. See linkend="sect_8.2". ',
                                        },
                                        {
                                            name: 'Code Meaning',
                                            tag: '(0008,0104)',
                                            type: '1',
                                            desc: 'Text that conveys the meaning of the Coded Entry. See linkend="sect_8.3".',
                                        },
                                        {
                                            name: 'Long Code Value',
                                            tag: '(0008,0119)',
                                            type: '1C',
                                            desc: 'The identifier of the Coded Entry. See linkend="sect_8.1". Shall be present if Code Value (0008,0100) is not present and the Code Value is not a URN or URL.',
                                        },
                                        {
                                            name: 'URN Code Value',
                                            tag: '(0008,0120)',
                                            type: '1C',
                                            desc: 'The identifier of the Coded Entry. See linkend="sect_8.1". Shall be present if Code Value (0008,0100) is not present and the Code Value is a URN or URL.',
                                        },
                                        {
                                            name: 'Mapping Resource',
                                            tag: '(0008,0105)',
                                            type: '1C',
                                            condition: [
                                                'Context Identifier',
                                                '(0008,010F)',
                                                'is present',
                                            ],
                                            desc: 'The identifier of the Mapping Resource that defines the Context Group from which Coded Entry was selected. See linkend="sect_8.4". ',
                                        },
                                        {
                                            name: 'Context Group Version',
                                            tag: '(0008,0106)',
                                            type: '1C',
                                            condition: [
                                                'Context Identifier',
                                                '(0008,010F)',
                                                'is present',
                                            ],
                                            desc: 'The identifier of the version of the Context Group from which the Coded Entry was selected. See linkend="sect_8.5".',
                                        },
                                        {
                                            name: 'Context Group Local Version',
                                            tag: '(0008,0107)',
                                            type: '1C',
                                            condition:
                                                'Required if the value of Context Group Extension Flag (0008,010B) is "Y".',
                                            desc: 'An implementation-specific version of a Context Group that contains private extensions. See linkend="sect_8.7". ',
                                        },
                                        {
                                            name: 'Context Group Extension Creator UID',
                                            tag: '(0008,010D)',
                                            type: '1C',
                                            condition:
                                                'Required if the value of Context Group Extension Flag (0008,010B) is "Y".',
                                            desc: 'Identifies the person or organization who created an extension to the Context Group. See linkend="sect_8.7".',
                                        },
                                    ],
                                },
                                {
                                    name: 'DateTime',
                                    tag: '(0040,A120)',
                                    type: '1C',
                                    condition: [
                                        'Value Type',
                                        '(0040,A040)',
                                        'is DATETIME',
                                    ],
                                    desc: 'DateTime value for this name-value Item.',
                                },
                                {
                                    name: 'Date',
                                    tag: '(0040,A121)',
                                    type: '1C',
                                    condition: [
                                        'Value Type',
                                        '(0040,A040)',
                                        'is DATE',
                                    ],
                                    desc: 'Date value for this name-value Item.',
                                },
                                {
                                    name: 'Time',
                                    tag: '(0040,A122)',
                                    type: '1C',
                                    condition: [
                                        'Value Type',
                                        '(0040,A040)',
                                        'is TIME',
                                    ],
                                    desc: 'Time value for this name-value Item.',
                                },
                                {
                                    name: 'Person Name',
                                    tag: '(0040,A123)',
                                    type: '1C',
                                    condition: [
                                        'Value Type',
                                        '(0040,A040)',
                                        'is PNAME',
                                    ],
                                    desc: 'Person name value for this name-value Item.',
                                },
                                {
                                    name: 'UID',
                                    tag: '(0040,A124)',
                                    type: '1C',
                                    condition: [
                                        'Value Type',
                                        '(0040,A040)',
                                        'is UIDREF',
                                    ],
                                    desc: 'UID value for this name-value Item.',
                                },
                                {
                                    name: 'Text Value',
                                    tag: '(0040,A160)',
                                    type: '1C',
                                    condition: [
                                        'Value Type',
                                        '(0040,A040)',
                                        'is TEXT',
                                    ],
                                    desc: 'Text value for this name-value Item.',
                                },
                                {
                                    name: 'Concept Code Sequence',
                                    tag: '(0040,A168)',
                                    type: '1C',
                                    condition: [
                                        'Value Type',
                                        '(0040,A040)',
                                        'is CODE',
                                    ],
                                    desc: 'Coded concept value of this name-value Item. Only a single Item shall be included in this Sequence.',
                                    items: [
                                        {
                                            name: 'Code Value',
                                            tag: '(0008,0100)',
                                            type: '1C',
                                            desc: 'The identifier of the Coded Entry. See linkend="sect_8.1". Shall be present if the code value length is 16 characters or less, and the code value is not a URN or URL.',
                                        },
                                        {
                                            name: 'Coding Scheme Designator',
                                            tag: '(0008,0102)',
                                            type: '1C',
                                            desc: 'The identifier of the coding scheme in which the Coded Entry is defined. See linkend="sect_8.2". Shall be present if Code Value (0008,0100) or Long Code Value (0008,0119) is present. May be present otherwise.',
                                        },
                                        {
                                            name: 'Coding Scheme Version',
                                            tag: '(0008,0103)',
                                            type: '1C',
                                            condition:
                                                'Required if the value of Coding Scheme Designator (0008,0102) is present and is not sufficient to identify the Code Value (0008,0100) or Long Code Value (0008,0119) unambiguously. Shall not be present if Coding Scheme Designator (0008,0102) is absent. May be present otherwise.',
                                            desc: 'An identifier of the version of the coding scheme if necessary to resolve ambiguity. See linkend="sect_8.2". ',
                                        },
                                        {
                                            name: 'Code Meaning',
                                            tag: '(0008,0104)',
                                            type: '1',
                                            desc: 'Text that conveys the meaning of the Coded Entry. See linkend="sect_8.3".',
                                        },
                                        {
                                            name: 'Long Code Value',
                                            tag: '(0008,0119)',
                                            type: '1C',
                                            desc: 'The identifier of the Coded Entry. See linkend="sect_8.1". Shall be present if Code Value (0008,0100) is not present and the Code Value is not a URN or URL.',
                                        },
                                        {
                                            name: 'URN Code Value',
                                            tag: '(0008,0120)',
                                            type: '1C',
                                            desc: 'The identifier of the Coded Entry. See linkend="sect_8.1". Shall be present if Code Value (0008,0100) is not present and the Code Value is a URN or URL.',
                                        },
                                        {
                                            name: 'Mapping Resource',
                                            tag: '(0008,0105)',
                                            type: '1C',
                                            condition: [
                                                'Context Identifier',
                                                '(0008,010F)',
                                                'is present',
                                            ],
                                            desc: 'The identifier of the Mapping Resource that defines the Context Group from which Coded Entry was selected. See linkend="sect_8.4". ',
                                        },
                                        {
                                            name: 'Context Group Version',
                                            tag: '(0008,0106)',
                                            type: '1C',
                                            condition: [
                                                'Context Identifier',
                                                '(0008,010F)',
                                                'is present',
                                            ],
                                            desc: 'The identifier of the version of the Context Group from which the Coded Entry was selected. See linkend="sect_8.5".',
                                        },
                                        {
                                            name: 'Context Group Local Version',
                                            tag: '(0008,0107)',
                                            type: '1C',
                                            condition:
                                                'Required if the value of Context Group Extension Flag (0008,010B) is "Y".',
                                            desc: 'An implementation-specific version of a Context Group that contains private extensions. See linkend="sect_8.7". ',
                                        },
                                        {
                                            name: 'Context Group Extension Creator UID',
                                            tag: '(0008,010D)',
                                            type: '1C',
                                            condition:
                                                'Required if the value of Context Group Extension Flag (0008,010B) is "Y".',
                                            desc: 'Identifies the person or organization who created an extension to the Context Group. See linkend="sect_8.7".',
                                        },
                                    ],
                                },
                                {
                                    name: 'Numeric Value',
                                    tag: '(0040,A30A)',
                                    type: '1C',
                                    condition: [
                                        'Value Type',
                                        '(0040,A040)',
                                        'is NUMERIC',
                                    ],
                                    desc: 'Numeric value for this name-value Item. Only a single value shall be present.',
                                },
                                {
                                    name: 'Floating Point Value',
                                    tag: '(0040,A161)',
                                    type: '1C',
                                    condition:
                                        'Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise.',
                                    desc: 'The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.',
                                },
                                {
                                    name: 'Rational Numerator Value',
                                    tag: '(0040,A162)',
                                    type: '1C',
                                    condition:
                                        'Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise.',
                                    desc: 'The integer numerator of a rational representation of Numeric Value (0040,A30A), encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.',
                                },
                                {
                                    name: 'Rational Denominator Value',
                                    tag: '(0040,A163)',
                                    type: '1C',
                                    condition: [
                                        'Rational Numerator Value',
                                        '(0040,A162)',
                                        'is present',
                                    ],
                                    desc: 'The integer denominator of a rational representation of Numeric Value (0040,A30A), encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.',
                                },
                                {
                                    name: 'Measurement Units Code Sequence',
                                    tag: '(0040,08EA)',
                                    type: '1C',
                                    condition: [
                                        'Value Type',
                                        '(0040,A040)',
                                        'is NUMERIC',
                                    ],
                                    desc: 'Units of measurement for a numeric value in this name-value Item. Only a single Item shall be included in this Sequence.',
                                    items: [
                                        {
                                            name: 'Code Value',
                                            tag: '(0008,0100)',
                                            type: '1C',
                                            desc: 'The identifier of the Coded Entry. See linkend="sect_8.1". Shall be present if the code value length is 16 characters or less, and the code value is not a URN or URL.',
                                        },
                                        {
                                            name: 'Coding Scheme Designator',
                                            tag: '(0008,0102)',
                                            type: '1C',
                                            desc: 'The identifier of the coding scheme in which the Coded Entry is defined. See linkend="sect_8.2". Shall be present if Code Value (0008,0100) or Long Code Value (0008,0119) is present. May be present otherwise.',
                                        },
                                        {
                                            name: 'Coding Scheme Version',
                                            tag: '(0008,0103)',
                                            type: '1C',
                                            condition:
                                                'Required if the value of Coding Scheme Designator (0008,0102) is present and is not sufficient to identify the Code Value (0008,0100) or Long Code Value (0008,0119) unambiguously. Shall not be present if Coding Scheme Designator (0008,0102) is absent. May be present otherwise.',
                                            desc: 'An identifier of the version of the coding scheme if necessary to resolve ambiguity. See linkend="sect_8.2". ',
                                        },
                                        {
                                            name: 'Code Meaning',
                                            tag: '(0008,0104)',
                                            type: '1',
                                            desc: 'Text that conveys the meaning of the Coded Entry. See linkend="sect_8.3".',
                                        },
                                        {
                                            name: 'Long Code Value',
                                            tag: '(0008,0119)',
                                            type: '1C',
                                            desc: 'The identifier of the Coded Entry. See linkend="sect_8.1". Shall be present if Code Value (0008,0100) is not present and the Code Value is not a URN or URL.',
                                        },
                                        {
                                            name: 'URN Code Value',
                                            tag: '(0008,0120)',
                                            type: '1C',
                                            desc: 'The identifier of the Coded Entry. See linkend="sect_8.1". Shall be present if Code Value (0008,0100) is not present and the Code Value is a URN or URL.',
                                        },
                                        {
                                            name: 'Mapping Resource',
                                            tag: '(0008,0105)',
                                            type: '1C',
                                            condition: [
                                                'Context Identifier',
                                                '(0008,010F)',
                                                'is present',
                                            ],
                                            desc: 'The identifier of the Mapping Resource that defines the Context Group from which Coded Entry was selected. See linkend="sect_8.4". ',
                                        },
                                        {
                                            name: 'Context Group Version',
                                            tag: '(0008,0106)',
                                            type: '1C',
                                            condition: [
                                                'Context Identifier',
                                                '(0008,010F)',
                                                'is present',
                                            ],
                                            desc: 'The identifier of the version of the Context Group from which the Coded Entry was selected. See linkend="sect_8.5".',
                                        },
                                        {
                                            name: 'Context Group Local Version',
                                            tag: '(0008,0107)',
                                            type: '1C',
                                            condition:
                                                'Required if the value of Context Group Extension Flag (0008,010B) is "Y".',
                                            desc: 'An implementation-specific version of a Context Group that contains private extensions. See linkend="sect_8.7". ',
                                        },
                                        {
                                            name: 'Context Group Extension Creator UID',
                                            tag: '(0008,010D)',
                                            type: '1C',
                                            condition:
                                                'Required if the value of Context Group Extension Flag (0008,010B) is "Y".',
                                            desc: 'Identifies the person or organization who created an extension to the Context Group. See linkend="sect_8.7".',
                                        },
                                    ],
                                },
                                {
                                    name: 'Referenced SOP Sequence',
                                    tag: '(0008,1199)',
                                    type: '1C',
                                    condition: [
                                        'Value Type',
                                        '(0040,A040)',
                                        'is COMPOSITE or IMAGE or WAVEFORM',
                                    ],
                                    desc: 'Composite SOP Instance Reference value for this name-value Item. Only a single Item shall be included in this Sequence.',
                                    items: [
                                        {
                                            name: 'Referenced SOP Class UID',
                                            tag: '(0008,1150)',
                                            type: '1',
                                            desc: 'Uniquely identifies the referenced SOP Class.',
                                        },
                                        {
                                            name: 'Referenced SOP Instance UID',
                                            tag: '(0008,1155)',
                                            type: '1',
                                            desc: 'Uniquely identifies the referenced SOP Instance.',
                                        },
                                        {
                                            name: 'Referenced Frame Number',
                                            tag: '(0008,1160)',
                                            type: '1C',
                                            condition:
                                                'Required if the Referenced SOP Instance is a Multi-frame Image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present.',
                                            desc: 'Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1. This Attribute may be multi-valued.',
                                        },
                                        {
                                            name: 'Referenced Segment Number',
                                            tag: '(0062,000B)',
                                            type: '1C',
                                            condition: [
                                                'the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number',
                                                '(0008,1160)',
                                                'is not present',
                                            ],
                                            desc: 'Identifies the segments to which the reference applies identified by Segment Number (0062,0004).',
                                        },
                                        {
                                            name: 'Referenced Waveform Channels',
                                            tag: '(0040,A0B0)',
                                            type: '1C',
                                            condition:
                                                'Required if the Referenced SOP Instance is a Waveform that contains multiple Channels and the reference does not apply to all Channels of all Multiplex Groups.',
                                            desc: 'List of channels in Waveform to which the reference applies. See linkend="sect_C.18.5.1.1".',
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
    'Multi-energy CT Image': [
        {
            name: 'Multi-energy CT Acquisition Sequence',
            tag: '(0018,9362)',
            type: '1',
            desc: 'The Attributes of a Multi-energy CT Image acquisition. One Item shall be included in this Sequence.',
            items: [
                {
                    name: 'Multi-energy CT X-Ray Source Sequence',
                    tag: '(0018,9365)',
                    type: '1',
                    desc: 'X-Ray Source (see linkend="sect_C.8.2.2.1.1") information. One or more Items shall be included in this Sequence.',
                    items: [
                        {
                            name: 'X-Ray Source Index',
                            tag: '(0018,9366)',
                            type: '1',
                            desc: 'Identification number of this item in the Multi-energy CT X-Ray Source Sequence. The number shall be 1 for the first Item and increase by 1 for each subsequent Item.',
                        },
                        {
                            name: 'X-Ray Source ID',
                            tag: '(0018,9367)',
                            type: '1',
                            desc: 'Identifier of the physical X-Ray source. This might be the serial number. The X-Ray Source ID (0018,9367) will have the same value for different values of X-Ray Source Index (0018,9366) if a single source generates different nominal energies.',
                        },
                        {
                            name: 'Multi-energy Source Technique',
                            tag: '(0018,9368)',
                            type: '1',
                            enum: ['SWITCHING_SOURCE', 'CONSTANT_SOURCE'],
                            desc: 'Technique used to acquire Multi-energy data.',
                        },
                        {
                            name: 'Source Start DateTime',
                            tag: '(0018,9369)',
                            type: '1',
                            desc: 'The date and time this X-Ray source (see linkend="sect_C.8.2.2.1.1") was first used in this Multi-energy acquisition.',
                        },
                        {
                            name: 'Source End DateTime',
                            tag: '(0018,936A)',
                            type: '1',
                            desc: 'The date and time this X-Ray source (see linkend="sect_C.8.2.2.1.1") was last used in this Multi-energy acquisition.',
                        },
                        {
                            name: 'Switching Phase Number',
                            tag: '(0018,936B)',
                            type: '1C',
                            condition:
                                'Required if Multi-energy Source Technique (0018,9368) is "SWITCHING_SOURCE".',
                            desc: 'A number, unique within the sequence, to identify the switching phase.',
                        },
                    ],
                },
                {
                    name: 'Multi-energy CT X-Ray Detector Sequence',
                    tag: '(0018,936F)',
                    type: '1',
                    desc: 'X-Ray Detector (see linkend="sect_C.8.2.2.1.1") information. One or more Items shall be included in this Sequence.',
                    items: [
                        {
                            name: 'X-Ray Detector Index',
                            tag: '(0018,9370)',
                            type: '1',
                            desc: 'Identification number of this item in the Multi-energy CT X-Ray Detector Sequence. The number shall be 1 for the first Item and increase by 1 for each subsequent Item.',
                        },
                        {
                            name: 'X-Ray Detector ID',
                            tag: '(0018,9371)',
                            type: '1',
                            desc: 'Identifier of the physical X-Ray detector. This might be the serial number. When a single detector discriminates different energies, the X-Ray Detector ID (0018,9371) will have the same value in different Items of Multi-energy CT X-Ray Detector Sequence (0018,936F).',
                        },
                        {
                            name: 'Multi-energy Detector Type',
                            tag: '(0018,9372)',
                            type: '1',
                            enum: [
                                'INTEGRATING',
                                'MULTILAYER',
                                'PHOTON_COUNTING',
                            ],
                            desc: 'Technology used to detect multiple energies.',
                        },
                        {
                            name: 'Nominal Max Energy',
                            tag: '(0018,9374)',
                            type: '1C',
                            condition:
                                'Required if Multi-energy Detector Type (0018,9372) is PHOTON_COUNTING. May be present otherwise.',
                            desc: 'Nominal maximum energy in keV of photons that are integrated/counted by the detector (see linkend="sect_C.8.2.2.1.1"). Due to energy resolution limits of the detector, some photons above the nominal maximum may be counted.',
                        },
                        {
                            name: 'Nominal Min Energy',
                            tag: '(0018,9375)',
                            type: '1C',
                            condition:
                                'Required if Multi-energy Detector Type (0018,9372) is PHOTON_COUNTING. May be present otherwise.',
                            desc: 'Nominal minimum energy in keV of photons that are integrated/counted by the detector (see linkend="sect_C.8.2.2.1.1"). Due to energy resolution limits of the detector, some photons below the nominal minimum may be counted.',
                        },
                    ],
                },
                {
                    name: 'Multi-energy CT Path Sequence',
                    tag: '(0018,9379)',
                    type: '1',
                    desc: 'Describes the paths corresponding to each energy level of a Multi-energy acquisition. Each path consists of a source (see linkend="sect_C.8.2.1.1.1") and a detector (see linkend="sect_C.8.2.2.1.1"). Two or more Items shall be included in this Sequence. See also linkend="sect_C.8.2.2.1" and linkend="sect_C.8.2.2.2".',
                    items: [
                        {
                            name: 'Multi-energy CT Path Index',
                            tag: '(0018,937A)',
                            type: '1',
                            desc: 'Identification number of the element in the Multi-energy CT Path Sequence. The number shall be 1 for the first Item and increase by 1 for each subsequent Item.',
                        },
                        {
                            name: 'Referenced X-Ray Source Index',
                            tag: '(0018,9377)',
                            type: '1',
                            desc: 'References the X-Ray Source Index (0018,9366) in the Multi-energy CT X-Ray Source Sequence (0018,9365) in this path.',
                        },
                        {
                            name: 'Referenced X-Ray Detector Index',
                            tag: '(0018,9376)',
                            type: '1',
                            desc: 'References the X-Ray Detector Index (0018,9370) in the Multi-energy CT X-Ray Detector Sequence (0018,936F) in this path.',
                        },
                    ],
                },
                {
                    name: 'CT Exposure Sequence',
                    tag: '(0018,9321)',
                    type: '1',
                    desc: 'Contains the Attributes defining exposure information. If Multi-energy CT Acquisition (0018,9361) is NO or is absent, only a single Item shall be included in this Sequence. If Multi-energy CT Acquisition (0018,9361) is YES, one or more Items shall be included in this Sequence.',
                    items: [
                        {
                            name: 'Referenced X-Ray Source Index',
                            tag: '(0018,9377)',
                            type: '1C',
                            condition:
                                'Required if Multi-energy CT Acquisition (0018,9361) is YES.',
                            desc: 'References the X-Ray Source Index (0018,9366) in the Multi-energy CT Source Sequence (0018,9365) for which exposure details are specified here. This Attribute may contain multiple values if this Item summarizes the total exposure from multiple sources e.g., from multiple switching phases from a switching source.',
                        },
                        {
                            name: 'Exposure Time in ms',
                            tag: '(0018,9328)',
                            type: '1C',
                            condition:
                                'Required if Frame Type (0008,9007) Value 1 of this frame is ORIGINAL, or if Image Type (0008,0008) Value 1 is ORIGINAL and Multi-energy CT Acquisition (0018,9361) is YES. May be present otherwise.',
                            desc: 'Duration of exposure for this frame in milliseconds. If Acquisition Type (0018,9302) equals SPIRAL the duration of the exposure time for this frame shall be Revolution Time (0018,9305) divided by the Spiral Pitch Factor (0018,9311). See linkend="sect_C.8.15.3.8.1".',
                        },
                        {
                            name: 'X-Ray Tube Current in mA',
                            tag: '(0018,9330)',
                            type: '1C',
                            condition:
                                'Required if Frame Type (0008,9007) Value 1 of this frame is ORIGINAL or Image Type (0008,0008) Value 1 is ORIGINAL. May be present otherwise.',
                            desc: 'Nominal X-Ray tube current in milliamperes.',
                        },
                        {
                            name: 'Exposure in mAs',
                            tag: '(0018,9332)',
                            type: '1C',
                            condition:
                                'Required if Frame Type (0008,9007) Value 1 of this frame is ORIGINAL or Image Type (0008,0008) Value 1 is ORIGINAL. May be present otherwise.',
                            desc: 'The exposure expressed in milliampere seconds, for example calculated from exposure time and X-Ray tube current.',
                        },
                        {
                            name: 'Exposure Modulation Type',
                            tag: '(0018,9323)',
                            type: '1C',
                            enum: ['NONE'],
                            condition:
                                'Required if Frame Type (0008,9007) Value 1 of this frame is ORIGINAL or Image Type (0008,0008) Value 1 is ORIGINAL. May be present otherwise.',
                            desc: 'A label describing the type of exposure modulation used for the purpose of limiting the dose.',
                        },
                        {
                            name: 'Water Equivalent Diameter Calculation Method Code Sequence',
                            tag: '(0018,1272)',
                            type: '1C',
                            condition: [
                                'Water Equivalent Diameter',
                                '(0018,1271)',
                                'is present',
                            ],
                            desc: 'The method of calculation of Water Equivalent Diameter (0018,1271). Only a single Item is permitted in this Sequence.',
                            items: [
                                {
                                    name: 'Code Value',
                                    tag: '(0008,0100)',
                                    type: '1C',
                                    desc: 'The identifier of the Coded Entry. See linkend="sect_8.1". Shall be present if the code value length is 16 characters or less, and the code value is not a URN or URL.',
                                },
                                {
                                    name: 'Coding Scheme Designator',
                                    tag: '(0008,0102)',
                                    type: '1C',
                                    desc: 'The identifier of the coding scheme in which the Coded Entry is defined. See linkend="sect_8.2". Shall be present if Code Value (0008,0100) or Long Code Value (0008,0119) is present. May be present otherwise.',
                                },
                                {
                                    name: 'Coding Scheme Version',
                                    tag: '(0008,0103)',
                                    type: '1C',
                                    condition:
                                        'Required if the value of Coding Scheme Designator (0008,0102) is present and is not sufficient to identify the Code Value (0008,0100) or Long Code Value (0008,0119) unambiguously. Shall not be present if Coding Scheme Designator (0008,0102) is absent. May be present otherwise.',
                                    desc: 'An identifier of the version of the coding scheme if necessary to resolve ambiguity. See linkend="sect_8.2". ',
                                },
                                {
                                    name: 'Code Meaning',
                                    tag: '(0008,0104)',
                                    type: '1',
                                    desc: 'Text that conveys the meaning of the Coded Entry. See linkend="sect_8.3".',
                                },
                                {
                                    name: 'Long Code Value',
                                    tag: '(0008,0119)',
                                    type: '1C',
                                    desc: 'The identifier of the Coded Entry. See linkend="sect_8.1". Shall be present if Code Value (0008,0100) is not present and the Code Value is not a URN or URL.',
                                },
                                {
                                    name: 'URN Code Value',
                                    tag: '(0008,0120)',
                                    type: '1C',
                                    desc: 'The identifier of the Coded Entry. See linkend="sect_8.1". Shall be present if Code Value (0008,0100) is not present and the Code Value is a URN or URL.',
                                },
                                {
                                    name: 'Mapping Resource',
                                    tag: '(0008,0105)',
                                    type: '1C',
                                    condition: [
                                        'Context Identifier',
                                        '(0008,010F)',
                                        'is present',
                                    ],
                                    desc: 'The identifier of the Mapping Resource that defines the Context Group from which Coded Entry was selected. See linkend="sect_8.4". ',
                                },
                                {
                                    name: 'Context Group Version',
                                    tag: '(0008,0106)',
                                    type: '1C',
                                    condition: [
                                        'Context Identifier',
                                        '(0008,010F)',
                                        'is present',
                                    ],
                                    desc: 'The identifier of the version of the Context Group from which the Coded Entry was selected. See linkend="sect_8.5".',
                                },
                                {
                                    name: 'Context Group Local Version',
                                    tag: '(0008,0107)',
                                    type: '1C',
                                    condition:
                                        'Required if the value of Context Group Extension Flag (0008,010B) is "Y".',
                                    desc: 'An implementation-specific version of a Context Group that contains private extensions. See linkend="sect_8.7". ',
                                },
                                {
                                    name: 'Context Group Extension Creator UID',
                                    tag: '(0008,010D)',
                                    type: '1C',
                                    condition:
                                        'Required if the value of Context Group Extension Flag (0008,010B) is "Y".',
                                    desc: 'Identifies the person or organization who created an extension to the Context Group. See linkend="sect_8.7".',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'CT X-Ray Details Sequence',
                    tag: '(0018,9325)',
                    type: '1',
                    desc: 'Contains the Attributes defining the X-Ray information. If Multi-energy CT Acquisition (0018,9361) is NO or is absent, only a single Item shall be included in this Sequence. If Multi-energy CT Acquisition (0018,9361) is YES, one or more Items shall be included in this Sequence.',
                    items: [
                        {
                            name: 'Referenced Path Index',
                            tag: '(0018,9378)',
                            type: '1C',
                            condition:
                                'Required if Multi-energy CT Acquisition (0018,9361) is YES.',
                            desc: 'References the X-Ray Path Index (0018,937A) in the Multi-energy CT Path Sequence (0018,9379) for this exposure. This Attribute may contain multiple values if this item describes multiple paths.',
                        },
                        {
                            name: 'KVP',
                            tag: '(0018,0060)',
                            type: '1C',
                            condition:
                                'Required if Frame Type (0008,9007) Value 1 of this frame is ORIGINAL or Image Type (0008,0008) Value 1 is ORIGINAL. May be present otherwise.',
                            desc: 'Nominal peak kilo voltage output of the X-Ray generator used. If Multi-energy Source Technique (0018,9368) in Multi-energy CT X-Ray Source Sequence (0018,9365) (of the referenced Multi-energy CT Path Index (0018,937A)) is "SWITCHING_SOURCE", this value is the nominal peak value for a switching phase. The switching phase is identified by the value of X-Ray Source Index (0018,9366) in the Multi-energy CT Path Sequence (0018,9379) corresponding to the value of Referenced Path Index (0018,9378) in this Sequence. Due to limitations of the generating hardware the actual voltage may not reach the nominal peak value.',
                        },
                        {
                            name: 'Focal Spot(s)',
                            tag: '(0018,1190)',
                            type: '1C',
                            condition:
                                'Required if Frame Type (0008,9007) Value 1 of this frame is ORIGINAL or Image Type (0008,0008) Value 1 is ORIGINAL. May be present otherwise.',
                            desc: 'Used nominal size of the focal spot in mm. The Attribute may only have one or two values, for devices with variable focal spot, small dimension followed by large dimension',
                        },
                        {
                            name: 'Filter Type',
                            tag: '(0018,1160)',
                            type: '1C',
                            enum: [
                                'WEDGE',
                                'BUTTERFLY',
                                'MULTIPLE',
                                'FLAT',
                                'SHAPED',
                                'NONE',
                            ],
                            condition:
                                'Required if Frame Type (0008,9007) Value 1 of this frame is ORIGINAL or Image Type (0008,0008) Value 1 is ORIGINAL. May be present otherwise.',
                            desc: 'Type of filter(s) inserted into the X-Ray beam. Multiple type of filters can be expressed by a combination, e.g., BUTTERFLY+WEDGE.',
                        },
                        {
                            name: 'Filter Material',
                            tag: '(0018,7050)',
                            type: '1C',
                            condition:
                                'Required if Frame Type (0008,9007) Value 1 of this frame is ORIGINAL or Image Type (0008,0008) Value 1 is ORIGINAL, and the value of Filter Type (0018,1160) is other than NONE. May be present otherwise.',
                            desc: 'The X-Ray absorbing material used in the filter. May be multi-valued. See  for Defined Terms. At least one value is required to be present. If a combination of materials is used, they may be listed using multiple values, or a custom value may be used to represent a proprietary combination of materials',
                        },
                        {
                            name: 'Energy Weighting Factor',
                            tag: '(0018,9353)',
                            type: '1C',
                            condition:
                                'Required if Required if Frame Type (0008,9007) Value 4 of this frame is ENERGY_PROP_WT or Image Type (0008,0008) Value 4 is ENERGY_PROP_WT. May be present otherwise.',
                            desc: 'The weighting factor of the data from this Sequence Item.',
                        },
                    ],
                },
                {
                    name: 'CT Acquisition Details Sequence',
                    tag: '(0018,9304)',
                    type: '1',
                    desc: 'Contains the Attributes defining the details of the acquisition. If Multi-energy CT Acquisition (0018,9361) is NO or is absent, only a single Item shall be included in this Sequence. If Multi-energy CT Acquisition (0018,9361) is YES, one or more Items shall be included in this Sequence.',
                    items: [
                        {
                            name: 'Referenced Path Index',
                            tag: '(0018,9378)',
                            type: '1C',
                            condition:
                                'Required if Multi-energy CT Acquisition (0018,9361) is YES.',
                            desc: 'References the X-Ray Path Index (0018,937A) in the Multi-energy CT Path Sequence (0018,9379) for this exposure. This Attribute may contain multiple values if this item describes multiple paths.',
                        },
                        {
                            name: 'Rotation Direction',
                            tag: '(0018,1140)',
                            type: '1C',
                            enum: ['CW', 'CC'],
                            condition:
                                'Required if Frame Type (0008,9007) Value 1 of this frame is ORIGINAL or Image Type (0008,0008) Value 1 is ORIGINAL, and Acquisition Type (0018,9302) is other than CONSTANT_ANGLE.',
                            desc: 'Direction of rotation of the source about the gantry, as viewed while facing the gantry where the table enters the gantry. Otherwise may be present if Frame Type (0008,9007) Value 1 of this frame is DERIVED or Image Type (0008,0008) Value 1 is DERIVED, and Acquisition Type (0018,9302) is other than CONSTANT_ANGLE.',
                        },
                        {
                            name: 'Revolution Time',
                            tag: '(0018,9305)',
                            type: '1C',
                            condition:
                                'Required if Frame Type (0008,9007) Value 1 of this frame is ORIGINAL or Image Type (0008,0008) Value 1 is ORIGINAL, and Acquisition Type (0018,9302) is other than CONSTANT_ANGLE.',
                            desc: 'The time in seconds of a complete revolution of the source around the gantry orbit. This value is independent of the Reconstruction Angle (0018,9319) of the frame. Otherwise may be present if Frame Type (0008,9007) Value 1 of this frame is DERIVED or Image Type (0008,0008) Value 1 is DERIVED, and Acquisition Type (0018,9302) is other than CONSTANT_ANGLE.',
                        },
                        {
                            name: 'Single Collimation Width',
                            tag: '(0018,9306)',
                            type: '1C',
                            condition:
                                'Required if Frame Type (0008,9007) Value 1 of this frame is ORIGINAL or Image Type (0008,0008) Value 1 is ORIGINAL. May be present otherwise.',
                            desc: 'The width of a single row of acquired data (in mm). Adjacent physical detector rows may have been combined to form a single effective acquisition row.',
                        },
                        {
                            name: 'Total Collimation Width',
                            tag: '(0018,9307)',
                            type: '1C',
                            condition:
                                'Required if Frame Type (0008,9007) Value 1 of this frame is ORIGINAL or Image Type (0008,0008) Value 1 is ORIGINAL. May be present otherwise.',
                            desc: 'The width of the total collimation (in mm) over the area of active X-Ray detection. This will be equal to the number of effective detector rows multiplied by single collimation width.',
                        },
                        {
                            name: 'Table Height',
                            tag: '(0018,1130)',
                            type: '1C',
                            condition:
                                'Required if Frame Type (0008,9007) Value 1 of this frame is ORIGINAL or Image Type (0008,0008) Value 1 is ORIGINAL. May be present otherwise.',
                            desc: 'The distance in mm from the top of the patient table to the center of rotation of the source (i.e., the data collection center or isocenter). The distance is positive when the table is below the data collection center.',
                        },
                        {
                            name: 'Gantry/Detector Tilt',
                            tag: '(0018,1120)',
                            type: '1C',
                            condition:
                                'Required if Frame Type (0008,9007) Value 1 of this frame is ORIGINAL or Image Type (0008,0008) Value 1 is ORIGINAL. May be present otherwise.',
                            desc: 'Nominal angle of tilt in degrees of the scanning gantry. Not intended for mathematical computations. Zero degrees means the gantry is not tilted, negative degrees are when the top of the gantry is tilted away from where the table enters the gantry.',
                        },
                        {
                            name: 'Data Collection Diameter',
                            tag: '(0018,0090)',
                            type: '1C',
                            condition:
                                'Required if Frame Type (0008,9007) Value 1 of this frame is ORIGINAL or Image Type (0008,0008) Value 1 is ORIGINAL. May be present otherwise.',
                            desc: 'The diameter in mm of the region over which data were collected. See linkend="sect_C.8.15.3.6.1". In the case of an Acquisition Type (0018,9302) of CONSTANT_ANGLE, the diameter is that in a plane normal to the central ray of the diverging X-Ray beam as it passes through the data collection center.',
                        },
                    ],
                },
                {
                    name: 'CT Geometry Sequence',
                    tag: '(0018,9312)',
                    type: '1',
                    desc: 'Contains the Attributes defining the CT geometry. If Multi-energy CT Acquisition (0018,9361) is NO or is absent, only a single Item shall be included in this Sequence. If Multi-energy CT Acquisition (0018,9361) is YES, one or more Items shall be included in this Sequence.',
                    items: [
                        {
                            name: 'Referenced Path Index',
                            tag: '(0018,9378)',
                            type: '1C',
                            condition:
                                'Required if Multi-energy CT Acquisition (0018,9361) is YES.',
                            desc: 'References the X-Ray Path Index (0018,937A) in the Multi-energy CT Path Sequence (0018,9379) for this exposure. This Attribute may contain multiple values if this item describes multiple paths.',
                        },
                        {
                            name: 'Distance Source to Detector',
                            tag: '(0018,1110)',
                            type: '1C',
                            condition:
                                'Required if Frame Type (0008,9007) Value 1 of this frame is ORIGINAL or Image Type (0008,0008) Value 1 is ORIGINAL. May be present otherwise.',
                            desc: 'Distance in mm from source to detector center. See linkend="sect_C.8.15.3.6.1". This value is traditionally referred to as Source Image Receptor Distance (SID).',
                        },
                        {
                            name: 'Distance Source to Data Collection Center',
                            tag: '(0018,9335)',
                            type: '1C',
                            condition:
                                'Required if Frame Type (0008,9007) Value 1 of this frame is ORIGINAL or Image Type (0008,0008) Value 1 is ORIGINAL. May be present otherwise.',
                            desc: 'Distance in mm from source to data collection center. See linkend="sect_C.8.15.3.6.1".',
                        },
                    ],
                },
            ],
        },
        {
            name: 'Multi-energy CT Characteristics Sequence',
            tag: '(0018,9364)',
            type: '1C',
            condition:
                'Required if Image Type (0008,0008) Value 4 in the CT Image IOD, Image Type (0008,0008) Value 5 in the Enhanced CT Image IOD or Frame Type (0008,9007) Value 5 in the Enhanced CT Image IOD Frame is VMI. May be present otherwise.',
            desc: 'Multi-energy characteristics of the generated image. Only a single Item shall be included in this Sequence.',
            items: [
                {
                    name: 'Monoenergetic Energy Equivalent',
                    tag: '(0018,937C)',
                    type: '1C',
                    condition:
                        'Required if Image Type (0008,0008) Value 4 in the CT Image IOD, Image Type (0008,0008) Value 5 in the Enhanced CT Image IOD or Frame Type (0008,9007) Value 5 in the Enhanced CT Image IOD Frame is EQUAL to VMI. May be present otherwise.',
                    desc: 'Single energy equivalent in keV. If the Image Type (0008,0008) Value 4 in the CT Image IOD, Image Type (0008,0008) Value 5 in the Enhanced CT Image IOD or Frame Type (0008,9007) Value 5 in the Enhanced CT Image IOD Frame is (MAT_REMOVED, MAT_MODIFIED) and a VMI image was used as the source then this value reflects the keV value of the VMI image.',
                },
            ],
        },
    ],
    'SOP Common': [
        {
            name: 'SOP Class UID',
            tag: '(0008,0016)',
            type: '1',
            desc: 'Uniquely identifies the SOP Class. See linkend="sect_C.12.1.1.1" for further explanation. See also .',
        },
        {
            name: 'SOP Instance UID',
            tag: '(0008,0018)',
            type: '1',
            desc: 'Uniquely identifies the SOP Instance. See linkend="sect_C.12.1.1.1" for further explanation. See also .',
        },
        {
            name: 'Specific Character Set',
            tag: '(0008,0005)',
            type: '1C',
            condition:
                'Required if an expanded or replacement character set is used.',
            desc: 'Character Set that expands or replaces the Basic Graphic Set. See linkend="sect_C.12.1.1.2" for Defined Terms.',
        },
        {
            name: 'Encrypted Attributes Sequence',
            tag: '(0400,0500)',
            type: '1C',
            condition:
                'Required if application level confidentiality is needed and certain recipients are allowed to decrypt all or portions of the Encrypted Attributes Data Set. See linkend="sect_C.12.1.1.4.1".',
            desc: 'Sequence of Items containing encrypted DICOM data. One or more Items shall be included in this Sequence.',
            items: [
                {
                    name: 'Encrypted Content Transfer Syntax UID',
                    tag: '(0400,0510)',
                    type: '1',
                    desc: 'Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.',
                },
                {
                    name: 'Encrypted Content',
                    tag: '(0400,0520)',
                    type: '1',
                    desc: 'Encrypted data. See linkend="sect_C.12.1.1.4.2".',
                },
            ],
        },
        {
            name: 'HL7 Structured Document Reference Sequence',
            tag: '(0040,A390)',
            type: '1C',
            condition:
                'Required if unencapsulated HL7 Structured Documents are referenced within the Instance. Every such document so referenced is required to have a corresponding Item in this Sequence.',
            desc: 'Sequence of Items defining mapping between HL7 Instance Identifiers of unencapsulated HL7 Structured Documents referenced from the current SOP Instance as if they were DICOM Composite SOP Instances defined by SOP Class and Instance UID pairs. May also define a means of accessing the Documents. One or more Items shall be included in this Sequence. See linkend="sect_C.12.1.1.6".',
            items: [
                {
                    name: 'Referenced SOP Class UID',
                    tag: '(0008,1150)',
                    type: '1',
                    desc: 'Uniquely identifies the referenced SOP Class.',
                },
                {
                    name: 'Referenced SOP Instance UID',
                    tag: '(0008,1155)',
                    type: '1',
                    desc: 'Uniquely identifies the referenced SOP Instance.',
                },
                {
                    name: 'HL7 Instance Identifier',
                    tag: '(0040,E001)',
                    type: '1',
                    desc: 'Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret ("^") and Extension value (if Extension is present in Instance Identifier).',
                },
            ],
        },
        {
            name: 'Query/Retrieve View',
            tag: '(0008,0053)',
            type: '1C',
            enum: ['CLASSIC', 'ENHANCED'],
            condition:
                'Required if the Instance has ever been converted from its source form as the result of a C-MOVE operation with a specific view.',
            desc: 'The view requested during the C-MOVE operation that resulted in the transfer of this Instance.',
        },
        {
            name: 'Conversion Source Attributes Sequence',
            tag: '(0020,9172)',
            type: '1C',
            condition:
                'Required if this Instance was created by conversion from a DICOM source, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230).',
            desc: 'The set of images or other composite SOP Instances that were converted to this Instance. If this Instance was converted from a specific frame in the source Instance, the reference shall include the Frame Number. One or more Items shall be included in this Sequence.',
            items: [
                {
                    name: 'Referenced SOP Class UID',
                    tag: '(0008,1150)',
                    type: '1',
                    desc: 'Uniquely identifies the referenced SOP Class.',
                },
                {
                    name: 'Referenced SOP Instance UID',
                    tag: '(0008,1155)',
                    type: '1',
                    desc: 'Uniquely identifies the referenced SOP Instance.',
                },
                {
                    name: 'Referenced Frame Number',
                    tag: '(0008,1160)',
                    type: '1C',
                    condition:
                        'Required if the Referenced SOP Instance is a Multi-frame Image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present.',
                    desc: 'Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1. This Attribute may be multi-valued.',
                },
                {
                    name: 'Referenced Segment Number',
                    tag: '(0062,000B)',
                    type: '1C',
                    condition: [
                        'the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number',
                        '(0008,1160)',
                        'is not present',
                    ],
                    desc: 'Identifies the Segment Number to which the reference applies.',
                },
            ],
        },
        {
            name: 'Referenced Defined Protocol Sequence',
            tag: '(0018,990C)',
            type: '1C',
            condition:
                'Required if this instance is a Performed Procedure Protocol that resulted from a Defined Procedure Protocol. May be present otherwise.',
            desc: 'Defined Procedure Protocol SOP Instance(s) that were used for this Instance. One or more Items shall be included in this Sequence. See linkend="sect_10.41.1".',
            items: [
                {
                    name: 'Referenced SOP Class UID',
                    tag: '(0008,1150)',
                    type: '1',
                    desc: 'Uniquely identifies the referenced SOP Class.',
                },
                {
                    name: 'Referenced SOP Instance UID',
                    tag: '(0008,1155)',
                    type: '1',
                    desc: 'Uniquely identifies the referenced SOP Instance.',
                },
            ],
        },
        {
            name: 'Referenced Performed Protocol Sequence',
            tag: '(0018,990D)',
            type: '1C',
            condition:
                'Required if a related Performed Procedure Protocol SOP Instance was created.',
            desc: 'Performed Procedure Protocol SOP Instance(s) that describe the conditions by which this Instance was generated. One or more Items shall be included in this Sequence. See linkend="sect_10.41.1".',
            items: [
                {
                    name: 'Referenced SOP Class UID',
                    tag: '(0008,1150)',
                    type: '1',
                    desc: 'Uniquely identifies the referenced SOP Class.',
                },
                {
                    name: 'Referenced SOP Instance UID',
                    tag: '(0008,1155)',
                    type: '1',
                    desc: 'Uniquely identifies the referenced SOP Instance.',
                },
            ],
        },
    ],
} as const;

export default CTImageIODModules;
