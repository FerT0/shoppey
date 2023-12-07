import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { signInWithGoogle } from "@/app/connections/signIn";

export default function NotLoggedInModal(props) {
  return (
    <>
      <Modal isOpen={props.is} onOpenChange={props.change} size="xs">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                You&apos;re not logged in!
              </ModalHeader>
              <ModalBody>
                <p>
                  Sign in with your google account to add items to your cart.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  className="bg-success-600 text-white"
                  onClick={() => signInWithGoogle()}
                >
                  Sign in with Google
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
