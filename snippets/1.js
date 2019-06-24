// lib.js
function readHeader(event, headerName) {
  if (event.headers) {
    return (
      event.headers[headerName] || // returns if exact match
      // else try to find match case-insensitively
      Object.keys(event.headers)
        .filter(
          headerKey =>
            headerKey.toLowerCase() === headerName.toLowerCase()
        )
        .map(headerKey => event.headers[headerKey])[0]
    );
  }
}

// lib.spec.js
import { readHeader } from './lib';

test('readHeader', () => {
  const event = {
    headers: {
      'x-foo': 'bar'
    }
  };

  expect(readHeader(event, 'x-foo')).toBe('bar');
  expect(readHeader(event, 'x-zzz')).toBeUndefined();
  expect(readHeader(event, 'x-Foo')).toBe('bar');
});
