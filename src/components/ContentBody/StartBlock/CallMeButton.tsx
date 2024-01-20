import React from 'react'
import styled from 'styled-components'
import { useLangStore } from 'stores'
import { getStartText } from 'utils'
import { colorScheme } from 'shared'

const Button = styled.button`
  all: unset;
  z-index: 10;
  margin-top: 42px;
  padding: 6px 10px;
  width: 200px;
  height: 44px;
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  text-align: center;
  color: ${colorScheme.palette.white};
  border: 1px solid ${colorScheme.grayFamily.lightGray};
  border-radius: 16px;
  background:
    linear-gradient(180deg, ${colorScheme.gradients.blackToBlue.start} 0%, ${colorScheme.gradients.blackToBlue.end} 60%);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &:hover {
    border: 1px solid ${colorScheme.grayFamily.lightGray};
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: linear;
    animation-name: gradient;
    animation-duration: 1s;
  }

  &:focus {
    outline: 0;
  }

  @keyframes gradient {
    0% {
      background: 
        linear-gradient(90deg, #373737 0%, rgba(0, 0, 0, 0.00) 20%),
        linear-gradient(180deg, ${colorScheme.gradients.blackToBlue.start} 0%, ${colorScheme.gradients.blackToBlue.end} 60%);
    }

    5% {
      background: 
        linear-gradient(90deg, #373737 5%, rgba(0, 0, 0, 0.00) 25%),
        linear-gradient(180deg, ${colorScheme.gradients.blackToBlue.start} 0%, ${colorScheme.gradients.blackToBlue.end} 60%);
    }

    10% {
      background: 
        linear-gradient(90deg, #373737 10%, rgba(0, 0, 0, 0.00) 30%),
        linear-gradient(180deg, ${colorScheme.gradients.blackToBlue.start} 0%, ${colorScheme.gradients.blackToBlue.end} 60%);
    }

    15% {
      background: 
        linear-gradient(90deg, #373737 15%, rgba(0, 0, 0, 0.00) 35%),
        linear-gradient(180deg, ${colorScheme.gradients.blackToBlue.start} 0%, ${colorScheme.gradients.blackToBlue.end} 60%);
    }

    20% {
      background: 
        linear-gradient(90deg, #373737 20%, rgba(0, 0, 0, 0.00) 50%),
        linear-gradient(180deg, ${colorScheme.gradients.blackToBlue.start} 0%, ${colorScheme.gradients.blackToBlue.end} 60%);
    }

    25% {
      background: 
        linear-gradient(90deg, rgba(0, 0, 0, 0.00) 5%, #373737 25%, rgba(0, 0, 0, 0.00) 45%),
        linear-gradient(180deg, ${colorScheme.gradients.blackToBlue.start} 0%, ${colorScheme.gradients.blackToBlue.end} 60%); 
    }

    30% {
      background: 
        linear-gradient(90deg, rgba(0, 0, 0, 0.00) 10%, #373737 30%, rgba(0, 0, 0, 0.00) 50%),
        linear-gradient(180deg, ${colorScheme.gradients.blackToBlue.start} 0%, ${colorScheme.gradients.blackToBlue.end} 60%);
    }

    35% {
      background: 
        linear-gradient(90deg, rgba(0, 0, 0, 0.00) 15%, #373737 35%, rgba(0, 0, 0, 0.00) 55%),
        linear-gradient(180deg, ${colorScheme.gradients.blackToBlue.start} 0%, ${colorScheme.gradients.blackToBlue.end} 60%); 
    }

    40% {
      background: 
        linear-gradient(90deg, rgba(0, 0, 0, 0.00) 20%, #373737 40%, rgba(0, 0, 0, 0.00) 60%),
        linear-gradient(180deg, ${colorScheme.gradients.blackToBlue.start} 0%, ${colorScheme.gradients.blackToBlue.end} 60%);
    }

    45% {
      background: 
        linear-gradient(90deg, rgba(0, 0, 0, 0.00) 25%, #373737 45%, rgba(0, 0, 0, 0.00) 65%),
        linear-gradient(180deg, ${colorScheme.gradients.blackToBlue.start} 0%, ${colorScheme.gradients.blackToBlue.end} 60%); 
    }

    50% {
      background: 
        linear-gradient(90deg, rgba(0, 0, 0, 0.00) 30%, #373737 50%, rgba(0, 0, 0, 0.00) 70%),
        linear-gradient(180deg, ${colorScheme.gradients.blackToBlue.start} 0%, ${colorScheme.gradients.blackToBlue.end} 60%);
    }

    55% {
      background: 
        linear-gradient(90deg, rgba(0, 0, 0, 0.00) 35%, #373737 55%, rgba(0, 0, 0, 0.00) 75%),
        linear-gradient(180deg, ${colorScheme.gradients.blackToBlue.start} 0%, ${colorScheme.gradients.blackToBlue.end} 60%); 
    }

    60% {
      background: 
        linear-gradient(90deg, rgba(0, 0, 0, 0.00) 40%, #373737 60%, rgba(0, 0, 0, 0.00) 80%),
        linear-gradient(180deg, ${colorScheme.gradients.blackToBlue.start} 0%, ${colorScheme.gradients.blackToBlue.end} 60%);
    }

    65% {
      background: 
        linear-gradient(90deg, rgba(0, 0, 0, 0.00) 45%, #373737 65%, rgba(0, 0, 0, 0.00) 85%),
        linear-gradient(180deg, ${colorScheme.gradients.blackToBlue.start} 0%, ${colorScheme.gradients.blackToBlue.end} 60%); 
    }

    70% {
      background: 
        linear-gradient(90deg, rgba(0, 0, 0, 0.00) 50%, #373737 70%, rgba(0, 0, 0, 0.00) 90%),
        linear-gradient(180deg, ${colorScheme.gradients.blackToBlue.start} 0%, ${colorScheme.gradients.blackToBlue.end} 60%);
    }

    75% {
      background: 
        linear-gradient(90deg, rgba(0, 0, 0, 0.00) 55%, #373737 75%, rgba(0, 0, 0, 0.00) 95%),
        linear-gradient(180deg, ${colorScheme.gradients.blackToBlue.start} 0%, ${colorScheme.gradients.blackToBlue.end} 60%); 
    }

    80% {
      background: 
        linear-gradient(90deg, rgba(0, 0, 0, 0.00) 60%, #373737 80%),
        linear-gradient(180deg, ${colorScheme.gradients.blackToBlue.start} 0%, ${colorScheme.gradients.blackToBlue.end} 60%);
    }

    85% {
      background: 
        linear-gradient(90deg, rgba(0, 0, 0, 0.00) 65%, #373737 85%),
        linear-gradient(180deg, ${colorScheme.gradients.blackToBlue.start} 0%, ${colorScheme.gradients.blackToBlue.end} 60%); 
    }

    90% {
      background: 
        linear-gradient(90deg, rgba(0, 0, 0, 0.00) 70%, #373737 90%),
        linear-gradient(180deg, ${colorScheme.gradients.blackToBlue.start} 0%, ${colorScheme.gradients.blackToBlue.end} 60%);
    }

    95% {
      background: 
        linear-gradient(90deg, rgba(0, 0, 0, 0.00) 75%, #373737 95%),
        linear-gradient(180deg, ${colorScheme.gradients.blackToBlue.start} 0%, ${colorScheme.gradients.blackToBlue.end} 60%); 
    }

    100% {
      background: 
        linear-gradient(90deg, rgba(0, 0, 0, 0.00) 80%, #373737 100%),
        linear-gradient(180deg, ${colorScheme.gradients.blackToBlue.start} 0%, ${colorScheme.gradients.blackToBlue.end} 60%);
    }
  }
`

export const CallMeButton: React.FC = () => {
	const currLang = useLangStore((state) => state.langTheme)

	const handleClick = () => {}

	return (
		<Button onClick={handleClick}>
			{getStartText(currLang, 'callMeButton')}
		</Button>
	)
}
