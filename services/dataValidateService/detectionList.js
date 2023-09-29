const operators = ['req.', 'res.', '.send', '.json', 'return'];
const mongooseCommands = ['select', 'show', 'aggregate', 'delete', 'distinct', 'find', 'insert', 'remove', 'delete', 'drop', 'update', 'save', 'create', 'get'];
export const detectionList = [...operators, ...mongooseCommands];