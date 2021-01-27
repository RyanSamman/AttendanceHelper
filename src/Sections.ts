
interface Section {
	[date: string]: string
}

interface Sections {
	[sectionName: string]: Section
}

export type { Section, Sections }