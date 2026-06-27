"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefineLevel = DefineLevel;
function DefineLevel(score) {
    if (score >= 1000)
        return "Code Legend";
    if (score >= 800)
        return "Mastermind";
    if (score >= 600)
        return "Architect";
    if (score >= 400)
        return "Engineer";
    if (score >= 200)
        return "Developer";
    return "Coder";
}
