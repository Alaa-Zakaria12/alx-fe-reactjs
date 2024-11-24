import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';  // Make sure the path is correct
import '@testing-library/jest-dom'; // for the "toBeInTheDocument" matcher

import { render, screen } from '@testing-library/react';
import TodoList from '../components/TodoList'; // Adjust path as needed

describe('TodoList Component', () => {
  test('renders without crashing', () => {
    render(<TodoList />);
    expect(screen.getByText(/add todo/i)).toBeInTheDocument();
  });
});
describe('TodoList Component', () => {

  // Initial Render Test
  test('renders TodoList and displays initial todos', () => {
    render(<TodoList />);

    // Check if the initial todos are rendered
    expect(screen.getByText('Buy milk')).toBeInTheDocument();
    expect(screen.getByText('Walk the dog')).toBeInTheDocument();
  });

  // Test Adding Todos
  test('can add a new todo', () => {
    render(<TodoList />);

    // Simulate user input for adding a todo
    fireEvent.change(screen.getByPlaceholderText('Add a new todo'), {
      target: { value: 'New Todo' },
    });
    fireEvent.click(screen.getByText('Add Todo'));

    // Check if the new todo appears in the list
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  // Test Toggling Todos
  test('can toggle a todo completion', () => {
    render(<TodoList />);

    const todoItem = screen.getByText('Buy milk');
    fireEvent.click(todoItem);

    // Verify the todo is marked as completed
    expect(todoItem).toHaveStyle('text-decoration: line-through');

    // Toggle back
    fireEvent.click(todoItem);
    expect(todoItem).not.toHaveStyle('text-decoration: line-through');
  });

  // Test Deleting Todos
  test('can delete a todo', () => {
    render(<TodoList />);

    const todoItem = screen.getByText('Walk the dog');
    const deleteButton = screen.getByText('Delete');

    fireEvent.click(deleteButton);

    // Check that the deleted todo is no longer in the document
    expect(todoItem).not.toBeInTheDocument();
  });
});


