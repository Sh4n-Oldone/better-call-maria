import React from 'react'
import { useParams } from 'react-router-dom'
import { CaseRoutes } from 'constants'
import { DHRP, Athena, Admixer, Design } from './Cases'

export const Case: React.FC = () => {
	const { id } = useParams<{ id: CaseRoutes }>()

	switch (id) {
		case CaseRoutes.DHRP:
			return <DHRP />
		case CaseRoutes.ADMIXER:
			return <Admixer />
		case CaseRoutes.ATHENA:
			return <Athena />
		case CaseRoutes.DESIGN:
			return <Design />
		default:
			return null
	}
}
