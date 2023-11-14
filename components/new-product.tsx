"use client";
import React from "react";
import { useState, useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { useUserDataContext } from "@/app/contexts/userdata-context";
import { AddProductIcon } from "./icons";
import { siteConfig } from "@/config/site";
import { postProduct } from "@/app/connections/postProduct";

export default function NewProduct() {
  const { sessionData } = useUserDataContext();
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productCategory, setProductCategory] = useState("");
  const [priceTypeInvalid, setPriceTypeInvalid] = useState(false);
  const [file, setFile] = useState();
  const [fileSize, setFileSize] = useState(0);
  const [fileName, setFileName] = useState("");
  const [isFileTooBig, setIsFileTooBig] = useState(false);
  const [isFileEmptyError, setIsFileEmptyError] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (file === undefined) {
      setIsFileEmptyError(true);
    } else {
      if (isFileTooBig === false && priceTypeInvalid !== true) {
        await postProduct(
          productName,
          productDescription,
          productPrice,
          productCategory,
          sessionData.user.user_metadata.name,
          sessionData.user.id,
          file
        ).then(() => window.location.reload());
      }
    }
  };

  const setImageDetails = (event) => {
    if (event.target.files[0]) {
      setFile(event.target.files[0]);
      setIsFileEmptyError(false);
      setFileSize(event.target.files[0].size);
      setFileName(event.target.files[0].name);
    }
  };

  const handleProductPrice = (arg) => {
    setProductPrice(arg);
    if (arg / 0 !== Infinity) {
      setPriceTypeInvalid(true);
    } else {
      setPriceTypeInvalid(false);
    }
  };

  useEffect(() => {
    if (fileSize >= 307200) {
      setIsFileTooBig(true);
    } else {
      setIsFileTooBig(false);
    }
  }, [file]);

  return (
    <>
      {sessionData !== null && (
        <>
          <Button
            className="text-white bg-success-600"
            startContent={<AddProductIcon />}
            onPress={onOpen}
          >
            New product
          </Button>

          <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            placement="center"
            isDismissable={false}
          >
            <form onSubmit={handleSubmit}>
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      New product
                    </ModalHeader>

                    <ModalBody>
                      <Input
                        type="text"
                        label="Product name"
                        isRequired
                        onChange={(e) => setProductName(e.target.value)}
                      />
                      <Input
                        type="text"
                        label="Product description"
                        isRequired
                        onChange={(e) => setProductDescription(e.target.value)}
                      />
                      <Input
                        type="text"
                        label="Product price"
                        isRequired
                        isInvalid={priceTypeInvalid}
                        color={priceTypeInvalid ? "danger" : "default"}
                        errorMessage={
                          priceTypeInvalid && "Please enter a valid price"
                        }
                        onChange={(e) => handleProductPrice(e.target.value)}
                      />
                      <Select
                        label="Product category"
                        className="max-w-xs w-full"
                        isRequired
                        onChange={(e) => setProductCategory(e.target.value)}
                        classNames={{
                          trigger: "capitalize",
                        }}
                      >
                        {siteConfig.categories.map((category) => (
                          <SelectItem
                            key={category.name}
                            value={category.name}
                            className="capitalize"
                          >
                            {category.name}
                          </SelectItem>
                        ))}
                      </Select>
                      <label className="px-4 pt-2 block text-foreground-500 pointer-events-none cursor-pointer z-10 after:content-['*'] after:text-danger after:ml-0.5 will-change-auto origin-top-left transition-all !duration-200 !ease-out motion-reduce:transition-none font-normal group-data-[filled=true]:font-medium group-data-[filled=true]:pointer-events-auto text-small group-data-[filled=true]:text-tiny group-data-[filled=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_4px)]">
                        Product picture
                      </label>
                      <div className="flex items-center gap-2">
                        <input
                          type="file"
                          title="test"
                          accept="image/*"
                          onChange={setImageDetails}
                          className="block w-44 text-sm text-transparent
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-success-50 file:text-success-700
      hover:file:bg-success-100
    "
                        />
                        <label className="text-xs text-slate-500">
                          {fileName}
                        </label>
                      </div>
                      {isFileTooBig && (
                        <label className="text-xs text-danger-500 px-4">
                          This file is too big. Please consider optimizing the
                          image, we make use of a very limited database.
                        </label>
                      )}
                      {isFileEmptyError && (
                        <label className="text-xs text-danger-500 px-4">
                          Please upload a picture.
                        </label>
                      )}
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="flat" onPress={onClose}>
                        Close
                      </Button>
                      <Button
                        className="text-white bg-success-600"
                        type="submit"
                      >
                        Post product
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </form>
          </Modal>
        </>
      )}
    </>
  );
}
