const getMissions = () => {
  const missions = [
    {
      id: 0,
      name: 'Thaicom',
      description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited',
      reserved: false,
    },
    {
      id: 1,
      name: 'Telstar',
      description: 'Telstar 19V (Telstar 19 Vantage) is a communication satellite in the Telstar series of the Canadian satellite communications company Telesat. ',
      reserved: true,
    },
    {
      id: 2,
      name: 'Iridium NEXT',
      description: 'In 2017, Iridium began launching Iridium NEXT, a second-generation worldwide network of telecommunications satellites, consisting of 66 active satellites, with another nine in-orbit spares and six on-ground spares.',
      reserved: false,
    },

  ];
  return missions;
};

export default getMissions;
