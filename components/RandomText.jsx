const RandomText = ({ options }) => {
  console.log(options);
  
  <span>{options[Math.floor(Math.random() * options.length)]}</span>;
};

export default RandomText;
