declare module "*.svg" {
  const content: any;
  export default content;
}

interface Section {
	[date: string]: string[]
}

interface Sections {
	[sectionName: string]: Section
}

interface Settings {
	isOpen: boolean
	messagesIndex: undefined | number
	selectedSection?: string
	messagesId: string
	popupId: string
	download: boolean
	failPercent: number	
	developerMode: boolean
	developerMessagesId: string
}

type setStoreDataHandler<T> = (callback: (currentData: T) => T) => void
