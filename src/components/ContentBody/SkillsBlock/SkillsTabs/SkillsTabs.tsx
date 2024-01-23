import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import { useLangStore } from 'stores'
import { getSkillsTabs } from 'utils'
import { colorScheme } from 'shared'
import { Card } from './Card'
import { Methods } from './Methods'
import { Skills } from './Skills'
import { Management } from './Management'
import { Tools } from './Tools'

interface IProps {
	onChangeInView(value: boolean): void
}

const TabsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 48px;
  width: 90%;

  > div .chakra-tabs__tablist {
    justify-content: center;
    gap: 10px;
    border-bottom: none;
    
    @media (max-width: 800px) {
      flex-direction: column;
    }

    > button {
      border-radius: 18px;
      border: 1px solid ${colorScheme.grayFamily.gray_2};
      font-weight: 400;

      @media (max-width: 850px) {
        width: 80%;
        margin: 0 auto;
      }
    }

    > button:focus {
      outline: none;
    }
  }

  @media (max-width: 850px) {
    width: 100%;
  }
`

const getTabInlineStyle = (isActive: boolean) => ({
	backgroundColor: isActive ? colorScheme.palette.black : '',
	borderColor: isActive ? colorScheme.palette.black : '',
	color: isActive ? colorScheme.palette.white : '',
})
const tabPanelInlineStyle = {
	paddingTop: '32px',
	paddingBottom: '118px',
}

export const SkillsTabs: React.FC<IProps> = ({ onChangeInView }) => {
	const [tabIndex, setTabIndex] = useState<number>(0)
	const { ref, inView } = useInView()
	const currLang = useLangStore((state) => state.langTheme)

	const tabs = getSkillsTabs(currLang)

	const handleTabChange = (index: number) => {
		setTabIndex(index)
	}

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		onChangeInView(inView)
	}, [inView])

	return (
		<TabsWrapper>
			<Tabs onChange={handleTabChange} width={'100%'}>
				<TabList ref={ref}>
					{tabs.map((tab, index) => (
						<Tab key={tab} style={getTabInlineStyle(index === tabIndex)}>
							{tab}
						</Tab>
					))}
				</TabList>
				<TabPanels>
					<TabPanel {...tabPanelInlineStyle}>
						<Card>
							<Methods />
						</Card>
					</TabPanel>
					<TabPanel {...tabPanelInlineStyle}>
						<Card>
							<Skills />
						</Card>
					</TabPanel>
					<TabPanel {...tabPanelInlineStyle}>
						<Card>
							<Management />
						</Card>
					</TabPanel>
					<TabPanel {...tabPanelInlineStyle}>
						<Card>
							<Tools />
						</Card>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</TabsWrapper>
	)
}
