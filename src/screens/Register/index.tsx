import React, { useState } from "react";
import { Button } from "../../components/Form/Button";
import { Input } from "../../components/Form/Input";
import { TransationTypeButton } from "../../components/Form/TransationTypeButton";

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransationsButtons,
} from "./styles";
export function Register() {
  const [TransationType, setTransationType] = useState("");

  function handleTransationsTypeSelect(type: "up" | "down") {
    setTransationType(type);
  }
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />
          <TransationsButtons>
            <TransationTypeButton
              type="up"
              title="Income"
              onPress={() => handleTransationsTypeSelect("up")}
              isActive={TransationType === "up"}
            />
            <TransationTypeButton
              type="down"
              title="Outcome"
              onPress={() => handleTransationsTypeSelect("down")}
              isActive={TransationType === "down"}
            />
          </TransationsButtons>
        </Fields>
        <Button title="Enviar" />
      </Form>
    </Container>
  );
}
