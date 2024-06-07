import React from 'react';
import renderer from 'react-test-renderer';
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from '@testing-library/react';
import '@testing-library/jest-dom';

import CopyButton from '../index';

jest.useFakeTimers();

describe('CopyButton component', () => {
  const WriteTextResolved = Promise.resolve(true);
  const mockClipboard = {
    writeText: jest.fn().mockReturnValue(WriteTextResolved),
  };

  beforeAll(() => {
    global.navigator.clipboard = mockClipboard;
    jest.spyOn(global, 'setTimeout');
  });

  beforeEach(() => {
    global.navigator.clipboard.writeText.mockClear();
    global.setTimeout.mockClear();
  });

  afterAll(() => {
    delete global.navigator.clipBoard;
    global.setTimeout.mockRestore();
  });

  test('matches the snapshot', () => {
    const tree = renderer.create(
      <CopyButton textToCopy="SecretCode" />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('sends text to clipboard API when clicked', async () => {
    const textToCopy = '(288) 555-0153';

    render(<CopyButton textToCopy={textToCopy} />);

    const $button = screen.getByRole('button');
    const { queryByText: queryButtonText } = within($button);

    expect(queryButtonText('⋯')).not.toBeInTheDocument();
    expect(mockClipboard.writeText).toHaveBeenCalledTimes(0);

    fireEvent.click($button);

    expect(mockClipboard.writeText).toHaveBeenCalledTimes(1);
    expect(mockClipboard.writeText).toHaveBeenCalledWith(textToCopy);
    expect(queryButtonText('⋯')).toBeInTheDocument();

    await act(() => WriteTextResolved);

    expect(queryButtonText('✓')).toBeInTheDocument();

    await act(() => jest.runAllTimers());

    expect(global.setTimeout).toHaveBeenCalledTimes(1);
    expect(queryButtonText('⋯')).not.toBeInTheDocument();
    expect(queryButtonText('✓')).not.toBeInTheDocument();
    expect(queryButtonText('!')).not.toBeInTheDocument();
  });

  describe('clipboard API errors', () => {
    beforeAll(() => {
      jest.spyOn(global.console, 'error');
      global.console.error.mockImplementation(() => {});
    });

    beforeEach(() => {
      global.console.error.mockClear();
    });

    afterAll(() => {
      global.console.error.mockRestore();
    });

    test('logs error to console', async () => {
      const textToCopy = 'EncryptionKey';
      const ClipboardError = new Error('Browser took a poop');
      const WriteTextRejected = Promise.reject(ClipboardError);
      mockClipboard.writeText.mockReturnValueOnce(WriteTextRejected);

      render(<CopyButton textToCopy={textToCopy} />);

      const $button = screen.getByRole('button');
      const { queryByText: queryButtonText } = within($button);

      expect(mockClipboard.writeText).toHaveBeenCalledTimes(0);
      expect(global.console.error).toHaveBeenCalledTimes(0);
      expect(queryButtonText('⋯')).not.toBeInTheDocument();

      fireEvent.click($button);

      expect(queryButtonText('⋯')).toBeInTheDocument();

      try {
        await act(() => WriteTextRejected);
      } catch (err) {
        expect(mockClipboard.writeText).toHaveBeenCalledTimes(1);
        expect(global.console.error).toHaveBeenCalledTimes(1);
        expect(global.console.error).toHaveBeenCalledWith(ClipboardError);
        expect(global.setTimeout).toHaveBeenCalledTimes(1);

        await waitFor(() => expect(queryButtonText('!')).toBeInTheDocument());

        await act(() => jest.runAllTimers());

        expect(queryButtonText('⋯')).not.toBeInTheDocument();
        expect(queryButtonText('✓')).not.toBeInTheDocument();
        expect(queryButtonText('!')).not.toBeInTheDocument();
      }
    });
  });
});
