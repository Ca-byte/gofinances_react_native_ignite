import React, { useState } from "react";
import { Modal, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

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

const schema = Yup.object().shape({
  name: Yup.string().required("Nome é obrigatório"),
  amount: Yup.number()
    .typeError("Informe um valor númerico")
    .positive("Não pode ser um valor negativo")
    .required("Um valor é obrigatório"),
});
export function Register() {
  const [TransactionType, setTransationType] = useState("");
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [category, setCategory] = useState({
    key: "category",
    name: "category",
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

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
    if (!TransactionType) return Alert.alert("Selecione o tipo de Transação");

    if (category.key === "category")
      return Alert.alert("Selecione uma categoria");

    const data = {
      name: form.name,
      amount: form.amount,
      TransactionType,
      category: category.key,
    };
    console.log(data);
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>
        <Form>
          <Fields>
            <InputForm
              name="name"
              control={control}
              placeholder="Nome"
              autoCapitalize="sentences"
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />

            <InputForm
              name="amount"
              control={control}
              placeholder="Preço"
              keyboardType="numeric"
              error={errors.amount && errors.amount.message}
            />

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
    </TouchableWithoutFeedback>
  );
}
