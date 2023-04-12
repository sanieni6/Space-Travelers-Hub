import getMissions from './__mock__/missionSlice';

describe('Mission tests', () => {
  test('Get data from API', () => {
    expect(getMissions()).toBeDefined();
  });
  test('Get reserved status', () => {
    expect(getMissions()[1].reserved).toBe(true);
  });
  test('Get rocket name', () => {
    expect(getMissions()[1].name).toBe('Telstar');
  });
});
