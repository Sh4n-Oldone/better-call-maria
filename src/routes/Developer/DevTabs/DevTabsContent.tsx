import React from 'react'
import { Technologies } from './Technologies'
import { Me } from './Me'
import { Contacts } from './Contacts'

interface IProps {
	currentTabIndex: number
}

export const DevTabsContent: React.FC<IProps> = ({ currentTabIndex }) => {
	switch (currentTabIndex) {
		case 0:
			return <Technologies />
		case 1:
			return <Me />
		case 2:
			return <Contacts />
		default:
			return null
	}
}
