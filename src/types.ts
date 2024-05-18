export interface FeatureFlagProvider {
	isFeatureEnabled: (featureName: string) => boolean
}

export interface FeatureFlags {
	[featureName: string]: boolean
}

export interface FeatureToggleContextProps {
	flags: FeatureFlags
	children: React.ReactNode
}

export interface FeatureProps {
	name: string
	children: React.ReactNode
}
