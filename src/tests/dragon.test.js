import getDragons from './__mock__/dragonSlice';

describe('Dragon tests', () => {
  test('Get API data', () => {
    expect(getDragons()).toBeDefined();
  });
  test('Get reserved status', () => {
    expect(getDragons()[0].reserved).toBe(true);
  });
  test('Get dragon name', () => {
    expect(getDragons()[0].name).toBe('Dragon 1');
  });
  test('Get dragon type', () => {
    expect(getDragons()[0].type).toBe('Capsule');
  });
  test('Get dragon description', () => {
    expect(getDragons()[0].description).toBe(
      'The Dragon 1 Dragon is a reusable spacecraft developed by SpaceX, an American private space transportation company based in Hawthorne, California. Dragon is launched into space by the SpaceX Falcon 9 two-stage-to-orbit launch vehicle. The Dragon spacecraft was originally designed for human travel, but so far has only been used to deliver cargo to the International Space Station (ISS).',
    );
  });
});
