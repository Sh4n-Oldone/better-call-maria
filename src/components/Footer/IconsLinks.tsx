import React from 'react'
import styled from 'styled-components'
import { AdditionalLinksKeys } from './utils'

const IconsContainer = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    gap: 8px;
  }
`
const IconLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
  border-radius: 6px;
  border: 1px solid #705FFF;
  margin-top: -8px;
`

export const IconsLinks: React.FC<Record<AdditionalLinksKeys, string>> = ({
	linkedIn,
	x,
	telegram,
	instagram,
}) => (
	<IconsContainer>
		<IconLink href={linkedIn} target='_blank' rel='noreferrer'>
			<img
				src='/icon_linkedIn.png'
				alt='linkedIn icon'
				width={16}
				height={16}
			/>
		</IconLink>
		<IconLink href={x} target='_blank' rel='noreferrer'>
			<img src='/icon_x.png' alt='x icon' width={16} height={16} />
		</IconLink>
		<IconLink href={telegram} target='_blank' rel='noreferrer'>
			<img
				src='/icon_telegram.png'
				alt='telegram icon'
				width={16}
				height={16}
			/>
		</IconLink>
		<IconLink href={instagram} target='_blank' rel='noreferrer'>
			<img
				src='/icon_instagram.png'
				alt='instagram icon'
				width={16}
				height={16}
			/>
		</IconLink>
	</IconsContainer>
)
