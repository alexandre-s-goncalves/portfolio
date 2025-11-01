import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import {Button} from './button';

const MockIcon = () => (
  <svg data-testid="mock-icon">
    <path d="M0 0h24v24H0z" />
  </svg>
);

describe('Button component', () => {
  test('renders button with text', () => {
    render(<Button>Click me</Button>);

    const button = screen.getByRole('button', {name: /click me/i});
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click me');
  });

  test('renders with lightgray background', () => {
    const {container} = render(<Button>Default Button</Button>);

    const button = container.querySelector('button');
    expect(button).toHaveStyle('background-color: #d3d3d3');
  });

  test('renders with icon on right by default', () => {
    render(<Button icon={MockIcon}>With Icon</Button>);

    const button = screen.getByRole('button');
    const icon = screen.getByTestId('mock-icon');

    expect(icon).toBeInTheDocument();
    expect(button.lastChild).toContainElement(icon);
  });

  test('renders with icon on left', () => {
    render(
      <Button icon={MockIcon} iconPosition="left">
        With Icon Left
      </Button>,
    );

    const button = screen.getByRole('button');
    const icon = screen.getByTestId('mock-icon');

    expect(icon).toBeInTheDocument();
    expect(button.firstChild).toContainElement(icon);
  });

  test('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('does not call onClick when disabled', () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} disabled>
        Disabled
      </Button>,
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(handleClick).not.toHaveBeenCalled();
  });

  test('renders as disabled', () => {
    render(<Button disabled>Disabled Button</Button>);

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  test('renders with submit type', () => {
    render(<Button type="submit">Submit</Button>);

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'submit');
  });

  test('renders with button type by default', () => {
    render(<Button>Default Type</Button>);

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'button');
  });

  test('renders with custom className', () => {
    render(<Button className="custom-class">Custom Class</Button>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
  });

  test('renders with custom aria-label', () => {
    render(<Button ariaLabel="Custom label">Button</Button>);

    const button = screen.getByRole('button', {name: 'Custom label'});
    expect(button).toBeInTheDocument();
  });

  test('uses button text as aria-label when not provided', () => {
    render(<Button>Default Label</Button>);

    const button = screen.getByRole('button', {name: 'Default Label'});
    expect(button).toBeInTheDocument();
  });

  test('renders without icon', () => {
    render(<Button>No Icon</Button>);

    const icon = screen.queryByTestId('mock-icon');
    expect(icon).not.toBeInTheDocument();
  });

  test('accepts textProps for text customization', () => {
    const {container} = render(<Button textProps={{size: 16, weight: 'bold'}}>Custom Text</Button>);

    const text = container.querySelector('p');
    expect(text).toBeInTheDocument();
  });

  test('renders with default white text color', () => {
    const {container} = render(<Button>Default Text</Button>);

    const text = container.querySelector('p');
    expect(text).toHaveStyle('color: #ffffff');
  });

  test('renders with custom text color', () => {
    const {container} = render(<Button textProps={{color: '#0a0a0a'}}>Custom Text Color</Button>);

    const text = container.querySelector('p');
    expect(text).toHaveStyle('color: #0a0a0a');
  });

  test('has correct height', () => {
    const {container} = render(<Button>Button</Button>);

    const button = container.querySelector('button');
    expect(button).toHaveStyle('height: 40px');
  });

  test('has cursor pointer when not disabled', () => {
    const {container} = render(<Button>Button</Button>);

    const button = container.querySelector('button');
    expect(button).toHaveStyle('cursor: pointer');
  });

  test('has cursor default when disabled', () => {
    const {container} = render(<Button disabled>Disabled</Button>);

    const button = container.querySelector('button');
    expect(button).toHaveStyle('cursor: default');
  });

  test('renders both icon and text', () => {
    render(<Button icon={MockIcon}>Button with Icon</Button>);

    expect(screen.getByText('Button with Icon')).toBeInTheDocument();
    expect(screen.getByTestId('mock-icon')).toBeInTheDocument();
  });

  test('icon position right places icon after text', () => {
    const {container} = render(
      <Button icon={MockIcon} iconPosition="right">
        Text First
      </Button>,
    );

    const button = container.querySelector('button');
    const children = Array.from(button?.children || []);

    expect(children[0]).toContainHTML('Text First');
    expect(children[1]).toContainHTML('mock-icon');
  });

  test('icon position left places icon before text', () => {
    const {container} = render(
      <Button icon={MockIcon} iconPosition="left">
        Text Second
      </Button>,
    );

    const button = container.querySelector('button');
    const children = Array.from(button?.children || []);

    expect(children[0]).toContainHTML('mock-icon');
    expect(children[1]).toContainHTML('Text Second');
  });
});
