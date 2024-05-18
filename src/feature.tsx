import React from 'react'

import { FeatureProps } from './types'
import { useFeatureToggle } from './feature-toggle-context'

const Feature: React.FC<FeatureProps> = ({ name, children }) => {
	const { isFeatureEnabled } = useFeatureToggle()

	if (!isFeatureEnabled(name)) {
		return null
	}

	return <>{children}</>
}

export default Feature
