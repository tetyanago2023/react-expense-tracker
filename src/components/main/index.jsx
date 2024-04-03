import React from 'react';
import {Button, Flex, Heading} from "@chakra-ui/react";
import Summary from "../summary";
import ExpenseView from "../expense-view";

const Main = () => {
    return (
        <Flex textAlign={"center"} flexDirection={"column"} pr={"5"} pl={"5"}>
            <Flex alignItems={"center"} justifyContent={"space-between"} mt={"12"}>
                <Heading
                    color={"blue.400"}
                    display={["none", "block", "block", "block", "block"]}
                >
                    Expense Tracker
                </Heading>
                <Flex alignItems={"center"}>
                    {/*<Button onClick={onOpen} bg={"blue.300"} color={"black"} ml={"4"}>*/}
                    <Button bg={"blue.300"} color={"black"} ml={"4"}>
                        Add New Transaction
                    </Button>
                </Flex>
            </Flex>
            <Summary />
            <Flex
                w="full"
                alignItems={"flex-start"}
                justifyContent={"space-evenly"}
                flexDirection={["column", "column", "column", "row", "row"]}
            >
                <ExpenseView />
                <ExpenseView />
            </Flex>
        </Flex>
    );
};

export default Main;