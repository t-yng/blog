import { BaseError } from './BaseError';

describe('BaseError', () => {
  it('instance of CustomErrorClass', () => {
    class CustomError extends BaseError {}
    const error = new CustomError();
    expect(error instanceof CustomError).toBe(true);
  });
});
