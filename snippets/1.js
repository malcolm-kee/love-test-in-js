function readHeader(event, headerName) {
  if (event.headers) {
    return (
      event.headers[headerName] ||
      Object.keys(event.headers)
        .filter(
          headerKey => headerKey.toLowerCase() === headerName.toLowerCase()
        )
        .map(headerKey => event.headers[headerKey])[0]
    );
  }
}

test('readHeader', () => {
  const event = {
    headers: {
      'x-foo': 'bar',
      'x-top-brand': 'df'
    }
  };

  expect(readHeader(event, 'x-foo')).toBe('bar');
  expect(readHeader(event, 'x-zzz')).toBeUndefined();
  expect(readHeader(event, 'x-top-brand')).toBe('df');
  expect(readHeader(event, 'X-Top-Brand')).toBe('df');
});
