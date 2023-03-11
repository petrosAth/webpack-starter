const toggleBackground = (() => {
  let counter = 1;
  let color;

  const toggle = () => {
    if (counter % 2 == 0) {
      color = 'rgb(141, 214, 249)';
    } else {
      color = 'rgb(29, 120, 193)';
    }

    document.body.style.background = color;
    counter = counter + 1;
    console.log(counter);
  };

  return toggle;
})();

export default toggleBackground;
