import React, { useState } from 'react'
import styled from 'styled-components'
import { useLangStore } from 'stores'
import { darkLilac } from 'shared'
import { getDevTabsText } from 'src/utils/getDevText'
import { DevTabsContent } from './DevTabsContent'
import { IconsPicker } from './IconsPicker'

const TabsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: calc(100dvh - 60px);
  height: 100%;
`
const CustomTabs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 0.1;
  gap: 20px;
  height: 100%;
  padding: 0 20px;
`
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 0.9;
  min-height: calc(100dvh - 60px);
  height: 100%;
  padding: 0 20px;
  border-width: 0 0 0 2px;
  border-style: solid;
  border-image: linear-gradient(to top, rgba(0, 0, 0, 0), ${darkLilac}, rgba(0, 0, 0, 0)) 1 100%;
`

export const DevTabs: React.FC = () => {
	const [currTab, setCurrTab] = useState(0)

	const currLang = useLangStore((state) => state.langTheme)

	const tabs = getDevTabsText(currLang)

	return (
		<TabsWrapper>
			<CustomTabs>
				{tabs.map((tab, index) => (
					<IconsPicker
						key={tab}
						isActive={currTab === index}
						index={index}
						onClick={setCurrTab}
					/>
				))}
			</CustomTabs>
			<ContentWrapper>
				<DevTabsContent currentTabIndex={currTab} />
			</ContentWrapper>
		</TabsWrapper>
	)
}
