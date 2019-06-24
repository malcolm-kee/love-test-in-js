// my-component.js
import { Button } from './button';
import { Card, CardTitle, CardContent, CardActions } from './card';

export default function MyComponent() {
  return (
    <Card>
      <CardTitle>Dialog</CardTitle>
      <CardContent>Proceed></CardContent>
      <CardActions>
        <Button color="primary">Confirm</Button>
        <Button>Cancel</Button>
      </CardActions>
    </Card>
  );
}

// in test file
jest.mock('./button', () => ({
  Button: () => 'buttonMock'
}));

jest.mock('./card', () => ({
  Card: () => 'cardMock',
  CardTitle: () => 'cardTitle',
  CardContent: () => 'cardContent',
  CardActions: () => 'cardActionsMock'
}));

import { Button } from './button';
import { Card, CardTitle, CardContent, CardActions } from './card';
import MyComponent from './my-component';

describe('<MyComponent />', () => {
  test('it renders correct component', () => {
    MyComponent();

    expect(Button).toHaveBeenCalledTimes(2);
    expect(Card).toHaveBeenCalledTimes(1);
    expect(CardTitle).toHaveBeenCalledTimes(1);
    expect(CardContent).toHaveBeenCalledTimes(1);
    expect(CardActions).toHaveBeenCalledTimes(1);
  });
});
