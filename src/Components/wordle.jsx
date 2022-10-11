import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";

export default function Wordle() {
    const wordCount = 5; // 단어 갯 수
    const [words, setWords] = useState([]); // 단어 한 줄 담아두기

    // 워들 칸 색깔
    const [wordColorOne, setWordColorOne] = useState(['white', 'white', 'white', 'white', 'white']);
    const [wordColorTwo, setWordColorTwo] = useState(['white', 'white', 'white', 'white', 'white']);
    const [wordColorThree, setWordColorThree] = useState(['white', 'white', 'white', 'white', 'white']);
    const [wordColorFour, setWordColorFour] = useState(['white', 'white', 'white', 'white', 'white']);
    const [wordColorFive, setWordColorFive] = useState(['white', 'white', 'white', 'white', 'white']);
    const [wordColorSix, setWordColorSix] = useState(['white', 'white', 'white', 'white', 'white']);

    // 워들 글자 체크
    const [checkAllWords, setCheckAllWords] = useState([]);

    const wordle1Ref = useRef([]); // 워들 
    const enterRef = useRef(); // 워들 

    const [cnt, setCnt] = useState(0); // 몇 줄인지 체크 카운트
    
    // 단어 한 줄 저장
    const getWords = (e) => {
        setWords([
            ...words,
            e.target.value
        ]);
        setCheckAllWords([
            ...checkAllWords,
            e.target.value
        ])
    }

        

    // 전체 단어 박스 리스트 나타낸다.
    // const words_box = () => {
    //     const res = [];
    //     for(let i = 0; i < wordListCount; i++) {
    //         res.push(<div>{ input_words() }</div>);
    //     }
    //     return res;
    // }

    // 단어 맞췄는지 체크
    const enterKey = () => {
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
        setCnt(cnt + 1);

        for (let k = 0; k < wordCount; k++) {
            if (wordColor[k] === 'green')
                continue;
            // 실패
            else {
                setWords([]);
                console.log(checkAllWords.length)
                if (checkAllWords.length === 25) {
                    alert("틀렸다!!!")
                }
                else {
                    wordle1Ref.current[checkAllWords.length].focus();
                }
                return ;
            }
        }

        // 성공 했을 때 모달창 띄우고 종료
        alert("성공");
    }

    // 삭제 버튼
    const deleteKey = () => {
        let listWords = [];
        let listCheckWords = [];

        if (words.length < 1) {
            wordle1Ref.current[checkAllWords.length].focus();
            return;
        }
        listWords = JSON.parse(JSON.stringify(words));
        listCheckWords = JSON.parse(JSON.stringify(checkAllWords));
        listWords.pop();
        listCheckWords.pop();
        setWords(listWords);
        setCheckAllWords(listCheckWords);

        if (checkAllWords.length === 25){
            console.log("focus 오버플로")
        }
        else {
            wordle1Ref.current[checkAllWords.length].focus();
        }

        console.log("delete");
    }

    const getLastKey = () => {
        return ;
    }

    useEffect(() => {
        if (words.length === 5) {
            // const getLast = getLastKey();
            // wordle1Ref.current[next].focus();
            // setNext(next + 1);
            console.log("칸이 꽉참")
            enterRef.current.focus();
        }
        else {
            if (checkAllWords.length === 25) {
                console.log("끝")
            }
            else {
                wordle1Ref.current[checkAllWords.length].focus();
            }
        }
    }, [words]);

    console.log(escape(checkAllWords).length);
    console.log(escape(checkAllWords));
    console.log(checkAllWords); // delete 누르면 지워지지만 비동기로 작동해서 바로 지워지지는 않는다.
    console.log(words);
    return (
    <Container>
        <div className="wordle1" >
            <Input type="text" maxLength={1} color={wordColorOne[0]} onChange={getWords} ref={elem => (wordle1Ref.current[0] = elem)} value={checkAllWords[0] ? checkAllWords[0] : ''} />
            <Input type="text" maxLength={1} color={wordColorOne[1]} onChange={getWords} ref={elem => (wordle1Ref.current[1] = elem)} value={checkAllWords[1] ? checkAllWords[1] : ''} />
            <Input type="text" maxLength={1} color={wordColorOne[2]} onChange={getWords} ref={elem => (wordle1Ref.current[2] = elem)} value={checkAllWords[2] ? checkAllWords[2] : ''} />
            <Input type="text" maxLength={1} color={wordColorOne[3]} onChange={getWords} ref={elem => (wordle1Ref.current[3] = elem)} value={checkAllWords[3] ? checkAllWords[3] : ''} />
            <Input type="text" maxLength={1} color={wordColorOne[4]} onChange={getWords} ref={elem => (wordle1Ref.current[4] = elem)} value={checkAllWords[4] ? checkAllWords[4] : ''} />
        </div>
        <div className="wordle2" >
            <Input type="text" maxLength={1} color={wordColorTwo[0]} onChange={getWords} ref={elem => (wordle1Ref.current[5] = elem)} value={checkAllWords[5] ? checkAllWords[5] : ''} />
            <Input type="text" maxLength={1} color={wordColorTwo[1]} onChange={getWords} ref={elem => (wordle1Ref.current[6] = elem)} value={checkAllWords[6] ? checkAllWords[6] : ''} />
            <Input type="text" maxLength={1} color={wordColorTwo[2]} onChange={getWords} ref={elem => (wordle1Ref.current[7] = elem)} value={checkAllWords[7] ? checkAllWords[7] : ''} />
            <Input type="text" maxLength={1} color={wordColorTwo[3]} onChange={getWords} ref={elem => (wordle1Ref.current[8] = elem)} value={checkAllWords[8] ? checkAllWords[8] : ''} />
            <Input type="text" maxLength={1} color={wordColorTwo[4]} onChange={getWords} ref={elem => (wordle1Ref.current[9] = elem)} value={checkAllWords[9] ? checkAllWords[9] : ''} />
        </div>
        <div className="wordle3" >
            <Input type="text" maxLength={1} color={wordColorThree[0]} onChange={getWords} ref={elem => (wordle1Ref.current[10] = elem)} value={checkAllWords[10] ? checkAllWords[10] : ''} />
            <Input type="text" maxLength={1} color={wordColorThree[1]} onChange={getWords} ref={elem => (wordle1Ref.current[11] = elem)} value={checkAllWords[11] ? checkAllWords[11] : ''} />
            <Input type="text" maxLength={1} color={wordColorThree[2]} onChange={getWords} ref={elem => (wordle1Ref.current[12] = elem)} value={checkAllWords[12] ? checkAllWords[12] : ''} />
            <Input type="text" maxLength={1} color={wordColorThree[3]} onChange={getWords} ref={elem => (wordle1Ref.current[13] = elem)} value={checkAllWords[13] ? checkAllWords[13] : ''} />
            <Input type="text" maxLength={1} color={wordColorThree[4]} onChange={getWords} ref={elem => (wordle1Ref.current[14] = elem)} value={checkAllWords[14] ? checkAllWords[14] : ''} />
        </div>
        <div className="wordle4" >
            <Input type="text" maxLength={1} color={wordColorFour[0]} onChange={getWords} ref={elem => (wordle1Ref.current[15] = elem)} value={checkAllWords[15] ? checkAllWords[15] : ''} />
            <Input type="text" maxLength={1} color={wordColorFour[1]} onChange={getWords} ref={elem => (wordle1Ref.current[16] = elem)} value={checkAllWords[16] ? checkAllWords[16] : ''} />
            <Input type="text" maxLength={1} color={wordColorFour[2]} onChange={getWords} ref={elem => (wordle1Ref.current[17] = elem)} value={checkAllWords[17] ? checkAllWords[17] : ''} />
            <Input type="text" maxLength={1} color={wordColorFour[3]} onChange={getWords} ref={elem => (wordle1Ref.current[18] = elem)} value={checkAllWords[18] ? checkAllWords[18] : ''} />
            <Input type="text" maxLength={1} color={wordColorFour[4]} onChange={getWords} ref={elem => (wordle1Ref.current[19] = elem)} value={checkAllWords[19] ? checkAllWords[19] : ''} />
        </div>
        <div className="wordle5" >
            <Input type="text" maxLength={1} color={wordColorFive[0]} onChange={getWords} ref={elem => (wordle1Ref.current[20] = elem)} value={checkAllWords[20] ? checkAllWords[20] : ''} />
            <Input type="text" maxLength={1} color={wordColorFive[1]} onChange={getWords} ref={elem => (wordle1Ref.current[21] = elem)} value={checkAllWords[21] ? checkAllWords[21] : ''} />
            <Input type="text" maxLength={1} color={wordColorFive[2]} onChange={getWords} ref={elem => (wordle1Ref.current[22] = elem)} value={checkAllWords[22] ? checkAllWords[22] : ''} />
            <Input type="text" maxLength={1} color={wordColorFive[3]} onChange={getWords} ref={elem => (wordle1Ref.current[23] = elem)} value={checkAllWords[23] ? checkAllWords[23] : ''} />
            <Input type="text" maxLength={1} color={wordColorFive[4]} onChange={getWords} ref={elem => (wordle1Ref.current[24] = elem)} value={checkAllWords[24] ? checkAllWords[24] : ''} />
        </div>
        <button onClick={ enterKey } ref={elem => {enterRef.current = elem}} >Enter</button>
        <button onClick={ deleteKey }>Delete</button>
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
    // color: transparent;
    // text-shadow: 0 0 0 black;
    // &:focus {
    //     outline: none;
    // }
`

const Container = styled.div`
    margin-top: 50px;
    text-align: center;
`