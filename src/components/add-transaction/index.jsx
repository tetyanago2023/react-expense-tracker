import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Radio,
    RadioGroup,
} from "@chakra-ui/react";


const TransactionForm = ({ onClose, isOpen }) => {

    return <Modal isOpen={isOpen} onClose={onClose}>
        <form>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    Add new transaction
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <FormControl>
                        <FormLabel>Enter description</FormLabel>
                        <Input
                            placeholder="Enter transaction description"
                            name="description"
                            type="text"
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Enter amount</FormLabel>
                        <Input
                            placeholder="Enter aransaction amount"
                            name="amount"
                            type="number"
                        />
                    </FormControl>
                    <RadioGroup mt="5">
                        <Radio name="type" colorScheme="blue" value="income">Income</Radio>
                        <Radio name="type" colorScheme="red" value="expense">Expense</Radio>
                    </RadioGroup>
                </ModalBody>
                <ModalFooter>
                    <Button mr={"4"} onClick={onClose}>
                        Cancel
                    </Button>
                    <Button>
                        Add
                    </Button>
                </ModalFooter>
            </ModalContent>
        </form>
    </Modal>
};

export default TransactionForm;