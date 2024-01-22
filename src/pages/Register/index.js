import React, { useEffect, useState } from "react";
import {
  Container,
  RegisterWrapper,
  SideBanner,
  Input,
  FormInput,
  Form,
  RegisterBtn,
  DropContainer,
  ImageContainer,
  Preview,
  UploadMessage,
  ImageInfo,
  DoubleInput,
} from "./styles";
import Dropzone from "react-dropzone";
import { AiFillCamera } from "../../styles/Icons";
import simple_logo from "../../assets/simple_logo.png";
import axios from "axios";
import { consultCEP } from "../../services/api";
import { useNavigate } from "react-router";
import ModalPopUp from "../../components/ModalPopUp";
import ErrorNotification from "../../components/ErrorNotification";
import { useAuth } from "../../utils/AuthProvider";

function UploadedImage(props) {
  return (
    <ImageContainer>
      <Preview src={props.preview} />
      <ImageInfo>
        <p>{props.name}</p>
        <sub>{`${props.type} - ${(props.size / (1024 * 1024)).toFixed(
          2
        )} mb`}</sub>
      </ImageInfo>
    </ImageContainer>
  );
}

function Register() {
  const { createUserAccount } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    isOpen: false,
    message: "",
  });
  const navigate = useNavigate();

  const [registerData, setRegisterData] = useState({});
  const [pictureInfo, setPictureInfo] = useState({});

  function renderDragMessage(isDragActive, isDragReject) {
    if (!isDragActive) {
      return <UploadMessage>Arraste sua imagem aqui...</UploadMessage>;
    }

    if (isDragReject) {
      return (
        <UploadMessage type="error">
          Tipo de arquivo não suportado
        </UploadMessage>
      );
    }

    return <UploadMessage type="success">Solte-o!!</UploadMessage>;
  }

  const handleSubmit = async () => {
    if (verifyEmpty()) {
      setErrorMessage({ isOpen: true, message: "Há um campo faltando." });
      return;
    }

    if (registerData.password !== registerData.confirm_password) {
      setErrorMessage({ isOpen: true, message: "As senhas não conferem." });
      return;
    }

    const result = await createUserAccount(registerData, pictureInfo.file);
    if (result) {
      setModalOpen(true);
    } else {
      setErrorMessage({
        isOpen: true,
        message:
          "Ocorreu um erro durante o registro, tente novamente mais tarde.",
      });
    }
  };

  useEffect(() => {
    const formattedCep = (registerData.cep || "").replace(/\D/g, ""); // Remove caracteres não numéricos

    if (formattedCep.length >= 8) {
      try {
        const getCepInfo = async () => {
          const response = await consultCEP(formattedCep);

          setRegisterData((prevState) => ({
            ...prevState,
            street: response.logradouro,
            neighborhood: response.bairro,
            uf: response.uf,
          }));
        };

        getCepInfo();
      } catch (error) {
        console.log(error);
      }
    }
  }, [registerData.cep]);

  function handleUpload(file) {
    file.map((item) => {
      setPictureInfo({
        file: item,
        name: item.name,
        type: item.type,
        size: item.size,
        preview: URL.createObjectURL(item),
      });
    });
  }

  function verifyEmpty() {
    const inputs = document.querySelectorAll(".is_not_empty");

    for (const input of inputs) {
      if (input.value.trim() === "") {
        return true; // Retorna true se pelo menos um campo estiver vazio
      }
    }

    if (!pictureInfo.file) {
      return true; // Retorna true se pictureInfo.file estiver vazio
    }

    return false; // Retorna false apenas se todos os campos estiverem preenchidos e pictureInfo.file não estiver vazio
  }

  const formatCEP = (inputCEP) => {
    const numericCEP = inputCEP.replace(/\D/g, "");
    const formattedCEP = numericCEP.replace(/^(\d{5})(\d{3})$/, "$1-$2");

    return formattedCEP;
  };

  const handleCEPChange = (e) => {
    const inputCEP = e.target.value;

    if (inputCEP.length <= 9) {
      const formattedCEP = formatCEP(inputCEP);

      setRegisterData((prevState) => ({
        ...prevState,
        cep: formattedCEP,
      }));
    }
  };

  return (
    <Container>
      <SideBanner />
      <RegisterWrapper>
        <img src={simple_logo} className="logo" />
        <h1>Crie uma conta</h1>
        <p>E comece a pedir em mais de 50.000 restaurantes!</p>

        {errorMessage.isOpen && (
          <ErrorNotification
            showNotification={errorMessage.isOpen}
            setShowNotification={() =>
              setErrorMessage({ isOpen: false, message: "" })
            }
            message={errorMessage.message}
          />
        )}

        {modalOpen && (
          <ModalPopUp
            closeModal={() => (window.location.href = "/")}
            message="Conta criado com sucesso!"
          />
        )}

        <Form>
          <Input>
            <FormInput
              placeholder="Nome"
              className="is_not_empty"
              onChange={(e) =>
                setRegisterData((prevState) => ({
                  ...prevState,
                  name: e.target.value,
                }))
              }
            />
            <label className="form-label">Nome</label>
          </Input>

          <Input>
            <FormInput
              placeholder="Email"
              className="is_not_empty"
              onChange={(e) =>
                setRegisterData((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }))
              }
            />
            <label className="form-label">Email</label>
          </Input>

          <Input>
            <FormInput
              placeholder="Senha"
              className="is_not_empty"
              type="password"
              onChange={(e) =>
                setRegisterData((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }))
              }
            />
            <label className="form-label">Senha</label>
          </Input>

          <Input>
            <FormInput
              placeholder="Senha Novamente"
              className="is_not_empty"
              type="password"
              required
              onChange={(e) =>
                setRegisterData((prevState) => ({
                  ...prevState,
                  confirm_password: e.target.value,
                }))
              }
            />
            <label className="form-label">Senha Novamente</label>
          </Input>

          <b>Informações de Entrega</b>
          <Input>
            <FormInput
              placeholder="Seu CEP"
              onChange={handleCEPChange}
              value={registerData.cep}
              type="text"
            />
            <label className="form-label">Seu CEP</label>
          </Input>

          <DoubleInput>
            <Input>
              <FormInput
                placeholder="Rua"
                className="is_not_empty"
                type="text"
                disabled={registerData.cep ? true : false}
                value={registerData.street}
                onChange={(e) =>
                  setRegisterData((prevState) => ({
                    ...prevState,
                    street: e.target.value,
                  }))
                }
              />
              <label className="form-label">Rua</label>
            </Input>
            <Input>
              <FormInput
                placeholder="Seu Bairro"
                className="is_not_empty"
                type="text"
                value={registerData.neighborhood}
                disabled={registerData.cep ? true : false}
                onChange={(e) =>
                  setRegisterData((prevState) => ({
                    ...prevState,
                    neighborhood: e.target.value,
                  }))
                }
              />
              <label className="form-label">Seu Bairro</label>
            </Input>
          </DoubleInput>

          <DoubleInput>
            <Input>
              <FormInput
                placeholder="Número"
                className="number is_not_empty"
                type="text"
                value={registerData.number}
                onChange={(e) =>
                  setRegisterData((prevState) => ({
                    ...prevState,
                    number: parseInt(e.target.value, 10) || "",
                  }))
                }
              />
              <label className="form-label">Número</label>
            </Input>
            <Input>
              <FormInput
                placeholder="Complemento"
                type="text"
                value={registerData.complement}
                onChange={(e) =>
                  setRegisterData((prevState) => ({
                    ...prevState,
                    complement: e.target.value,
                  }))
                }
              />
              <label className="form-label">Complemento</label>
            </Input>
          </DoubleInput>

          <p>Sua foto de perfil</p>
          <Dropzone accept="image/*" onDropAccepted={handleUpload}>
            {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
              <DropContainer
                {...getRootProps()}
                isDragActive={isDragActive}
                isDragReject={isDragReject}
              >
                <AiFillCamera size={30} color="gray" />
                <input {...getInputProps()} />
                {renderDragMessage(isDragActive, isDragReject)}
              </DropContainer>
            )}
          </Dropzone>
          {pictureInfo.name != null && (
            <UploadedImage
              preview={pictureInfo.preview}
              name={pictureInfo.name}
              type={pictureInfo.type}
              size={pictureInfo.size}
            ></UploadedImage>
          )}

          <RegisterBtn onClick={() => handleSubmit()}>Criar Conta</RegisterBtn>
          <sub>
            Já tem uma conta?{" "}
            <span onClick={() => navigate("/login")}>Entre</span>
          </sub>
        </Form>
      </RegisterWrapper>
    </Container>
  );
}

export default Register;
