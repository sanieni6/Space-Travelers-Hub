const getDragons = () => {
  const Dragons = [
    {
      id: 1,
      name: 'Dragon 1',
      type: 'Capsule',
      description:
        'The Dragon 1 Dragon is a reusable spacecraft developed by SpaceX, an American private space transportation company based in Hawthorne, California. Dragon is launched into space by the SpaceX Falcon 9 two-stage-to-orbit launch vehicle. The Dragon spacecraft was originally designed for human travel, but so far has only been used to deliver cargo to the International Space Station (ISS).',
      reserved: true,
    },
    {
      id: 2,
      name: 'Dragon 2',
      type: 'Capsule',
      description:
        'The Dragon 2 Dragon is a reusable spacecraft developed by SpaceX, an American private space transportation company based in Hawthorne, California. Dragon is launched into space by the SpaceX Falcon 9 two-stage-to-orbit launch vehicle. The Dragon spacecraft was originally designed for human travel, but so far has only been used to deliver cargo to the International Space Station (ISS).',
      reserved: false,
    },
    {
      id: 3,
      name: 'Dragon 3',
      type: 'Capsule',
      description:
        'The Dragon 3 Dragon is a reusable spacecraft developed by SpaceX, an American private space transportation company based in Hawthorne, California. Dragon is launched into space by the SpaceX Falcon 9 two-stage-to-orbit launch vehicle. The Dragon spacecraft was originally designed for human travel, but so far has only been used to deliver cargo to the International Space Station (ISS).',
      reserved: true,
    },
  ];
  return Dragons;
};

export default getDragons;
