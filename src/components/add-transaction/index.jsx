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
import {useContext} from "react";
import {GlobalContext} from "../../context";


const TransactionForm = ({ onClose, isOpen }) => {
    const { formData, setFormData, value, setValue, handleFormSubmit } =
        useContext(GlobalContext);

    const handleFormChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleFormSubmit(formData);
    };

    return <Modal isOpen={isOpen} onClose={onClose}>
        <form onSubmit={handleSubmit}>
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
                            onChange={handleFormChange}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Enter amount</FormLabel>
                        <Input
                            placeholder="Enter aransaction amount"
                            name="amount"
                            type="number"
                            onChange={handleFormChange}
                        />
                    </FormControl>
                    <RadioGroup mt="5" value={value} onChange={setValue}>
                        <Radio
                            checked={formData.type === "income"}
                            value="income"
                            colorScheme="blue"
                            name="type"
                            onChange={handleFormChange}
                        >
                            Income
                        </Radio>
                        <Radio
                            checked={formData.type === "expense"}
                            value="expense"
                            colorScheme="red"
                            name="type"
                            onChange={handleFormChange}
                        >
                            Expense
                        </Radio>
                    </RadioGroup>
                </ModalBody>
                <ModalFooter>
                    <Button mr={"4"} onClick={onClose}>
                        Cancel
                    </Button>
                    <Button onClick={onClose} type={"submit"}>
                        Add
                    </Button>
                </ModalFooter>
            </ModalContent>
        </form>
    </Modal>
};

export default TransactionForm;