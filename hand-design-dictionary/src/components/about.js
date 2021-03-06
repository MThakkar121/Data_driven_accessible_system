import React from 'react'
import handImages from '../images/handImages.svg';
import {
    Text,
    Button,
    Image,
    Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
Link,
} from '@chakra-ui/react'

export default function About() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    return (
        <div>
            <Button onClick={onOpen} colorScheme="orange">Learn More</Button>
            
            <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Indian Sign Language (ISL)</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
              <Text fontSize="sm">Indian Sign Language (ISL) is a visual language that serves as the predominant sign language of Deaf communities in the India.<br></br>
          Here's the list of ISL hand gestures for alphabet.</Text>
          <Image src={handImages}/>
          
            
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </div>
    )
}
