const commands = [];

function cmd(info, func) {
    // Default values for info object properties
    info.function = func;
    info.dontAddCommandList = info.dontAddCommandList || false;
    info.desc = info.desc || '';
    info.fromMe = info.fromMe || false;
    info.category = info.category || 'misc';
    info.filename = info.filename || 'Not Provided';

    // Push the modified info object to the commands array
    commands.push(info);
    
    return info;
}

module.exports = {
    cmd,
    AddCommand: cmd,
    Function: cmd,
    Module: cmd,
    commands
};
