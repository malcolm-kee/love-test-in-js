import React from 'react';
import { withDeck, updaters } from 'mdx-deck';

const labelStyles = {
  textAlign: 'center',
  padding: 16,
  fontWeight: 'bolder'
};

const cellStyles = {
  textAlign: 'center',
  padding: 16,
  border: '1px solid #aaa',
  position: 'relative'
};

const circleStyles = {
  display: 'inline-block',
  borderRadius: '50%',
  fontSize: '0.8em',
  position: 'absolute',
  backgroundColor: 'hsl(12, 78%, 25%)',
  color: '#fff',
  fontWeight: 'normal',
  top: 8,
  right: 8,
  width: '1.5em',
  height: '1.5em'
};

const Circle = ({ children }) => (
  <div style={circleStyles}>{children}</div>
);

const TestingQuotient = ({ deck, multiStep }) => {
  React.useEffect(() => {
    if (multiStep) {
      deck.update(updaters.setSteps(deck.index, 1));
    }
  }, []);

  const isStep1 = deck.step === 1;

  return (
    <table>
      <thead>
        <tr>
          <th />
          <th style={labelStyles}>🚫Don't Write Test</th>
          <th style={labelStyles}>✅Write Test</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={labelStyles}>❤️Love Test</td>
          <td style={cellStyles}>
            {isStep1 && <Circle>2</Circle>} A
          </td>
          <td style={cellStyles}>
            {isStep1 && <Circle>4</Circle>} B
          </td>
        </tr>
        <tr>
          <td style={labelStyles}>😐No Feeling</td>
          <td style={cellStyles}>
            {isStep1 && <Circle>1</Circle>} C
          </td>
          <td style={cellStyles}>D</td>
        </tr>
        <tr>
          <td style={labelStyles}>🙅Hate Test</td>
          <td style={cellStyles}>E</td>
          <td style={cellStyles}>
            {isStep1 && <Circle>3</Circle>} F
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default withDeck(TestingQuotient);
