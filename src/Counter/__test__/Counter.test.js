import React from 'react';
import Counter from '../Counter';

import { fireEvent, getByTestId, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('header renders with correct text', () => {
	const component = render(<Counter />);

	const headerEl = component.getByTestId('header');

	expect(headerEl.textContent).toBe('My Counter');
});

test('Counter initially start with text of 0', () => {
	const component = render(<Counter />);
	const counterEl = component.getByTestId('counter');

	expect(counterEl.textContent).toBe('0');
});

test('input contains inital value of 0', () => {
	const component = render(<Counter />);

	const inputEl = component.getByTestId('input');

	expect(inputEl.value).toBe('1');
});

test('add button render with + ', () => {
	const component = render(<Counter />);
	const addBtn = component.getByTestId('addBtn');
	expect(addBtn.textContent).toBe('+');
});
test('subtract button renders with -', () => {
	const component = render(<Counter />);
	const subtractBtn = component.getByTestId('subtractBtn');
	expect(subtractBtn.textContent).toBe('-');
});

test('change value of input works correctly', () => {
	const { getByTestId } = render(<Counter />);
	const inputEl = getByTestId('input');

	expect(inputEl.value).toBe('1');

	fireEvent.change(inputEl, {
		target: {
			value: '5',
		},
	});
	expect(inputEl.value).toBe('5');
});

test('click on plus btn adds 1 to counter', () => {
	const { getByTestId } = render(<Counter />);
	const btnEl = getByTestId('addBtn');
	const counterEl = getByTestId('counter');
	fireEvent.click(btnEl);

	expect(counterEl.textContent).toBe('1');
});
test('click on minus btn subtracts 1 to counter', () => {
	const { getByTestId } = render(<Counter />);
	const btnEl = getByTestId('subtractBtn');
	const counterEl = getByTestId('counter');
	fireEvent.click(btnEl);

	expect(counterEl.textContent).toBe('-1');
});

test('changing input value changes number needed to add', () => {
	const { getByTestId } = render(<Counter />);
	const addBtnEl = getByTestId('addBtn');
	const counter = getByTestId('counter');
	const input = getByTestId('input');
	fireEvent.change(input, {
		target: {
			value: '4',
		},
	});
	fireEvent.click(addBtnEl);

	expect(counter.textContent).toBe('4');
});

test('changing input value changes number needed to subtrat', () => {
	const { getByTestId } = render(<Counter />);
	const subtractBtnEl = getByTestId('subtractBtn');
	const counter = getByTestId('counter');
	const input = getByTestId('input');

	fireEvent.change(input, {
		target: {
			value: '2',
		},
	});
	fireEvent.click(subtractBtnEl);

	expect(counter.textContent).toBe('-2');
});

test('adding then subtracting returns correct number', () => {
	const { getByTestId } = render(<Counter />);
	const subtractBtnEl = getByTestId('subtractBtn');
	const addBtnEl = getByTestId('addBtn');
	const counter = getByTestId('counter');
	const input = getByTestId('input');

	fireEvent.change(input, {
		target: {
			value: '10',
		},
	});
	fireEvent.click(addBtnEl);
	fireEvent.click(addBtnEl);
	fireEvent.click(addBtnEl);
	fireEvent.click(subtractBtnEl);
	expect(counter.textContent).toBe('20');

	fireEvent.click(subtractBtnEl);
	fireEvent.click(subtractBtnEl);
	expect(counter.textContent).toBe('0');
});
