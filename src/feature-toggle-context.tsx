import React, { createContext, useContext } from 'react'
import { FeatureFlagProvider, FeatureToggleContextProps } from './types'

const FeatureToggleContext = createContext<FeatureFlagProvider | undefined>(
	undefined,
)

const createFeatureFlagProvider = (flags: {
	[featureName: string]: boolean
}): FeatureFlagProvider => {
	return {
		isFeatureEnabled: (featureName: string) => {
			return flags[featureName] || false
		},
	}
}

export const FeatureToggleProvider: React.FC<FeatureToggleContextProps> = ({
	flags,
	children,
}) => {
	const provider = createFeatureFlagProvider(flags)

	return (
		<FeatureToggleContext.Provider value={provider}>
			{children}
		</FeatureToggleContext.Provider>
	)
}

export const useFeatureToggle = (): FeatureFlagProvider => {
	const context = useContext(FeatureToggleContext)
	if (!context) {
		throw new Error(
			"🚫 Error: Attempted to use 'useFeatureToggle' outside of a 'FeatureToggleProvider'. Please ensure 'useFeatureToggle' is used within the scope of a 'FeatureToggleProvider'.",
		)
	}
	return context
}
