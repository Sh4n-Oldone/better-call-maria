import React from 'react'
// import styled from 'styled-components'
import {
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
} from '@chakra-ui/react'

interface IProps {
	isOpen: boolean
	onClose(): void
}

export const CallMeModal: React.FC<IProps> = ({ isOpen, onClose }) => (
	<Modal
		isOpen={isOpen}
		onClose={onClose}
		motionPreset='slideInBottom'
		scrollBehavior='inside'
		size='xl'
	>
		<ModalOverlay backdropFilter='blur(10px)' />
		<ModalContent>
			<ModalHeader>Modal Title</ModalHeader>
			<ModalCloseButton />
			<ModalBody>Маша, дай мне текст!</ModalBody>

			<ModalFooter>
				<Button colorScheme='blue' mr={3} onClick={onClose}>
					Close
				</Button>
			</ModalFooter>
		</ModalContent>
	</Modal>
)
