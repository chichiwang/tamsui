import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import ChecklistItem from '../index';

function ChildComponent() {
  return (
    <img alt="Todo Step 1" src="images/todo01.jpg" />
  );
}

describe('ChecklistItem component', () => {
  test('matches the no-children snapshot', () => {
    const tree = renderer.create(<ChecklistItem />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches the className snapshot', () => {
    const tree = renderer.create(<ChecklistItem className="center" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches the text-content snapshot', () => {
    const tree = renderer.create(
      <ChecklistItem>Todo: Finish writing ChecklistItem test suite</ChecklistItem>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches the child-component snapshot', () => {
    const tree = renderer.create(
      <ChecklistItem>
        <ChildComponent />
      </ChecklistItem>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  describe('checking an item', () => {
    test('clicking the item checks the input', () => {
      const labelContents = 'Buy eggs';
      render(
        <ChecklistItem>{labelContents}</ChecklistItem>,
      );

      const checklistItem = screen.getByLabelText(labelContents);

      expect(checklistItem).toBeInTheDocument();
      expect(checklistItem.checked).toEqual(false);

      fireEvent.click(checklistItem);

      expect(checklistItem.checked).toEqual(true);

      fireEvent.click(checklistItem);

      expect(checklistItem.checked).toEqual(false);
    });
  });
});
