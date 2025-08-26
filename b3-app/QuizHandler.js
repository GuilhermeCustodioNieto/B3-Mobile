import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export default function QuizHandler({ socket }) {
  const navigation = useNavigation();

  useEffect(() => {
    if (!socket) return;

    socket.on("message", (msg) => {
      const data = JSON.parse(msg.body);

      if (data.type === "QUESTION") {
        navigation.navigate("Quiz", { question: data });
      }

      if (data.type === "SCOREBOARD") {
        if (data.finished) {
          // Só vai para a tela final quando acabar o quiz
          navigation.navigate("Resultados", {
            scores: data.scores,
            finished: true,
          });
        } else {
          // ⚡ Atualiza o placar dentro da tela do Quiz
          navigation.navigate("Quiz", { scores: data.scores, finished: false });
        }
      }
    });

    return () => socket.off("message");
  }, [socket]);

  return null;
}
