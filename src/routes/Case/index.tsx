import React from 'react'
import { useParams } from 'react-router-dom'
import { CaseRoutes } from 'constants'
import { ADM, Athena, DHRP, Design } from './Cases'

const Case: React.FC = () => {
	const { id } = useParams<{ id: CaseRoutes }>()

	switch (id) {
		case CaseRoutes.DHRP:
			return <DHRP />
		case CaseRoutes.ADMIXER:
			return <ADM />
		case CaseRoutes.ATHENA:
			return <Athena />
		case CaseRoutes.DESIGN:
			return <Design />
		default:
			return null
	}
}

export default Case
