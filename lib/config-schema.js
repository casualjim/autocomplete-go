'use babel'

export default {
  scopeBlacklist: {
    title: 'Scope Blacklist',
    description: 'Suggestions will not be shown when the cursor is inside the following comma-delimited scope(s).',
    type: 'string',
    default: '.source.go .comment',
    order: 10
  },

  suppressBuiltinAutocompleteProvider: {
    title: 'Suppress The Provider Built-In To autocomplete-plus',
    description: 'Suppress the provider built-in to the autocomplete-plus package when editing .go files.',
    type: 'boolean',
    default: true,
    order: 20
  },

  suppressActivationForCharacters: {
    title: 'Suppress Activation For Characters',
    description: 'Suggestions will not be provided when you type one of these characters.',
    type: 'array',
    default: [
      'comma', 'newline', 'space', 'tab', '/', '\\', '(', ')', '"', '\'', ':',
      ';', '<', '>', '~', '!', '@', '#', '$', '%', '^', '&', '*', '|', '+',
      '=', '[', ']', '{', '}', '`', '~', '?', '-'
    ],
    items: {
      type: 'string'
    },
    order: 30
  },

  completionMode: {
    title: 'Complete mode',
    description: 'Autocompletion for methods includes argument names and their types or stops at the opening bracket',
    type: 'string',
    default: 'Arg name',
    enum: ['Arg name and type', 'Arg name', 'None'],
    order: 40
  }
}
