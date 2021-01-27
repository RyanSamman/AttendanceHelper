import * as React from 'react'

import { Sections } from './../Sections'
import useStoreState from './../hooks/useStoreState'
import SideBar from './SideBar'
import Content from './Content'

// Chat Element to get data from
// Add Group
// Export data

const App = () => {
	const [selectedPage, setSelectedPage] = React.useState("General");
	const [sections, setSections] = useStoreState<Sections>("sections", {});

	return (
		<div style={{ width: "fit-content", minHeight: "80vh", display: "flex", marginLeft: "auto", marginRight: "auto", border: "solid var(--primary)", borderWidth: "1px 1px 1px 0px", borderRadius: "0.3rem" }}>
			<SideBar
				selectedPage={selectedPage}
				setSelectedPage={setSelectedPage}
				sections={sections}
			/>
			<Content
				selectedPage={selectedPage}
				setSelectedPage={setSelectedPage}
				sections={sections}
				setSections={setSections}
			/>
		</div>
	)
}

export default App;
