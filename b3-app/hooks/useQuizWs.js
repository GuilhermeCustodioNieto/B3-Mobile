import { useEffect, useState, useCallback } from "react";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

export function useQuizWS(
  code,
  username,
  API_BASE = "https://b3-back-end.onrender.com"
) {
  const [stompClient, setStompClient] = useState(null);
  const [question, setQuestion] = useState(null);
  const [scores, setScores] = useState(null);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showScoreboard, setShowScoreboard] = useState(false);
  const [finished, setFinished] = useState(false);
  const [players, setPlayers] = useState([]); // Lista de jogadores conectados

  const handleEvent = useCallback((event) => {
    switch (event.type) {
      case "QUESTION":
        setQuestion(event);
        setShowQuestion(true);
        setShowScoreboard(false);
        break;

      case "SCOREBOARD":
        setScores(event.scores);
        setShowScoreboard(true);
        setShowQuestion(false);
        if (event.finished) {
          setFinished(true);
        }
        break;

      case "PLAYER_JOINNED":
        // Adiciona o jogador à lista
        setPlayers((prev) => {
          if (!prev.includes(event.username)) return [...prev, event.username];
          return prev;
        });
        break;

      default:
        console.log("Evento desconhecido:", event);
    }
  }, []);

  useEffect(() => {
    const socket = new SockJS(`${API_BASE}/ws`);
    const client = new Client({
      webSocketFactory: () => socket,
      reconnectDelay: 5000,
      debug: (str) => console.log(str),
    });

    client.onConnect = () => {
      console.log("Conectado ao WebSocket");
      client.subscribe(`/topic/rooms/${code}`, (message) => {
        const event = JSON.parse(message.body);
        handleEvent(event);
      });
    };

    client.activate();
    setStompClient(client);

    return () => client.deactivate();
  }, [code, handleEvent, API_BASE]);

  const sendAnswer = useCallback(
    (format) => {
      if (!stompClient || !stompClient.connected) return;
      stompClient.publish({
        destination: `/app/rooms/${code}/answer`,
        body: JSON.stringify({ username, format }),
      });
    },
    [stompClient, code, username]
  );

  return {
    question,
    scores,
    showQuestion,
    showScoreboard,
    sendAnswer,
    finished,
    players, // agora o hook expõe a lista de jogadores
  };
}
