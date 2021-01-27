import * as React from 'react'

/**
 * This hook updates LocalStorage every time the setter is run. 
 * To gurantee the freshest data, use the value supplied by the callback.
 * 
 * @param name The name of the LocalStorage key
 * @returns A Stateful value, a wrapper function around a react hook to update that value, and a function to retrieve the current value from localstorage.
 * 
 */
export default function useStoreState<T extends object>(name: string, initialState: T): [T, (callback: (currentData: T) => T) => void, () => T] {
	const initializeCacheIfEmpty = () => {
		if (!localStorage.getItem(name)) {
			localStorage.setItem(name, JSON.stringify(initialState))
		}
	}

	function retrieveCacheData(): T {
		initializeCacheIfEmpty()
		return JSON.parse(localStorage.getItem(name)!)
	}

	const [data, setData] = React.useState<T>(() => retrieveCacheData())

	const setStoreData = (callback: (currentData: T) => T) => {
		initializeCacheIfEmpty()
		const currentData = retrieveCacheData()
		const newData = callback(currentData)

		localStorage.setItem(name, JSON.stringify(newData))
		setData(newData)
	}

	return [data, setStoreData, retrieveCacheData]
}