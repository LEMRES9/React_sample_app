import React,{useState, useEffect} from 'react';

const LikeButton = () => {

    const [count, counter] = useState(0);
    // const [Limit, release] = useState(true);

    const countUp = () =>{
        counter((count + 1) % 10);
        console.log(count);
    }
    const countReset = ()=>{
        counter(0);
    }
    if (count >= 10){
        countReset()
    };

    useEffect( () => {
        console.log('render');
        document.getElementById('counter').addEventListener('click',countUp);
        return () => {
            console.log('unmounting');
            document.getElementById('counter').removeEventListener('click',countUp);
        }
    });
    // }, [Limit]);

    //こっちでも動く
    // const [count, counter] = useState(0);
    // カウントアップ関数の中でカウントアップしつつ10で割ったあまりをcounterに渡す
    // const countUp = () => counter((count + 1) % 10);
    // ボタンクリックでcountUp呼び出しする
    // return <button onClick={countUp}>いいね数:{count}</button>;

    return(
        <div>
            <button id={"counter"} >
                いいね数 (最大9): {count}
            </button>
            {/* <button onClick={() => release(!Limit)}>解除</button> */}
        </div>
    )
};

export default LikeButton;