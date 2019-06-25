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
  border: '1px solid #aaa'
};

const highlightedCellStyles = {
  textAlign: 'center',
  padding: 16,
  border: '1px solid #aaa',
  backgroundColor: '#60ebbf',
  fontWeight: 'bolder'
};

const TestingQuotient = ({ deck }) => {
  React.useEffect(() => {
    deck.update(updaters.setSteps(deck.index, 1));
  }, []);

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
          <td style={cellStyles}>A</td>
          <td style={cellStyles}>B</td>
        </tr>
        <tr>
          <td style={labelStyles}>😐No Feeling</td>
          <td style={cellStyles}>C</td>
          <td
            style={
              deck.step === 1 ? highlightedCellStyles : cellStyles
            }
          >
            D
          </td>
        </tr>
        <tr>
          <td style={labelStyles}>🙅Hate Test</td>
          <td style={cellStyles}>E</td>
          <td
            style={
              deck.step === 1 ? highlightedCellStyles : cellStyles
            }
          >
            F
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default withDeck(TestingQuotient);
