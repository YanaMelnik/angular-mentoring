import { DurationModifyPipe } from './duration-modify.pipe';

describe('DurationModifyPipe', () => {
  const pipe = new DurationModifyPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return string with minute if number less than 60', () => {
    expect(pipe.transform(58)).toBe('58min');
  });

  it('should return string with hours and minute if number more than 60', () => {
    expect(pipe.transform(78)).toBe('1h 18min');
  });
});
