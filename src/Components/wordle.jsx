import styled from "styled-components";
import React, { useState } from "react";

export default function Wordle() {
    const wordCount = 5;
    const [words, setWords] = useState([]);
    const [wordColor, setWordColor] = useState(['white', 'white', 'white', 'white', 'white']);

    // 단어 입력 한 줄
    // const wordsList = () => {
    //     const list = [];
    //     for (let i = 0; i < wordCount; i++) {
    //         list.push(
    //             <Input
    //                 key={i}
    //                 type="text"
    //                 maxLength={1}
    //                 color={wordColor[i]}
    //                 onChange={getWords}
    //             />
    //         );
    //     }
    //     return list;
    // };

    // 단어 한 줄 저장
    const getWords = (e) => {
        setWords([
            ...words,
            e.target.value
        ]);
    }

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
        let word = [];

        for(let i = 0; i < wordCount; i++) {
            // 배경 색깔 노란색으로 바꾸기
            if(words[i] === checkWords[i]) {
                word.push('green');
                // setWordColor(wordColor);
            }
            else if(words.includes(checkWords[i])) {
                // wordColor[i] = 'yellow';
                word.push('yellow');
                // setWordColor(wordColor);
            }
            else {
                // wordColor[i] = 'red';
                word.push('red');
            }
        }
        setWordColor(word);
    }
    return (
    <Container>
        <div>
            {/* { wordsList() } */}
            <Input type="text" maxLength={1} color={wordColor[0]} onChange={getWords} />
            <Input type="text" maxLength={1} color={wordColor[1]} onChange={getWords} />
            <Input type="text" maxLength={1} color={wordColor[2]} onChange={getWords} />
            <Input type="text" maxLength={1} color={wordColor[3]} onChange={getWords} />
            <Input type="text" maxLength={1} color={wordColor[4]} onChange={getWords} />
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