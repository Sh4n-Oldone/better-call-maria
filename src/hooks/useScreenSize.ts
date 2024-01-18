import { useState, useEffect} from 'react'

export const useScreenSize = () => {
  const [width, setWidth] = useState(window.innerWidth ?? 0)
	const [scrollbarSize, setScrollbarSize] = useState(0)

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		setScrollbarSize(
			window.innerWidth - document.documentElement.clientWidth,
		)
	}, [document.documentElement.clientWidth])

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth ?? 2)

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [window.innerWidth])

  return { width, scrollbarSize }
}
