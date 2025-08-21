import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Animated,
  Easing,
} from "react-native";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";

export default function Infos() {
  // Lista de tópicos com imagens
  const topicos = [
    {
      titulo: "Museu",
      descricao: "Lugar de preservar e contar memórias.",
      icone: "university",
      imagem: "https://cdn-icons-png.flaticon.com/512/234/234698.png",
    },
    {
      titulo: "Memória",
      descricao:
        "Guardar e resgatar informações e acontecimentos da história de pessoas e grupos.",
      icone: "book",
      imagem:
        "https://static9.depositphotos.com/1329518/1166/v/450/depositphotos_11665611-stock-illustration-memory-loss-man.jpg",
    },
    {
      titulo: "Valor",
      descricao:
        "Algo que é importante para alguém ou o preço de alguma coisa em dinheiro.",
      icone: "gem",
      imagem:
        "https://images.vexels.com/media/users/3/157443/isolated/preview/0be262dfa410be573a1e7ea787e76a42-icone-de-cifrao-de-marketing.png",
    },
    {
      titulo: "Preço",
      descricao: "Quantia em dinheiro usada na compra e venda de ações.",
      icone: "dollar-sign",
      imagem: "https://cdn-icons-png.flaticon.com/256/1728/1728450.png",
    },
    {
      titulo: "Ação",
      descricao: "Parte de uma empresa que pode ser comprada e vendida.",
      icone: "chart-line",
      imagem: "https://cdn-icons-png.flaticon.com/512/10827/10827274.png",
    },
    {
      titulo: "Investimento",
      descricao:
        "Comprar ações acreditando ganhar dinheiro com o passar do tempo.",
      icone: "piggy-bank",
      imagem: "https://cdn-icons-png.freepik.com/512/7132/7132298.png",
    },
    {
      titulo: "Bolsa de valores",
      descricao: "Lugar onde ações recebem preço e são negociadas.",
      icone: "building",
      imagem: "https://cdn-icons-png.flaticon.com/512/5550/5550604.png",
    },
    {
      titulo: "Pregão",
      descricao:
        "Momento de negociação de ações na bolsa de valores. Negociação é a conversa para decidir preços.",
      icone: "exchange-alt",
      imagem: "https://cdn-icons-png.flaticon.com/512/2599/2599851.png",
    },
  ];

  const [ativo, setAtivo] = useState(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // Função para animar a entrada do conteúdo
  const animarDescricao = (index) => {
    if (ativo === index) {
      setAtivo(null);
      return;
    }
    setAtivo(index);
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#001833", padding: 20 }}>
      {/* Logo fictícia B³ */}
      <View style={{ alignItems: "center", marginBottom: 20 }}>
        <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
          <Image
            source={require("./assets/Rectangle.png")}
            style={{
              width: "50px",
              height: "50px",
            }}
          />
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {topicos.map((item, index) => (
          <View
            key={index}
            style={{
              borderWidth: 1,
              borderColor: "#3A6BB6",
              borderRadius: 8,
              marginBottom: 15,
              backgroundColor: ativo === index ? "#002A50" : "transparent",
            }}
          >
            {/* Botão principal */}
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 15,
              }}
              onPress={() => animarDescricao(index)}
            >
              <FontAwesome5
                name={item.icone}
                size={20}
                color="white"
                style={{ marginRight: 10 }}
              />
              <Text
                style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
              >
                {item.titulo}
              </Text>
            </TouchableOpacity>

            {/* Descrição com animação */}
            {ativo === index && (
              <Animated.View
                style={{
                  opacity: fadeAnim,
                  padding: 10,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    marginBottom: 10,
                  }}
                >
                  {item.descricao}
                </Text>
                <Image
                  source={{ uri: item.imagem }}
                  style={{ width: 100, height: 100, borderRadius: 8 }}
                  resizeMode="contain"
                />
              </Animated.View>
            )}
          </View>
        ))}
      </ScrollView>

      {/* Barra inferior de navegação */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          paddingVertical: 10,
          borderTopWidth: 1,
          borderTopColor: "#3A6BB6",
        }}
      >
        <Ionicons name="home" size={26} color="white" />
        <Ionicons name="play" size={26} color="white" />
        <Ionicons name="information-circle" size={26} color="white" />
      </View>
    </View>
  );
}
