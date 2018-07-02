import { DoublePipe } from './double.pipe';

describe('DoublePipe', () => {
  it('create an instance', () => {
    const pipe = new DoublePipe();
    expect(pipe).toBeTruthy();
  });
  it('return double the amount', () => {
    const pipe = new DoublePipe();
    const num = 10;
    expect(pipe.transform(num)).toBe(num*2);
  });
});
