import { useEffect, useState } from "react";
import Button from "../atom/Button.jsx";
import Container from "../molecules/Container.jsx";
import BorderDisplay from "../molecules/BorderDisplay.jsx";
import TextDisplay from "../atom/TextDisplay";
import GridLima from "../molecules/GridLima.jsx";
import TextCenter from "../molecules/TextCenter.jsx";
import GridEmpat from "../molecules/GridEmpat.jsx";
import ButtonNext from "../atom/ButtonNext.jsx";
import DotNavigation from "../layout/DotNavigation.jsx";

export default function PageOne() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  let [clickedNumbers, setClickedNumbers] = useState([]);
  let [lastNumber, setLastNumber] = useState(0);

  let [textNumber, setTextNumber] = useState("");
  let [nameNumber, setNameNumber] = useState("");
  let nameNum = "";

  let [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (lastNumber === 0 || lastNumber === "") return;
    else if (lastNumber == 1) nameNum = "Satu";
    else if (lastNumber == 2) nameNum = "Dua";
    else if (lastNumber == 3) nameNum = "Tiga";
    else if (lastNumber == 4) nameNum = "Empat";
    else if (lastNumber == 5) nameNum = "Lima";
    else if (lastNumber == 6) nameNum = "Enam";
    else if (lastNumber == 7) nameNum = "Tujuh";
    else if (lastNumber == 8) nameNum = "Lapan";
    else if (lastNumber == 9) nameNum = "Sembilan";
    else if (lastNumber == 10) nameNum = "Sepuluh";
    setNameNumber(`${nameNum}`);
    setTextNumber(`Nombor ${lastNumber}`);

    if (numbers.length == clickedNumbers.length) setIsDone(true);
  }, [lastNumber]);

  useEffect(() => {
    if (isDone == false) return;
    console.log(isDone);
  }, [isDone]);

  return (
    <Container>
      <DotNavigation />

      <BorderDisplay>
        <GridLima>
          {Array.from({ length: lastNumber }).map((_, index) => (
            <span className="text-4xl" key={index}>
              🍪
            </span>
          ))}
        </GridLima>

        <TextCenter>
          <TextDisplay text={nameNumber} />
          <TextDisplay text={textNumber} />
        </TextCenter>
      </BorderDisplay>

      <GridEmpat>
        {numbers.map((num, idx) => (
          <Button
            text={num}
            key={idx}
            setClickedNumbers={setClickedNumbers}
            setLastNumber={setLastNumber}
            clickedNumbers={clickedNumbers}
          />
        ))}
      </GridEmpat>
      {isDone ? <ButtonNext text="Next" link="/student/lesson/2"/> : "" }

    </Container>
  );
}
