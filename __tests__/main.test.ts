import { sayHi } from '../src/main';

describe('greeter function', () => {
  it('greets a user with `Hello, {name}` message', () => {
    const str = sayHi('web3');
    console.log('str:', str);
    expect(str).toBe('Hi web3');
  });
});
