import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import {IconButton} from './iconButton';

const MockIcon = (props: any) => (
  <svg data-testid="mock-icon" {...props}>
    <path d="M0 0h24v24H0z" />
  </svg>
);

describe('IconButton component', () => {
  test('renders button with icon', () => {
    render(<IconButton icon={MockIcon} testId="test-button" />);

    const button = screen.getByTestId('test-button');
    const icon = screen.getByTestId('mock-icon');

    expect(button).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });

  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<IconButton icon={MockIcon} onClick={handleClick} testId="clickable-button" />);

    const button = screen.getByTestId('clickable-button');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('does not call onClick when disabled', () => {
    const handleClick = jest.fn();
    render(<IconButton icon={MockIcon} onClick={handleClick} disabled testId="disabled-button" />);

    const button = screen.getByTestId('disabled-button');
    fireEvent.click(button);

    expect(handleClick).not.toHaveBeenCalled();
    expect(button).toBeDisabled();
  });

  test('applies default testId when not provided', () => {
    render(<IconButton icon={MockIcon} />);

    const button = screen.getByTestId('icon-button');
    expect(button).toBeInTheDocument();
  });

  test('passes icon props correctly', () => {
    render(
      <IconButton
        icon={MockIcon}
        iconColor="#FF0000"
        iconRotation={90}
        iconWidth={32}
        iconHeight={32}
        testId="styled-icon-button"
      />,
    );

    const icon = screen.getByTestId('mock-icon');
    expect(icon).toHaveAttribute('fill', '#FF0000');
    expect(icon).toHaveAttribute('width', '32');
    expect(icon).toHaveAttribute('height', '32');
  });

  test('applies default icon dimensions when not provided', () => {
    render(<IconButton icon={MockIcon} testId="default-size-button" />);

    const icon = screen.getByTestId('mock-icon');
    expect(icon).toHaveAttribute('width', '24');
    expect(icon).toHaveAttribute('height', '24');
  });

  test('applies default rotation value of 0', () => {
    render(<IconButton icon={MockIcon} testId="no-rotation-button" />);

    const icon = screen.getByTestId('mock-icon');
    expect(icon).toBeInTheDocument();
  });

  test('forwards additional button props', () => {
    render(<IconButton icon={MockIcon} aria-label="Custom label" testId="aria-button" />);

    const button = screen.getByTestId('aria-button');
    expect(button).toHaveAttribute('aria-label', 'Custom label');
  });

  test('forwards style prop to button', () => {
    render(
      <IconButton
        icon={MockIcon}
        style={{backgroundColor: '#0000FF', padding: '16px'}}
        testId="styled-button"
      />,
    );

    const button = screen.getByTestId('styled-button');
    expect(button).toHaveStyle('background-color: #0000FF');
    expect(button).toHaveStyle('padding: 16px');
  });

  test('forwards className prop to button', () => {
    render(<IconButton icon={MockIcon} className="custom-class" testId="class-button" />);

    const button = screen.getByTestId('class-button');
    expect(button).toHaveClass('custom-class');
  });
});
