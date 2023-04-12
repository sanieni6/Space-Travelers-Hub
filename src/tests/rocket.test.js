import getRockets from './__mock__/rocketSlice';

describe('Rocket tests', () => {
  test('Get API data', () => {
    expect(getRockets()).toBeDefined();
  });
  test('Get reserved status', () => {
    expect(getRockets()[0].reserved).toBe(false);
  });
  test('Get rocket name', () => {
    expect(getRockets()[0].name).toBe('Falcon 1');
  });
});
