function getMessageNames(messages: string[]) {
	return messages
		// Get the first line of the message
		.map(m => m.split(/\n+/)[0])
		// If it contains a date (which will be in the form XX:XX), 
		// it is a compound message of the previous one.
		.map((name, index, array) => name.match(/^\d\d:\d\d/)
			? array[index - 1] // Guranteed not the first
			: name)
}

function generateGetMessagesCode(messagesId: string, popupId: string) {
	return `
	function getMessages(popupId, messagesId) {
		try{
		const popupElement = document.querySelector(popupId)
		if (!popupElement) {
			return {error: "Invalid PopupId"}
		}
		popupElement.click()
	
		const messagesElement = document.querySelector(messagesId)
		if (!messagesElement) {
			return {error: "Invalid MessagesId"}
		}
		const messages = [...messagesElement.children].map(m => m.innerText)
		return { messages }
		} catch (e) {
			return {error: e}
		}
	}
	getMessages("${popupId}", "${messagesId}");
	`
}

interface Messages {
	messages: string[]
}

interface Result extends Messages {
	error?: string
}

export default function getMessages(messagesId: string, popupId: string, callback: (messages: Result) => any) {
	chrome.tabs.executeScript({ code: generateGetMessagesCode(messagesId, popupId) }, (results) => {
		if (results[0]) {
			const result: Result = results[0];
			if (result.messages) {
				result.messages = getMessageNames(result.messages)
			}

			if (result.messages || result.error) {
				callback(result)
			} else {
				alert(`Unknown Result: ${result}`)
			}
		} else {
			console.log("Error!:")
			console.log(results)
		}
	})
}