export function undoRedo(object) {
  let undoStack = [];
  let redoStack = [];

  function saveForUndo() {
    undoStack.push(structuredClone(object));
  }

  function saveForRedo() {
    redoStack.push(structuredClone(object));
  }

  function restore(snapshot) {
    Object.keys(object).forEach(key => delete object[key]);
    Object.assign(object, snapshot);
  }

  function clearRedoStack() {
    redoStack = [];
  }

  return {
    set: function (key, value) {
      clearRedoStack();
      saveForUndo();
      object[key] = value;
    },

    get: function (key) {
      return object[key];
    },

    del: function (key) {
      clearRedoStack();
      saveForUndo();
      delete object[key];
    },

    undo: function () {
      if (!undoStack.length) {
        throw new Error('There is no operation to undo');
      }

      saveForRedo();
      restore(undoStack.pop());
    },

    redo: function () {
      if (!redoStack.length) {
        throw new Error('There is no operation to redo');
      }

      saveForUndo();
      restore(redoStack.pop());
    }
  };
}
