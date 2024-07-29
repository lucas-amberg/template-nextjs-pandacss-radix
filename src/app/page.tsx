import Image from "next/image";
import { VStack } from "panda";
import { Heading } from "@radix-ui/themes";

export default function Home() {
    return (
        <VStack
            w="full"
            h="full"
            alignItems="center"
            justifyContent="center">
            <Heading>Welcome to your Next.js, PandaCSS, and Radix app!</Heading>
        </VStack>
    );
}
