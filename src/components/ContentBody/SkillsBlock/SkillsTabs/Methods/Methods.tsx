import React, { useState } from 'react'
import { CardContent } from '../CardContent'
import { LeftContent } from './LeftContent'
import { MethodsCardContent } from './MethodsCardContent'
import { MethodsTabs } from './types'

export const Methods: React.FC = () => {
	const [activeTab, setActiveTab] = useState<MethodsTabs>(
		MethodsTabs.RESEARCH,
	)

	const handleTabChange = (tab: MethodsTabs) => {
		setActiveTab(tab)
	}

	return (
		<CardContent
			leftContent={
				<LeftContent activeTab={activeTab} onTabChange={handleTabChange} />
			}
			cardContent={
				<MethodsCardContent
					activeTab={activeTab}
					onTabChange={handleTabChange}
				/>
			}
		/>
	)
}
