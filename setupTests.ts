import '@testing-library/jest-dom';
import 'jest-styled-components';

// Polyfill TextEncoder/TextDecoder for environments (some router internals rely on them)
// Node provides these under util.TextEncoder/TextDecoder from v11+, but ensure globals exist for Jest
import {TextEncoder, TextDecoder} from 'util';

// @ts-ignore - augment global for tests
if (typeof (global as any).TextEncoder === 'undefined') {
  // @ts-ignore
  global.TextEncoder = TextEncoder;
}

// @ts-ignore - augment global for tests
if (typeof (global as any).TextDecoder === 'undefined') {
  // @ts-ignore
  global.TextDecoder = TextDecoder;
}
