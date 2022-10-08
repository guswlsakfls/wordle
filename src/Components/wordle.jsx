import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";

export default function Wordle() {
    const wordCount = 5;
    const [words, setWords] = useState([]);
    const [wordColorOne, setWordColorOne] = useState(['white', 'white', 'white', 'white', 'white']);
    const [wordColorTwo, setWordColorTwo] = useState(['white', 'white', 'white', 'white', 'white']);
    const [wordColorThree, setWordColorThree] = useState(['white', 'white', 'white', 'white', 'white']);
    const [wordColorFour, setWordColorFour] = useState(['white', 'white', 'white', 'white', 'white']);
    const [wordColorFive, setWordColorFive] = useState(['white', 'white', 'white', 'white', 'white']);
    const [wordColorSix, setWordColorSix] = useState(['white', 'white', 'white', 'white', 'white']);
    const ref = useRef(null);
    const [cnt, setCnt] = useState(0);
    
    // 단어 한 줄 저장
    const getWords = (e) => {
        setWords([
            ...words,
            e.target.value
        ]);
    }

    // const wordsList = () => {
        

    // 전체 단어 박스 리스트 나타낸다.
    // const words_box = () => {
    //     const res = [];
    //     for(let i = 0; i < wordListCount; i++) {
    //         res.push(<div>{ input_words() }</div>);
    //     }
    //     return res;
    // }

    const checkWords = () => {
        const checkWords = ['a', 'b' ,'c', 'd', 'e'];
        let wordColor = [];

        for(let i = 0; i < wordCount; i++) {
            // 배경 색깔 노란색으로 바꾸기
            if(words[i] === checkWords[i]) {
                wordColor.push('green');
            }
            else if(checkWords.includes(words[i])) {
                wordColor.push('yellow');
            }
            else {
                wordColor.push('gray');
            }
        }
        if (cnt === 0)
            setWordColorOne(wordColor);
        else if (cnt === 1)
            setWordColorTwo(wordColor);
        else if (cnt === 2)
            setWordColorThree(wordColor);
        else if (cnt === 3)
            setWordColorFour(wordColor);
        else if (cnt === 4)
            setWordColorFive(wordColor);
        else if (cnt === 5)
            setWordColorSix(wordColor);
        setCnt(cnt + 1);
        console.log(wordColor);

        for (let k = 0; k < wordCount; k++) {
            if (wordColor[k] === 'green')
                continue;
            // 실패
            else {
                setWords([]);
                return ;
            }
        }

        // 성공 했을 때 모달창 띄우고 종료
        alert("성공 or 실패");
    }

    return (
    <Container>
        <div className="wordle1" ref={ref}>
            <Input type="text" maxLength={1} color={wordColorOne[0]} onChange={getWords} />
            <Input type="text" maxLength={1} color={wordColorOne[1]} onChange={getWords} />
            <Input type="text" maxLength={1} color={wordColorOne[2]} onChange={getWords} />
            <Input type="text" maxLength={1} color={wordColorOne[3]} onChange={getWords} />
            <Input type="text" maxLength={1} color={wordColorOne[4]} onChange={getWords} />
        </div>
        <div className="wordle2" ref={ref}>
            <Input type="text" maxLength={1} color={wordColorTwo[0]} onChange={getWords} />
            <Input type="text" maxLength={1} color={wordColorTwo[1]} onChange={getWords} />
            <Input type="text" maxLength={1} color={wordColorTwo[2]} onChange={getWords} />
            <Input type="text" maxLength={1} color={wordColorTwo[3]} onChange={getWords} />
            <Input type="text" maxLength={1} color={wordColorTwo[4]} onChange={getWords} />
        </div>
        <div className="wordle3" ref={ref}>
            <Input type="text" maxLength={1} color={wordColorThree[0]} onChange={getWords} />
            <Input type="text" maxLength={1} color={wordColorThree[1]} onChange={getWords} />
            <Input type="text" maxLength={1} color={wordColorThree[2]} onChange={getWords} />
            <Input type="text" maxLength={1} color={wordColorThree[3]} onChange={getWords} />
            <Input type="text" maxLength={1} color={wordColorThree[4]} onChange={getWords} />
        </div>
        <div className="wordle4" ref={ref}>
            <Input type="text" maxLength={1} color={wordColorFour[0]} onChange={getWords} />
            <Input type="text" maxLength={1} color={wordColorFour[1]} onChange={getWords} />
            <Input type="text" maxLength={1} color={wordColorFour[2]} onChange={getWords} />
            <Input type="text" maxLength={1} color={wordColorFour[3]} onChange={getWords} />
            <Input type="text" maxLength={1} color={wordColorFour[4]} onChange={getWords} />
        </div>
        <div className="wordle5" ref={ref}>
            <Input type="text" maxLength={1} color={wordColorFive[0]} onChange={getWords} />
            <Input type="text" maxLength={1} color={wordColorFive[1]} onChange={getWords} />
            <Input type="text" maxLength={1} color={wordColorFive[2]} onChange={getWords} />
            <Input type="text" maxLength={1} color={wordColorFive[3]} onChange={getWords} />
            <Input type="text" maxLength={1} color={wordColorFive[4]} onChange={getWords} />
        </div>
        <div className="wordle6" ref={ref}>
            <Input type="text" maxLength={1} color={wordColorSix[0]} onChange={getWords} />
            <Input type="text" maxLength={1} color={wordColorSix[1]} onChange={getWords} />
            <Input type="text" maxLength={1} color={wordColorSix[2]} onChange={getWords} />
            <Input type="text" maxLength={1} color={wordColorSix[3]} onChange={getWords} />
            <Input type="text" maxLength={1} color={wordColorSix[4]} onChange={getWords} />
        </div>
        <button onClick={ checkWords }>Enter</button>
    </Container>
    );
}


// styled-components
const Input = styled.input`
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    transition: all 0.3s ease-in-out;
    margin: 1px;
    background-color: ${props => props.color || 'black'};
`

const Container = styled.div`
    margin-top: 50px;
    text-align: center;
`