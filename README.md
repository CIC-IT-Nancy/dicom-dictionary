## dicom-dictionary

`@cic-it-nancy/dicom-dictionary` provides DICOM dictionary data and helpers for looking up tag metadata. The currently
available dictionary revision is **2025a**.

The dictionary data includes CT and MR Image IOD modules, value representation (VR) definitions, DICOM tags, SOP Class
and Instance UIDs, Transfer Syntax UIDs, character-set VRs, and 32-bit VL information.

## Installation

Install the package with your preferred package manager:

```sh
# Using npm
npm install @cic-it-nancy/dicom-dictionary

# Using pnpm
pnpm add @cic-it-nancy/dicom-dictionary

# Using Yarn
yarn add @cic-it-nancy/dicom-dictionary
```

## Usage

Create a tag lookup for a supported dictionary revision, then look up a tag by its group and element:

```js
import dicomDictionary from '@cic-it-nancy/dicom-dictionary';

const tags = dicomDictionary.createTagDictionary('2025a');

const patientName = tags.getTagInformation('0010', '0010');
console.log(patientName);
// { vr: 'PN', vm: '1', keyword: 'PatientName' }
```

Tag values are uppercase hexadecimal strings without parentheses or a `0x` prefix. Lookup methods that accept a full tag
also accept the group and element concatenated into one eight-character string:

```js
tags.getTagInformation('00100010');
tags.getVR('0010', '0010'); // 'PN'
tags.getVR('00100010'); // 'PN'
```

If a tag is not present in the selected dictionary, `getTagInformation` returns `{ vr: 'UN' }`; consequently, `getVR`
returns `'UN'` for that tag.

### Available helpers

- `getTagInformation(groupAndElement)` or `getTagInformation(group, element)` returns the tag's VR, value multiplicity
  (`vm`), and keyword, or `{ vr: 'UN' }` when the tag is unknown.
- `getVR(groupAndElement)` or `getVR(group, element)` returns the tag's VR.
- `getVRDataType(vr)` returns the JavaScript data type associated with a VR, or `null`/`undefined` where the dictionary
  has no mapping.
- `isValidVR(vr)` checks whether the VR exists in the selected dictionary.
- `is32BitVL(vr)` checks whether the VR is listed as using a 32-bit value length.
- `isWithVR(groupAndElement)` or `isWithVR(group, element)` returns whether the tag's VR is not `NONE`. Unknown tags
  have VR `UN`, so this method returns `true` for them.
- `isSequenceDelimitationItem(groupAndElement)` or `isSequenceDelimitationItem(group, element)` checks for a sequence
  delimitation item. Pass the group and element separately for an exact check, for example
  `isSequenceDelimitationItem('FFFE', 'E0DD')`.

The complete revision data is also available on the default export as `dicomDictionary.Dictionary['2025a']`.

## Browser and build

The package can be imported by browser applications that use a JavaScript module or bundler, just like in the usage
example above. The project build also creates `lib/browser.js` and `lib/browser.min.js`, but these bundles do not expose
a documented global variable for use from a plain `<script>` tag.

To build the package from a checkout, run:

```sh
npm run build
```

This runs the TypeScript and browser bundle build scripts and writes the generated files under `lib/`.

## Authors and contributors

- **CIC-IT Nancy**: Author
- **Pierre 'AlasDiablo' M** ([GitHub](https://github.com/AlasDiablo)): Contributor

## Licence

GNU Lesser General Public License v3.0 (LGPL-3.0), CIC-IT Nancy.