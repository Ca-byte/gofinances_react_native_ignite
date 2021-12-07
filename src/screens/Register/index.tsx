import React, { useState } from "react";
import { Modal } from "react-native";
import { useForm } from "react-hook-form";

import { Button } from "../../components/Form/Button";
import { CategorySelectButton } from "../../components/Form/CategorySelectButton";

import { InputForm } from "../../components/Form/InputForm";
import { TransationTypeButton } from "../../components/Form/TransationTypeButton";
import { CategorySelect } from "../CategorySelect/Index";

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransationsButtons,
} from "./styles";

interface FormData {
  name: string;
  amount: string;
}
export function Register() {
  const [TransactionType, setTransationType] = useState("");
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [category, setCategory] = useState({
    key: "category ",
    name: "category",
  });

  const { control, handleSubmit } = useForm();

  function handleTransationsTypeSelect(type: "up" | "down") {
    setTransationType(type);
  }

  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false);
  }
  function handleOloseSelectCategoryModal() {
    setCategoryModalOpen(true);
  }

  function handleRegister(form: FormData) {
    const data = {
      name: form.name,
      amount: form.amount,
      TransactionType,
      category: category.key,
    };
    console.log(data);
  }
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <InputForm name="name" control={control} placeholder="Nome" />

          <InputForm name="amount" control={control} placeholder="Preço" />

          <TransationsButtons>
            <TransationTypeButton
              type="up"
              title="Income"
              onPress={() => handleTransationsTypeSelect("up")}
              isActive={TransactionType === "up"}
            />
            <TransationTypeButton
              type="down"
              title="Outcome"
              onPress={() => handleTransationsTypeSelect("down")}
              isActive={TransactionType === "down"}
            />
          </TransationsButtons>
          <CategorySelectButton
            title={category.name}
            onPress={handleOloseSelectCategoryModal}
          />
        </Fields>
        <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
      </Form>
      <Modal visible={categoryModalOpen}>
        <CategorySelect
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseSelectCategoryModal}
        />
      </Modal>
    </Container>
  );
}
