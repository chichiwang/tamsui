import React, { useContext } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import ManifestContext from '../ManifestContext';

const stringifyId = 'manifest-string';

function StringifiedContextValue() {
  const manifest = useContext(ManifestContext);

  return (
    <div data-testid={stringifyId}>
      { JSON.stringify(manifest) }
    </div>
  );
}

const mockedManifestValue = {
  'app.js': 'https://my.website/scripts/app.hasvalue.js',
};

describe('ManifestContext', () => {
  test('default value is an empty object', () => {
    render(<StringifiedContextValue />);

    expect(screen.getByTestId(stringifyId)).toHaveTextContent(JSON.stringify({}));
  });

  test('value is passed through the provider', () => {
    render(
      <ManifestContext.Provider value={mockedManifestValue}>
        <StringifiedContextValue />
      </ManifestContext.Provider>,
    );

    expect(screen.getByTestId(stringifyId)).toHaveTextContent(JSON.stringify(mockedManifestValue));
  });
});
