import ErrorRepository from '../errorRepository';

test('should return error description for known error code', () => {
  const errorRepo = new ErrorRepository();
  errorRepo.addError(404, 'Not Found');
  expect(errorRepo.translate(404)).toBe('Not Found');
});

test('should return "Unknown error" for unknown error code', () => {
  const errorRepo = new ErrorRepository();
  expect(errorRepo.translate(123)).toBe('Unknown error');
});

test('should add and retrieve multiple error codes', () => {
  const errorRepo = new ErrorRepository();
  errorRepo.addError(404, 'Not Found');
  errorRepo.addError(500, 'Internal Server Error');
  expect(errorRepo.translate(404)).toBe('Not Found');
  expect(errorRepo.translate(500)).toBe('Internal Server Error');
});
