import React from 'react';

const Box = ({ color, hex }) => {
  return (
    <section
      className="box"
      style={{
        backgroundColor: color,
        color: color === '' ? 'black' : 'white',
      }}
    >
      <p
        style={{
          mixBlendMode: hex === '#808080' ? 'normal' : 'difference',
        }}
      >
        {color ? color : 'No Color Designated'}
      </p>
      <p
        style={{
          mixBlendMode: hex === '#808080' ? 'normal' : 'difference',
        }}
      >
        {hex ? hex : null}
      </p>
    </section>
  );
};

Box.defaultProps = {
  color: 'No color selected',
};

export default Box;
