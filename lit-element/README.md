# LitElement Practice Exercise: `<user-search>`

## Goal

Build a reusable Lit web component that lets a user search a list of people and select one. Treat this as an exercise: implement the behavior yourself using the requirements and acceptance criteria below.

The finished component should be usable in HTML like this:

```html
<user-search></user-search>
```

It should present a search field and, when appropriate, a list of matching users.

## User data

Each user has:

- A unique ID
- A name
- An email address

Use sample users such as Ivan Isayenko, John Smith, and Maria Garcia while developing. The component must also accept a user list supplied by its consumer.

## Requirements

### Public API

The component exposes:

- `users`: the people available to search
- `placeholder`: configurable search field text
- `disabled`: whether searching and selection are disabled
- `selectedUser`: the selected person, or no selection

The list and selected user are JavaScript data and should be usable as component properties. The placeholder and disabled option should also work when configured in HTML.

### Search and results

- Filter users by name as the query changes.
- Search must ignore letter case.
- Show relevant results while the search interface is active.
- Show the full list when the query is empty and the menu is open.
- Show a clear empty state when there are no matches.
- Reset keyboard navigation when the query changes.

### Selection

- Allow a user to select a result.
- On selection, update `selectedUser`, display the selected person's name, and close the results.
- If the user edits the query after selecting someone, clear the selection.
- Notify consumers when selection changes by dispatching a `user-selected` custom event. Include the selected user as event detail, and make the event bubble and cross the shadow DOM boundary.

### Opening and closing

- Open the results when the search field receives focus.
- Close the results after a selection.
- Close the results when the user clicks outside the component.
- Close the results when the user presses Escape.
- When disabled, prevent searching and selecting.

### Keyboard interaction

When results are open:

- ArrowDown moves to the next result and wraps at the end.
- ArrowUp moves to the previous result and wraps at the beginning.
- Enter selects the active result.
- Escape closes the results.
- The active result is visibly distinguishable.

### Rendering and styles

- Render the field and result list with Lit templates.
- Render results from the current filtered user list.
- Include clear selected, active, and empty states.
- Keep styles scoped to the component.
- Ensure the layout remains usable on narrow screens.

### Changing inputs

- Support `users` being supplied after the element is created.
- Update the displayed results when the consumer replaces the users list.
- Keep results consistent with the current query when the users list changes.
- Remember that changing an array in place may not trigger Lit's reactive update; consider how the consumer can provide changed data.

### Accessibility

- Give the search field an accessible name.
- Connect the input and result list with appropriate ARIA attributes.
- Communicate whether the results are expanded.
- Communicate active and selected results to assistive technology.
- Support the full search and selection flow with a keyboard.

## Suggested tasks

1. Set up and register the `<user-search>` custom element.
2. Define its public API and the internal UI state it needs.
3. Render the search field and initial results.
4. Add case-insensitive filtering and the empty state.
5. Add selection and the `user-selected` event.
6. Implement menu opening, closing, and outside-click behavior.
7. Add keyboard navigation and active-result styling.
8. Add scoped responsive styles and accessibility attributes.
9. Try it with different input lists, a selected user, and the disabled option.

## Final API

The completed component should support:

- HTML configuration with `placeholder` and `disabled`.
- JavaScript property input for `users` and `selectedUser`.
- Reading the current `selectedUser` property.
- Listening for a `user-selected` event whose detail contains the chosen user.

## Acceptance criteria

- [ ] The custom element renders when used without optional properties.
- [ ] A consumer can provide a list of users as JavaScript data.
- [ ] The placeholder can be customized in HTML.
- [ ] The disabled setting works and blocks interaction.
- [ ] Typing filters names without regard to case.
- [ ] The results show the full list for an empty query when open.
- [ ] A no-results message appears when nothing matches.
- [ ] A result can be selected with either pointer or keyboard.
- [ ] Selection updates the `selectedUser` property and displayed name.
- [ ] Editing after selection clears the selected user.
- [ ] Selection dispatches a bubbling, composed `user-selected` event with the selected user in its detail.
- [ ] Arrow keys move the active result and wrap at either end.
- [ ] Enter selects the active result; Escape closes the results.
- [ ] Clicking outside closes the results.
- [ ] Replacing the users list updates the available results.
- [ ] The component exposes its expanded, active, and selected states accessibly.
- [ ] The component is usable without a mouse and remains readable on a narrow screen.

## Concepts to practice

- Lit elements, templates, and scoped styles
- Custom element definition and registration
- Reactive public properties and internal reactive state
- HTML attributes versus DOM properties
- Boolean attributes
- Passing arrays and objects as properties
- Conditional rendering and rendering lists
- Input, keyboard, focus, and pointer event handling
- Custom events and event details
- Updating in response to changed inputs
- Shadow DOM styling
- Accessibility attributes and keyboard support
