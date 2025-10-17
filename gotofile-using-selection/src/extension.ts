import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	const gotofilecopied = vscode.commands.registerCommand('gotofile-using-selection.gotofilecopied', () => {
		vscode.commands.executeCommand("workbench.action.quickOpen");
		vscode.commands.executeCommand("editor.action.clipboardPasteAction");
	});
	context.subscriptions.push(gotofilecopied);

	const gotofilecursor = vscode.commands.registerCommand('gotofile-using-selection.gotofilecursor', () => {
		const editor = vscode.window.activeTextEditor;
		if(!editor){
			return;
		}
		const doc = editor.document;
		const pos = editor.selection.active;
		const wordRange = doc.getWordRangeAtPosition(pos);
		if(!wordRange){
			return;
		}
		const word = doc.getText(wordRange);

		vscode.commands.executeCommand("workbench.action.quickOpen",word);
	});
	context.subscriptions.push(gotofilecursor);
}

export function deactivate() {}
