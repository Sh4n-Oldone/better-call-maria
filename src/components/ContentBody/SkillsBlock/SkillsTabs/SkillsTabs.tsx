import React, { useState } from 'react'
import styled from 'styled-components'
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import { useLangStore } from 'stores'
import { getSkillsTabs } from 'utils'
import { colorScheme } from 'shared'

const TabsWrapper = styled.div`
  margin-top: 48px;

  > div .chakra-tabs__tablist {
    gap: 10px;
    border-bottom: none;

    > button {
      border-radius: 18px;
      border: 1px solid ${colorScheme.grayFamily.gray_2};
      font-weight: 400;
    }

    > button:focus {
      outline: none;
    }
  }
`

// TODO: content switcher by name

export const SkillsTabs: React.FC = () => {
	const [tabIndex, setTabIndex] = useState(0)
	const currLang = useLangStore((state) => state.langTheme)

	const tabs = getSkillsTabs(currLang)

	const handleTabChange = (index: number) => {
		setTabIndex(index)
	}

	return (
		<TabsWrapper>
			<Tabs onChange={handleTabChange}>
				<TabList>
					{tabs.map((tab, index) => (
						<Tab
							key={tab}
							style={{
								backgroundColor:
									index === tabIndex ? colorScheme.palette.black : '',
								borderColor:
									index === tabIndex ? colorScheme.palette.black : '',
								color: index === tabIndex ? colorScheme.palette.white : '',
							}}
						>
							{tab}
						</Tab>
					))}
				</TabList>
				<TabPanels>
					<TabPanel>
						<p>{`${tabs[0]} content`}</p>
					</TabPanel>
					<TabPanel>
						<p>{`${tabs[1]} content`}</p>
					</TabPanel>
					<TabPanel>
						<p>{`${tabs[2]} content`}</p>
					</TabPanel>
					<TabPanel>
						<p>{`${tabs[3]} content`}</p>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</TabsWrapper>
	)
}
